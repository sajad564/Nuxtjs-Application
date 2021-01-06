<template>
    <div id='orderinformation'>
        <div class='container'>
        <div class='header'>
            <h1> اطلاعات سفارش شما </h1>
        </div>
        <div class='order-info'>
           <div class='order-header'>
                <div class='order-option'> عنوان </div>
                <div class='order-option'> زمان </div>
                <div class='order-option'> تاریخ </div>
                <div class='order-option'> تعرفه </div>
                <div class='order-option'> وضعیت سفارش </div>
           </div>
           <div class='order-body'>
                <div class='field'>
                    {{data.productname}}
                </div>
                <div class='field'>
                    {{data.perisantime}}
                </div>
                <div class='field'>
                    {{data.persiandate}}
                </div>
                <div class='field'>
                    {{data.price}}
                </div>
                <div class='field payment'>
                    {{data.ispaid ? "پرداخت شده" : "در انتظار پرداخت"}}
                </div>
           </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'orderinformation' ,
    props : {
        data : {
            type : Object 
        }
    } ,
    data() {
        return {

        }
    }
}
</script>
<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border : none ;
}
.container {
    height : 70vh ;
}
.header {
    margin : 100px 0;
    text-align : center ;
    
}
.order-header {
    background-color : gray ;
    color : white ;
}
.order-header,.order-body {
    display : grid ;
    grid-template-columns : 2fr repeat(4,1fr) ; 
    padding : 10px 0 ; 
    text-align : center ;

}
.order-info {
    box-sizing : border-box ;
    padding : 0 50px;
    margin-bottom : 150px;
}
.order-body {
    background-color : lightgray ;
    color : white ;
}
.payment {
    cursor : pointer ;
}
</style>