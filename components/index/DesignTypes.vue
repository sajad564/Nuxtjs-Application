<template>
  <div id="designtypes">
      <div class="container" v-if="services.length!=0">
          <div class="header">
              <h1><span class='dark-blue'>انواع طراحی </span> <span class='blue'> و تعرفه ها</span></h1>
              <p>برای ثبت سفارش و مشاوره رایگان با ما در ارتباط باشید</p>
          </div>
          <div class="types">
              <div class="wordppress type">
                  <div class="img-icon-container">
                      <img src='~/assets/wordpress-design.png'>
                  </div>
                  <h2 > {{services[0].serviceName}}</h2>
                  <div class="price">از {{services[0].price}} تومان</div>
                  <div class="options">
                      <div class="option" v-for='feature of services[0].features'> {{feature}} </div>
                      
                  </div>
                  <button class="contact">تماس بگیرید</button>
              </div>
              <div class="custom type">
                  <div class="img-icon-container">
                      <img src='~/assets/custom-web-design.png'>
                  </div>
                    <h2>{{services[1].serviceName}}</h2>
                    <div class="price">از {{services[1].price}} تومان</div>
                    <div class="options">
                      <div class="option" v-for='feature of services[1].features'> {{feature}} </div>
                      
                  </div>
                        <button class="contact">تماس بگیرید</button>
              </div>
              <div class="app type">
                  <div class="img-icon-container">
                     <img src='~/assets/application-design.png'>
                  </div>
                  <h2>{{services[2].serviceName}}</h2>
                    <div class="price">از {{services[2].price}} تومان</div>
                    <div class="options">
                      <div class="option" v-for='feature of services[2].features'> {{feature}} </div>
                      
                  </div>
                        <button class="contact">تماس بگیرید</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'designtypes',
    data() {
        return {
            services : []
        }
    } ,
    async fetchetch() {
        await this.$axios.$get('/services/get-services-for-index')
            .then(resp => {
                console.log(resp)
                this.services = resp.data
               
            })
    }
}
</script>

<style scoped>
* {
    margin : 0 ;
    padding : 0; 
    border: none;
}
#designtypes {
    background-color : #FEFEFE ;
    background-image: url("~assets/background-wave.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.container {
    
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-top : 100px ;
    margin-bottom: 30px;
}
.header {
    text-align: center;
    margin-bottom: 70px;
}
.header p {
    color: #7088A0;
}
.icon {
    font-size: 40px;
}
.header h1 {
    margin-bottom: 20px;
}
.types
{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
}
button {
    position : absolute ;
    bottom : 10px;
    right : 50% ;
    transform : translateX(50%) ;
    margin-right : auto ;
    margin-left : auto ;
    
}
.type {
    position : relative ;
    border-radius: 10px;
    text-align: center;
    padding: 40px 0;
}
.img-icon-container {
    width : 100px;
    height : 100px;
    margin-right : auto ;
    margin-left : auto ;
}
.img-icon-container img {
    width : 100% ;
    height : 100% ;
}
.type h2 {
    
    box-sizing: border-box;
    padding-bottom: 20px;
    margin : 15px 20px ;
    
}
.price {
    margin : 30px auto;
    font-size : 28px;
    font-weight : 600 ;
    padding-bottom : 20px;
    position : relative ;
}
.price::before {
    content: '';
    position : absolute ;
    width : 80% ;
    right : 10% ;
    left : 10% ;
    height : .6px ;
    bottom : 0 ;
    background-color : #EAF2FF ; 
    opacity : .5 ;
}
.options {
    box-sizing: border-box;
    padding : 10px;
    margin-bottom : 30px ;
    line-height: 2em;
    
}
.type {
    background-color :   white;
    color : #2086EA ;
    box-shadow: 0 0 5px 1px #eee;
    
}
button {
    cursor: pointer;
    border : 2px solid #2086EA ;
    width: 200px;
    height : 50px;
    box-sizing: border-box;
    font-weight : bold ;
    font-size : 18px;
    padding : 6px ; 
    color : #2086EA ;
    border-radius: 20px;
    background-color : white ;
    margin-bottom: 15px;
    margin-top : 20px;
}

.custom {
    box-shadow: 0 0 20px 3px #2086EA;
    color : white ;
    background-color : #2086EA ; 
}

@media only screen and (max-width:1080px) {
    .types {
        grid-template-columns: 1fr;
    }
}

</style>