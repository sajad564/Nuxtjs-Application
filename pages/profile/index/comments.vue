<template>
    <div id="usercomments">
        <div class="container">
            <div class="data-container" v-if="comments.length!=0" >
                <div class="single-comment" v-for="comment of comments">
                    <div class="header"> <NuxtLink to='{name :"post" , query : {postid : comment.postId}}' > {{comment.posttitle}} </NuxtLink> </div>
                    <div class="body">
                        <div class="top"> {{comment.description}} </div>
                        <div class="bottom"> 
                            {{comment.persiandate}}-{{comment.persiantime}}    
                         </div>
                    </div>
                </div>
            </div>
            <div class="error" v-if="error">
                -{{error}}-
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'usercomments' , 
    data() {
        return {
            error : '' , 
            comments : []
        }
    } , 
    async fetch() {
        await this.$axios.$get("/comment/user-comments")
            .then(resp => {
                console.log(resp.data)
                this.comments = resp.data
            })
                .catch(err => {
                    if(err.response.status==404) {
                        this.error = 'در حال حاضر هیچ کامنتی ثبت نشده است'
                    }
                })
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
    .error {
        margin-top : 30px ;
        text-align : center ;
        color : gray ;
    }
.container {
    width : 80% ;
    margin-right : auto ;
    margin-left : auto ;
}
.header {
    font-size : 2em ;
}
.top {
    color : gray ; 
}
.single-comment {
    margin-top : 30px;
}
.bottom {
    text-align : left ;
    color : lightgray ;
    font-size : .8em ;
}

</style>