<template>
    <div id="navbar">
    <div class='toggle-container'>
      <div class='remove-toggle' :class='{"show-remove-toggle":$vssWidth<=770 && show!=false}' @click='show=!show'>
      <font-awesome-icon :icon='["fas","times"]'/>
    </div>
    <div class='toggle' :class='{"dont-show-toggle":$vssWidth<=770 && show!=false}'>
           <font-awesome-icon :icon='["fas","bars"]' @click='show=!show' />
         
        </div>
    </div>
        <div class="navbar" :class='{"nonavbar":$vssWidth<=770 && show==false}'>
        
        <div class="leftbar">
        
          
          <div class="main-page">
            <NuxtLink to='/' id="mainpage"> صفحه اصلی</NuxtLink>
          </div>
          <div class="our-service">
            <a href="#" id="web-design"> طراحی سایت</a>
            <div class='drop-down'>
              <NuxtLink to='/services' > خدمات ما </NuxtLink>
              <NuxtLink to='/addorder' >  سفارش </NuxtLink>
              <NuxtLink to='/tracking' > پیگیری سفارش </NuxtLink>
            </div>
          </div>
          
          <div class="portfolio">
            <NuxtLink to='/portfolio' id="portfolio"> نمونه کار ها</NuxtLink>
          </div>
          <div class="web-design">
            <NuxtLink to='/contact' id="contact-us">ارتباط با ما</NuxtLink>
          </div>
          <div class="web-design">
            <NuxtLink to='/aboutus' id="about-us">درباره ما</NuxtLink>
          </div>
        </div>
        <div class="rightbar" v-if='!isLogedin()'>
          <div class="register">
            <NuxtLink to='/register'> ثبت نام</NuxtLink>
          </div>
          <div class="login">
            <NuxtLink to='/login'>   ورود</NuxtLink>
          </div>

        </div>
        <div class="rightbar" v-if='isLogedin()'>
          <div class="profile">
            <NuxtLink to='/profile'> حساب کاربری</NuxtLink>
          </div>
          <div class="logout">
            <button @click='logout'>خروج</button>
          </div>

        </div>
      </div>
    </div>
</template>
<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
export default {
    name : 'navbar',
    mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
    data() {
      return {
        
        show : false 
      }
    },
    methods : {
      isLogedin() {
        if(process.browser) {
          if(localStorage.getItem('access_token')) {
            return true
          }
          return false 
        }
      } , 
      logout() {
        this.removeItems() ; 
        this.$router.push({name : '/'}); 
      } , 
      removeItems() {
        if(process.browser) {
          localStorage.removeItem("access_token")
        }
      }
    }
}
</script>
<style  scoped>
*{
  margin : 0 ; 
  padding : 0 ;
  transition : all 1s ;
}
.toggle-container {
  display : none ;
}
#navbar {
  
        background-image: linear-gradient(to right ,#2697E8 , #2CB2E7,#31C6E4);

}
.logout {
  padding : 0;
}
.logout button {
  background-color : yellow ;
  color : blue ;
  cursor : pointer ;
  border : none ;
  border-radius : 12px ;
  width : 100px;
  padding : 5px ;
}
.navbar {
  box-sizing : border-box ;
  padding-right : 50px;
      background-image: linear-gradient(to right ,#2697E8 , #2CB2E7,#31C6E4);
    opacity : 1 ;
  height :60px ;
  
  text-align: center;
display : grid ; 
grid-gap: 100px;

grid-template-columns : 3fr 2fr ; 
padding-top :10px ;

}
.navbar >div {
  grid-gap: 20px;
 
}
div.our-service {

  position : relative ;
  z-index :5 ; 
  
}


div.drop-down {

  border-bottom-left-radius : 5px;
  border-bottom-right-radius : 5px;
  background-color : rgba(8, 103, 209,.7);
  position : absolute ;
  margin-top : 15px;
  width : 100px;
  overflow : hidden;
  height : 0 ;
}
div.our-service:hover div.drop-down {
  height : 150px; 
}


div.drop-down  a {
 
  cursor : pointer ;
  margin-bottom : 5px ;
  display : block ;
  height : 30px;
}
.nonavbar {
  
  
  display : none ;
  opacity : 0 ;
  
}
.dont-show-toggle {
  
  margin-top : -50px ;
}
.dont-show-toggle >* {
  transform : rotate(360deg) ;
}
.navbar > div >div{
  cursor: pointer;
  box-sizing: border-box;
  height :40px;
  padding : 10px 0 ; /* this is for text be center vertically */
}
.rightbar {
  display : grid; 
  grid-template-columns: 200px 100px;
}
.leftbar {

  display : grid; 
  grid-template-columns: repeat(5,90px);
  justify-content: center;
  
}
a {
  color : white ;
  width: 100%;
  text-decoration: none;
}
.register {
  border : 1px solid white ;
  border-radius: 20px;
}
.remove-toggle {
  cursor : pointer ;
  font-size : 2em ;
  display : inline-block ;
}
.remove-toggle > * {
    display : inline-block ;
    position : absolute ;
     
    top : -50px ;
    right : 20px ;
  }
.toggle {
  display : none ;
}
.navbar > div >div:not(.logout) {
  position : relative ;
  
}
.navbar > div >div:not(.logout):before {
  content : '' ;
  overflow : hidden; 
  background-color : white ;
  position : absolute ;
  bottom : 0 ;
  left : 0 ; 
  right : 0 ; 
  height :2px  ;
  width : 0 ;
}
.navbar >div >div:not(.our-service):not(.register):hover:before {
  
  animation : navitemhover .4s ;
}
@keyframes navitemhover {
 0% {
   width : 100% 
 }
 
 100% {
   width : 0 ;
 }
}

.register::after {
  content : '' ; 
  position : absolute ;
  width : 0 ; 
  height : 0;
  transition : all .2s ;
  opacity : .2 ; 
  border : 0 ;
  border-radius : 20px;
  background-color : black ;
  right : 50% ; 
  top : 50% ;
  transform : translate(50%,-50%)
}
.register:hover:after {
  height : 100% ;
  width : 100% ;
  border : 1px solid blue ;
}
@media only screen and (max-width : 1037px) {
  .navbar {
    grid-gap: 50px;
    padding-right : 10px;
    padding-left: 10px;
  }
.leftbar {
  grid-template-columns: repeat(5,85px);
}
.rightbar {
  grid-template-columns: 2fr 1fr;
}

.navbar > div {
  gap : 15px;
}
}

@media only screen and (max-width : 770px) {
  .toggle-container {
    display : block ;
    height : 60px ;
  }
  .show-remove-toggle {
    display : block ;
    
  }
  .show-remove-toggle > * {
    transform : rotate(360deg) ;
    top : 5px ;
  }
   .toggle >* {
    cursor : pointer ;
  }
  .toggle {
    
    box-sizing : border-box ;
    
    display : inline-block;
   position : absolute ;
   top : 10px ;
   left : 10px ;
   font-size : 2em ;
   text-align : left ;
   padding-left : 10px ;
  }
  
  .navbar,.rightbar,.leftbar {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
  .navbar {
    height: auto;
  }
  div.drop-down {
    right : 50% ;
    width : 70% ;
    transform : translateX(50%)
  }
  
  .navbar > div >div:not(.logout):before {
    right : 50% ;
    transform : translateX(50%) ; 
  }
  @keyframes navitemhover {
 0% {
   width : 100px 
 }
 
 100% {
   width : 0 ;
 }
}
  .register {
    border: none;
  }
  #navbar {
    position : relative ;
  }
  .logout {
    position : absolute ;
    top : 0 ;
    left : 50px ;
  }
}
</style>