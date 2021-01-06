<template>
    <div id="loading">
        <div class="container">
            <div class="loading-box">
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'loading'  ,
    data() {
        return {
            
        }
    } , 
}
</script>
<style scoped>
    * {
        margin : 0 ;
        border : none ;
        padding : 0 ;
    }
    #loading {
        width : 100% ;
        height : 100% ;
        position : relative ;
    }
    .loading-box {
        width : 200px;
        height : 200px ;
        position : absolute ;
        top : 10% ;
        right :50% ;
        
        transform : translate(50%,-50%)
    }
    .circle {
        height : 100% ;
        width : 100% ;
        border-radius : 50% ;
        border : 20px solid #eee  ;
        border-top : 20px solid #2185EA ; 
          animation: spin 2s linear infinite;
    }
    @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>