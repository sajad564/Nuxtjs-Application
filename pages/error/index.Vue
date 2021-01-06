<template>
    <div id="error">
        <div class="container">
            <div class="error-pic">
                <img class="error-img" src="@/assets/404.jpg" alt="">
            </div>
            <div class="error-body">
                <div class="error-message">
                <h1 class="error-title">اوه مثل اینکه صفحه رو اشتباه اومدین</h1>
                <p class="error-description">
                    اینجا طراحی انجام نمیشه...
                </p>
            </div>
            <div class="error-button">
                <button>بازگشت به صفحه اول</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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
    margin-bottom : 40px;
    width :60% ;
    
    margin-right : auto ;
    margin-left : auto ;
}
.error-pic {
    width : 80% ;
    margin-right : auto ;
    margin-left : auto ;
}
img.error-img {
    width : 100% ;
}
.error-body {
    text-align: center;
    margin-top : -80px;
}
h1.error-title {
    margin-bottom: 10px;
   font-size: 1.5em;
}
.error-message {
    color : #607487 ;
    
}
div.error-button {
    margin-top : 30px;
}
div.error-button > button {
    cursor : pointer ;
    background-color: #2086EB;
    color : white ;
    border-radius: 20px;
    padding : 14px 33px;
    
}
</style>