<template>
    <div class="contact">
           
            <div class="container">
                
                
            <div class="header-text">
                <div class="big-text">
                    <h1><span id="dark-blue">ارتباط</span><span id="blue"> با ما</span></h1>
                </div>
                <div class="litle-text">
                    <p>برای راهنمایی و مشاوره و ارتباط با ما از فرم زیر استفاده کنید</p>
                </div>
            </div>
            <div class="full-form-secion">
                
                <div class="form-section">
                    <form class="form" @submit.prevent='formSubmit'>
                        <div class="input-container">
                            <label for="name" >نام و نام خانوادگی</label>
                            <input type="text" id="name" v-model='contact.fullname' >
                            <div class='error' v-if='errors.fullname'> {{errors.fullname}} </div>
                        </div>
                        <div class="input-container">
                            <label for="email" >آدرس ایمیل</label>
                            <input type="text" id="email" v-model='contact.email'>
                            <div class='error' v-if='errors.email'> {{errors.email}} </div>
                        </div>
                        <div class="input-container">
                            <label for="phone" >شماره تماس</label>
                            <input type="text" id="phone" v-model='contact.phonenumber'>
                            <div class='error' v-if='errors.phonenumber'> {{errors.phonenumber}} </div>
                        </div>
                        <div class="input-container">
                            <label for="description" >پیام شما</label>
                            <textarea id='description' v-model='contact.message' rows="4" cols="50"></textarea>
                            <div class='error' v-if='errors.message'> {{errors.message}} </div>
                            <div class='error' v-if='errors.result'> {{errors.result}} </div>
                        </div>
                        <div class='ok' v-if='result'>
                            {{result}}
                        </div>
                        <button class='submit-button' type='submit'> ارسال </button>
                    </form>
                </div>
                <div class="form-img">
                    <div class="img">
                        <img src="@/assets/Contact.jpg" alt="">
                    </div>
                    <div class="social-networks">
                        <div class="social-network phone-social">
                            <span class="text">09227640583</span>
                            <span class="icon">  <font-awesome-icon :icon='["fas","phone"]' /> </span>
                        </div>
                        <div class="social-network email-social">
                            <span class="text">sajadamiri564@gmail.com</span>
                            <span class="icon">  <font-awesome-icon :icon='["far","envelope"]' /> </span>
                        </div>
                        <div class="social-network social-telegram">
                            <span class="text">@taraham</span>
                            <span class="icon">  <font-awesome-icon :icon='["fas","paper-plane"]' /> </span>
                        </div>
                        <div class="social-network">
                            <span class="text">09227640583</span>
                            <span class="icon">  <font-awesome-icon :icon='["fas","globe"]' /> </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>




export default {
    
    name : 'Contact' , 
    data() {
        return {
            contact : {
                fullname : '' ,
                email : '' ,
                phonenumber : '' ,
                message : '' ,
            },
            errors : {
                fullname : '' ,
                email : '' ,
                phonenumber : '' ,
                message : '' ,
                other : ''
            },
            result : ''
        }
    } ,
    methods : {
         EmailRegexMethod(value) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
      let IsEmail = reg.test(value)
      return IsEmail ;
      
    } ,
    PhoneRegexMethod(value) {
      let mynumber = value  ; 
                let reg = /^09[0-9]{9}$/ ; 
                let isPersianPhoenumber = reg.test(mynumber)
                if(isPersianPhoenumber) {
                  return true ;
                }
            return false ;
    } ,
        formSubmit() {
            if(this.errorHandler()) {
                console.log("iam here without problem")
                this.sendData()
            }
        },
        errorHandler() {
            if(this.contact.fullname) {
                this.errors.fullname = ''
            }
            else {
                this.errors.fullname ='ذکر نام و نام خانوادگی الزامی میباشد'
            }
            if(this.contact.email) {
                if(this.EmailRegexMethod(this.contact.email)) {
                    this.errors.email = ''
                }
                else {
                    this.errors.email = 'ایمیل وارد شده معتبر نمیباشد'
                }
            }
            else {
                this.errors.email ='لطفا ایمیل خود را وارد کنید'
            }
            if(this.contact.phonenumber) {
                if(this.PhoneRegexMethod(this.contact.phonenumber)) {
                    this.errors.phonenumber =''
                }
                else {
                    this.errors.phonenumber = 'شماره وارد شده معتبر نمیباشد'
                }
            }
            else {
                this.errors.phonenumber ='لطفا شماره تماس خود را وارد کنید'
            }
            if(this.contact.message) {
                this.errors.message = ''
            }
            else {
                this.errors.message ='لطفا پیام خود را وارد کنید'
            }
            
            if(this.contact.message!='' && this.contact.fullname!='' && this.PhoneRegexMethod(this.contact.phonenumber) && this.EmailRegexMethod(this.contact.email) ) {
                return true  ;
                
            }
            return false ;
        },
        sendData() {
            this.$axios.$post('/home/contact',this.contact)
                .then(resp => {
                    console.log(resp.data)
                    this.result = " پیامت به دستمون رسید :) همچنین برای پیگیری  پیامت میتونی از کد رهگیری زیر استفاده کنی "  + resp.data
                })
                    .catch(err => {
                        console.log(err.response.data)
                    })
        }
    } 
}
</script>
<style scoped>

input {
    outline: none;
}
* {
    font-family: 'shabnam';
    margin : 0 ;
    border : none ; 
    outline : none ;
    padding : 0 ;
    text-decoration: none;
    
}

.container {
    position : relative ;
    text-align: center;
    width :80% ; 
    margin-bottom : 30px ;
    margin-right :auto ;
    margin-left : auto ;
}
button:hover {
    color : #3AB54A ;
    background-color : white ;
    border :1px solid #3AB54A ;
    transition : all .5s ;
    font-size : 1.2em ;
}
button {
    border :1px solid #3AB54A ;
    background-color : #3AB54A ;
    display : block ;
    width : 100px;
    cursor : pointer ;
    height : 35px ;
    margin-right : auto ;
    color : white ;
    border-radius : 12px ;

}

 #blue {
    color : #2285EB ; 
}
#dark-blue {
    color :#334E69 ; 
}
.litle-text {
    color : #92A2B5 ;
}
div.full-form-secion {
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
.form-section {
    
    text-align: right;
    margin-top :50px;
    
    
}
.form {
    box-sizing: border-box;
    padding :0 40px;
}
label {
    text-align: right ;
    color : #818181;
}
.input-container {
    margin-bottom: 30px;
}
.input-container > input {
    margin-top: 10px;
    display: block;
    width: 85% ;
    height: 30px;
    padding : 8px 0 ;
    background-color: #F7F7F7;
    border-radius: 5px;
}
textarea {
    display : block ;
    width : 85% ;
    padding : 10px 3px ;
    background-color: #F7F7F7;
    resize : none ;
    margin-top : 10px;
}
#description {
    height: 60px;
}
img {
    width: 100%;
    height :400px;
}
div.social-networks {
    box-sizing: border-box;
    padding: 5px;
    margin-top: 10px;
    display: grid;
    color : #C2C2C2  ;
    grid-template-columns: repeat(2,1fr);
}
div.social-network {
margin-top: 10px;
text-align: left;
}
span.icon {
    padding-right: 10px;
}
.error {
    color : red; 
}
@media only screen and (max-width : 1210px){
    div.social-networks {
        grid-template-columns : 2fr 3fr;
    }
    .form-section {
        font-size : .8em ;
    }
}
@media only screen and (max-width : 1100px){
    .input-container > input {
        padding : 3px 0 ;
    }
    .input-container {
        margin-bottom : 20px ;
    }
}
@media only screen and (max-width : 1000px){
    div.social-networks {
        font-size : .9em ;
    }
    
}
@media only screen and (max-width : 920px){
    .input-container {
        margin-bottom : 15px;
    }
    .container {
        width : 90% ;
    }
    .input-container >input {
        width : 100%;
    }
    img {
        height : 330px ;
    }
    #description {
        height : 40px;
        width : 100% ;
    }
}
@media only screen and (max-width : 780px){
     div.social-networks {
        font-size : .8em ;
    }
    img {
        height : 300px ;
    }
}
@media only screen and (max-width : 700px){
    div.full-form-secion {
    display: grid;
    grid-template-columns: 1fr;
}
  img {
        height : 400px ;
    }
.form-img{
    grid-row : 1/2 ;
}
div.social-networks{
    position : absolute ;
    width : 100% ;
    bottom : 0 ;
    box-sizing : border-box ;
    padding : 0 50px ;
    
}
.form-section {
    margin-bottom : 120px ;
}

}
@media only screen and (max-width : 480px){
    img {
        height :350px ;
    }
    div.social-networks {
        
        gap : 10px;
        padding : 0 5px ;
        font-size : .9em ;
    }
}
@media only screen and (max-width : 400px){
    .form-section {
    margin-bottom : 380px ;
}
    div.social-networks {
        font-size : 1.3em ;
        
        grid-template-columns : 1fr ;
    }
    div.social-network {
        margin-bottom : 20px ;
        text-align : center ;
    }
    .container {
        width : 100% ;
    }
    img {
        height : 300px;
    }
}
/*#334E69 */
</style>