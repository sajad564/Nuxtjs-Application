<template>
    <div id="editcommonquestion">
        <div class="container">
            <form @submit.prevent='Edit'>
                <div class="input-container">
                    <label for="question" >سوال</label>
                    <input type="text" id="question" v-model="faq.question">
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="index" v-model="faq.isInIndex">
                    <label for="index" >نمایش در صفحه ایندکس</label>
                </div>
                <div class="input-container">
                    <label for="answer" >پاسخ</label>
                    <textarea  id="" cols="30" rows="10" id="answer" v-model="faq.answer"></textarea>
                </div>
                <button type="submit">ویرایش</button>
            </form>
            <div class="error" v-if="error">
                {{error}}
            </div>
            <div class="message" v-if="message">
                {{message}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'editcommonquestion' , 
    
    data() {
        return {
            faq : {
                id : '' , 
                question : '' , 
                answer : '' , 
                isInIndex : ''
            }, 
            error : '' ,
            message : ''
        }
    } ,
    methods : {
        Edit() {
            if(this.faq.id && this.faq.question && this.faq.answer) {
                this.$axios.$post("/admin/edit-common-question" , this.faq)
                    .then(() => {
                        this.message ='اطلاعات با موفقیت ویرایش شد'
                        this.error =''
                        
                    })
                        .catch(() => {
                            this.message =''
                            this.error ='مثل اینکه مشکلی پیش اومده,لطفا بعدا امتحان کنید'
                        })
            }
        }
    } , 
    created() {
        console.log('this is id params : ' + this.$route.params.id)
        this.faq.id = this.$route.params.id
        this.faq.answer = this.$route.params.answer
        this.faq.question = this.$route.params.answer
        this.faq.isInIndex = this.$route.params.isInIndex
    }
}
</script>
<style scoped>
    * {
        margin : 0 ;
        padding : 0 ;
        border : none ;
    }
    .error {
        background-color : lightgray ;
        color : red ;
    } 
    .message {
        background-color : lightgray ;
        color : green ;
    }
    form {
        width : 500px;
        margin-right : auto ;
        margin-left : auto ;
    }
    .input-container {
        margin-top : 50px; 
    }
    input:not(#index),textarea {
        margin-top : 20px;
        width : 100% ;
        display : block ;
    }
    button {
        width : 100px;
        display : block ;
        box-sizing : border-box ;
        padding : 5px ;
        cursor : pointer ;
        border-radius : 12px ;
        background-color : green ;
        color : white ;
        margin-top : 30px;
        margin-right : auto ;
       
    }
    .checkbox-container {
        margin-top : 30px;
    }
</style>