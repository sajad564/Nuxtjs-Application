<template>
    <div id="ticketmessagescount">
        <div class="container" v-if="data" >
            {{data}}
        </div>
    </div>
</template>
<script>
export default {
    name : 'ticketmessagescount' , 
    props : ['ticketId'] , 
    data() {
        return  {
            data : ''
        }
    } , 
    async fetch() {
        await this.$axios.$get("/ticket/messages-count?ticketId=" + this.ticketId)
            .then(resp => {
                this.data = resp
            })
    }
}
</script>