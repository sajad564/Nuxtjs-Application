<template>
<div id='orders'>
    <div class='container'>
        <div v-if='orders.length!=0' class='orders-container'>
            <div class='table-header'>
                <div>زمان</div>
                <div>تاریخ</div>
                <div>تعرفه</div>
                <div>عنوان سفارش</div>
                <div>وضعیت</div>
            </div>
            <div v-for='order of orders' class='table-body'>
                <div class='row-item'> {{order.perisantime}} </div>
                <div class='row-item'> {{order.persiandate}} </div>
                <div class='row-item'> {{order.price==0 ? "محاسبه نشده" : order.price}} </div>
                <div class='row-item' v-if="order.productname"> {{order.productname}} </div>
                <div class="row-item" v-if="order.likeportfolioid" > <getportfolio :id="order.likeportfolioid" /> </div>
                <div class='row-item'> {{castOrderState(order.state)}} </div>
            </div>
                      <paginationbutton  class="pagination" @response='getFromChild' :pageCount='totalpage' :routename="'/order/user-order?pagesize=4&&'" v-if='totalpage' />
        </div>
        <div v-if='message' class='no-order'>
            <p>- {{message}} -</p>
        </div>
    </div>
</div>
</template>
<script>
import paginationbutton from '~/components/shared/PaginationButton'
import getportfolio from '~/components/panel/GetPortfolioForOrder'
export default {
    name : 'orders' ,
    data() {
        return {
            orders : [] , 
            message : '' , 
            totalpage : ''
        }
    } ,
    methods : {
        getFromChild(value) {
            this.orders = value ;
        } , 
        castOrderState(value) {
            switch(value) {
                case 0 : 
                    return "در انتظار بررسی"
                    break ;
                case 1 : 
                    return "بررسی شده"
                case 2 : 
                    return "در انتظار پرداخت"
                    break ;
                case 3 :
                    return "پرداخت شده"
                    break ; 
                case 4 :
                    return "تکمیل شده"
                    breack
            }
        }
    } ,
    components : {
        getportfolio , 
        paginationbutton
    } , 
    async fetch() {
        await this.$axios.get('/order/user-order?pagesize=4')
            .then(resp => {
               this.orders = resp.data
            
            let pagination = JSON.parse(resp.headers.pagination)
            this.totalpage = pagination.totalpage
            console.log(this.totalpage)
                
            })
                .catch(err => {
                    console.log('iam an error')
                    console.log(err)
                    this.message = 'در حال حاضر هیچ سفارشی ثبت نکرده اید'
})
    }
}
</script>
<style scoped>
* {
    padding : 0;
    margin : 0 ;
    outline : 0 ;
    border : 0 ;
}
.container {
    margin-top : 60px;
}
.table-header,.table-body {
    display : grid ;
    grid-template-columns : repeat(3,1fr) 3fr 1fr ;
    text-align : center ;
    
}
.table-body {
    margin : 40px 0 0 0 ;
}
.no-order {
    text-align : center ;
    margin-top : 40px;
    color : gray ; 
}
@media only screen and (max-width : 1080px){
    .table-body,.table-header {
        font-size : .9em ; 
    }
}
@media only screen and (max-width : 830px){
    .container {
        margin-top : 10px ;
    }
}
</style>