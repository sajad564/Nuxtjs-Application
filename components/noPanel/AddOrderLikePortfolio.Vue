<template >
    <div id="addorderlikeportfolio">
        <div class="container">
            <div class="data-container" >
                <form  @submit.prevent='sendData' v-if="!message">
                    <div class="close" @click="close"><font-awesome-icon :icon='["fas","times"]'/></div>
                    <div class="inputs">
                            <div class="input-container">
                                <label for="firstname">نام</label>
                                <input  id="firstname" v-model="data.firstname">
                            </div>
                            <div class="input-container">
                                <label for="lastname">نام خانوادگی</label>
                                <input  id="lastname" v-model="data.lastname">
                            </div>
                            <div class="input-container">
                                <label for="email">ایمیل</label>
                                <input  id="email" v-model="data.email">
                            </div>
                            <div class="input-container">
                                <label for="phonenumber">شماره تماس</label>
                                <input id="phonenumber" v-model="data.phonenumber">
                            </div>
                            
                    </div>
                    <div class="errors">
                        <div v-if="errors.firstname"> {{errors.firstname}} </div>
                        <div v-if="errors.lastname" > {{errors.lastname}} </div>
                        <div v-if="errors.email" > {{errors.email}} </div>
                        <div v-if="errors.phonenumber" > {{errors.phonenumber}} </div>
                    </div>
                    <button type="submit">سفارش</button>
                </form>
                <div class="resp-message" v-if="message" >
                    {{message}}
                    <button @click="close">باشه</button>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name : 'addorderlikeportfolio',
    props : ['id'] , 
    data() {
        return {
            data : {
                likeorderid : this.id ,
                firstname : '' , 
                lastname : '' , 
                email : '' , 
                phonenumber : '' 
            } ,
            errors : {
                firstname : '' ,
                lastname : '' ,
                email : '' , 
                phonenumber : ''
            } , 
            message : ''
        }
    } , 
    methods : {
        close() {
            this.$emit('close' , true ) ;
        } ,
         sendData() {
             if(this.Validation()) {
                  this.$axios.$post('/order/new-order-like' , {
                     useremail : this.data.email ,
                     firstname : this.data.firstname ,
                     lastname : this.data.lastname ,
                     phonenumber : this.data.phonenumber ,
                     likeorderid : this.data.likeorderid
                 })
                    .then(resp => {
                        
                        this.message = 'سفارش شما با موفقیت ثبت شد همچنین برای پیگیری سفارش میتوانید از طریق کد رهگیری زیر اقدام کنید : ' + resp.data ;
                    })
             }
         } , 
        Validation() {
            if(!this.data.email) {
                this.errors.email = 'لطفا ایمیل خود را وارد کنید'
            }
            else {
                this.errors.email = ''
            } 
            if(!this.data.firstname) {
                this.errors.firstname  = 'لطفا نام  خود را وارد کنید'
            }
            else {
                this.errors.firstname = ''
            }
            if(!this.data.lastname) {
                this.errors.lastname = 'لطفا نام خانوادگی خود را وارد کنید'
            }
            else {
                this.errors.lastname = ''
            }
            if(!this.data.phonenumber) {
                this.errors.phonenumber ='لطفا شماره تماس خود را وارد کنید'
            }
            else {
                this.errors.phonenumber =''
            }
            if(this.data.phonenumber && this.data.email && this.data.firstname && this.data.lastname) {
                return true ;
            }
            else {
                false ;
            }
        } , 
        
    }
}
</script>
<style scoped >
    * {
        margin : 0 ;
        padding : 0 ;
        border : none ;
        outline : none ;
        text-decoration : none 
    }
    .container {
        position : relative ;
        
    }
    .data-container {
        border-radius: 5px;
         box-sizing : border-box ;
         padding : 10px;
        position : absolute ;
        background-color : white ;
        height : 400px;
        width : 500px;
        margin-right : auto ;
        margin-left : auto ;
        top : 50% ;
        right : 50% ;
        transform: translate(50%,50%);
    }
    form {
        height : 100% ;
        position : relative ;
        
    }
    .inputs {
        display : grid ;
        grid-template-columns : repeat(2,1fr) ;
    }
    .input-container {
        margin-top : 50px;
    }
    input {
        border-bottom : 1px solid black ;
    }
    .close {
        position : absolute ;
        box-sizing: border-box;
        padding-right: 4px;
        padding-top : 1px;
        cursor: pointer;
        top : -20px;
        left : -20px;
        width : 20px;
        height : 20px;
        border-radius : 50%;
        box-shadow: darkgray 0 0 10px 2px;
    }
    button {
        position : absolute ;
        bottom : 20px;
        width : 100px;
        height : 30px;
        cursor: pointer;
        display: block ;
        border-radius: 5px;
        right : 50% ;
        transform : translateX(50%) ;
    }
    .errors {
        margin-top : 40px;
        color : red ;
    }
</style>