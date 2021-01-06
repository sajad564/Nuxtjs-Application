<template>
  <div id="addorder">
        <div class="container" >
                <div class="orderheader">
                  <orderheader />
                </div>
                <div class="bullets">
                  <orderpath />
                </div>


                <div class="components-container">
                  <selectorder @number='numberChanged' @data='orderSelected' v-if="!data || number==1" />
                  <ordersummary v-if="number==2&& data" :data='data' @number='numberChanged' />
                  <registerorder v-if="data && number==3" :data='data' @orderData='clientChoose' />
                  <ordermessage v-if="getfromregister"  :orderData='getfromregister' />
                </div>
                

        </div>
    
  </div>
</template>

<script>
import selectorder from '~/components/addOrder/SelectOrder'
import orderpath from '~/components/addOrder/OrderPath'
import orderheader from '~/components/addOrder/OrderHeaderText'
import ordersummary from '~/components/addOrder/OrderSummary'
import registerorder from '~/components/addOrder/RegisterOrder'
import ordermessage from '~/components/addOrder/OrderMessage'
export default {
  name: "addorder",
  data() {
    return {
      data : '',
      number : 1 , 
      getfromregister : '' // contain tracking code , confirm order and number(=4)
    }
  } ,
  methods : {
    orderSelected(value) {
      this.data = value
      
    },
    numberChanged(value) {
      this.number = value ;
    }, 
    clientChoose(data) {
      this.getfromregister = data
      this.number = data.number
    }
  } ,
  components : {
    selectorder, 
    ordersummary,
    orderpath ,
    orderheader , 
    registerorder,
    ordermessage
  }
}
</script>

<style scoped>
/*color : #2185EA ; */
* {
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
}

</style>