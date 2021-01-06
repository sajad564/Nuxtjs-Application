<template>
    <div id="secondlayout">
        <headcomp />
        <Nuxt />
        <foot />
    </div>
</template>
<script>
import headcomp from '~/components/layout/Header'
import foot from '~/components/layout/Footer'
export default {
    name : 'secondlayout' , 
    data() {
        return {

        }
    } , 
    components : {
        headcomp ,
        foot
    }
}
</script>
<style scoped>
    * {
        margin : 0 ;
        padding : 0 ;
    }
</style>