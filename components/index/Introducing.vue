<template>
  <div id="introducing">
      <div class="container">
          <div class="header" data-aos="fade-up"  data-aos-offset="200" data-aos-duration="1000">
              <h2> <span class="dark-blue">معرفی</span> <span class="blue">تیم ما</span></h2>
            <p>برای ثبت سفارش و مشاوره رایگان با ما در ارتباط باشید</p>
          </div>
          <div class="body" >
              <div class="video-container">
                  <img src="~/assets/videopic.png" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name : 'inroducing',
data() {
    return {

    }
} ,

}
</script>

<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border : none ;
    text-align: center;
}
#introducing{
    background-image : url('~assets/background-wave-other-side.png');
    background-repeat : no-repeat ; 
    background-size: contain;
    background-position : center ;
}
.container {
    margin-top : 50px ;
    width: 70%;
    margin-right : auto ;
    margin-left : auto ;
    
}

img {
    width: 100%;
}
.body  {
    
}
.video-container {
    margin-top : 30px ;
}
h2 {
    margin-bottom : 20px ;
}
.header p {
    color : #8FA0B3 ;
}
@media only screen and (max-width : 550px) {
    .container {
        width : 85% ;
    }
}
</style>