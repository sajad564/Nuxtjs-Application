<template>
  <div id="login">
     
      <div class="container">
          <div class="form-container">
              <form @submit.prevent="formsubmit">
                  <div class="form-img-section">
                      <img src="~/assets/login.jpg" alt="">
                  </div>
                  <div class="form-body-section">
                      <div class="form-input-container">
                          <label for="username">نام کاربری</label>
                          <input v-model="login.username" type="text" id="username" class="form-input">
                      </div>
                      <div class="form-input-container">
                          <label for="password">رمز عبور</label>
                          <input type="password" v-model="login.password" id="password" class="form-input">
                      </div>
                  </div>
                  <div v-if='errors' >
                  <div v-for='(err , index) in errors' ::key="index" class='errors'>
                    {{err}}
                  </div>
                  </div>
                  <div class="forget-password">
                      <a href="#">رمز عبور خود را فراموش کرده اید؟</a>
                  </div>
                  <button type="submit" class="login-button" >ورود</button>
              </form>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
    name : 'login' ,
    data() {
        return {
            errors : {
                username : '' , 
                password : ''
            }  ,
            login : {
                username : '' , 
                password : ''
            }
        }
    },
    methods : {
        EmailRegexMethod(value) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
      let IsEmail = reg.test(value)
      return IsEmail ;
      
    } ,
        formsubmit() {
            if(this.checkData() && process.browser) {
                this.$axios.$post('account/login' , this.login)
                    .then(resp => {
                        this.saveData(resp)
                    })
                        .catch(err => {
                            console.log(err)
                        })
            }
        } ,
        checkData() {
            if(this.login.username=='') {
                this.errors.username = 'لطفا نام کاربری خود را وارد کنید'
            }
            else {
                this.errors.username = ''
            }
            if(this.login.password=='') {
                this.errors.password = 'لطفا پسورد خود را وارد کنید'
            }
            else {
               this.errors.password = ''
            }
            if(this.login.username!='' && this.login.password) {
                return true ;
            }
            return false ;
        } , 
        saveData(response) {
            console.log(response)
            localStorage.setItem('access_token', response)
                    
                    this.registerFinished = true 
                    this.pushToProfile() ; 
        } ,
        pushToProfile() {
         this.$router.push({path : '/profile'})
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
div.container {
    background-color: white;
    margin-top : 100px ;
    margin-bottom: 20px;
    width :350px ;
    margin-right : auto ;
    margin-left : auto ;
    
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
}

label {
    color :#2086EA ; 
}
input {
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
.form-input-container {
    margin-bottom : 40px ; 
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
}
</style>