<template>
  <div id="indexcontact">
      <div class="container">
            <div class="header-container">
                <h1><span class="dark-blue">ارتباط</span> <span class="blue">با ما</span></h1>
                <p>برای ثبت سفارش و مشاوره رایگان با ما در ارتباط باشید</p>
            </div>
            <div class="form-container">
                <form >
                    <div class="input-container">
                        <input type="text" placeholder="طراحی سایت">
                    </div>
                    <div class="input-container">
                        <input type="text" placeholder="شماره تلفن">
                    </div>
                    <button type="submit">ثبت</button>
                </form>
            </div>
              <div class="map-section">
                  <img src="~/assets/Map.jpg" alt="">
                  <div class="icon">

                  </div>
                  <div class="map-message">
                      <h4>فرقی نداره کجا مستقر هستین,بهترین سایت رو براتون طراحی میکنیم</h4>
                    <p>سفارش آنلاین طراحی سایت و اپلیکیشن</p>
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
*{
    margin : 0 ;
    padding : 0 ;
    border: none;
    outline : none ; 
}
img {
    height : 200px;
    width: 100%;
}
.container {
    margin-top : 40px ;
}
.header-container {
    text-align: center;
}

.header-container h1 {
    margin-bottom: 30px;
}
.header-container p {
    color: #7088A0;
}
form {
    box-sizing: border-box;
    width: 500px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
}
.map-section {
    
    
    margin-top : 50px ;
    background-image: url('~assets/map.jpg');
   
}
.map-section >div {
    text-align: center;
}
.map-message {
    margin-top: -70px;
    width: 100%;
    bottom: 25%;
}
.map-message h4 {
    margin-bottom: 10px;
}
input,button {
    padding : 4px ;
    background-color: white ;
    padding :3px;
    border-radius: 12px;
    border : 1px solid #2086EA ;
}
input::placeholder,input {
    color : #2086EA ;
}
button {
    background-color: #2086EA;
    color : white ;
}
div.map-message h4 {
    color : #2086EA ; /*#65788C*/
}
div.map-message {
    color : #65788C ; 
}
@media only screen and (max-width : 800px) {
    img {
        height : 160px;
    }
}
@media only screen and (max-width : 600px) {
       img {
        height : 130px;
    }
    .map-message {
        margin-top : -55px;
    }
form {
    width : 90% ;
   
}

}
@media only screen and (max-width : 490px) {
   
    .map-message h4 {
        font-size : .7em ;
        margin-top : -120px ;
        margin-bottom : 50px ;
    }
form {
     grid-template-columns : 1fr ;
    
}
.input-container {
    width : 250px ;
    height : 25px ;
    margin-right : auto ;
    margin-left : auto ;
    margin-bottom : 50px ;
}
input {
    height : 100% ;
    width : 100% ;
}
button {
    width :200px ;
    margin-right : auto ;
    margin-left : auto ;
    padding : 8px 4px ;
    border-radius : 20px ;
    margin-top : 50px ;
}

}

/**#324E68 */
</style>