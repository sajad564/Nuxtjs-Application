<template>
    <div id="posts">
       
        <div class="container">
            <div class="posts" v-if='posts.length!=0'>
                <div class="single-post" v-for='(post,index) of posts'  :key="index" @click='goToDetail(post.id)'>
                    <div class="img-container">
                        <img :src="post.photourl" alt="blog picture">
                    </div>
                    <div class="post-body">
                        <div class="mini-header">
                           <h3> {{post.title}}</h3>
                        </div>
                        <div class="mini-description">
                            <p>لورم از جزییات آموزشی برامون بگو,بهتره که بگه در غیر  این صورت ایپسوم رو فرا میخونم. میگی یا بگم.دِ بگو دیگه ای بابا چرا انقد مثث من در سکوت به سر میبری ای بابا هنوز تموم نشده.کافیه فک کنم</p>
                        </div>
                    </div>
                </div>
                
                
                
                
                
            </div>
            <paginationbutton @response='getFromChild' :pageCount='totalpage' :routename="'/post/list'" v-if='totalpage' />
        </div>
        <div class="loading" v-if="posts.length==0">
                <loading />
        </div>
    </div>
</template>
<script>

import paginationbutton from '~/components/shared/PaginationButton'
import loading from '~/components/shared/Loading'
export default {
    name : 'posts' , 
    data() {
        return {
            posts : [] , 
            totalpage : ''
        }
    } , 
    async fetch() {
        await this.$axios.$get('/post/list')
        .then(resp => {
            console.log(resp)
            this.posts = resp
            
            let pagination = JSON.parse(resp.headers.pagination)
            this.totalpage = pagination.totalpage
        })
            .catch(err => {
                console.log('this is error : ' + err)
                console.log(this.$axios.defaults.baseURL)
                if(err.statusCode==404) {
                    this.$router.push({name : '/error'})
                }
            })
    } ,
    methods : {
        goToDetail(id) {
            this.$router.push({name : 'post-id' , params : {id :id}})
        }, 
        getFromChild(value) {
            this.posts = value ;
        }
    } , 
    components : {
        paginationbutton ,
        loading
    }
}
</script>
<style scoped>
* {
    margin : 0 ;
    padding : 0;
    border : none ;
}
#posts {
    background-image: url('~assets/background-wave.png') , url('~assets/background-wave-other-side.png')  ; 
    background-repeat: no-repeat , no-repeat;
    background-size: contain,100%;
    background-position:  center bottom  ,  center 200px;
    
}
.container {
    
    width : 80% ; 
    margin-right : auto ;
    margin-left : auto ;
    margin-top : 150px;
}
.posts {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 20px;
}
.loading {
    height : 100vh ; 
}
.single-post {
    cursor : pointer ;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 0 15px 3px #eee;

}
.img-container {
    height : 240px; 
    
}
.img-container > img {
    height : 100%;
    width : 100% ; 
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

}
.single-post {
    line-height : 2em ;
    background-color : white ;
}
.post-body {
    text-align: center;
    box-sizing: border-box;
    padding : 10px;
}
.mini-header {
    
    margin-top :5px ;
    margin-bottom: 10px;
}
@media only screen and (max-width : 925px){
    .container {
        width: 98%;
        margin-right : auto ; 
        margin-left : auto ;
    }
}
@media only screen and (max-width : 800px){
    .container {
        margin-top: 50px;
        width : 80% ;
    }
    .posts {
                grid-template-columns: repeat(2,1fr);
    }
}
@media only screen and (max-width : 741px){
    #posts {
        background-position: center 900px , center 400px;
    }
    .container {
        width: 90%;
    }
    
}
@media only screen and (max-width : 600px){
    .posts {
        grid-template-columns: 1fr;
        line-height: 2.5em;
    }
    .container {
        width: 80%;
    }
    .single-post {
        margin-bottom: 30px;
    }
    #posts {
    background-image: url('~assets/background-wave.png') , url('~assets/background-wave-other-side.png'),url('~assets/background-wave.png') , url('~assets/background-wave-other-side.png')  ; 
    background-repeat: no-repeat ;
    background-size: contain;
    background-position:  center 1200px  ,  center 400px , center 2600px , center 1800px;
    
}
}
@media only screen and (max-width : 480px){
    .posts {
        line-height: 2.2em;
    }
    .container {
        width: 90%;
    }
    
}
@media only screen and (max-width : 320px){
    .img-container {
        height : 180px ;
    }
}

</style>