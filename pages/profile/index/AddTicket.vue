<template>
    <div id="addticket">
        <div class="container">
            <form @submit.prevent='sendData'>
                <div class="input-container">
                    <label for="title">عنوان</label>
                    <input type="text" id="title" v-model="ticket.title">
                </div>
                <div class="input-container">
                    <label for="description">توضیحات</label>
                    <textarea name="" id="" cols="60" rows="5" v-model="ticket.description"></textarea>
                </div>
                <div class="select-container">
                    <label >اولویت</label>
                    <select v-model="ticket.importance">
                        <option value="">انتخاب کنید</option>
                        <option value="0">پایین</option>
                        <option value="1">متوسط</option>
                        <option value="2">بالا</option>
                        <option value="3">خیلی بالا</option>
                    </select>
                </div>
                <div class="errors">
                    <div class="error" v-if="errors.title"> {{errors.title}} </div>
                    <div v-if="errors.description" > {{errors.description}} </div>
                    <div v-if="errors.importance" > {{errors.importance}} </div>
                </div>
                <div class="message" v-if="message"> {{message}} </div>
                <button type="submit">ارسال</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name : 'addticket' , 
    data() {
        return {
            ticket :{
                title : '' , 
                description : '' , 
                importance : ''
            } , 
            errors : {
                title : '' , 
                description : ''  ,
                importance : '' , 
                other : '' // come from backend status code 
            } , 
            message : ''
        }
    } , 
    methods : {
        sendData() {
            if(this.validation()) {
                console.log(this.ticket.title)
                this.$axios.post("/ticket/add-ticket" , this.ticket)
                    .then(resp => {
                        this.ticket.title = '' 
                        this.ticket.description = ''
                        this.message = 'پیامت ثبت شد و به زودی بررسی میشه'
                        this.errors.other = '' 
                        this.errors.title = ''
                        this.errors.description = ''
                        this.errros.importance = ''
                    })
                        .catch(() => {
                            this.errors.other = 'مثل اینکه یه مشکل کوچولو موچولو تو سرور رخ داده , اگه حوصلشو داری بعدا امتحان کن'

                        })
            }
        } , 
        validation() {
            if(this.ticket.title) {
                this.errors.title = ''
            }
            else {
                this.errors.title = 'لطفا یک عنوان وارد کنید'
            }
            if(this.ticket.description) {
                this.errors.description = ''
            }
            else {
                this.errors.description = 'لطفا توضیحات را وارد نمایید'
            }
            if(this.ticket.importance) {
                this.errors.importance = ''
            }
            else {
                this.errors.importance = 'لطفا میزان اهمیت تیکت را مشخص نمایید'
            }
            if(this.ticket.title &&  this.ticket.description &&  this.ticket.importance ) {
                return true ;
            }
            return false ;
        }
    }
}
</script>
<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border : none ;
    outline : none ;
}
input {
    box-shadow: 0 0 10px 5px lightgray;
    display : block ;
    border-radius: 5px;
    margin-top : 10px;
    margin-bottom : 20px;
}
textarea {
    margin-top : 10px;
    display: block;
    border-radius : 5px;
    box-shadow: 0 0 10px 5px lightgray;
}
form {
    width : 400px;
}
button {
    display : block ;
    margin-right : auto ;
    width : 100px;
    border-radius : 10px ;
    background-color : green ; 
    color : white ;
    padding : 5px;
    cursor : pointer ;
}
</style>