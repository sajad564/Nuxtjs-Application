<template>
  <div id="footer">
      <div class="container">
          <div class="line-one">
              <div class="part-one links">
                  <div class="link">
                     <NuxtLink to='/contact'>  ارتباط با ما</NuxtLink>
                  </div>
                  <div class="link">
                    <NuxtLink to='/aboutus'>  درباره ما</NuxtLink>
                  </div>
                  <div class="link">
                    <NuxtLink to='/services'> خدمات </NuxtLink>
                  </div>
                  <div class="link">
                       <NuxtLink to='/faq'> سوالات متداول </NuxtLink>
                  </div>
              </div>
              <div class="part-two">
                  <div class="contact">
                      <p>09227640583 <span class="phone-icon"><font-awesome-icon :icon='["fas","phone"]' /></span></p>
                  </div>
              </div>
          </div>
          <div class="line-two">
              <div class="part-one icons">
                  <div class="icon instagram">
                      <font-awesome-icon :icon='["fab","instagram"]' />
                  </div>
                  <div class="icon facebook">
                      <font-awesome-icon :icon='["fab","facebook"]' />
                  </div>
                  <div class="twitter icon">
                      <font-awesome-icon :icon='["fab","twitter"]' />
                  </div>
                  </div>
                  <div class="part-two license">
                      <p class="license-message">کلیه حقوق معنوی این وبسایت متعلق به ماست</p>
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
    text-decoration: none;
    border : none ;
    color : white ;
}
div.container {
    background-color : #0867D1 ;
    
    padding : 15px 40px ;
}
div.line-one {
    
    padding-bottom: 20px;
    border-bottom: 2px solid #1360D9;
    display: grid;
   
    grid-template-columns: repeat(2,1fr);
}
div.line-two {
    padding-top : 10px;
}
div.line-one > div.part-one {
    gap: 15px;
    box-sizing: border-box;
    padding-right: 150px;
    margin-right : auto ;
    margin-left : auto ;
}

div.line-one > div.part-two {
    text-align: left;
}


div.line-two {
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
.part-one {
    display: grid ;
    
}
.icons {
    justify-content: center;
    
    grid-template-columns: repeat(3,50px);
}
.links {
    grid-template-columns: repeat(4,120px);
}
div.license {
    text-align: left;
}
.icon  {
    cursor: pointer;
}
@media only screen and (max-width:1180px) {
    div.line-one > div.part-one {
        padding-right: 0;
    }
}
    @media only screen and (max-width:850px) {
  .link {
      font-size: 14px;
  }
}
@media only screen and (max-width : 800px) {
    *{
        font-size: 18px;
    }
    div.line-one {
        grid-template-columns: 1fr;
    }
    .part-one {
        grid-template-columns: 1fr;
    }
    .line-one p {
        padding : 40px 0;
        text-align: center;
    }
    .link {
        padding : 40px 0 ;
    }
    span.phone-icon {
        padding : 20px 0 ;
        font-size: 30px !important;
        display: block;
    }
    div.line-two {
        grid-template-columns: 1fr;
    }
    p.license-message,div.icon {
        padding : 20px 0 ;
        text-align: center;
    }
    a {
        display: block;
        width: 100%;
        text-align: center;
    }
    div.line-one > div.part-one {
        margin : 0 ;
    }
  
}
</style>