<template>
  <div id="feature">
     
      <div class="container">
          <div class="header">
              <div class="big-message">
                  <h1> <span class="dark-blue">خدمات</span> <span class="blue">تیم ما</span></h1>
              </div>
              <div class="litle-message">
                  <p>خدماتی که به مشتریان ارائه میدهیم</p>
              </div>
          </div>
          <div class="body">
              <div class="single-feature">
                  <div class="img-container">
                      <img src="~/assets/service-icon/auth.png" alt="">
                  </div>
                  <div class="single-feature-body">
                      <div class="single-feature-header">
                          <h3>طراحی سایت</h3>
                      </div>
                      <div class="single-feature-parag">
                          <p>لورم جان کجایی لورم از لورم به اینجا و آنجا و یه جای دیگه چی بگم والا متن باید طولانی و طویل بشه و من هم دارم همینکارو میکنم ای بابا هنوز طولانی نشده؟طولانیتتر ؟</p>
                      </div>
                  </div>
                  
              </div>
              <div class="single-feature">
                  <div class="img-container">
                      <img src="~/assets/service-icon/design.png" alt="">
                  </div>
                  <div class="single-feature-body">
                      <div class="single-feature-header">
                          <h3>طراحی رابط و تجربه کاربری</h3>
                      </div>
                      <div class="single-feature-parag">
                          <p>لورم جان کجایی لورم از لورم به اینجا و آنجا و یه جای دیگه چی بگم والا متن باید طولانی و طویل بشه و من هم دارم همینکارو میکنم ای بابا هنوز طولانی نشده؟طولانیتتر ؟</p>
                      </div>
                  </div>
                  
              </div>
              <div class="single-feature">
                  <div class="img-container">
                      <img src="~/assets/service-icon/fast.png" alt="">
                  </div>
                  <div class="single-feature-body">
                      <div class="single-feature-header">
                          <h3>سئو و بهینه سازی</h3>
                      </div>
                      <div class="single-feature-parag">
                          <p>لورم جان کجایی لورم از لورم به اینجا و آنجا و یه جای دیگه چی بگم والا متن باید طولانی و طویل بشه و من هم دارم همینکارو میکنم ای بابا هنوز طولانی نشده؟طولانیتتر ؟</p>
                      </div>
                  </div>
                  
              </div>
              <div class="single-feature">
                  <div class="img-container">
                      <img src="~/assets/service-icon/app.png" alt="">
                  </div>
                  <div class="single-feature-body">
                      <div class="single-feature-header">
                          <h3> اپلیکیشن موبایل</h3>
                      </div>
                      <div class="single-feature-parag">
                          <p>لورم جان کجایی لورم از لورم به اینجا و آنجا و یه جای دیگه چی بگم والا متن باید طولانی و طویل بشه و من هم دارم همینکارو میکنم ای بابا هنوز طولانی نشده؟طولانیتتر ؟</p>
                      </div>
                  </div>
                  
              </div>
              <div class="single-feature">
                  <div class="img-container">
                      <img src="~/assets/service-icon/creative.png" alt="">
                  </div>
                  <div class="single-feature-body">
                      <div class="single-feature-header">
                          <h3> طراحی و توسعه خلاقانه</h3>
                      </div>
                      <div class="single-feature-parag">
                          <p>لورم جان کجایی لورم از لورم به اینجا و آنجا و یه جای دیگه چی بگم والا متن باید طولانی و طویل بشه و من هم دارم همینکارو میکنم ای بابا هنوز طولانی نشده؟طولانیتتر ؟</p>
                      </div>
                  </div>
                  
              </div>
              <div class="single-feature">
                  <div class="img-container">
                      <img src="~/assets/service-icon/security.png" alt="">
                  </div>
                  <div class="single-feature-body">
                      <div class="single-feature-header">
                          <h3> امنیت بالا</h3>
                      </div>
                      <div class="single-feature-parag">
                          <p>لورم جان کجایی لورم از لورم به اینجا و آنجا و یه جای دیگه چی بگم والا متن باید طولانی و طویل بشه و من هم دارم همینکارو میکنم ای بابا هنوز طولانی نشده؟طولانیتتر ؟</p>
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
     
  </div>
</template>

<script>


export default {
    name : 'feature' ,
    data() {
        return {

        }
    } 
}
</script>

<style scoped>
#feature {
    background-color: #FEFEFE;
    background-image: url("~assets/background-wave.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left 350px;
    
}

.big-message {
    margin-top : 50px;
    margin-bottom: 20px;
}
.litle-message {
    
    color : #768DA4 ;
}
* {
    margin : 0 ;
    padding : 0 ; 
    text-decoration: none;
    border : none ;
}
.container {
    
}
.header {
    text-align: center;
}
.body {
    
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    padding: 100px 120px;
    display: grid;
    
    grid-template-columns: repeat(3,1fr);
    gap: 120px;
}
.img-container {
    box-shadow: 0 0 10px 3px #eee;
    background-color : white ;
    width :150px ;
   
    box-sizing: border-box;
    padding-top: 15px;
    margin-right : auto ;
    margin-left : auto ;
    border-radius: 50%;
    height: 130px;
    
}
img {
    width: 60%;
    display: block;
   margin: auto;
}
.single-feature-header {
    margin-top: 15px;
    margin-bottom: 10px;
    box-sizing: border-box;
    text-align : center ;
    color : #2185EA ;
}
.single-feature-parag {
    
    color: #869AAE;
    
    text-align: center;
}

@media only screen and (max-width:1040px) {
    .body {
        gap : 40px ;
        padding : 100px 40px ;
    }
}
@media only screen and (max-width:800px) {
    .body {
        grid-template-columns : repeat(2,1fr) ;
        gap : 20px ;
        padding : 100px 20px ;
    }
}
@media only screen and (max-width:500px) {
    .body {
        grid-template-columns : 1fr ;
        padding : 30px 30px ;
    }
    .img-container {
        width : 240px ;
        height : 200px;
    }
    h3 {
        font-size : 2em ;
    }
    .single-feature-header {
        margin-bottom : 30px;
        margin-top : 20px;
    }
    .single-feature {
        margin-bottom : 60px;
    }
}
</style>