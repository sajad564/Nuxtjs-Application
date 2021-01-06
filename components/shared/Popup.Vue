<template>
    <div id="popup">
        <div class="container">
            <div class="ok" v-if="!error" >سفارش شما به سبد خرید افزوده شد</div>
            <div class="error" v-if="error" >شما قبلا این سفارش را به سبد خود افزوده اید</div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'popup'  , 
    data() {
        return {
            props : ['error']  
        }
    }  , 
    async fetch() {
        setTimeout(() => this.$emit("deletepopup" , true),2000)
    }
}
</script>
<style scoped>
#portfoliopopup {
    opacity  : 0 ;
    position : absolute ;
    animation: sajad 2s;
    left : 100px;
    top : 0 ;
}
@keyframes sajad {
    0% {
        top : 50px ;
        opacity : 0 
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity : 0 ; 
    }
}
.error,.ok {
        color : white ;
        width : 300px ;
        text-align : center ;
        padding : 10px ;
        border-radius : 10px ;
}
    .error {
        background-color : red  ; 
        
    }
    .ok {
        background-color : green ; 
    }
</style>