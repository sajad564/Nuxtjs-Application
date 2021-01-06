<template>
    <div id="addmessagetoticket">
        <div class="container">
            <form @submit.prevent='sendData'>
                <div class="input-container">
                    <textarea name="" id="" cols="60" rows="5" v-model="message" placeholder="افزودن پیام.."></textarea>
                    <span class='error' v-if="error"> {{error}} </span>
                    <span class='ok' v-if="resp"> {{resp}} </span>
                    <button type="submit">ارسال</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name : 'addmessagetoticket' , 
    props : ['ticketId'] ,
    data() {
        return {
            message : '',
            resp : '' ,
            error : ''
        }
    } ,
    methods : {
        sendData() {
            
            if(this.validation()) {
                console.log('id is equal to : ' + this.ticketId)
                 this.$axios.$post("/ticket/add-message" , {
                    ticketid : this.ticketId , 
                    message : this.message
                })
                    .then(() => {
                        this.message = ''
                        this.resp = 'پیام شما ثبت شد'
                        this.error = ''
                    })
                        .catch(()=> {
                            this.error ='مثل اینکه مشکلی پیش اومده,لطفا بعدا امتحان کنید'
                        })
            }
        }  , 
        validation() {
            
            if(this.message) {
                this.error = ''
                return true ;
            }
            this.error = 'لطفا پیام خود را وارد نمایید'
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
    textarea {
        resize: none;
    }
    form {
        width : 300px;
        margin-right : auto ;
        margin-left : auto ;
        
    }
    .input-container > label {
        color : gray ;
    }
    textarea {
        display : block ;
        box-sizing : border-box ;
        margin-top : 10px;
        box-shadow: 0 0 10px 1px #eee ;
        padding : 10px ;
        width : 100% ;
        border-radius : 6px;
    }
    button {
        display : block ;
        background-color : green ;
        color : white ;
        width : 100px;
        padding : 5px ; 
        border-radius : 5px ;
        margin-top : 40px;
        cursor: pointer;
        transition : all .4s ;
        border : 1px solid green ;
        margin-right : auto ;
    }
    button:hover {
        background-color : white ;
        color : green ;
        border : 1px solid green ;
    }
</style>