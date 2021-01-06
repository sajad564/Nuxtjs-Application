<template>
    <div id="usertickets">
        <div class="container" >
            <div class="add-ticket">
                <NuxtLink to='/profile/addticket'>افزودن تیکت</NuxtLink>
            </div>
            <div class="tickets" v-if="tickets.length!=0" >
                <div class="ticket" v-for="(ticket,index) of tickets" :key="index" @click="goToDetail(ticket.id)">
                    <div class="title"  style="margin-bottom : 40px">عنوان : {{ticket.title}}</div>
                    {{ticket}}
                    <messagesount :ticketId='ticket.id' />
                </div>
                <paginationbutton @response='getFromChild' :pageCount='totalPage' :routename="'/ticket/get-tickets'" v-if="totalPage" />
            </div>
            <div class="error" v-if="error">
                -{{error}}-
            </div>
        </div>
    </div>
</template>
<script>
import messagesount from '~/components/shared/TicketMessageCount'
import paginationbutton from '~/components/shared/PaginationButton'
export default {
    name : 'usertickets' , 
    data() {
        return {
            tickets : []  , 
            error : '' , 
            totalPage : ''
        }
    } , 
    async fetch() {
        await this.$axios.get("/ticket/get-tickets")
            .then(resp => {
                this.tickets = resp.data
                let pagination =  JSON.parse(resp.headers.pagination)
                this.totalPage = pagination.totalpage
                console.log(this.totalPage)
            })
            .catch(err => {
                if(err.response.status==404) {
                    this.error = 'در حال حاضر هیچ تیکی ثبت نشده است'
                }
            })
    } ,
    components : {
    messagesount , 
    paginationbutton
    }  , 
    methods : {
        goToDetail(id) {
            this.$router.push({name :'profile-index-TicketDetail-Id' , params : {Id : id}})
        } , 
        getFromChild(value) {
            this.tickets = value 
        }
    }
}
</script>
<style scoped>
    * {
        margin : 0; 
        border : none ;
        padding :0 ;
        outline : none ;
    }
    .error {
        text-align : center ;
        color : lightgray ;
        margin-top : 50px;
    }
    .ticket {
        margin-bottom : 50px;
        color : blue ;
        cursor : pointer;
    }
</style>