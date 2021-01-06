<template>
    <div id="ticketdetail" >
        <ticketheader :ticketId='ticketId' />
        <ticketmessages :ticketId='ticketId' />
        <addmessagetoticket :ticketId='ticketId'/>
    </div>
</template>
<script>
import ticketheader from '~/components/shared/TicketHeader'
import ticketmessages from '~/components/shared/TicketMessages'
import addmessagetoticket from '~/components/shared/AddMessageToTicket'
export default {
    name : 'ticketdetail' ,
    data() {
        return {
            ticketId : this.$route.params.Id
        }
    }, 
    components : {
        ticketmessages , 
        ticketheader ,
        addmessagetoticket
    } 
}
</script>
<style scoped>
* {
    margin : 0 ;
    padding : 0; 
}
    #ticketdetail {
        padding : 50px 0 10px 0 ;
        background-color : #E6E7EB ;
    }
</style> 
