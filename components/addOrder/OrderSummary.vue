<template>
    <div id='ordersummary'>
        <div class="container">
            <div class="data-container">
                    <h1> خلاصه سفارش </h1>

                    <div class="price">
                        <span>قیمت</span> : {{data.productprice}}
                    </div>

                    <div class="features" v-if="features.length!=0">

                        <div class="feature" v-for="feature of features">
                            {{feature.name}}
                        </div>

                    </div>
            </div>
            <div class='button-container'>
                <button @click='next'>ادامه</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'ordersummary' , 
    props : ['data'] , 
    data() {
        return {
            features : []
        }
    } , 
    async fetch() {
        if(this.data) {
            await this.$axios.$get('/services/get-features-for-service?serviceId=' + this.data.productid)
                .then(resp => {
                    
                    this.features = resp
                })
                    .catch(() => {
                        this.$router.push({name : '/error'})
                    })
        }
    },
    methods : {
        next() {
            this.$emit('number' , 3)
        }
    }
}
</script>
<style scoped>
*{
    border : none ;
    outline : none ;
    margin : 0 ;
    padding : 0 ;
}
.container  {
    height : 600px;
    margin-right : auto ;
    margin-left : auto ;
    width : 700px;
}
h1 {
    text-align : center ;
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
.button-container {
  margin-top: 15px;
}
.button-container button {
  display: block;
  background-color: #3ab54a;
  color: white;
  margin-right: auto;
  margin-left: 10px;
  border-radius: 10px;
  width: 150px;
  padding: 10px;
  cursor: pointer;
}
</style>