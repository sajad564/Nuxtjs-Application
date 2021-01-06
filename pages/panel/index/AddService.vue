<template>
    <div id='addservice'>
        <div class='container'>

        
        <div class='form-container' v-if='features.length!=0'>
            <form @submit.prevent='sendData'>
            
                <div class='input-container'>
                    <label for='servicename' > نام سرویس </label>
                    <input type='text'  id='servicename'  v-model='service.servicename'>
                </div>
                <div class='input-container'>
                    <label for='servicePrice'  > تعرفه  </label>
                    <input type='text'  id='servicePrice' placeholder='به تومان' v-model='service.servicePrice'>
                </div>
                
                <div class='inputs-area'>
                    <div  class='checkbox-container' v-for='(feature,index) in features' :key="index" >
                    <input type='checkbox' id='feature-checkbox' @click='addOrRemoveItem(feature.id)' >
                    <label for='feature-checkbox' > {{feature.name}} </label>
                    </div>
                </div>
            <div class='error' v-if='errors.servicename'>
                {{errors.servicename}}
            </div>
            <div class='error' v-if='errors.servicePrice'>
                {{errors.servicePrice}}
            </div>
            <div class='error' v-if='errors.featuresId'>
                {{errors.featuresId}}
            </div>
            <div class='ok' v-if='okmessage'> {{okmessage}} </div>
            <button >ارسال </button>
            </form>
        </div>
        <div v-if='features.length==0'>
            <h1> در حال حاضر هیچ ویژگیی در دیتابیس وجود ندارد لطفا تعدادی ویژگی به دیتابیس اضافه کنید </h1>
            <p class='hint'> راهنمایی : ویژگی ها در واقع مجموعه ای از متون هستند که بعدا میتوانید به سرویس خود اضافه کنید به طور مثال هر کدام از مقادیر زیر یک   ویژگی محسوب میشوند :
            <br>
            "سئو رایگان"   ,"قالب رایگان" , "باتوجه به جدیدترین تکنیک های توسعه وب"
            </p>
            <addfeature />
        </div>
        </div>
    </div>
</template>
<script>
import addfeature from '~/components/panel/AddFeature'
    export default {
        name : 'addservice' , 
        data() {
            return {
                service : {
                    servicename : '' ,
                    servicePrice : '',
                    
                },
                features : [] ,
                featuresId : [],
                errors : {
                    featuresId : '' ,
                    servicename : '',
                    servicePrice : '',
                    other : ''
                },
                okmessage : ''
            }
        },
        components : {
            addfeature
        },
        methods : {
          
            addOrRemoveItem(id) {
                
                if(this.findItem(id)) {
                    this.featuresId = this.featuresId.filter(i=> i!=id)
                }
                else {
                    this.featuresId.push(id) ;
                }
               
                
            },
            findItem(id) {
                if(this.featuresId.filter(i =>i ==id).length!=0) {
                    return true ;
                }
                return false ;
            },
            sendData() {
                
                if(this.validateData()) {
                    this.$axios.$post('/services/add-service', {
                        servicename : this.service.servicename ,
                        serviceprice : this.service.servicePrice,
                        featuresId : this.featuresId

                        
                    })
                    .then(() => {
                       this.service.servicename = '' ,
                       this.service.servicePrice = '',
                       this.featuresId = [],
                       this.okmessage = 'اطلاعات با موفقیت ذخیره شد'
                    })
                        .catch(() => {
                            this.errors.other = 'مثل اینکه مشکلی پیش اومده (خطا در بک اند)'
                        })
                }
            },
            validateData() {
               
                if(this.service.servicename) {
                    this.errors.servicename = ''
                }
                else {
                    this.errors.servicename = 'لطفا نام سرویس خود را وارد کنید به طور مثال "توسعه وب سایت اختصاصی"'
                }
                if(this.service.servicePrice) {
                    this.errors.servicePrice =''
                }
                else {
                        this.errors.servicePrice ='لطفا قیمت سرویس خود را مشخص کنید'
                }
                if(this.featuresId.length!=0) {
                    this.errors.featuresId =''
                }
                else {
                    this.errors.featuresId ='لطفا ویژگی های مد نظر خود را به سرویس اضافه کنید'
                }
                if(this.service.servicename && this.service.servicePrice && this.featuresId.length!=0) {
                    return true ;
                }
                return false; 
            }
           
        },
         async fetch() {
            await this.$axios.$get('/services/get-features')
                .then(resp => {
                   this.features = resp.data
                })
                
        },
        
    }
</script>
<style scoped>
.hint {
    color : green ;
}
.error {
    color : red ;
}
</style>