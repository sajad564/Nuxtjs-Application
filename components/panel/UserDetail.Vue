<template>
    <div id='userdetail'>
    <div class='container'>
        <div class='header'>
        <div class='field'>نام کاربری </div>
        <div class='field'>تعداد پست ها</div>
        <div class='field'> سطح دسترسی</div>
        <div class='field'>تعداد کامنت ها</div>
        
        </div>
        <div class='body'>
        
        <div class='field'> {{userinf.username}} </div>
        <div class='field'> {{userinf.postnumber}} </div>
        <div class='field'> {{userinf.accesslevel}} </div>
        <div class='field'> {{userinf.commentnumber}} </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name : 'userdetail' ,
    props : ['userid'] ,
    data() {
        return {
            userinf : ''
        }
    } ,
    async fetch() {
        await this.$axios.$get('admin/user-detail?userid='+ this.userid)
            .then(resp => {
                this.userinf = resp
            })
    }
}
</script>
<style scoped>
*{
    padding : 0;
    border : none ;
    margin : 0 ;
    outline : none ;
}
#userdetail {
    margin : 50px 0;
}
.header,.body {
    display :grid ;
    grid-template-columns : repeat(4,1fr) ; 
}
</style>