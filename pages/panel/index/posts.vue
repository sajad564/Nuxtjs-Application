<template>
    <div id='manageposts'>
    <NuxtLink to='/panel/addpost' class='add' title='افزودن پست'> <font-awesome-icon :icon='["fas","plus"]' /> </NuxtLink>
        
    <div class='container'>
        <div class='header'>
            <div class='field'>آیدی پست </div>
            <div class='field'> عنوان پست </div>
            <div class='field'>آیدی نویسنده </div>
            <div class='field'>تاریخ بارگذاری  </div>
            <div class='field'>زمان بارگذاری  </div>
            <div class='field'> ویرایش پست </div>
            <div class='field'>مشخصات نویسنده </div>
        </div>
        <div class='body' v-if='posts' v-for='(post,index) of posts' :key="index">
            <div class='post'>
                <div class='field'> {{post.id}} </div>
                <div class='field'>{{post.title}}</div>
                <div class='field'>{{post.senderId}}</div>
                <div class='field'>{{post.persiandate}}</div>
                <div class='field'>{{post.persiantime}}</div>
                <div class='field'> <NuxtLink :to='{name : "panel-index-EditPost-Id" , params :{Id : post.id}}'>کیلیک کنید</NuxtLink> </div>
                <div class='field'>
                <button @click='sendIdtoChildComponent(post.id,post.senderId)'>کیلیک کنید</button>
                </div>
            </div>
            <div class='userdetail' v-if='showwhat==post.id'>
            <udetail :userid='userdetail' />
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import udetail from '~/components/panel/UserDetail'
    export default {
        name : 'manageposts' , 
        data() {
            return {
                userdetail : '' ,
                showwhat : '' ,
                posts : []
            }
        } ,
        async fetch() {
            await this.$axios.$get('/post/list')
        .then(resp => {
            this.posts = resp
            
        })
            
        },
        methods : {
            sendIdtoChildComponent(postid,senderid) {
                this.showwhat = postid 
                this.userdetail = senderid 
            },
        },
        components : {
            udetail
        }
    }
    
</script>
<style scoped>
*{
    margin : 0 ;
    color : white ;
    padding : 0;
    outline : none ;
    border : none ;
}
a {
    text-decoration: none;
}
    .add {
        margin-right : 700px ;
        margin-bottom : 50px;
        text-align : center ;
        border-radius : 10px ;
        outline : none ;
        cursor : pointer ;
        text-decoration : none ;
        color : white ;
        display : inline-block ;
        width : 60px ;
        padding : 10px ;
        background-color : green ;
    }
    .container {
        margin-top : 100px;
    }
    .header,.post {
        display : grid ;
        grid-template-columns : repeat(7,1fr)
    }
    .header{
        background-color : gray ;
        
    }
    .post {
        background-color : #333 ;
    }
</style>