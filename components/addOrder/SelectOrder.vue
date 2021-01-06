<template>
    <div id='selectorder'>
        <div class="container">
            <div class="data-container">
          <div class="form-body">
            <div class="line-one" v-if="!isAuthenticated()">
              <div class="input-container">
                <input type="text" placeholder="نام" v-model="firstname" />
                
              </div>
              <div class="input-container">
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  v-model="lastname"
                />
                
              </div>
              <div class="input-container">
                <input type="text" placeholder="email" v-model="email" />
                
              </div>
              <div class="input-container">
                <input
                  type="text"
                  placeholder="شماره همراه"
                  v-model="phonenumber"
                />
                
              </div>
              
            </div>
            <div class="select-container">
              <select v-model="selectedValue">
                <option selected>انتخاب کنید</option>
                <option v-for="service of services" v-bind:value="service">
                  {{ service.serviceName }}
                </option>
              </select>
              
            </div>
            <div class="errors">
              <div class="error" v-if="errors.phoneoremail">
              {{ errors.phoneoremail }}
            </div>
            <div class="error" v-if="errors.firstname">
              {{ errors.firstname }}
            </div>
            <div class="error" v-if="errors.lastname">
              {{ errors.lastname }}
            </div>
            <div class="error" v-if="errors.selectValue">
              {{ errors.selectValue }}
            </div>
            </div>
          </div>
        </div>
        <div class="button-container">
          <button @click='newOrder'>ادامه</button>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'selectorder' , 
    data() {
        return {
            services: [],
      selectedValue: "",
            errors: {
        firstname: "",
        lastname: "",
        phoneoremail: "",
        selectValue: "",
        other: "",
      },
    message: "",
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      
        }
    },
    async fetch() {
    await this.$axios.$get("/services/select-service").then((resp) => {
      this.services = resp;
    });
  } , 
  methods : {
    isAuthenticated() {
      if(process.browser) {
        if(localStorage.getItem("access_token")) {
          return true 
        }
        return false
      }
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
    EmailRegexMethod(value) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
      let IsEmail = reg.test(value)
      return IsEmail ;
    } ,
      newOrder() {
      if (this.errorHandler()) {
        if (this.isAuthenticated() && process.browser) {
          
            let data = {
               productid: this.selectedValue.id,
               productprice : this.selectedValue.price , 
              useremail: localStorage.getItem("email"),
            }
            this.$emit('data', data) ; 
              this.$emit('number', 2) ;
            
        } else {
          let data = {
              productid: this.selectedValue.id,
              useremail: this.email,
               productprice : this.selectedValue.price , 
              firstname: this.firstname,
              lastname: this.lastname,
              phonenumber: this.phonenumber,
          } 
          this.$emit('data', data) ; 
          this.$emit('number', 2) ; 
        }
      }
    } , 
      errorHandler() {
      if (!this.selectedValue) {
        this.errors.selectValue = "لطفا سرویس مد نظر خود را انتخاب کنید";
      } else {
        this.errors.selectValue = "";
      }
      if (!this.isAuthenticated() && !this.firstname) {
        this.errors.firstname = "لطفا نام خود را وارد کنید";
      } else {
        this.errors.firstname = "";
      }

      if (!this.isAuthenticated() && !this.lastname) {
        this.errors.lastname = "لطفا نام خانوادگی خود را وارد کنید";
      } else {
        this.errors.lastname = "";
      }
      if (!this.isAuthenticated() && !(this.email || this.phonenumber)) {
        
        this.errors.phoneoremail =
          "حداقل یکی از دو فیلد ایمیل و شماره تماس را وارد";
      } else {
            if(this.phonenumber) { // number is typed but is should validate
                let numberIsValid = this.PhoneRegexMethod(this.phonenumber) ; 
                    if(numberIsValid) {
                      this.errors.phoneoremail = ''
                    }
                    else {
                      this.errors.phoneoremail = "شماره وارد شده معتبر نمیباشد";
                    }
            }
          if(this.email) {
            let emailIsValid = this.EmailRegexMethod(this.email)
            if(emailIsValid) {
              this.errors.phoneoremail
            }
            else {
              this.errors.phoneoremail = 'ایمیل وارد شده معتبر نمیباشد'
            }
          }
      }

      if (
        !this.isAuthenticated() &&
        (!this.firstname ||
          !this.selectedValue ||
          !this.lastname ||
          !(this.email || this.phonenumber))
      ) {
        return false;
      }
      if (this.isAuthenticated() && !this.selectedValue) {
        return false;
      }
      if(this.phoenumber && !this.PhoneRegexMethod(this.phonenumber)) { // if phonenumber write by user but is not valid
        return false ;
      }
      return true;
    }
  }
}
</script>
<style scoped>
* {
    margin : 0 ;
    padding :0 ;
    border : none ;
    outline : none ;
}
.container {
    height : 600px;
    margin-right : auto ;
        margin-left : auto ;
    width : 700px;
}
    .data-container {
        margin-bottom : 20px;   
  background-color: white;
  height: 350px;
  border-radius: 20px;
  padding: 30px 20px 0 20px;
  box-sizing: border-box;
  box-shadow: 0 0 15px 3px #eee;
}
input {
  box-sizing: border-box;

  padding: 10px 10px;
  border: 1px solid #e4e4e4;
  width: 100%;
}
input::placeholder {
  color: #e4e4e4;
}
.error {
  color: red;
}
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #e4e4e4;
  color: #e4e4e4;
}
.select-container {
  position: relative;
  margin-top: 10px;
}
.select-container span {
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
}
.input-container {
  position: relative;
}
.input-container > span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
}
.line-one {
  display: grid;
  justify-content: space-between;

  grid-template-columns: repeat(2, 320px);
}
.button-container {
  margin-top: 15px;
}
.button-container button {
  display: block;
  background-color: #3ab54a;
  color: white;
  margin-right: auto;
  margin-left: 10px;
  border-radius: 10px;
  width: 150px;
  padding: 10px;
  cursor: pointer;
}
</style>