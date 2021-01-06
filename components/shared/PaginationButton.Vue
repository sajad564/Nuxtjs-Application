<template>
    <div id='paginationbutton'>
        <div class='container'>
            <div class='buttons'v-if='pageNumber<=3'>
                <div class='button' v-for='(number,index) of 5' v-if='pageCount>=number' :key="index" :class='{"selected" : pageNumber==number}' >
                    <button @click='changePageNumber(number)' >{{number}}</button>
                </div>
                
                <div class='button'v-if='pageCount>5' >
                    <button> ... </button>
                </div> 
                <div class='button'v-if='pageCount>5'>
                    <button @click='changePageNumber(pageCount)' > صفحه آخر </button>
                </div>
            </div>
            <div class='buttons'v-if='pageNumber>3'>
                <div class='button' >
                    <button  > 1</button>
                </div>
                <div class='button' >
                    <button > ...</button>
                </div>
                <div class='button' >
                    <button @click='changePageNumber(pageNumber -1)' > {{pageNumber-1}}</button>
                </div>
                <div class='button' >
                    <button class='selected'> {{pageNumber}}</button>
                </div>
                <div class='button' >
                    <button @click='changePageNumber(pageNumber+1)'  > {{pageNumber+1}}</button>
                </div>
                <div class='button' >
                    <button @click='changePageNumber(pageNumber+2)'  > {{pageNumber+2}}</button>
                </div>
                <div class='button'>
                    <button  @click='changePageNumber(pageCount)' >صفحه آخر </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'paginationbutton' , 
    props : ['routename','pageCount','size'] , 
    data() {
        return {
            pageNumber : 1 , 
        
        }
    },
    methods : {
        changePageNumber(value) {
            console.log('this is our pageSize : '  + this.size)
            if(this.pageNumber!=value) {
                this.pageNumber = value ;
                let fullRoute = '' 
                if(this.routename.includes("&")) {
                    fullRoute = this.routename + 'pagenumber=' + this.pageNumber
                }
                else {
                    fullRoute = this.routename + '?pageNumber=' + this.pageNumber
                }
                if(this.size) {
                    console.log('iam true baby')
                    fullRoute = fullRoute + '&pageSize=' + this.size
                }
                console.log(fullRoute)
                 this.$axios.$get( fullRoute)
                .then(resp=> {
                    console.log('this is our response : ' + resp)
                    this.$emit('response', resp)
                })
            }
        }
    }

}
</script>
<style scoped>
    *{
        margin : 0 ;
        padding : 0 ;
        border : none ;
        outline : none ;
    }
    .container {
        
        margin-top : 30px;
    }
    
    .button {
        transition: padding .4s;
        width : 80px;
        padding : 15px 5px;
        box-sizing : border-box ;
        margin-right : 15px;
    }
    button {
        box-shadow : 0 4px 10px 1px rgba(231, 58, 128, .8) ; 
        border-radius : 5px ;
        cursor : pointer ;
        color : white ;
        font-weight : bold ;
        height : 100% ;
        width : 100% ;
        background-color : #E73A80 ; 
    }
    .buttons {
        width : 100% ;
        
        
        display :flex ;
       
    }
    div.selected {
        padding :  15px 0 ;
        
    }
   
    @media only screen and (max-width : 1080px){
        .button {
            width : 35px ;
            margin-right : 5px ;
        }
    }
    @media only screen and (max-width : 830px){
        .margin-top : 0 ;
    }
    @media only screen and (max-width : 445px){
        .button {
            width : 30px ;
        }
    }
     @media only screen and (max-width : 400px){
         .button {
             width : 25px ;
         }
     }
</style>