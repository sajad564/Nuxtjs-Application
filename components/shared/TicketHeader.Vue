<template>
    <div id="ticketheader">
        <div class="container" v-if="ticket">
            <div class="grid">
                <div class="profile">
                    <div class="img">
                        <img :src="ticket.img" alt="">
                    </div>
                    <div class="header-option">{{ticket.sendername}}</div>
                </div>
                <div class="header-option">{{ticket.persiantime}}</div>
                <div class="header-option">{{ticket.persiandate}}</div>
                
            </div>
            <div class="target-ticket">
                <div class="header-option">{{ticket.title}}</div>
                <div class="header-option">{{ticket.description}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'ticketheader' , 
    props : ['ticketId' , 'IsAdmin'] , 
    data() {
        return {
            ticket : ''
        }
    } , 
    async fetch() {
        let fullRoute = ''
        if(this.IsAdmin==true) {
             fullRoute = '/admin/get-header?ticketId=' + this.ticketId 
        }
        else {
             fullRoute = '/ticket/get-header?ticketId=' + this.ticketId 
        }
        console.log(this.ticketId)
        await this.$axios.$get(fullRoute)
            .then(resp => {
                console.log(resp)
                this.ticket = resp
            })
            .catch(err => {
                console.log(err)
            })
    }
}
</script>
<style scoped>
    .container {
        box-sizing : border-box ;
        width : 93% ; 
        border-radius : 10px ;
        margin-right : auto ;
        margin-left : 20px ;
        padding : 20px;
        background-color : #294B93 ; 
        color : white ;
        font-size : 1em ;
    }
    .grid {
        text-align : center ;
        display : grid ;
        grid-template-columns : repeat(3,1fr) ;
        margin-bottom : 50px;
    }
    .target-ticket {
        padding-right : 30px ;
    }
    .target-ticket>.header-option:nth-child(1) {
        margin-bottom : 20px;
        font-weight:  bold;
        font-size: 1.2em;
    }
    .target-ticket>.header-option:nth-child(2) {
        color : #ddd
    }
    .img {
        margin-bottom : 15px ;
        margin-right : auto ;
        margin-left : auto ;
        width : 130px ;
        height : 110px;
    }
    img {
        border-radius : 50% ;
        width : 100% ;
        height : 100% ;
    }
    .grid > .header-option {
        display : grid ;
        align-items: end;
    }
    @media only screen and (max-width : 1070px){
        .grid {
            font-size : .8em ;
        }
    }
    @media only screen and (max-width : 540px){
        .grid {
            font-size : 12px ;
            margin-top : 20px ;
        }
        .target-ticket>.header-option:nth-child(1) {
        font-size : 16px ;
    }
    .target-ticket {
        padding : 10px ;
    }
    .container {
        padding : 5px ;
    }
    .img {
        width : 80px ;
        height : 70px ;
    }
    .target-ticket>.header-option:nth-child(2) {
        line-height: 2em ;
        font-size : 14px ;
    }
    }
    
</style>