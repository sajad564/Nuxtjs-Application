<template>
    <div id='managecommonquestion'>
        <div class="container">
        <div class="table" v-if="questions.length!=0" v-for="(question,index) of questions" :key="index">
            <div class='row'>
                <div>آیدی</div>
                <div> {{question.id}} </div>
            </div>
            <div class="row">
                <div>نمایش در صفحه ایندکس</div>
                <div >
                      <font-awesome-icon v-if="question.isInIndex" style="color : green; " :icon='["fas","check"]' />
                      <font-awesome-icon v-if="!question.isInIndex" style="color : red;" :icon='["fas","times"]' />
                </div>
            </div>
            <div class='row'>
                <div> سوال </div>
                <div> {{question.question}} </div>
            </div>
            <div class='row'>
                <div>پاسخ</div>
                <div class="answer" > 
                    <div>{{question.answer}} </div>
                    <div class='icons'>
                        <span class="delete" @click="showDeleteId=question.id"><font-awesome-icon :icon='["fas","trash-alt"]' title="حذف"/></span>
                        <span class='edit' @click='Edit(question)'><font-awesome-icon :icon='["fas","edit"]' title="ویرایش"/></span>
                    </div> 
                    <div class="confirm-delete" v-if="showDeleteId==question.id">
                        <p>آیا از حذف  سوال مد نظر اطمینان دارید؟</p>
                        <div class="buttons" 
                            <button @click="DeleteItem(question.id)" class='delete-button'>بله</button>
                            <button @click="showDeleteId=false" class="cancel-button">خیر</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="error" v-if="error">
            {{error}}
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'managecommonquestion' , 
    data() {
        return {
            questions : [] ,
            error : '',
            showDeleteId : ''
        }
    } , 
    methods : {
        DeleteItem(value) {
            console.log(value) ; 
        } ,
        Edit(data) {
            this.$router.push({name : 'panel-index-editfaq-question-answer-isInIndex-id' , params : {id : data.id , question : data.question , isInIndex : data.isInIndex , answer : data.answer}})
        }
    } ,
    async fetch() {
        await this.$axios.$get('/admin/get-common-questions')
            .then(resp => {
                
                this.questions = resp
            })
                .catch(() => {
                    this.error = 'در حال حاضر سوال متداولی ثبت نشده است'
                })
    }
}
</script>
<style scoped>
   * {
       margin : 0 ;
       padding :0 ;
       border : none ;
       outline : none ;
   }
   .table {
       width : 85% ;
       margin-bottom : 20px;
       margin-right : auto ;
       margin-left : auto ;
       display : grid ;
       grid-template-rows : 40px 40px 60px minmax(200px,auto) ;
       
       background-color : gray ;
   }
   .row {
       box-sizing : border-box ;
       padding-right : 10px;
       display : grid ;
       grid-template-columns : minmax(100px ,auto) auto ;
       border-bottom : 1px solid white ;
   }
   .row:nth-child(4) {
       padding-top :50px;
   }
   .row:nth-child(3) {
       padding-top :15px;
   }
   .row:nth-child(2) {
       padding-top :5px;
   }
    .row:nth-child(1) {
       padding-top :5px;
   }
    .icons {
        height : 10px;
    }
    .answer {
        position : relative;
    }
    .icons {
        font-size : 1.5em ;
        position : absolute ;
        bottom : 25px ;
        left : 15px ;
        display : grid ;
        grid-template-columns: repeat(2,1fr);
        gap : 20px;
        width : 70px;
    }
    span.edit {
        color : yellow ; 
    }
   
    span.delete {
        color : red ;
    }
    span {
        
        cursor : pointer ;
    }
    .confirm-delete {
        margin-top : 40px;
    }
    button {
        margin-right : 30px;
        cursor : pointer ;
        width : 60px;
        border-radius : 8px ;

    }
    .delete-button {
        background-color : red ;
    }
    .cancel-button {
        background-color : green ;
    }
</style>