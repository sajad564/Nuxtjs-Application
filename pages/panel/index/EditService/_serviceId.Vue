<template>
    <div id="editservice">
        <div class="container">
            <div class="form-container">
                <form @submit.prevent='EditServiceMethod' >
                {{service}}
                    <div class="input-container">
                        <label for="name">نام سرویس</label>
                        <input id="name" type="text" v-model='service.name'>
                    </div>
                    <div class='checkbox-container'>
                        <input  id='isinindex' type='checkbox' v-model='service.isinindex'>
                        <label for='isinindex'> نمایش در صفحه ایندکس </label>
                    </div>
                    <div class="input-container">
                        <label for="price">تعرفه</label>
                        <input id="price" type="text" v-model='service.price'>
                    </div>
                    <div class="route" ></div>
                    <div class='error' v-if='error'>
                        {{error}}
                    </div>
                    <div class='message' v-if='message'>
                        {{message}}
                    </div>
                    <button type="submit">اعمال</button>
                </form>
            </div>
            <div class='features-container' >
                <div class='feature'  v-for='(feature,index) of service.features' ::key="index" >
                    <span class='number'> {{index+1}} </span> {{feature}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'editservice' , 
    data() {
        return {
            id : this.$route.params.serviceId , 
            service : '' , 
            message : '' , 
            error : ''
        }
    },
    methods : {
        EditServiceMethod() {
            this.$axios.$post("/admin/edit-service-post",this.service)
                .then(() => {
                    this.service = ''
                    this.message = 'سرویس مد نظر با موفقیت ویرایش شد' 
                    this.error = ''
                })
                    .catch (() => {
                        this.message = ''
                        this.error = 'مثل اینکه مشکلی پیش اومده,لطفا بعدا امتحان کنید'
                    })
        }
    }
     , 
    async fetch() {
        if(this.id) {
            console.log(this.id)
            await this.$axios.$get('/admin/edit-service?' , {
                params : {
                    id : this.id
                }
            })
        .then(resp => {
            console.log(resp.data)
            this.service = resp.data
        })
            .catch(() => {
                this.message ='' 
                this.error= 'بعد لطفا'
            })
        }
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
        width : 500px;
        margin : 50px auto 0 auto ;
    }
    input:not(#isinindex) {
        display : block ;
        width : 300px;
        margin-top : 10px;
    }
    .input-container {
        margin-bottom : 50px;
    }
    button {
        width : 120px;
        padding : 10px;
        text-align : center ;
        display : block ;
        margin-right : auto ;
        margin-left : 100px;
        cursor : pointer ;
        border-radius : 10px;
        background-color : green ;
        color : white ;
    }
    .number {
        display : inline-block ;
        width : 30px; 
        box-sizing : border-box ;
        padding-right : 10px;
        background-color : lightgray ;
        border-radius : 50% ;
    }
    .checkbox-container {
        margin-bottom : 50px;
    }
    .error {
        background-color : gray ;
        color : red ;
    }
    .message {
        background-color : gray ;
        color : green ;
    }
</style>