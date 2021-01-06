<template>
  <div id="default">
    <navigation/>
    <Nuxt />
    <fot/>
  </div>
</template>
<script>
import fot from '../components/layout/Footer'
import navigation from '../components/layout/Navbar'
export default {
  name : 'defaultlayout' , 
  data() {
    return {

    }
  } , 
  components : {
    navigation  ,
    fot
  }
}
</script>
<style scoped>
*{
  margin : 0 ;
  padding : 0 ;
  border : none ;
}
#default {
 
}
</style>
