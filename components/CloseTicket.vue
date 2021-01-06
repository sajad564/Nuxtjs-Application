<template>
    <div id="closeticket">
        <div class="container">
            <button @click="closeTicket"></button>
        </div>
    </div>
</template>
<script>
export default {
    name : 'closeticket' , 
    props : ['ticletId'] , 
    data() {
        return {

        }
    } , 
    methods : {
        closeTicket() {
             this.$axios.$post('/admin/set-ticket-state?ticketId=' + this.ticketId)
                .then(() =>{
                    this.$emit("closed" , true)
                })
                    .catch(err => {
                        if(err.response.status==500) {
                            console.log("مثل اینکه مشکلی تو سرور پیش اومده")
                        }
                        else if(err.response.status==400) {
                            console.log("بد ریکوئست")
                        }
                    })
        }
    }
}
</script>