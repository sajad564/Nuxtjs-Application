<template>
    <div class="full-container">
        <div class="faq-header-container">
        <div class="faq-area">
            <div class="header">
                <h2>سوالات متداول</h2>
                <p>در این قسمت میتوانید سوالات احتمالی خود را به لورم برسرسانید</p>
            </div>
            
            <div class="faq-area-curve">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 C 50 100 50 100 100 0 Z"></path>
                </svg>
            </div>
        </div>
        <div class="curve">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 C 50 100 50 100 100 0 Z"></path>
              </svg>
        </div>
    </div>
    <div class="single-faq-container" v-for="question of questions">
        <div class="single-faq" >
                <div class="question">
                    <h4>{{question.question}}</h4>
                    <span class='arrow-icon'><font-awesome-icon :class="{'rotate-angle' : showQuestionId==question.id}" class='left-angle'  :icon='["fas","angle-left"]' @click="showQuestionMethod(question.id)" /></span>
                </div>
                <div class="white-space">

                </div>
                <div class="full-faq" :class="{'dropdown' : showQuestionId==question.id}">
                    <div class="question-in-full">
                        <h3>{{question.question}}</h3>
                        <span class='arrow-icon'><font-awesome-icon  :icon='["fas","angle-up"]' @click="showQuestionMethod(question.id)" /></span>
                    </div>
                    <div class="answer">
                        <p>  {{question.answer}} </p>
                    </div>
                </div>
            </div>
           
    </div>
    </div>
</template>
<script>
export default {
    name : 'faq' , 
    data() {
        return {
            showQuestionId : ''  , 
            questions : []
        }
    } ,
    methods : {
        showQuestionMethod(id) {
            if(this.showQuestionId==id) {
                this.showQuestionId = ''
            }
            else {
                this.showQuestionId = id
            }
        }
    }  ,
    async fetch() {
        await this.$axios.$get('home/get-all-questions')
            .then(resp => {
                this.questions = resp
            })
    }
}
</script>
<style scoped>
    * {
        margin : 0 ;
        padding : 0 ;
        border : none ;
    }
    .full-container {
        margin-top : 90vh;
        
       background-color : #E7E6EA ; 
    }
    .faq-header-container {
        fill :#483B9E ; 
        margin-bottom : 100px;
       padding :  150px 100px 0 100px ;
        
        background-color : #483B9E ; 
        position : relative ;
    }
    .curve {
        width : 100% ;
        right : 0 ;
        
        position : absolute ;
        top : 100% ;
        
    }
  .curve svg {
        height : 100px ;
        width : 100% ;
        fill : inherit ; 
         z-index : -1
    }
    .faq-area {
        border-radius : 4px ;
        box-shadow : 0 0 5px 1px #553BE8 ;
        transform : translateY(3%);
        position : relative ;
        fill : #553BE8 ;
        background-color : #553BE8 ;
        z-index : 3 ;
    }
    .faq-area-curve {
        position : absolute ;
        
        top : 100% ;
        width : 100% ;
    }
    .faq-area-curve svg {
        fill : inherit ;
        width : 100% ;
        height : 100px ;
       
    }
    .header {
        overflow: hidden;
        position : relative ;
        color : white ;
        box-sizing : border-box ;
        padding-top : 200px;
        text-align : center ;
        height : 500px;
    }
    .header:before {
        content : '' ; 
        position : absolute ;
        width : 100% ;
        height : 1000px ;
        opacity : .2 ; 
        border-top : 1px solid white ;
        border-radius : 50% ;
        right : 50% ;
        top : 120px;
        transform : translateX(50%)
    }
    .header:after {
        content : '' ; 
        position : absolute ;
        width : 70% ;
        height : 700px ;
        opacity : .2 ; 
        border-top : .5px solid white ;
        border-radius : 50% ;
        right : 50% ;
        top : 250px;
        transform : translateX(50%)
    }
    .header h2 {
        margin-bottom : 30px;
    }
    .arrow-icon {
        
        font-size : 30px;
        color : gray ; 
        opacity : .7 ; 
        text-align : center ;

    }
    .arrow-icon > * {
        cursor : pointer ;
    }
    .header p {
        color : lightgray ;
        opacity : .5 ;
    }
    
    .single-faq {
        overflow:visible;
        position : relative ;
        
        margin-right : auto ;
        margin-left : auto ;
        width : 700px ;
        margin-top : -90px;
        color : white ;
    }
    .question {
        box-sizing : border-box ;
        padding-top : 25px;
        display : grid ;
        grid-template-columns : 4fr 1fr ;
        padding-right : 20px;
        color : #999 ;
        
        border-radius : 10px ;
        box-shadow : 0 0 10px 1px rgba(136, 136, 136,.2) ;
        position : absolute ;
        z-index : 5 ;
        text-align : right  ; 
        background-color : white ;
        height : 80px ;
        width : 100% ;
    }
    .full-faq {
        box-shadow : 0 0 10px 1px rgba(136, 136, 136,.2) ;
        height : 0;
        opacity: 0;
        transition: height .5s  , opacity 2s;
        overflow: hidden;
        background-color : white ;
        border-radius : 10px;
    }
    .dropdown {
        opacity: 1;
        height : 250px;
    }
    .rotate-angle {
        transform : rotate(-90deg)
    }
    .left-angle {
        transition : all .5s ;
    }
    .single-faq-container {
        margin-top : -80px;
        margin-right : 100px;
        margin-left : 100px ;
        padding-bottom : 140px;
        background-color : #F8F8F9 ;
    }
    .white-space {
        height : 100px;
        margin : 0 70px;
        color : white ;
    }
    .question-in-full {
        position : relative;
        color : #7967E1 ; 
        display : grid ;
        grid-template-columns : 4fr 1fr ;
        padding : 20px 40px 20px 0 ;
    }
    .question-in-full::before {
        content : '' ; 
        position : absolute ;
        bottom :  10px ;
        right : 50% ; 
        width : 90% ;
        background-color : lightgray ; 
        height : 1px;
        opacity: .6;
        transform: translateX(50%);
    }
    .answer {
        box-sizing : border-box ;
        padding : 0 40px ;
        color : #999 ;
    }
    @media only screen and (max-width : 1100px) {
        .faq-header-container {
            padding-top : 70px;
        }
        .header {
            height : 300px;
            padding-top : 90px;
        }
        .header::before {
            height : 700px;
        }
        .header::after {
            height : 400px;
        }
        .faq-area {
            transform: translateY(6%);
        }
        .single-faq {
           margin-top : -80px;
           width : 80%;
        }
       
    }
    @media only screen and (max-width : 950px) {
        .header {
            height : 200px;
        }
        .faq-area {
            transform: translateY(10%);
        }
    }
        @media only screen and (max-width : 800px)  {
            .faq-header-container{
                padding-right : 50px;
                padding-left : 50px;
                padding-top : 40px;
            }
            .faq-area {
            transform: translateY(5%);
            }
            .single-faq-container {
                margin-top : -90px;
                margin-right : 50px;
                margin-left : 50px;
            }
        }
        @media only screen and (max-width : 700px)  {
            .faq-area {
                transform : translateY(7%)
            }
            .header {
                padding-top : 50px;
            }
        }
</style>