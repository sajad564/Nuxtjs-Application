<template>
    <div id="skillservices">
        <div class="container">
            <div class="web" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
            <div class="icon">
                <font-awesome-icon :icon='["far","gem"]'/>
            </div>
            <div class="message">
                <h3 class="title"> طراحی <span>وب سایت</span> </h3>
            <p>        از لورم به لورم.لورم جان اوضاع در چه وضعه؟خوب نیست لورم چن تا لورم تپل لورم کن واسم و اینکه خلاصه ولا بخدا سایت و اینجور داستانا و انجور داستانا و چن تا چیز دیگه
</p>
            </div>
        </div>
        <div class="webandapp" data-aos="fade-up" data-aos-offset="200" data-aos-duration="900">
            <div class="icon">
                <font-awesome-icon :icon='["far","gem"]' style="font-size:40px;"/>
            </div>
            <div class="message">
                <h3 class="title"> طراحی <span>وب سایت و اپلیکیشن</span> </h3>
             <p>                          از لورم به لورم.لورم جان اوضاع در چه وضعه؟خوب نیست لورم چن تا لورم تپل لورم کن واسم و اینکه خلاصه ولا بخدا سایت و اینجور داستانا و انجور داستانا و چن تا چیز دیگه

          </p>
               </div>
        </div>
        <div class="application" data-aos="fade-up"  data-aos-offset="200" data-aos-duration="1200">
        <div class="icon">
                <font-awesome-icon :icon='["far","gem"]' style="font-size:40px;"/>
            </div>
            <div class="message">
                <h3 class="title"> طراحی <span>اپلیکیشن</span> </h3>
                    <p>                          از لورم به لورم.لورم جان اوضاع در چه وضعه؟خوب نیست لورم چن تا لورم تپل لورم کن واسم و اینکه خلاصه ولا بخدا سایت و اینجور داستانا و انجور داستانا و چن تا چیز دیگه

           </p>
        </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border : none ; 
}
.container {
    display: grid;
    grid-gap: 100px;
    width: 90%;
    overflow: hidden;
    margin-top : 150px ;
    margin-right : auto ;
    margin-left : auto ;
    grid-template-columns: repeat(3,1fr);
}
.container > div {
    border-radius: 2px;
    box-sizing: border-box;
    padding : 10px;
}
.icon {
    font-size: 2em;
    text-align: center;
    margin-bottom : 30px;
    font-weight: lighter;
    color: #2286eb;
}
h3 {
    color : #344F68 ; 
}
h3 > span {
    color: #2286eb;
}
.message {
    box-sizing: border-box;
    padding : 10px ;
    text-align: center;
}
.message > h3 {
    margin-bottom: 20px;
}
.message > p {
    color : #A9B6C5
}
div.webandapp {
    box-shadow: 0 0 20px #ddd;
    border-radius: 10px;
    background-color: white !important;
    color : white 
}
@media only screen and (max-width :1170px) {
    .container {
        grid-gap: 40px;
        width : 95% ;
    }
    
    
}
@media only screen and (max-width:975px) {
    .container {
        grid-gap: 10px;
        
    }
    .message{
        padding : 0 ;
    }
}
@media only screen and (max-width:850px) {
    .container {
        margin-top : 50px ;
        grid-template-columns: 1fr;
        width : 400px ;
    }
    .container > div {
        margin-top : 60px ;
        line-height: 1.7em;
    }
    .message {
        padding : 20px; 
    }


}
@media only screen and (max-width: 500px) {
    .container {
        width: 80%;
        
    }
}
</style>