<template>
    <div id='addrole'>
        <div class="container">
            <form @submit.prevent='submitForm' >
            <label for='rolename'>نام</label>
            <input type='text' id='rolename' v-model='rolename' />
            <div class='error' v-if='error'> {{error}} </div>
            <div class='ok' v-if='message'> {{message}} </div>
            <button type='submit'>ارسال </button>
            </form>
        </div>
    </div> 
</template>
<script>
    export default {
        name : 'addrole' ,
        data() {
            return {
                message : '' ,
                error : '',
                rolename : ''
            }
        } , 
        methods : {
            submitForm() {
                if(!this.rolename) {
                    this.message = ''
                    this.error = "لطفا نام رُل را وارد نمایید"
                }
                else {
                    this.error = ''
                    this.$axios.$post('/admin/add_role' ,  {
                        rolename : this.rolename
                    })
                        .then(resp => {
                            this.message = " رل مدنظر با موفقیت در دیتابیس ذخیره شد"
                        })
                            .catch(() => {
                                this.error ='مثل اینکه مشکلی پیش اومده,لطفا بعدا امتحان کنید'
                            })

                }
            }   
        }
    }
</script>
<style scoped>
* {
    border : none ;
    outline : none ;
}
.container {
    margin-top : 150px;
    width : 300px ;
    margin-right : auto ;
    margin-left : auto ;
}
.error {
    color : red ;
}
.ok {
    color : green ; 
}
input {
    display : block ;
    width : 180px;
    height : 25px;
    margin-top : 5px ;
    margin-bottom : 20px;
}
button {
    cursor : pointer ;
    background-color : green ;
    border-radius : 10px;
    width : 100px;
    height : 30px;
    box-sizing : border-box ;
    
    color : white ;
    margin-top : 10px;
    margin-right : 80px;
}
</style>