<template>
    <div id='findorder'>
        <div class='container'>
        <div class='header'>
            <h1> پیگیری سفارش </h1>
            <p>برای پیگیری سفارش کد رهگیری را وارد کنید</p>
        </div>
            <form @submit.prevent='submitForm' >
                <div class='input-container'>
                    <input type='text' placeholder='کد رهگیری' v-model='trackingCode'>
                </div>
                <div class='error'>
                    <span>{{error}} </span>
                </div>
                <button  type='submit'> جستجو </button>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'findorder' , 
        data() {
            return {
                trackingCode : '' ,
                error : ''
            }
        } , 
        methods : {
            submitForm() {
                if(this.Validation()) {
                     this.$axios.$get('/order/tracking?trackingCode=' + this.trackingCode)
                        .then(resp => {
                            this.emmitToParent(resp.data)
                           
                        })
                            .catch(() => {
                                this.error = 'در حال حاضر چنین سفارشی وجود ندارد لطفا کد رهگیری خود را بررسی نمایید. '
                            })
                }
            } , 
            Validation() {
                if(!this.trackingCode) {
                    this.error = 'لطفا کد رهگیری خود را وارد کنید';
                    return false ;
                }
                else {
                    this.error = '' ;
                    return true ;
                }
            },
            emmitToParent(value) {
                this.$emit('dataCame', value)
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
    .container {
        height : 80vh ;
        margin-top : 150px;
        text-align : center ;
    }
    form {
        width : 300px ;
        margin-right : auto ;
        margin-left : auto ;
    }
    button {
        margin-top : 30px;
        width : 130px;
        padding : 10px 5px ;
        background-color : green ; 
        color : white ;
        font-weight : bold ;
        cursor : pointer ;
        border : 1px solid green ;
        border-radius : 12px ;
        transition : all .5s ;
    }
    button:hover {
        background-color : white ;
        color : green ; 
        
    }
    input {
        box-sizing : border-box ;
        padding : 10px 5px ; 
        width : 200px ;
        border  : 1px solid gray ; 
        border-radius : 12px ;
        background-color : lightgray ; 
    }
    .header { 
        margin-bottom : 100px ;
    }
</style>