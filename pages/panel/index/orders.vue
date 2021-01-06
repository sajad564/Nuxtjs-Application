<template>
    <div id="ordertypes">
        <div class="container">
            <div class="select-type">
                <div class="type" @click="selectType(0)"> 
                     <p class="description" >سفارشات پیش فرض</p> 
                 </div>
                 <div class="type" @click="selectType(1)"> 
                     <p class="description" >سفارشات  شخصی سازی شده</p> 
                 </div>
                 <div class="type" @click="selectType(2)"> 
                     <p class="description" >سفارشات  مشابه</p> 
                 </div>
            </div>
                    <div class="data-container" v-if="renderChild()">
                        <adminorders  :type='type' />
                    </div>
               
        </div>
    </div>
</template>
<script>
import adminorders from '~/components/panel/AdminOrders'
export default {
    name : '' , 
    data() {
        return {
            type : 10
        }
    } ,
    methods  :{
        renderChild() { // render admin orders depends on type of order
            if(this.type==0 || this.type==1 || this.type==2) {
                return true 
            }
            return false ;
        } ,
        selectType(value) {
            if(this.type==value) {
                this.type = 10
            }
            else {
                this.type = value ; 
            }
        }
    } ,  
    components : {
        adminorders
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
    .select-type {
        box-sizing : border-box;
        padding : 30px;
        display : grid ;
        gap : 50px;
        height : 40px;
        
        grid-template-columns : repeat(3,1fr) ;
    }
    .type {
        cursor : pointer ;
        text-align : center ;
        border-radius: 10px;
        background-color : #ddd
    }
</style>