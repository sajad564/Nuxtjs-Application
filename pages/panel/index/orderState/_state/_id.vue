<template>
    <div id='orderstate'>
        <div class='container'>
        {{id}}
        {{state}}
            <form @submit.prevent='changeState'>
                <select v-model='state'>
                    <option value='0'> در انتظار بررسی </option>
                    <option value='1'> در حال بررسی </option>
                    <option value='2'> در انتظار پرداخت </option>
                    <option value='3'>   پرداخت شده </option>
                    <option value='4'>  اتمام فرایند سفارش </option>
                </select>
                <div class='message-box'>
                    <div class='error' v-if='error'>
                    {{error}}
                    </div>
                    <div class='ok' v-if='message'>
                        {{message}}
                    </div>
                </div>
                <button type='submit' >تغییر</button>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'orderstate' , 
        data() {
            return {
                id : this.$route.params.id ,
                state : this.$route.params.state , 
                message : '' , 
                error : ''
            }
        } ,
        methods : {
            changeState() {
                this.$axios.$post('/admin/change-state' , {
                    id : this.id , 
                    state : this.state
                })
                    .then(() => {
                        this.message = 'وضعیت تغییر یافت'
                    })
                        .catch(() => {
                            this.error = 'مثل اینکه مشکلی پیش اومده,عدم تغییر وضعیت'
                        })
            }
        } 
    }
</script>
<style scoped>
    * {
        margin : 0 ;
        padding : 0 ;
        border : none ;
        outline : none;
    }
    form {
        margin-top : 100px;
        width : 300px;
        margin-right : auto ;
        margin-left : auto ;
    }
    button {
        background-color : green ;
        box-sizing : border-box ;
        padding : 8px  ; 
        color : white ;
        width : 150px;
        border-radius : 12px;
        border : 1px solid green ;
        cursor : pointer ;
        transition : all .4s ;
        margin-top : 50px;
    }
    button:hover {
        background-color : white ;
        color : green ;
    }
    .message-box {
        background-color : lightgray ;
    }
    .ok {
        color : green ;
    }
    .error {
        color : red ;
    }
</style>