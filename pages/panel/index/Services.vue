<template>
    <div id="services">
        <div class="container">
            <NuxtLink to='/panel/addservice'} >افزودن سرویس</NuxtLink>
            <div class="single-service" v-if="services.length!=0" v-for="(service,index) of services" :key="index">
                <div class="row">
                    <div class="half-line">آیدی</div>
                    <div class="half-line"> {{service.id}} </div>
                </div>
                <div class="row">
                    <div class="half-line">نام</div>
                    <div class="half-line"> {{service.serviceName}} </div>
                </div>
                <div class="row">
                    <div class="half-line"> تعرفه </div>
                    <div class="half-line"> {{service.price}} </div>
                </div>
                <div class="row">
                    <div class="half-line">ویژگی ها</div>
                    <div class="half-line">
                        <div v-if="service.features.length!=0" v-for="(feature,index) of service.features" :key="index">
                          <span class="counter">{{index}}</span>  {{feature}} <br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="half-line">نمایش در صفحه ایندکس</div>
                    <div class="half-line icons">
                        <font-awesome-icon v-if="service.isinindex" style="color : green; " :icon='["fas","check"]'  />
                      <font-awesome-icon v-if="!service.isinindex" style="color : red;" :icon='["fas","times"]' />
                    </div>
                </div>
                <div class="row">
                    <div class="half-line">حذف</div>
                    <div class="half-line icons">
                        <div class="confirm-delete" v-if="deleteId==service.id">
                            <p>آیا از حذف  سرویس مورد نظر اطمینان دارید ؟</p>
                            <div class="buttons">
                                <button class="yes" @click='deleteService()'>بله</button>
                                <button class="no" @click="deleteId=''">خیر</button>
                            </div>
                        </div>
                        <font-awesome-icon :icon='["far","trash-alt"]' title="حذف" @click="deleteId=service.id" />
                    </div>
                </div>
                <div class="row">
                    <div class="half-line">ویرایش</div>
                    <div class="half-line icons">
                        <font-awesome-icon :icon='["far","edit"]' title="ویرایش" @click='ChangeRoute(service.id)' />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'services' , 
    data() {
        return { 
            deleteId : '' , 
            services : []
        }
    } ,
    methods: {
        ChangeRoute(value) {
            this.$router.push({name : 'EditService-serviceId' , params : {serviceId : value}})
        } ,
        deleteService() {
            if(this.deleteId) {
                this.$axios.$post('admin/delete-service?id=' + this.deleteId)
                    .then(() => {
                        this.getAgain() ;
                    })
            }
        } ,
        getAgain() {
             this.$axios.$get('/admin/get-services')
            .then(resp => {
                
                this.services = resp.data ;
            })
        }
    }  , 
    async fetch() {
        await this.$axios.$get('/admin/get-services')
            .then(resp => {
                
                this.services = resp.data ;
            })
    }
}
</script>
<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border : none ;
    outline : none ;
}
.container {
    width : 90% ;
    margin-right : auto ;
    margin-left : auto ;
    margin-top : 50px;
}
.single-service {
    box-sizing : border-box ;
    padding : 10px 10px 0 0 ;
    background-color : lightgray ; 
    display : grid ;
    grid-template-rows : repeat(3,30px) repeat(2,auto) repeat(2,minmax(60px , auto)) ;
    margin-bottom : 40px;
}
.row {
    display : grid ;
    grid-template-columns : repeat(2,1fr) ; 
}
.counter {
    display : inline-block ;
    width : 20px;
    height : 20px;
    background-color : gray ;
    border-radius : 50% ;
    box-sizing : border-box ;
    padding-right : 5px;
}
.icons {
    text-align : center ;
}
.icons > * {
    cursor : pointer ;
}
button {
    width : 100px;
    cursor: pointer ;
    display : inline-block ;
    border-radius : 10px;
    color : white ;
}
.no {
    background-color : red ;
}
.yes {
    background-color : green ; 
}
</style>