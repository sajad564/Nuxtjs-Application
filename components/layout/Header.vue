<template>
  <div id="header">
  
    <div class="container">
    <div class='toggle-bar' v-if='$vssWidth<750'>
    <div class='up'>
      <font-awesome-icon :icon='["fas","times"]' :class='{"removebaricon" :show==false}' @click='show=!show' />
    </div>
  <div class='down'>
    <font-awesome-icon :icon='["fas","bars"]' :class='{"removetoggleicon" : show==true}' @click='show=!show'  />
  </div>
  </div>
      <div class="navbar" :class='{"shownavbar" : $vssWidth<750 && show==true }'>
        <div class="leftbar">
          <div class="main-page">
            <NuxtLink to='/posts' id="mainpage">  بلاگ</NuxtLink>
          </div>
          <div class="web-design">
            <a href="#" id="web-design">طراحی سایت</a>
            <div class='web-design-sub'>
              <NuxtLink to='/feature'>خدمات ما</NuxtLink>  
              <NuxtLink to='/addorder'>سفارش</NuxtLink>  
              <NuxtLink to='/tracking'>پیگیری سفارش</NuxtLink>  
              <NuxtLink to='/tracking'>پیگیری سفارش</NuxtLink>  
             </div>
          </div>
          
          <div class="portfolio">
            <NuxtLink to='/portfolio' id="portfolio"> نمونه کار ها</NuxtLink>
          </div>
        </div>
        <div class="rightbar">
          <div class="register">
            <NuxtLink to='/register' href="#">ثبت نام</NuxtLink>
          </div>
          <div class="login">
            <NuxtLink to='/login' href="#">ورود</NuxtLink>
          </div>

        </div>
      </div>
      <div class="title" :class='{"title-bottom" : $vssWidth<750 && show==true}'>
        <div class="big-title">
          <h1>انواع سفارش طراحی سایت</h1>
        </div>
        <div class="litle-title">
          <h3>طراحی سایت فروشگاهی,اختصاصی ,وردپرس برای شما</h3>
        </div>
      </div>
      <div class="img">
       
      </div>
    </div>
    <div class="curve"  v-if='$vssWidth>750'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <linearGradient id="gradient">
    <stop class="main-stop" offset="0%" />
    <stop class="alt-stop" offset="50% " />
    <stop class="end-stop" offset="100% " />
  </linearGradient>
                    <path d="M0 0 C 50 100 50 100 100 0 Z"></path>
                </svg>
      </div>
  </div>
</template>
<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
export default {
  name : 'header', 
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data() {
    return {
      show : false 
    }
  }
}
</script>
<style scoped>
svg {
  fill : url('#gradient');
  width : 100% ;
  height : 85vh ;
}
.main-stop {
  stop-color: #2697E8;
}
.alt-stop {
  stop-color: #2CB2E7;
}
.end-stop {
  stop-color: #31C6E4;
}
* {
  margin : 0 ; 
  transition : all .2s ;
  padding : 0 ; 
}
img {
  width : 100% ;
  overflow:visible;
}
.container {
  box-sizing: border-box;
  
overflow : hidden ;
height : 40vh; 
width :100% ; 
box-sizing : border-box ;
padding : 0 100px 20px 100px;
 background-image: linear-gradient(to right ,#2697E8 , #2CB2E7,#31C6E4);

}
.toggle-bar {
  display : grid ;
  grid-template-columns : repeat(2,1fr) ;
  height : 40px ;
  box-sizing : border-box  ; 
  padding : 15px ;
}
.toggle-bar > div >* {
  height : 100% ;
  transition : all 1s ;
}
.leftbar > div,.login {
  position : relative ;
  transition : all .3s ;
  
}
.web-design {
  position : relative ; 
  z-index : 10 ;
}
.web-design:hover .web-design-sub {
  height : 200px;
  
}
.web-design-sub {
  transition : all .5s ;
  box-sizing : border-box ;
  overflow: hidden;
  right : 50% ;
  transform : translateX(50%);
  margin-top : 10px;
  position : absolute ;
  height : 0 ;
  width : 180px ;
  background-color : lightblue ;
  opacity: .6;

  
}
.web-design-sub > a {
  display : block ;
  margin-top : 15px ;
}
.web-design-sub > a:hover {
  color : blue ;
}

.down > *,.up > * {
  cursor : pointer ;
  font-size : 1.7em ;
} 
.down {
  text-align : left ;
}
.up {
  text-align : right  ; 
}

.navbar {
  height :80px ;
  box-sizing: border-box;
  text-align: center;
  padding-bottom : 25px;
display : grid ; 
grid-gap: 200px;
grid-template-columns : repeat(2,1fr) ; 
padding-top :10px ;

}
.navbar >div {
  grid-gap: 10px;
 
}
.navbar > div >div{
  cursor: pointer;
  
  padding : 10px 0 ; /* this is for text be center vertically */

}
.navbar > div >div:not(.web-design){
  overflow: hidden;
}

.rightbar {
  display : grid; 
  grid-template-columns: 300px 150px ;
  
 justify-content: space-around;
}
.leftbar {
  display : grid; 
  grid-template-columns: repeat(3,1fr);
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
.title {
  position : absolute ;
  width :400px ; 
  right : 50% ;
  transform : translateX(50%) ; 
  top : 250px ;
  z-index : 1 ;
  color : white ;
  text-align: center;
  
}
.big-title {
  
  margin-bottom : 30px;
}
div.img {
  position : absolute ;
  width : 450px ;
  height : 400px ;
  right : 50% ;
  bottom : 5% ;
  z-index : 0 ;
  overflow : visible ;
  transform : translateX(50%) ; 
  background-image: url("~assets/slide.png");

  background-repeat: no-repeat;
  background-size: 100% 100% ;
}



@media only screen and (min-width:750px) {

.main-page::before,.portfolio::before ,.login::before {
  content : '' ;
  position : absolute ;
bottom : 0 ;
left : 0 ;
height : 2px ; 

background-color : white ;
overflow : hidden ;
width : 0 ; 
}
.main-page:hover::before,.portfolio:hover::before,.login:hover:before {
  
  animation : .3s  navbarhoverbottom ;
}
@keyframes navbarhoverbottom {
  0% {width : 0 }
 50% {
   width : 80px ;
   transform : translateX(80px)
 }
 100% {
   transform : translateX(160px) ; 
   width : 0 ; 
 }
 
}
}
@media only screen and (max-width:1140px) {

  
  .rightbar {
    grid-template-columns : 2fr 1fr ;
  }
  .navbar {
    grid-gap: 100px;
    display: grid;
    grid-template-columns : 3fr 2fr ; 
  }
  .container {
    padding-right : 30px;
    height : 55vh ;
    
  }
  svg {
    height : 60vh ;
  }
}
@media only screen and (max-width:882px) {
  .container {
    padding-right: 40px;
    padding-left: 40px;
  }
 
  .navbar {
    grid-template-columns: 2fr 1fr;
  }
  
}

@media only screen and (max-width:750px) {
 .container {
   height : 100vh ;
 }
 .title {
   transition : none ;
   top : 30vh ;
 }
 .title.title-bottom {
    transform : none ;
    position : static ;
    margin : 0 ;

}

/* .container {
  height : 800px;
  background-image : url('~assets/background-mid-device.png') ;
  position : relative ;
  padding-bottom : 10px;
} */
 .web-design:hover .web-design-sub {
   padding-bottom : 10px;
   height : 200px ;
  }
  .web-design-sub {
    transform : translateX(0) ;
   right : 0 ;
   width : 100% ;
   
    opacity: 1;
    font-size : 1rem ;
  }
  .web-design-sub > a {
    margin-top : 10px ;
  }
 
.navbar,.leftbar,.rightbar {
  grid-template-columns : 1fr ;
}
.navbar {

  height : 0 ;
  padding : 0 ;
  overflow : hidden ;
  animation: togglenavbarremove .7s ;
  grid-gap : 0 ;
}
@keyframes togglenavbarremove {
  from {height : 240px}
  to {height : 0;
    
  }
}
.shownavbar.navbar {
  height : 240px;
  display : grid ;
  animation: toggletonavbar .7s ;
}
@keyframes toggletonavbar {
  0% {height : 0}
  100% {height : 240px}
}
.register{
  border : none ;
}
.leftbar > div,.rightbar > div{
  position : relative ;
 
  }
  .navbar > div > div {
     padding : 5px  0 ;
     transition: all .2s;
  }
.leftbar > div::before,.rightbar > div::before {
  
  content : ''  ;
  position : absolute ;
  bottom : 0 ;
  left : 50% ;
  width : 0 ;
  height : 2px;
  background-color  : white ;
  transition: all .2s;
   
}


.removebaricon {
  
  transform : translateX(100px) rotate(720deg) ; 
}
.removetoggleicon {
  transform : translateX(-100px) rotate(720deg) ;
}
div.img {
 margin-top : 50px;
 width : 360px;
 height : 300px;
}
.leftbar > div:hover:before,.rightbar > div:hover:before{
  
  left : 35% ;
  width : 30% ;
   
}
 .leftbar > div:hover,.rightbar > div:hover {
   font-size : 1.5em; 
 }
  
}



@media only screen and (max-width:460px) {
  
  .container {
    padding-right : 10px;
    padding-left : 10px;
  }
  svg {
    height : 25vh ;
  }
 
  .title {
    width : 100% ;
  }
  .big-title {
    font-size : 14px;
  }
  .litle-title{
    font-size : 13px;
  }
}

</style>