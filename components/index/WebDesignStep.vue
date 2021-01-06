<template>
    <div id="webdesignstep">
        <div class="container">
            <div class="text-side">
                <div class="header">
                    <h1>مراحل طراحی سایت و اپلیکیشن</h1>
                    <p>طراحی سایت و اپلیکیشن گوگولی مگولی و زیبا و خوشگل و  باحال خدایی دیگه نمیدونم چی باید بگم یگنمیدونم چی باید بگم یگنمی دو سه یک دو سه بای</p>
                </div>
                <div class="count">
                    <div class="succeeded-projects">
                        <span class='number'>20+</span>
                        <span>در دست طراحی</span>
                    </div>
                    <div class="ended-projects">
                        <span class='number'>43+</span>
                        <span>در دست طراحی</span>
                    </div>
                    <div class="under-development">
                        <span class='number'>18+</span>
                        <span>در دست طراحی</span>
                    </div>
                </div>
            </div>
            <div class="chart-side">
                <div class='points'>
                    <div class="point"> <span class='bullet'> </span> </div>
                    <div class="point"> <span class='bullet'> </span> </div>
                    <div class="point"> <span class='bullet'> </span> </div>
                    <div class="point"> <span class='bullet'> </span> </div>
                    <div class="point end"> <span class='bullet'> </span> </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
* {
    margin : 0 ;
    padding : 0 ;
}
    .container {
        padding : 20px 40px 20px 0 ;
        
        background-color :  #2086EA ;
        display : grid ;
        gap : 40px;
        color : white ;
        grid-template-columns : 2fr 3fr ; 
    }
   .header {
       margin-bottom :30px;
   }
    .header h1 {
        margin-bottom : 30px;
    }
    .header p {
        opacity : .8 ; 
    }
    .count {
        margin-top : 20px ;
        display : grid ;
        grid-template-columns : repeat(3,1fr) ;
    }
    .count > div > span {
        display : block ;
        margin-bottom : 15px;
    }
    .count>div > span:nth-child(1) {
        font-size : 2em ;
    }
    .chart-side {
        margin-top :40px;
    }
    .points {
        box-sizing : border-box ;

        padding-top : 60px;
        padding-right : 30px;
        padding-left : 30px;
        display : grid ;
        grid-template-columns : repeat(5,1fr) ; 
        position : relative ;
    }
    .points::before {
        content : '' ; 
        width : 100% ;
        height : .5px ;
        background-color : white ;
        top : 76px ;
        position : absolute ;
        opacity: .5;
    }
    .point {
        cursor : pointer ;
        box-sizing : border-box;
        padding : 10px;
        width : 30px ;
        height : 30px;
        
        border-radius : 50% ;
        border : 1px solid white ;
        position : relative ;
    }
    .point::before {
        position : absolute ;
        content : ''  ;
        width : 140% ;
        
        height  : 140% ;
        border-radius : 50% ;
        border : 1px solid white ;
        top : 50% ;
        right : 50% ;
        transform : translate(50%,-50%) ; 
    }
.point:nth-child(2n+1):after {
    content : '' ; 
    position: absolute;
    background-color : white ;
    right : 50% ; 
    transform : translateX(50%) ; 
    height : 80px;
    width : .5px
}
.point:nth-child(2n):after {
    content : '' ; 
    position: absolute;
    background-color : white ;
    right : 50% ; 
    bottom : 50% ;
    transform : translateX(50%) ; 
    height : 80px;
    width : .5px
} 

    
    span.bullet { 
        display : block ;
        width : 10px;
        height : 10px;
        border-radius : 50% ;
        background-color : white ;
    }
   div.point:nth-child(2n) .bullet::after {
        content : '' ;
        position : absolute ; 
        font-size: .8em;
        bottom : 100px ; 
        width : 100px;
        text-align : center ;
        right : 50% ; 
        transform : translateX(50%) ;
        height : 20px ;
       
    }
       div.point:nth-child(2n+1) .bullet::after {
        content : '' ;
        position : absolute ; 
        top : 100px ; 
        font-size : .8em ; 
        text-align : center ;
        width :140px;
        right : 50% ; 
        transform : translateX(50%) ;
        height : 20px ;
       
    }
    div.point:nth-child(1) .bullet::after {
        content : 'شروع';
    }
    div.point:nth-child(2) .bullet::after {
        content : 'فرایند طراحی';
    }
     div.point:nth-child(3) .bullet::after {
        content : 'فرایند تولید و نگهداری';
    }
      div.point:nth-child(4) .bullet::after {
        content : 'فرایند  چهار';
    
    }
     div.point:nth-child(5) .bullet::after {
        content : 'فرایند  آخر';
     }
     @media only screen and (max-width:1100px) {
         .container {
             grid-template-columns: 1fr;
             padding : 40px 0  ; 
         }
         .text-side {
             text-align : center ;
             width : 100% ;
             margin-right : auto ;
             margin-left : auto ;
         }
            .chart-side {
               
                margin-bottom : 100px;
                margin-top : 80px;
                width : 90%;
                margin-right : auto ;
                margin-left : auto ;
            }
            
            .point {
                margin-right : auto ;
                margin-left : auto ;
            }
     }
      @media only screen and (max-width:600px) {
          .chart-side {
              margin-top : 30px;
              width :100% ;
          }
          .points {
              padding-right : 0 ;
              
              padding-left : 0 ;
          }
          .point {
              margin-right :auto ;
              margin-left : auto ;
          }
         
      }
      @media only screen and (max-width:460px) {
          .header h1 {
              font-size : 18px ;
              margin-bottom : 10px;
          }
          .header p {
              font-size : 14px ;
              line-height: 1.7em ;
          }
      }
</style>