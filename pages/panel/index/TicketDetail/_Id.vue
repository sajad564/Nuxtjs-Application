<template>
    <div id="manageticket">
        <div class="container">
        <ticketheader :ticketId='ticketId' :IsAdmin='true' />
        <ticketmessages :ticketId='ticketId' />
        <addmessagetoticket :ticketId='ticketId'/>
        </div>
    </div>
</template>
<script>
import ticketheader from '~/components/shared/TicketHeader'
import ticketmessages from '~/components/shared/TicketMessages'
import addmessagetoticket from '~/components/shared/AddMessageToTicket'
export default {
    name : 'manageticket' , 
    data() {
        return {
            ticketId : this.$route.params.Id
        }       
    } , 
    components : {
        ticketheader , 
        ticketmessages , 
        addmessagetoticket
    }
}
</script>
<style scoped>
   
</style>