<template>
    <div id='commentstate'>
        <div class='container'>
            <div class='form-container'>
                <form @submit.prevent='changeState'>
                    <div class='select-container'>
                        <select v-model='commentState'>
                            <option value='0'>در انتظار بررسی</option>
                            <option value='1'>تایید شده</option>
                            <option value='2'> عدم انتشار </option>
                        </select>
                    </div>
                    <div class="input-container">
                        <input type="checkbox" id="index" v-model="showIndex">
                        <label for="index">نمایش در صفحه ایندکس</label>
                    </div>
                    <button type='submit'>تغییر </button>
                </form>
            </div>
            <div class='message-container'>
                <div class='message' v-if='message'>
                    {{message}}
                </div>
                <div class='error' v-if='error'>
                    {{error}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['id',  'state','index'] , 
        name : 'commentstate' , 
        data() {
            return {
                commentState : this.state ,
                showIndex : this.index  , 
                message : '' , 
                error : ''
            }
        } , 
        methods : {
            changeState() {
                 this.$axios.$post('/admin/change-comment-state', {
                    id : this.id , 
                    state : this.commentState , 
                    Isinindex : this.showIndex
                })
                    .then(()=> {
                        this.error = ''
                        this.message = 'وضعیت با موفقیت تغییر یافت'
                    })
                        .catch(() => {
                            this.message = ''
                            this.error = 'مثل اینکه مشکلی پیش اومده لطفا بعدا امتحان کنید'
                        })
            }
        }
    }
</script>

<style scoped>
*{
    margin : 0 ;
    padding : 0 ;
    border : none ;
    outline : none ;
}
.container {
    box-sizing : border-box ;
    height : 200px;
    padding : 20px;
}
.message {
    color : green ;
}
.error {
    color : red ;
}

select {
    width : 200px ;
    display : block ;
}
button {
    width : 150px;
    height : 30px;
    margin-right : auto ;
}
</style>