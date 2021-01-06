<template>
  <div id="commonquestion">
      <div class="container">
          <div class="header" data-aos="fade-right"  data-aos-offset="300" data-aos-duration="1200">
              <h1><span class="dark-blue">سوالات متداول </span> <span class="blue">طراحی سایت</span></h1>
          </div>
          <div class="body" data-aos="fade-left"  data-aos-offset="300" data-aos-duration="1200">
              <div class="img-container">
                  <img src="~/assets/FAQ.png" alt="faq picture">
              </div>
              <div class="questions-and-answers" v-if='questions'>
                  
                  
                  <div class="question-and-answer" v-for='questionandanwer of questions' >
                      <div class="question">
                         <div class="question-line-one">
                              <p> {{questionandanwer.question}} </p><div class="icon-container"> <font-awesome-icon class="icon" :icon='["fas","angle-left"]' /></div>
                         </div>
                        <div class="answer">
                        <p> 
                            {{questionandanwer.answer}}
                        </p>
                      </div>
                      </div>
                      
                  </div>
                  
                  
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'commonquestion',
    data() {
        return {
            questions : []
        }
    } ,
    async fetch() {
        await this.$axios.$get('/home/get-questions')
            .then(resp => {
                this.questions = resp
            }) ;
    }
}
</script>

<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    outline : none ;
    border : none ;
}
#commonquestion {
    background-image: url('~assets/background-wave-other-side.png');
    background-repeat: no-repeat;
    background-size: contain 100%;
    background-position:  center;
}

img {
    width : 100% ;
}
.container {
    margin-top : 150px;
    width : 90% ;
    margin-right : auto ;
    margin-left : auto ;
}
.header {
    text-align: center;
    margin-bottom : 20px;
}

.body {
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
.questions-and-answers {
    box-sizing: border-box;
    padding-top: 80px;
}
.question-line-one {
    display: grid;
    grid-template-columns: 3fr 1fr;
    color: #495D73;
    
}
.icon-container {
    font-size: 2em;
    opacity: .2;
    margin-top: -10px;
}
.question-and-answer {
    margin-bottom: 60px;
    
    
}
.img-container {
    box-sizing: border-box;
    padding : 20px 0 20px 30px  ;
}
.question {
    
    border-radius: 10px;
    background-color : white ;
    position: relative;
    box-sizing: border-box;
    padding : 15px 10px 10px 10px  ;
    cursor: pointer;
    box-shadow: 0 0 10px 6px #eee;
}
.answer {
    
    color: #8296A9;
    line-height: 1.7em;
    position: absolute;
    
   opacity: 0;
    height : 0 ;
    margin-top: 30px;
    
    
}
.question:hover .question-line-one{
    position: static;
        color : #2086EA ;
}
.question:hover .answer{
    height : auto;
   
     position: static;

    transition: all 2s;
    transform-origin: top left;
    opacity: 1;
     
}
.question:hover .icon-container {
        color : #2086EA ;
        opacity: 1;
    
}
.question:hover .icon {
    transform : rotate(-90deg);
    transition: all .5s;
}


@media only screen and (max-width : 1189px) {
    .question-line-one  {
        grid-template-columns: auto 30px;
    }
}
@media only screen and (max-width : 976px) {
   
    .container {
        width : 95% ;
    }
}
@media only screen and (max-width : 750px){
.body {
    grid-template-columns: 1fr;
    box-sizing: border-box;
}
.img-container img {
    margin-right: -70px;
}
.container {
    width  : 80%
}

}
@media only screen and (max-width : 550px){
    .container {
        width: 90%;
    }
    .img-container img {
    margin-right: -30px;
}
}

</style>