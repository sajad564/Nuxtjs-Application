<template>
    <div id='ordermessage'>
        <div class="container">
            <div class="data-container">
                <div v-if="!orderData.confirmorder">
                                    <p >سفارش شما با موفقیت لغو شد,بازگشت به صفحه پروفایل</p>
                                        <button  @click='redirectMethod'>بازگشت</button>
                </div>
                <div v-if="orderData.confirmorder">
                                    <p >از اعتماد شما سپاس گذاریم,همکاران ما به زودی با شما تماس خواهند گرفت</p>
                                    <p>همچنین میتوانید از طریق کد زیر وضعیت سفارش خود را پیگیری نمایید</p>
                                    <p><span>کد رهگیری : </span>  <span> {{orderData.tracking}} </span> </p>
                                    <button v-if="orderData.confirmorder" @click='redirectMethod'>تایید</button>
                </div>
            </div>
           
            
        </div>
    </div>
</template>
<script>
export default {
    name : 'ordermessage' , 
    props : ['orderData'] ,  // user confirm add order or not(redirect to profile)
    data() {
        return {

        }
    } , 
    methods : {
        redirectMethod() {
                this.$router.push({path : '/profile'})
        }
    }
}
</script>
<style scoped>
*{
    margin : 0 ;
    padding : 0; 
    border : none ;
    outline : none ;
}
    .container {
    height : 600px;
    margin-right : auto ;
        margin-left : auto ;
    width : 700px;
}
    .data-container {
        margin-bottom : 20px;   
  background-color: white;
  height: 350px;
  border-radius: 20px;
  padding: 30px 20px 0 20px;
  box-sizing: border-box;
  box-shadow: 0 0 15px 3px #eee;
}
button {
    width : 100px;
    padding : 10px;
    background-color : green ;
    color : white ;
}
</style>