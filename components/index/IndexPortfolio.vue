<template>
    <div id='indexportfolio'>
        <div class='container'>
            <div class='header'>
                <h1>  <span class='dark-blue'>نمونه</span> <span class='blue'>کارها</span> </h1>
            <div>
            <div class='body' v-bind:class='{"onelevelright":sort==2,"tolevelright":sort==1,"onelevelleft":sort==4,"default":sort==3}' >
                <div class='portfolio' >
                    <div class='img-container' v-bind:class='{"main-3" : sort==3 || sort==4 , "main-2" : sort==2, "main" : sort==1}'>
                        <img src='~/assets/portfolio.jpg' >
                    </div>
                </div>
                <div class='portfolio' >
                    <div class='img-container' v-bind:class='{"main-2" : sort==3 || sort==4, "main" : sort==2,"main-1" : sort==1,}'>
                        <img src='~/assets/portfolio.jpg' >
                    </div>
                </div>
                <div class='portfolio' v-bind:class='{"main" : sort==3 , "main-2" : sort==2 || sort==1,"main-1" : sort==4}'>
                    <div class='img-container'>
                        <img src='~/assets/portfolio.jpg' >
                    </div>
                </div>
                <div class='portfolio' v-bind:class='{"main-2" : sort==3 , "main-3":sort==2 || sort==1,"main" : sort==4}'>
                    <div class='img-container'>
                        <img src='~/assets/portfolio.jpg' >
                    </div>
                </div>
                
            </div>
            <div class='button-container'>
                <button @click='sort=1' v-bind:class='{"selected-bullet" : sort==1}' ></button>
                <button @click='sort=2' v-bind:class='{"selected-bullet" : sort==2}' ></button>
                <button @click='sort=3' v-bind:class='{"selected-bullet" : sort==3}' ></button>
                <button @click='sort=4' v-bind:class='{"selected-bullet" : sort==4}' ></button>
                
            
            </div>
            
        </div>
    </div>
    </div>
    </div>
</template>
<script>
    export default {
        name : 'indexportfolio' ,
        data() {
            return {
                sort : 3 
            }
        }
    }
</script>
<style scoped>
    *{
        margin : 0 ;
        padding : 0 ;
        border : none ;
        outline : none ;
        transition : all .5s ;
    }
    .container {
        margin-top : 100px ;
        overflow : hidden ;
    }
    .header {
        text-align : center ;
    }

    .body {
        margin-top : 100px ;
    }
    img {
        width : 100%;
    }
    .body {
        
        width : 95% ;
        margin-right : auto ;
        margin-left : auto ;
        display : flex ;
    }
  

    
 
    .button-container {
        z-index : 10 ;
        margin-top : 80px ;
        height : 10px ;
        width : 180px ;
        display : grid ;
        margin-right : auto ;
        margin-left : auto ;
        grid-template-columns : repeat(5,1fr) ;
        gap : 30px ;
    }
    
    .button-container > button {
        display : block ;
        cursor : pointer ;
        border-radius : 50% ;
        background-color : #BCCCDB ;
    }
    .selected-bullet {
        background-color : #2086EA !important;
    }
    
    .onelevelright {
        transform : translateX(-15%);
    }
      .tolevelright {
        transform : translateX(-35%);
    }
    .onelevelleft {
        transform : translateX(35%);
    }
    .onelevelright > div:nth-child(2) {
        z-index :3 ; 
        
        
    }
    .onelevelleft > div:nth-child(1) {
        transform : translateX(-150%)  ;
        opacity : .5
    }
    .onelevelleft > div:nth-child(2) {
        transform : translateX(-80%) scale(1.2)  ;
    }
    .onelevelleft > div:nth-child(4) {
        z-index : 3 ;
        transform : scale(1.6) ;
    } 
    .onelevelleft > div:nth-child(3) {
        transform : translateX(-30%)  scale(1.4) ;
    }
    .onelevelright >div:nth-child(2) {
        transform : scale(1.6)
    }
    
    .onelevelright >div:nth-child(3) {
        transform : scale(1.3) translateX(40%) ;
    }
    .onelevelright >div:nth-child(1) {
        transform : scale(1.3) translateX(-40%)
    }
    .onelevelright >div:nth-child(4) {
        opacity : .5 ;
        z-index : -3 ;
        transform : translateX(100%)
    }
   
    .default {
        transform : translateX(10%)
    }
    .default > div:nth-child(2) {
        transform : scale(1.3) translateX(-40%);
    }
    .default > div:nth-child(4) {
        transform : scale(1.3) translateX(40%);
    }
    .default > div:nth-child(1) {
      transform :translateX(-100%) ;
  }
   .default > div:nth-child(3) {
      transform : scale(1.6) ;
      z-index : 3 ;
  }
  .tolevelright > div:nth-child(1) {
      transform : scale(1.6) ;
      z-index : 3 ;
  }
    .tolevelright > div:nth-child(2) {
      transform : scale(1.4) translateX(30%) ;
      z-index : 2 ;
  }
     .tolevelright > div:nth-child(3) {
      transform : scale(1.2) translateX(80%) ;
      z-index : 1 ;
      
  }
  .tolevelright > div:nth-child(4)  {
      transform : translateX(140%) ;
  }
  

    .onelevelleft >div:nth-child(4) {
        transform : scale(1.6) ;
    }
   /*
    @media only screen and (max-width :1000px) {

        img {
            width : 120% ;
        }
        .body {
            transform : translateX(-5%) ;
        }
     
    }
    */
     @media only screen and (max-width :1000px) {
         img {
             width : 130% ;

         }
         .body {
             transform : translateX(10%) ;
         }
         .tolevelright{
             transform : translateX(-10%)
         }
         .onelevelright{
             transform : translateX(0)
         }
         .default {
        transform : translateX(15%)
    }
    .onelevelleft {
        transform : translateX(20%)
    }
     }
     @media only screen and (max-width :610px) {
        img {
            width : 160% ;
        }
    .onelevelleft {
        transform : translateX(32%) ;
    }
     }
</style>