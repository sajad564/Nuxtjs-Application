<template>
    <div id="getportfoliofororder">
        <div class='container' v-if="portfolio">
            مشابه<a :href=" '//' + portfolio.link">   {{portfolio.websitename}} </a>
        </div>
    </div>
</template>
<script>
export default {
    name : 'getportfoliofororder' , 
    props : ['id'] , 
    data() {
        return {
            portfolio : ''
        }
    } , 
    async fetch() {
        if(this.id) {
            await this.$axios.$get('/admin/get-portfolio-for-order?id=' + this.id)
                .then(resp => {
                    this.portfolio = resp
                })
        }
    }
}
</script>