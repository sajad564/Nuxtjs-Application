<template>
    <div id="portfolioimgs">
        <div class="container">
            <div v-for="(url,index) of urls" :key="index">
                <img :src="url" alt="portfolio img">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'portfolioimgs' , 
    props : ['id'] , 
    data() {
        return {
            urls : []
        }
    } , 
    async fetch() {
        await this.$axios.$get('/admin/portfolio-imgs?id=' + this.id)
            .then(resp => {
                this.urls = resp.data
            })
    }
}
</script>
<style scoped>
    .container {
        margin-top : 30px;
        display : grid ;
        grid-template-columns : repeat(3,1fr) ; 

    }
    img {
        width : 100% ;
    }
</style>