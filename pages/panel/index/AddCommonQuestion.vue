<template>
<div id='addcommonquestion'>
    <div class='container'>
        <form @submit.prevent='formSubmit' >
            <div class='input-container'>
                <label for='question'>سوال</label>
                <input type='text' id='question' v-model='commonquestion.question' >
                <div class='error' v-if='errors.question'> {{errors.question}} </div>
            </div>
            <div class='input-container'>
                <label for='answer'>پاسخ</label>
                <input type='text' id='answer' v-model='commonquestion.answer' >
                <div class='error' v-if='errors.answer'> {{errors.answer}} </div>
            </div>
            <div class='ok' v-if='result'> {{result}} </div>
            <button type='submit' > ذخیره </button>
        </form>
    </div>
</div>
</template>
<script>
export default {
    name : 'addcommonquestion' ,
    data() {
        return {
            result : '' ,
            commonquestion : {
                question : '' ,
                answer : ''
            } ,
            errors : {
                question : '' ,
                answer : '' ,
                other : ''
            }
        }
    } ,
    methods : {
        formSubmit() {
            if(this.errorHandler()) {
                this.sendData() ;
            }
        },
        errorHandler() {
            if(this.commonquestion.question) {
                this.errors.question ='' ;
            }
            else {
                this.errors.question = 'لطفا متن سوال خود را وارد کنید'
            }
             if(this.commonquestion.answer) {
                this.errors.answer ='' ;
            }
            else {
                this.errors.answer = 'لطفا متن پاسخ را وارد کنید'
            }
            if(this.commonquestion.question && this.commonquestion.answer) {
                return true ;
            }
            return false ;

        },
        sendData() {
            this.$axios.$post('/admin/add-question',this.commonquestion)
                .then(resp => {
                    this.result = "اطلاعات با موفقیت ذخیره شده" ;
                    this.commonquestion.question = '' ;
                    this.commonquestion.answer = '' ;
                })
                    .catch(err => {
                        this.errors.other = "مشکلی پیش آمده است ,لطفا مشکل خود را با توسعه دهنده به اشتراک بگذارید"
                    })
        }
    }
}
</script>
<style scoped>
.error {
    color : red ;
}
.ok {
    color : green ;
}
</style>