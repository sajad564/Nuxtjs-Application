<template>
  <div id="login">
     
      
      
      
      <div class="container" v-if='!registerFinished'>
          <div class="form-container">
              <form @submit.prevent="formSubmit">
                  <div class="form-img-section">
                      <img src="~/assets/login.jpg" alt="">
                  </div>
                  <div class="form-body-section">
                      <div class="form-input-container">
                          <label for="fullname" :class="{'input-focus' : inputFocus==1}">نام و نام خانوادگی</label>
                          <input   v-model='register.fullname' type="text" id="fullname" class="form-input"  @click="inputFocus=1">
                          <span class="err">{{errors.fullname}}</span>
                      </div>
                      <div class="form-input-container">
                          <label for="username"  :class="{'input-focus' : inputFocus==2}"> نام کاربری</label>
                          <input v-model='register.username' type="text"  id="username" class="form-input" @click="inputFocus=2">
                          <span class="err">{{errors.username}}</span>
                      </div>
                      <div class="form-input-container">
                          <label for="email"  :class="{'input-focus' : inputFocus==3}">پست الکترونیکی </label>
                          <input v-model='register.email' type="text"  id="email" class="form-input" @click="inputFocus=3">
                          <span class="err">{{errors.email}}</span>
                      </div>
                      <div class="form-input-container">
                          <label for="password"  :class="{'input-focus' : inputFocus==4}">رمز عبور</label>
                          <input v-model='register.password' type="password"  id="password" class="form-input" @click="inputFocus=4">
                          <span class="err">{{errors.password}}</span>
                      </div>
                     
                      <div class="form-input-container">
                          <label for="confirmPassword"  :class="{'input-focus' : inputFocus==5}">تکرار عبور</label>
                          <input v-model='register.confirmPassword' type="password"  id="confirmPassword" class="form-input" @click="inputFocus=5">
                          <span class="err">{{errors.confirmPassword}}</span>
                      </div>
                      <div class="form-input-container">
                          <label  for="photo"  > <font-awesome-icon class="icon" :icon='["fas","upload"]' /></label>
                          <input  type="file"  id="photo" class="form-input" @change='photoSelected' >
                          <span class="err">{{errors.photo}}</span>     
                      </div>
                  </div>
                  <div  >
                  <div v-if="errors.others" >
                    <div v-for="(err,index) of errors.others" ::key="index">
                        {{err}}
                    </div>
                  </div>
                  </div>
                  <div class="forget-password">
                      <a href="#">قبلا حساب کاربری ایجاد کرده آید؟وارد شوید</a>
                  </div>
                  <button type="submit" class="login-button" >ورود</button>
              </form>
          </div>
      </div>
      <div v-if='registerFinished' class='registerfinished'>
        <h3> {{message}} </h3>
      </div>
      
      
  </div>
</template>

<script>

export default {
    name : 'login' , 
    data() {
        return {
            registerFinished : false ,
            inputFocus : -1 ,  
            errors : {
                username : '' ,
                password : '' ,
                email : '' ,
                fullname : '' ,
                confirmPassword : '' ,
                photo :  '' ,
                others : []
            } ,
           register : {
               fullname : '' ,
               username : '' ,
               password : '' ,
               email : '' ,
               confirmPassword :'',
               photo : ''
           },
           message : ''
        }
    },
    methods : {
        photoSelected(event) {
            this.register.photo = event.target.files[0] ;
        },
        formSubmit() {
            this.checkAndSend()
            
        } , 
        checkAndSend() {
            if(this.register.photo=='') {
                this.errors.photo ="لطفا یک عکس برای پروفایل انتخاب کنید"
            }
            else {
                this.errors.photo = ''
            }
            if(this.register.fullname=='') {
                this.errors.fullname ="لطفا لطفا نام و نام خانوادگی خود را وارد کنید"
            }
            else {
                this.errors.fullname = ''
            }
            if(this.register.username=='') {
                this.errors.username ="لطفا نام کاربری خود را وارد کنید"
            }
            else {
                this.errors.username = ''
            }
            
            if(this.register.email=='') {
                this.errors.email ="لطفاایمیل خود را وارد کنید"
            }
            else {
                if(!this.EmailRegexMethod(this.register.email)) {
                this.errors.email = 'ایمیل وارد شده معتبر نمیباشد'
            }
            else {
                this.errors.email = ''
            }
            }
            if(this.register.password=='') {
                this.errors.password ="لطفا رمز عبور را وارد کنید"
            }
            else {
                this.errors.password = ''
            }
            if(this.register.password!='') {
                if(this.register.confirmPassword!=this.register.password) {
                    this.errors.confirmPassword = "عدم تطابق رمز عبور"
                }
                else {
                    this.errors.confirmPassword = ''
                }
            }
            if(this.register.username!='' && this.register.password!='' && this.register.email!='' && this.EmailRegexMethod(this.register.email) && this.register.photo!='' && this.register.fullname!=''  ) {
                if(this.register.password==this.register.confirmPassword) {
                    this.sendData()
                }
            }
        } ,
        sendData() {
            let fd = new FormData() ;
            fd.append('fullname' , this.register.fullname)
            fd.append('username' , this.register.username)
            fd.append('email' , this.register.email)
            fd.append('password' , this.register.password)
            fd.append('confirmPassword' , this.register.confirmPassword)
            fd.append('photo' , this.register.photo)
            this.$axios.$post('/account/create',fd)
                .then(resp => {
                    
                    this.message = 'ثبت نام شما تکمیل شد<br>ایمیل تایید ارسال شد'
                })
                    .catch(err => {
                        this.errors.others = err.response.data.errors
                    })
        } ,
    //     saveToStorage(response) {
    //     if(process.browser) {
    //         console.log(response.token)
    //         localStorage.setItem('access_token', response)
    //                 this.registerFinished = true 
    //                 this.pushToProfile() ; 
    //     }
    // } ,
    EmailRegexMethod(value) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
      let IsEmail = reg.test(value)
      console.log(IsEmail)
      return IsEmail ;
      
    } ,
     
    pushToProfile() {
        setTimeout(() => this.$router.push({path : '/profile'}) , 3000)
    }
    },
    computed: {
        currentRouteName() {
            return this.$route.name
        }
    }

}
</script>

<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border : none
}

a {
    text-decoration: none;
    color: #717171;
}
#login {
    background-image: url("~assets/background-wave.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
   
}
.registerfinished {
    height : 80vh ; 
    margin-top : 300px;
    text-align : center ;
}
div.container {
    background-color: white;
    margin-top : 40px ;
    margin-bottom: 20px;
    width :400px ;
    margin-right : auto ;
    margin-left : auto ;
    
}
input:focus {
    box-shadow: 0 4px 4px -4px  lightblue;
    transition : all .5s ;
}
form {
    padding-bottom: 20px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 0 5px 0.5px #eee;
}

img {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    width :100% ;
}
.form-body-section {
    box-sizing: border-box;
    padding: 10px 15px;
    display : grid ;
    grid-gap: 30px;
    grid-template-columns : repeat(2,1fr)  ; 
}
.form-input-container {
    margin-bottom : 5px ;
    height : 30px;
    position : relative ;

}
.form-input-container:nth-child(3) {
    grid-row: 2;
    grid-column: 1/3;
    margin-bottom : 15px ;
    margin-top : 15px ;
}
.form-input-container:nth-child(6) {
    grid-column: 1/3;
    

}
.form-input-container:nth-child(6) > input {
   position : relative ;
   border : none ;
   cursor: pointer;
}
.form-input-container:nth-child(6) > input::before {
    content : '' ; 
    position : absolute ;
    width : 100% ;
    border-radius : 5px;
    height : 100% ;
    background-color : #2185EA ; 
}
.form-input-container:nth-child(6) > label {
    font-size : 20px ;
    right : 50% ;
     color : #334E67 ;
    bottom : 0 ;
    
}
label {
    z-index : 2 ; 
    
    position : absolute ;
    bottom : 5px ;
    font-size : 14px ;
    color :#2086EA ; 
}
.input-focus {
    transition : all .5s ;
    bottom : 20px ;
    opacity: 0;
}
input {
    height : 100% ;
    position : absolute ;
    outline: none;
    display: block;
    width: 100%;
    border-bottom : .1px solid #9BC9F5 ;
    
}
.forget-password {
    width: 100%;
    text-align: center;
    margin-right : auto ;
    margin-left: auto;
    margin-bottom: 30px;
}
.errors {
    text-align : center ;
    color : red ;
}
button.login-button {
    display: block;
    outline : none ;
    box-sizing: border-box;
    cursor: pointer;
    padding : 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 20px;
    color :white ;
    width: 180px;
    margin-right: auto;
    margin-left : auto ;
    background-color: #2086EA;
}
@media only screen and (max-width : 802px) {
    #login {
        background-position:center 250px;
    }
} 
@media only screen and (max-width : 741px) {
    #login {
        background-position:center 700px;
    }
} 
@media only screen and (max-width : 435px) {
    .container {
        width : 80% ;
    }
    span.err {
        background-color : red ;
        color : black ;
    }
}
</style>