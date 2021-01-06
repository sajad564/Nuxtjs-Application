<template>
    <div id="registerorder">
        <div class="container">
            <div class="data-container">
                <h3>آیا از ثبت سفارش خود مطمئن هستید؟</h3>
                <div class="buttons-container">
                    <div class="button-container">
                        <button class='yes' @click='registerNewOrder(true)'>بله</button>
                    </div>
                    <div class="button-container">
                        <button class="no" @click='registerNewOrder(false)'> خیر </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'registerorder' , 
    props : ['data'],
    data() {
        return {

        }
    },
    methods : {
        registerNewOrder(value) {
            if(value) {
                 this.$axios.$post('/order/add-order',  this.data)
                .then(resp=> {
                    let data = {
                        number : 4 ,
                        confirmorder : true ,
                        tracking : resp.trackingCode
                    }
                    this.$emit('orderData' , data)
                })
            }
            else {
                let data = {
                        number : 4 ,
                        confirmorder : false 
                    }
                    this.$emit('orderData' , data)
            }
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
h3 {
    text-align : center ;
    margin-top : 50px;
    margin-bottom : 60px;
}
.buttons-container {
    
    width : 300px ;
    margin-right : auto ;
    margin-left : auto ;
    display : grid ;
    grid-template-columns : repeat(2,1fr) ;
    gap : auto ;
}
button {
    display : block ;
    border-radius : 16px;
    cursor : pointer ;
    color : white ;
}
.yes {
    background-color : green ;
    width : 100px;
    padding : 10px;
}
.no {
    margin-right : auto;
    display : block ;
    background-color : red ;
    width : 100px;
    padding : 10px;
}
</style>