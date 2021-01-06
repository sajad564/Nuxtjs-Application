<template>
    <div id="ticketlist">
        <div class="container">
            <div class="data-container" v-if="tickets.length!=0">
                <div class="ticket-header">
                    <div class="ticket-option">عنوان تیکت</div>
                    <div class="ticket-option">زمان ایجاد</div>
                    <div class="ticket-option">تاریخ ایجاد</div>
                    <div class="ticket-option">پیام ها</div>
                    <div class="ticket-option">پاسخ  دادن</div>
                </div>
                <div class="single-ticket" v-for="(ticket,index) of tickets" :key="index" >
                    <div class="ticket-option">{{ticket.title}}</div>
                    <div class="ticket-option"> {{ticket.persiantime}} </div>
                    <div class="ticket-option"> {{ticket.persiandate}} </div>
                    <div class="ticket-option"> <messagesount  :ticketId='ticket.id' /> </div>
                    <div class="ticket-option"@click='changeRoute(ticket.id)'>کیلیک کنید</div>
                </div>
            </div>
            <div class="error" v-if="error">
                {{error}}
            </div>
        </div>
    </div>
</template>
<script>
import messagesount from '~/components/shared/TicketMessageCount'
export default {
    name : 'ticketlist' , 
    data() {
        return {
            tickets : [] ,
            error : ''
        }
    } , 
    components : {
        messagesount
    } , 
    methods : {
        changeRoute(id) {
            this.$router.push({name :'panel-index-TicketDetail-Id' , params : {Id : id}})
        }
    } , 
    async fetch() {
        await this.$axios.$get("/admin/all-tickets")
            .then(resp => {
                console.log(resp)
                this.tickets = resp
            })
                .catch(err => {
                    console.log(err)
                    if(err.response.status==404) {
                        this.error = 'در حال حاضر هیچ تیکی موجود نمیباشد'
                    }
                    else {
                        this.error = 'مثل اینکه مشکلی پیش اومده,لطفا بعدا امتحان کنید'
                    }
                })
    }
}
</script>
<style scoped>
*{
    magin : 0 ;
    padding :0 ;
    border : none ;
    outline : none ;
}
.container {
    width : 90% ;
    margin-right : auto ;
    margin-left : auto ;
}
    .single-ticket {
        margin-bottom : 30px ;
        color : purple ;
        border-bottom : 1px solid white ;
    }
    .ticket-header,.single-ticket {
        text-align : center ;
        padding : 10px 0 ;
        display : grid ;
        grid-template-columns : repeat(5,1fr) ; 
    }
    .ticket-option:nth-child(5) {
        cursor : pointer ;
    }
</style>