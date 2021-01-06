<template>
  <div class="" id="indexcomment">
      <div class="container" v-if="comment">
          <div class="header">
              <h1><span class="dark-blue">نظرات</span> <span class="blue">مشتریان ما</span></h1>
          </div>
          <div class="body">
              
              <div class="comment-container">
                  <div class="comment">
                      <p>{{comment.description}}</p>
                    <font-awesome-icon class="icon blue " :icon='["fas","quote-left"]' />
                  </div>
                  <div class="comment-footer">
                      <div class="icons">
                          <font-awesome-icon class="icon blue" :icon='["fas","arrow-right"]' />
                          <font-awesome-icon class="icon opac-icon" :icon='["fas","arrow-left"]' />
                          
                      </div>
                      <div class="user">
                          <p class="username blue">  {{comment.username}}</p>
                          <p class="position">
                              مدیر و رئییس اجرایی سایت فلان
                          </p>
                      </div>
                  </div>
              </div>
              <div class="img-container">
                  <img src="~/assets/Customer.png" alt="customer picture">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'indexcomment' , 
    data() {
        return {
            comment : ''
        }
    },
    async fetchetch() {
        await this.$axios.$get('/home/get-comment')
            .then(resp => {
                console.log(resp)
                this.comment = resp.data
            })
    }
}
</script>

<style scoped>
* {
    margin : 0;
    padding : 0 ;
    border: none ;
    outline : none ;
}
#indexcomment{
    background-image: url('~assets/background-wave.png');
    background-position: center;
    background-size : contain ;
    background-repeat: no-repeat;
}
img {
    width : 100% ;
}
.container {
    margin-top : 100px ;
    width: 70%;
    margin-right: auto;
    margin-left : auto ;
}
.header {
    text-align: center;
    margin-bottom: 40px;
}

.body {
    display: grid;
    grid-template-columns: 540px 300px ;
    gap: 150px;
    justify-content: space-between;
}
.comment {
    gap: 5px;
    display: grid;
    grid-template-columns: auto 40px;
}
.comment p {
    color: #8296A9;
    line-height: 2em;
}
.comment .icon {
    margin-top: 5px;
    font-size: 2em;
}
.comment-footer {
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
.user {
    text-align: left;
}
.comment-container {
    box-sizing: border-box;
    padding-top: 40px;
}
.username{
    font-weight: bold;
}
.position {
    color : #748CA2 ;
    margin-top : 20px;
}
.icon {
    padding-left : 10px;
    font-size: 1.3em;
}
.opac-icon {
    opacity: 0.1;
}
@media only screen and (max-width : 1177px) {
    .container {
        width: 90% ;
    }
    .body {
        grid-template-columns: auto 300px;
        gap: 100px;
    }
    
}
@media only screen and (max-width : 950px) {
    .body {
        grid-template-columns: auto 200px;
        gap: 70px;
    }
    .img-container{
        margin-top: 20px;
    }
}
.comment-footer {
    grid-template-columns: 80px auto;
    margin-top : 30px ;
}
@media only screen and (max-width : 760px) {
    .container {
        width : 70%
    }
    .body {
        grid-template-columns: 1fr;
        
    }
    
    .img-container {
        margin : 0 ;
        grid-row: 1/2;
    }
    img {
        width: 270px;
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
}
@media only screen and (max-width :550px) {
    .container {
        width: 90%;
    }
}
</style>