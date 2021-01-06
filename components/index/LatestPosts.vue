<template>
  <div id="latestposts">
      <div class="container" v-if='posts'>
          <div class="header">
              <h1>
                  <span class="dark-blue">مطالب و مقالات</span> <span class="blue">بلاگ</span>
              </h1>
              <NuxtLink to='/posts'>مشاهده همه</NuxtLink>
          </div>
          <div class="posts">
              <div class="post" v-for='post of posts'>
                  <div class="img-container">
                      <img :src="post.photourl" alt="">
                  </div>
                  <div class="post-body">
                      <h2 class="title">{{post.title}} </h2>
                        <p> {{post.description}} </p>
                  </div>
              </div>
              
              
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name :'latestposts' , 
    data() {
        return {
            posts : []
        }
    } ,
    async fetch() {
        await this.$axios.$get('/home/get-latest-post')
            .then(resp => {
                this.posts = resp
            })
            
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding : 0 ;
    border : none;
    outline : none
}
#latestposts {
     background-image: url('~assets/background-wave-other-side.png');
    background-repeat: no-repeat;
    background-size: 100% contain;
    background-position: center;
   background-color: #FEFEFE;
}

.container {
   
    display: grid;
    grid-template-columns: 1fr;
    margin-top : 100px ;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
     /**FEFEFE */;
}

.posts {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
}
.img-container {
    height : 250px;
}
.img-container img {
    height : 100% ;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    width: 100%;
}
.post-body {
    text-align: center;
    box-sizing: border-box;
    padding : 30px 10px ;
    background-color: white;
}
.post-body h2 {
    color : #324E68 ;
    font-size: 20px;
    margin-bottom: 10px;
}
.post-body  p {
    font-size: 15px;
    line-height: 1.7em;
    color: #728CA3;
}
.post {
        box-shadow: 0 0 10px 6px #eee;
    border-radius: 12px;
}
.header {
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 5px 20px;
    display: grid;
    grid-template-columns: 300px 180px  ;
    justify-content: space-between;
}
.header a {
}
a {
    text-align : center ;
    display : block ;
    box-sizing : border-box ;
    padding-top : 10px;
    text-decoration : none ;
    background-color: #2086EA;
    color : white ;
    border-radius: 20px;
}
@media only screen and (max-width:1000px) {
.posts {
    grid-template-columns: repeat(2,1fr);
}
}


@media only screen and (max-width:650px) {
    .posts {
        grid-template-columns : 1fr ;
    }
    .container {
        margin-top : 40px ;
    }
    .header {
        grid-template-columns: 1fr;
    }
    .header h1 {
        text-align: center;
        margin-bottom : 20px
    }
    a {
        width: 250px;
        margin: 10px auto 30px auto;
        height: 35px;
    }
}
</style>