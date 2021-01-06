<template>
  <div id="protfolio" >
      
      <div class='header-message'>
          <popup v-if="popup" @deletepopup='deletePopup' />
        <h1> <span class='dark-blue'>نمونه کار های</span> <span class='blue'>تیم ما </span> </h1>
        <p class='gray' > مشتریانی که به ما اعتماد کرده اند و پروژه های خود را به ما سپرده اند </p>
      </div>
      <div class="container" v-if="portfolio.length!=0">
          
          <div class="right-panel" >
          <transition name='circle-animation' v-on:after-leave="nextportfolio" v-on:enter="dontuseanimate">
              <div class='single-portfolio'  v-if='showme' >
                <div class="portfolio-name" >
               
                  <h1> <span class='dark-blue'> طراحی سایت  </span>  <span class='blue'> {{portfolio[counter].websitename}} </span> </h1>
              </div>
              
              <div class='select-container blue'>
            
                <div class='select-image'>
                    <font-awesome-icon :icon='["fas","arrow-right"]' @click='plus' />
                <font-awesome-icon :icon='["fas","arrow-left"]'  @click='minus'/>
                </div>
                <div class='select-portfolio '>
                <button @click='showme=false' class='blue'>نمونه کار بعدی</button>
              </div>
                
              </div>
              
              <div class="portfolio-imgs-container">
                  <div class="img-one portfolio-img"  :class='{"firstimg" : topimg==1 && $vssWidth>760   , "thirdimg" : topimg==2 && $vssWidth>760  , "secondimg" : topimg==3 && $vssWidth>760 , "x" : topimg==2 && $vssWidth<=760  && usetopimganimate==true  }'>
                      <img :src="portfolio[counter].photourls[0]" alt="">
                  </div>
                  <div class="img-two portfolio-img" :class='{"thirdimg" : topimg==1 && $vssWidth>760   , "secondimg" : topimg==2 && $vssWidth>760  , "firstimg" : topimg==3 && $vssWidth>760  , "x" : topimg==1 && $vssWidth<=760 && usetopimganimate==true  }'>
                      <img :src="portfolio[counter].photourls[1]"  alt="">
                  </div>
                  <div class="img-three portfolio-img" :class='{"secondimg" : topimg==1 && $vssWidth>760   , "firstimg" : topimg==2 && $vssWidth>760  , "thirdimg" : topimg==3 && $vssWidth>760  , "x" : topimg==3 && $vssWidth<=760  && usetopimganimate==true }' >
                      <img :src="portfolio[counter].photourls[2]"  alt="" >
                  </div>
              </div>
              </div>
              </transition>
          </div>
          
          <div class="left-panel">
              <div class="tool html">
                  <div class="tool-img">
                      <img src="~/assets/html.png" alt="">
                  </div>
                  <div class="tool-description">
                      <h1>html</h1>
                      <p>امروزه استفاده از اچ تی امل در ایجاد وبسایت ضرروری است</p>
                  </div>
              </div>
              <div class="tool html">
                  <div class="tool-img">
                      <img src="~/assets/html.png" alt="">
                  </div>
                  <div class="tool-description">
                      <h1>html</h1>
                      <p>امروزه استفاده از اچ تی امل در ایجاد وبسایت ضرروری است</p>
                  </div>
              </div>
              <div class="tool html">
                  <div class="tool-img">
                      <img src="~/assets/css.png" alt="">
                  </div>
                  <div class="tool-description">
                      <h1>html</h1>
                      <p>امروزه استفاده از اچ تی امل در ایجاد وبسایت ضرروری است</p>
                  </div>
              </div>
              <div class="tool html">
                  <div class="tool-img">
                      <img src="~/assets/vuejs.png" alt="">
                      
                  </div>
                  <div class="tool-description">
                      <h1>html</h1>
                      <p>امروزه استفاده از اچ تی امل در ایجاد وبسایت ضرروری است</p>
                  </div>
                  </div>
                  
              
          </div>
      </div>
      
      <div class='loading' v-if="portfolio.length==0" >
          <loading />
      </div>
      <div class="buttons-container" v-if="portfolio.length!=0">
                  <a class="visit-website">مشاهده این وبسایت</a>
                  <button class="order-instance" @click='AddOrder'>سفارش مشابه این پروژه</button>
                  <button class="guide">  مشاوره و راهنمایی </button>
      </div>
      <addorderlikeportfolio class='order-like' v-if="!selectedPortfolioId && !checkLogin" :id='selectedPortfolioId' @close='close'  />
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import loading from '~/components/shared/Loading'
import popup from '~/components/shared/Popup' ; 
import addorderlikeportfolio from '~/components/noPanel/AddOrderLikePortfolio'
export default {
    name : 'portfolio' ,
     mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin], 
    data() {
        return {
            popup : false ,
            showme : true ,
            topimg : 1,
            usetopimganimate : false , 
            counter : 0 ,
            portfolio : [],
            selectedPortfolioId : ''  
            
        }
    } , 
    async fetch() {
        await this.$axios.$get('/portfolio/list')
            .then(resp => {
                this.portfolio = resp
            })
                
    },
    methods : {
        deletePopup() {
            this.popup = false ;
        } , 
        checkLogin() {
            if(process.browser) {
                if(localStorage.getItem('access_token')) {
                return true 
            }
            return false 
            }
        } , 
        plus() {
            this.usetopimganimate = true 
            if(this.topimg<3 && this.topimg>=1) {
                this.topimg = this.topimg + 1 ;
            }
            else {
                this.topimg = 1 ;
            }
        },
        minus() {
            this.usetopimganimate = true 
            if(this.topimg<=3&& this.topimg>1) {
                this.topimg = this.topimg -1 ; 
            }
            else {
                this.topimg = 3 ;
            }
        } , 
        nextportfolio() {
           this.counter = this.counter +1 ;
           this.showme = true  ;
            
        }, 
        dontuseanimate() {
            this.usetopimganimate = false ;
        } ,
        AddOrder() {
            this.selectedPortfolioId = this.portfolio[this.counter].id 
            if(this.checkLogin()) {
                console.log(this.selectedPortfolioId)
                this.$axios.$post('/order/new-order-like' ,{
                    likeorderid : this.selectedPortfolioId
                } )
                    .then(
                        this.popup = true 
                    )
            }
        } ,
        close() {
            this.selectedPortfolioId = ''
        }
    } , 
    components : {
        addorderlikeportfolio , 
        popup , 
        loading
    }
}
</script>

<style scoped>
* {
    transition : all .8s ;
    padding : 0 ;
    margin : 0 ; 
    border: none;
    outline : none ;
}
#protfolio {
   position : relative ;
    overflow : hidden ;
    background-color: #FEFEFE ; /**FEFEFE */
    background-image: url('~assets/background-wave.png');
    background-repeat: no-repeat;
    background-position:center 200px;
    background-size: contain;
}
.background-gray {
     
    
}
.loading {
    height : 100vh ; 
    margin-top : 100px;
}
.order-like {
    width : 100% ;
    height : 100% ;
    top : 50%;
    right : 50%;
    transform: translate(50%,-50%);
    
    
    z-index : 20 ;
    position : absolute ;
    background-color : rgba(184, 184, 184, 0.58);
    animation : renderanimation  .6s ;
}
@keyframes renderanimation {
    from {
        opacity : 0 ;
        width : 0 ;
        height : 0 ;
    }
    to {
        opacity : 1 ;
        width : 100%;
        height : 100%;
    }
}

.gray {
    margin-top : 20px;
    color : #8297AB ;
}
.header-message {
    position : relative ;
    text-align : center ;
}

.select-image {
    box-sizing : border-box ;
    padding-top : 7px;
   
   
}

.select-portfolio >button {
    background-color : white ;
    font-weight : bold ;
    font-size : .6em ;
    
}
.container {
    display : grid ;
    grid-template-columns: repeat(2,1fr);
    width : 90% ;
    margin-right: auto;
    gap: 50px;
    margin-left : auto  ;
    margin-top : 10px;
}
    .circle-animation-enter-active,.circle-animation-enter-active {
        transition : all .4s ;
    }
    .circle-animation-enter ,.circle-animation-leave-to {
        transform : rotateX(90deg) ; 
        
    }
.right-panel {
    box-sizing: border-box;
    padding :  40px 40px 40px 0
}
img {
    height : 100% ;
    width : 100% ;
}
.select-container >  * {
    cursor : pointer ;
}
.select-container {
    font-size : 1.3em ;
    text-align : left ;
    width : 100% ;
    display : grid ;
    grid-template-columns : repeat(2,1fr)
}
.tool-img {
    background-color: white !important;
    box-shadow: 0 0 5px 1px #eee;
    border-radius: 10px;
    box-shadow: ;
}
.portfolio-imgs-container {
    position: relative;
}
.portfolio-img {
    position: absolute;
    cursor: pointer;
    height :250px ;
    width : 400px; 
    z-index: 1 ;
    
    
}
.firstimg {
    z-index:4 ;
    transform : translate(5%,40%) !important ;
}

.secondimg {
    z-index : 1 ;
    transform : translate(14%,20%) !important; 
}
.thirdimg {
   z-index : 0;
    transform : translate(-20%,10%) !important ;
}



.tool {
     direction: ltr;
     gap: 20px;
    display: grid;
    grid-template-columns: 100px auto;
    margin-bottom: 30px;
}
.tool-img {
    box-sizing: border-box;
    padding: 10px;
}

.portfolio-name {
    margin-bottom : 30px;
}
.tool-description {
    box-sizing: border-box;
    padding-top: 25px;
}
.tool-description p {
    font-size: 12px;
}

.buttons-container {
    width: 90%;
    margin : 10px auto 30px auto ;
   
    transition : all .1s ;
    height : 40px;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3,1fr);
    z-index: 100;
}
button {
    cursor : pointer ;
}
.buttons-container > *  {
    border-radius: 15px;
    
}
.buttons-container > button {
    width : 100% ;
    height : 100% ;
}
button.order-instance {
    
    background-color :  #0867D1 ; 
    border : 1px solid #0867D1 ;
    color : white ;
}
button.order-instance:hover {
    background-color :  white ; 
    color : #0867D1 ;
}
a.visit-website{
    cursor : pointer ;
    box-sizing : border-box ;
    padding-top : 8px;
    text-align : center ;
}
a.visit-website,button.guide {
    background-color: white;
    border :1px solid  #0867D1 ; 
    color :  #0867D1  ; 
}
a.visit-website:hover,button.guide:hover {
    background-color: #0867D1;
    border :1px solid  #0867D1 ; 
    color :  white  ; 
}
@media only screen and (max-width : 1040px) {
    
.portfolio-img {
    
    width : 350px;
}
.container {
    gap : 20px ;
    width : 94% ;
}
}
@media only screen and (max-width : 940px) {
    .buttons-container {
        margin-top :100px;
    }
    .container {
        grid-template-columns : 1fr ;
    }
    .left-panel {
        
        display : grid ;
        grid-template-columns : repeat(2,1fr) ;
        
        grid-row : 1 ;
    }
    .right-panel {
        
        
        width : 100% ;
        margin-right : auto ;
        margin-left : auto ;
        height : 550px;
        
        position : relative ;
       grid-row : 2 ;
    }
    .portfolio-img {
        width : 500px;
        height : 350px;
    }
    .container {
        margin-bottom : 50px;
    }
    .firstimg {
   
    transform : translate(-25%,20%) !important ;
}

.secondimg {
    
    transform : translate(-10%,0) !important; 
}
.thirdimg {
   
  
    transform : translate(-45%,-10%) !important ;
}
.select-container {
    width : 300px;
    margin : 0 ;
    text-align : center ;
    margin-bottom : 50px ;
}
}
@media only screen and (max-width : 840px) {
       .firstimg {
   
    transform : translate(-10%,20%) !important ;
}
    .secondimg {
    
    transform : translate(5%,0) !important; 
}
.thirdimg {
   
  
    transform : translate(-30%,-10%) !important ;
}
.portfolio-imgs-container {
    width : 90% ;
    margin-right : auto ;
    margin-left : auto ;
}
.buttons-container {
        margin-top :200px;
    }
.select-container {
    width : 100% ;
    grid-template-columns : 1fr ;
    text-align : center ;
    margin : 50px 0 ;
}
.portfolio-name {
        text-align : center ;
    }

}
@media only screen and (max-width : 760px) {
    .portfolio-img {
        transition : z-index .6s .6s ;
    }
    .portfolio-img.x {
        animation : 1s imageeffect ;
        z-index : 10 ;
        transition : z-index .4s .4s ;
        transform-origin : right bottom  ;
    }
    @keyframes imageeffect {
        50% {
            transform :  rotate(90deg) scale(.6)
            
        }
        100% {
            
        }
    }
   

    
    .portfolio-imgs-container {
        height : 350px ;
        width : 500px ;
        margin-bottom : 100px;
       
        margin-right : auto ;
        margin-left : auto ;
    }
    
    .portfolio-img {
        width : 100%;
        height : 100% ;

    }
    
    .single-portfolio {
        
        padding : 0 ;
       
    }
    .right-panel {
        left : 0 ;
        right : 0 ; 
        
        padding : 40px 0 ; 
    }
    .select-container{

        font-size : 2em ;
        margin-bottom : 40px;
        width : 200px;
        margin-right : auto ;
        margin-left : auto ;
    }
  
}
@media only screen and (max-width : 570px) {
.portfolio-imgs-container {
        height : 250px ;
        width : 400px ;
        margin-bottom : 20px;
}
.right-panel {
    padding : 0 ;
    top : 0 ;
    position : relative ;
    grid-row : 2 ;
    
}
.buttons-container {
    margin : 0 auto 30px auto ;
}

    
    .container {
        margin-bottom : 0 ;
    }
    

.left-panel {
    grid-row : 1 ;
    grid-template-columns : 1fr ;
    
}
.tool {
    grid-template-columns  : 1fr ;
    margin-bottom : 80px;
}
.tool-img {
    width :250px ;
    height : 210px;
    margin-right : auto ;
    margin-left : auto ;
}
.buttons-container {
    height : auto ;
    grid-template-columns : 1fr ;
}
.tool-description h1 {
    text-align : center ;
    font-size : 3em ;
}
.tool-description p {
    font-size : 1em ;
    text-align : center ;
}
a.visit-website {
    padding : 5px 0 ;
}
.buttons-container > button {
    padding : 5px 0 ;
}
}
@media only screen and (max-width : 420px) {
.portfolio-imgs-container {
    width : 300px;
    height : 180px ;
}
}
@media only screen and (max-width : 310px) {
    .portfolio-imgs-container {
        width : 250px;
        height : 140px;
    }
}
</style>