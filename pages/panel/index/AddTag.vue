<template>
    <div id="addtag">
        <form @submit.prevent='addTag'>
            <label for="tagname">نام تگ</label>
            <input type="text" id="tagname" v-model="name">
            <div class="error" v-if="validationError || error">
                {{validationError}}
                {{error}}
            </div>
            <div class="message" v-if="message">
                {{message}}
            </div>
            <button type="submit">افزودن</button>
        </form>
    </div>
</template>
<script>
export default {
    name : 'addtag' , 
    data() {
        return {
            name : '' , 
            validationError : '' , 
            error : '' , 
            message : ''
        }
    } , 
    methods : {
        addTag() {
            if(this.Validation()) {
                this.$axios.$post("/admin/add-tag", {
                   name :  this.name
                })
                    .then(() => {
                        this.error ='' 
                        this.validationError = ''  
                        this.message = 'تگ مد نظر افزوده شد'
                        this.name = ''
                    })
                    .catch(() => {
                        this.validationError = '' 
                        this.message = ''
                        this.error = 'مثل اینکه مشکلی پیش اومده ,لطفا بعدا امتحان کنید'
                    })
            }
        } ,
        Validation() {
            if(this.name) {
                return true 
            }
            else {
                this.validationError ='لطفا نام تگ را وارد کنید'
                return false; 
            }
        }
    }
}
</script>
<style scoped>
    .message {
        margin : 10px 0 ;
        background-color : gray ; 
        color : green ;
    }
    .error {
        margin : 10px 0 ;
        background-color : gray ;
        color : red ;
    }
    button {
        box-sizing : border-box;
        transition: all .5s;
        cursor : pointer ;
        width : 100px ;
        border : none ;
        outline : none ;
        border-radius : 10px ;
        padding : 6px 0 ;
        color : white ;
        background-color : green;
    }
    button:hover {
        background-color : white ;
        border  : 1px solid green ;
        color : green ;
    }
</style>