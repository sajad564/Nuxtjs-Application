<template>
    <div class='adminorders'>
        <div class='container'>
            {{type}}
            <div class='orders' v-if='orders'>
            <div class='order-header' :class='{"grid-seven": type==0,"grid-eight" : type==2 , "grid-six" : type==1}'>
               <div class="order-field">
                   نوع سفارش
                </div>
                <div class="orderfield" v-if="type==2">
                    نمونه کار مشابه
                </div>
               <div class='order-field' v-if="type==0">
                        عنوان
                </div>
                <div class='order-field'>
                        زمان سفارش
                </div>
                <div class='order-field'>
                        تاریخ سفارش
                </div>
                <div class='order-field'>
                        تعرفه
                </div>
                <div class='order-field'>
                        وضعیت
                </div>
                <div class='order-field'>
                        تغییر وضعیت
                </div>
                <div class="order-field">تغییر قیمت</div>
            </div>
                <div class='single-order' v-for='(order , index) of orders' :key="index" :class='{"grid-seven": type==0,"grid-eight" : type==2 , "grid-six" : type==1}' >
                    <div class="order-field">
                        {{orderTypeCast(order.type)}}
                    </div>
                    <div class="order-field" v-if="type==2">
                        <getportfoliofororder :id='order.likeportfolioid' />
                    </div>
                    <div class='order-field' v-if="type==0">
                        {{order.productname}}
                    </div>
                    <div class='order-field'>
                        {{order.perisantime}}
                    </div>
                    <div class='order-field'>
                        {{order.persiandate}}
                    </div>
                    <div class='order-field'>
                        <span v-if="order.type!=0">{{calculatePrice(order.price)}}</span>
                        <input type="text" v-model='order.price' :disabled='order.type==0' >
                        
                    </div>
                    <div class='order-field'>
                        {{orderStateEnumToString(order.state)}}
                    </div>
                    <div class='order-field' >
                        <button id='changestate' @click='changeState(order.id , order.state)'>کیلیک کنید</button>
                    </div>
                    <div class="order-field" v-if="order.type!=0" > <button @click="UpdatePrice(order)" class='update-price'>بروزرسانی تعرفه</button> </div>
                </div>
            </div>
            <div class='error' v-if='error'>
                {{error}}
            </div>
        </div>
    </div>
</template>
<script>
import getportfoliofororder from '~/components/panel/GetPortfolioForOrder'
export default {
    name : 'adminorders' ,
    props : ['type']  ,
    watch: { 
      	type: function() { // watch it
          this.getDataAgain()
          }
        }  ,
    data() {
        return {
            orders : '' , 
            error : ''
        }
    } , 
    methods : {
        UpdatePrice(value) {
             this.$axios.$post("/admin/update-price" , value)
                .then(() => {
                     this.$axios.$get('/admin/get-orders?type=' + this.type )
            .then(resp => {
                this.orders = resp
                
            })
                .catch(() => {
                    this.error = 'مثل اینکه مشکلی پیش اومده,لطفا بعدا امتحان کنید :)'
                })
                })
        } ,
        getDataAgain() {
             this.$axios.$get('/admin/get-orders?type=' + this.type )
            .then(resp => {
                this.orders = resp
            })
                .catch(() => {
                    this.error = 'مثل اینکه مشکلی پیش اومده,لطفا بعدا امتحان کنید :)'
                })
        } ,
        orderTypeCast(value) {
            if(value==0) {
                return 'پیش فرض'
            }
            if(value==1) {
                return 'شخصی سازی شده'
            }
            if(value==2) {
                return 'مشابه'
            }
        } , 
        calculatePrice(value) {
            if(value==0) {
                return "محاسبه نشده"
            }
        } , 
        orderStateEnumToString(value) {
            if(value==0) {
                return "در انتظار بررسی"
            }
            if(value==1) {
                return "در حال بررسی"
            }
            if(value==2) {
                return "در انتظار پرداخت"
            }
            if(value==3) {
                return "پرداخت شده"
            }
            if(value==4) {
                return "تکمیل فرایند سفارش"
            }
        } ,
        changeState(id , state) {
            this.$router.push({name : 'panel-index-orderState-state-id' , params : {id : id , state : state}})
        }
    } , 
    async fetch() {
        
            await this.$axios.$get('/admin/get-orders?type=' + this.type )
            .then(resp => {
                console.log(resp)
                this.orders = resp
                
            })
                .catch(() => {
                    this.error = 'مثل اینکه مشکلی پیش اومده,لطفا بعدا امتحان کنید :)'
                })
    } , 
    components : {
        getportfoliofororder
    }
}
</script>
<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border : none ;
}
.error {
    color : red ;
    background-color : lightgray ; 
}
.orders {
    box-sizing : border-box ;
    padding : 0 30px ;
}
.grid-seven {
    display : grid ;
    grid-template-columns : repeat(7,1fr) ; 
}
.grid-six {
    display : grid ;
    grid-template-columns : repeat(6,1fr) ; 
}
.grid-eight {
    display : grid ;
    grid-template-columns : repeat(8,1fr) ;
}
.order-header,.single-order {
    box-sizing : border-box ;
    padding : 10px 20px ;
    
    color : white ;
}
.order-header {
    background-color : gray ;
}
.single-order {
    background-color : lightgray ;
}
.update-price {
    display : inline-block ;
    margin-right : 30px ;
    background-color : blue ;
    color : white ;
    width : 100px;
}
#changestate {
    box-sizing : border-box ;
    background-color : green ;
    border : 1px solid green ;
    border-radius : 12px ; 
    color : white ;
    height : 30px;
    padding-top : 4px ;
    text-align : center ;
    width : 100px;
    cursor : pointer ;
}
</style>