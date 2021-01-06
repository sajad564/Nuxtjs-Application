<template>
    <div id="ticketmessages">
        
        <div class="container">
            <div class="data-container" v-if="messages.length!=0">
                <div class="single-message" v-for="message of messages" >
                    <div class="grid">
                        
                        <div  id="profile" >
                            <div class="img-container">
                                <img :src="message.img" alt="user picture">
                            </div>
                            <div class="name">{{message.sendername}}</div>
                        </div>
                        <div class="message-item">{{message.perisantime}}</div>
                        <div class="message-item">{{message.persiandate}}</div>
                    </div>
                    <div class="message-item target-message" >{{message.message}}</div>
                </div>
                                <paginationbutton @response='getFromChild' :size='size' :pageCount='totalPage' :routename="'/ticket/get-ticket-messages?ticketId='+ ticketId + '&'" v-if="totalPage" />
            </div>
            <div class="error" v-if="error">
                -{{error}}-
            </div>
        </div>
    </div>
</template>
<script>
import paginationbutton from './PaginationButton'
export default {
    name :'ticketmessages' ,
    props : ['ticketId'] ,  
    data() {
        return {
            size : 3 ,
            messages : [] , 
            error : '' ,
            totalPage : ''
        }
    } ,
    methods : {
        getFromChild(value) {
            console.log('this is value' + value)
            this.messages = value ;
        }
    } ,
    async fetch() {
        await this.$axios.get('/ticket/get-ticket-messages' , {
            params : {
                ticketId : this.ticketId , 
                pageSize : 3 
            }
        })
            .then(resp => {
                console.log(resp)
                this.messages = resp.data
                let pagination =  JSON.parse(resp.headers.pagination)
                this.totalPage = pagination.totalpage
                this.error = ''
            })
                .catch(err =>  {
                    console.log('this is error again : '  + err.response.status)
                    if(err.response.status==404) {
                        this.error = 'در حال حاضر پیامی ثبت نشده است'
                    }
                    else {
                        this.error = 'مثل اینکه مشکلی پیش اومده ,لطفا بعدا امتحان کنید'
                    }
                })
    }  ,
    components : {
        paginationbutton
    }

}
</script>
<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border : none ;
    outline : none ;
}
.container {
    background-color : #E6E7EB ;
}
    .error {
        text-align : center ;
        color : lightgray ;
    }
    .single-message {
        width : 90% ;
        box-sizing : border-box ;
        margin-right : auto ;
        margin-left : auto ;
        padding : 20px ;
        border-radius : 10px ;
        margin-top : 20px ;
    }
    #profile {
        color : black ;
        font-weight : bold ;
    }
    .grid {
        display : grid ;
        grid-template-columns : repeat(3,1fr) ; 
        text-align : center ;
    }
    .single-message:nth-child(2n) {
        color : gray ;
        background-color : #F3F3F5 ;
    }
    .single-message:nth-child(2n+1) {
        background-color : white ;
    }
    .target-message {
        color : gray ;
        margin-top : 20px ;
    }
    .img-container {
        margin-right : auto ;
        margin-left : auto ;
        width : 130px ;
        height : 110px;
        
    }
    img {
        margin-top : -10px;
        border-radius : 50% ;
        width : 100% ;
        height : 100% ;
    }
    .grid > .message-item {
        opacity : .5 ; 
        display: grid;
        align-items: end;
    }
    @media only screen and (max-width : 1070px){
        .grid  {
            font-size : .9em ;
        }
    }
       @media only screen and (max-width : 540px){
           .grid {
               margin-top :20px;
               font-size : 12px ;
           }
           .img-container  {
               width : 80px ;
               height : 70px ;
           }
           .message-item {
               font-size : 14px ;
               line-height: 2em;
           }
       }
</style>