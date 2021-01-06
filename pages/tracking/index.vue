<template>
    <div id='trackingorder'>
    
        <findorder v-if='!orderdata' @dataCame='getFromchild' />
        <orderinformation  v-if='orderdata' :data='orderdata'/>
    </div>
</template>
<script>
import findorder from '~/components/tracking/FindOrder' 
import orderinformation from '~/components/tracking/OrderInformation'
    export default {
        name : 'trackingorder' ,
        data() {
            return {
                orderdata : ''
            }
        } , 
        components : {
            findorder , 
            orderinformation
        },
        methods : {
            getFromchild(value) {
                this.orderdata = value ;
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
</style>