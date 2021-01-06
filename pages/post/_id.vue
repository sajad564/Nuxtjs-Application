<template>
  <div id="post">
  
      <div class="container" v-if='postdata.id'>
          <div class="header-container">
              <div class="big-message">
                 <h1> {{postdata.title}}</h1>
              </div>
              <div class="time-line">
                  <div class="day">
                      {{postdata.persiandate}} {{postdata.persiantime}}
                  </div>
                  <div class="author">
                     <div class="author-pic">
                          <img :src="postdata.photourl" alt="author picture">
                     </div>
                     <div class="author-name"> {{postdata.username}}  </div>
                  </div>
                  <div class="reading-time">
                      زمان مطالعه : 6 دقیقه
                  </div>
              </div>
          </div>
          <div class="img-container">
              <img v-bind:src="postdata.photourl" alt="type with photoshop">
          </div>
          <div class="post-body">
              <div class="post-title">
                  <h2>چگونه در فتوشاپ تایپ کنیم ؟ </h2>
              </div>
              <div class="post-description">
                  <p>
                        {{postdata.description}}
                 </p>
              </div>
          </div>
      </div>
      <div class='loading' v-if="!postdata.id">
          <loading />
      </div>
      <addcomment :postid='postdata.id' v-if='postdata.id' />
      <comments :postid='postdata.id' v-if='postdata.id' />
  </div>
</template>

<script>

import addcomment from '~/components/noPanel/AddComment'
import comments from '~/components/noPanel/Comments'
import loading from '~/components/shared/Loading'
export default {
name : 'post' , 

data() {
    return {
        querystring : this.$route.params.id ,
        postdata : {
            id : '' ,
            description : '' ,
            photourl : '' ,
            title : '',
            senderid : '',
            username : '' ,
            persiandate : '' ,
            persiantime : ''
        }
    }
} ,
async fetch() {
   console.log(this.querystring)
    await this.$axios.$get('/post/detail/' + this.querystring)
       .then(resp => {
          console.log(resp)
          this.castData(resp)
       })
        .catch(err => {
            if(err.response.status==404) {
                // this.$router.push({path : '/error'})
            }
        })
       
}  ,
methods : {
    castData(data) {
        
        this.postdata.id = data.id ;
        this.postdata.title = data.title ;
        this.postdata.description = data.description ;
        this.postdata.senderid = data.senderid ;
        this.postdata.photourl = data.photourl ;
        this.postdata.persiandate = data.persiandate;
        this.postdata.username = data.username ;
        this.postdata.persiantime = data.persiantime;
    }
},
components : {
    addcomment , 
    comments , 
    loading
}
}
</script>

<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border: none;
}
#post {
    overflow: hidden;
    background-image: url('~assets/background-wave-other-side.png');
    background-repeat: no-repeat;
    background-position:  center right;
  
    background-size: 160%;
}
img {
    width : 100% ;
}
.container {
    
    width: 85%;
    margin-right: auto;
    margin-left: auto; 
}
.big-message {
    margin-bottom: 140px;
    color: #3F586F;
}
.header-container {
    margin-bottom: 20px;
}
.big-message {
    margin-top: 30px;
    text-align: center;
}
.time-line {
    display: grid;
    color: #C2C2C2;
    grid-template-columns:100px 230px 200px ;
    justify-content: space-around;
}
.loading {
    height : 100vh ; 
    margin-top : 100px;
}
.author {
    grid-gap: 10px;
    display: grid;
    grid-template-columns: 80px auto
}
.author  img {
    margin-top: -25px;
    height: 70px;
    border-radius: 50%;
}
.img-container {
    box-sizing: border-box;
    padding : 0 60px ;
}
.img-container img {
    border-radius: 20px;
}
.post-description {
    line-height: 2em;
}
.post-description p {
    margin-bottom: 30px;
}
.post-title {
    color: #2F8DEA;
    margin-top: 50px;
    margin-bottom: 12px;
}
@media only screen and (max-width : 1150px){
    .time-line {
                grid-template-columns:90px 220px 150px ;
    }
    .img-container {
        padding : 0 20px ;
    }
}
@media only screen and (max-width : 819px){
.img-container {
    padding : 0 10px ;
}
}
@media only screen and (max-width : 700px){
    .time-line {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .author {
        grid-template-columns: 180px;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 50px;
        
    }
    .author-pic {
        margin-top: 100px;
        margin-right : auto;
        margin-left : auto ;
    }
    .author img {
        height: 150px;
    }
    
}
/**819 */
</style>