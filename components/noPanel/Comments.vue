<template>
  <div id="comments">
      <div class="container">
          <div class="message">
              <h5>نظرات کاربران</h5>
          </div>
          <div class="comment" v-if='comments' v-for='comment of comments' >
              <div class="comment-header">
                 <div class="img-container">
                    <img :src="comment.photourl" alt="">
                </div>
                
              </div>
              <div class="comment-body">
                  <div class="username-date">
                    <a href="#"> {{comment.username}} </a>
                    <span>{{  comment.persiandate}} &nbsp;&nbsp;   {{comment.persiantime}}</span>
                </div>
                  <div class="comment-message">
                      <p> {{comment.description}} </p>
                  </div>
              </div>
          </div>
          <!--<div class="comment reply"  >
              <div class="comment-header">
                 <div class="img-container">
                    <img src="~/assets/user-pic.jpg" alt="">
                </div>
                
              </div>
              <div class="comment-body">
                  <div class="username">
                    <a href="#">علی رضا رضایی</a>
                </div>
                  <div class="comment-message">
                      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                  </div>
              </div>
          </div>-->
      </div>
  </div>
</template>

<script>
export default {
    name : 'comments',
    props : ['postid'] ,
    data() {
        return {
            comments : []
        }
    },
    async fetch() {
        await this.$axios.$get('/comment/per-post?postid=' + this.postid)
            .then(resp =>{
                this.comments = resp
            })
                .catch(err => {
                    
                    console.log(err.response.data)
                })
    }
    
}
</script>

<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border : none ;
}
#comments {
    width: 70%;
    margin-right: auto;
    margin-left: auto;
}
a {
    text-decoration: none;
    color : black ;
}
.comment {
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 100px auto;
}
img {
    width: 100%;
    height: 83px;
    border-radius: 50%;
    
}

.comment-body {
    box-sizing: border-box;
    padding : 20px 50px 20px 15px;
    margin-right: -45px;
}
.username-date {
    margin-bottom : 15px;
    color : #BDBDBD ;
    display : grid ;
    grid-template-columns : repeat(2,1fr)
}
.message {
    margin-bottom : 20px;
}
div.comment.reply {
    
    margin-right: 60px
}
div.comment.reply .comment-body {   
    background-color: #E9F3FD;
    z-index: -1;
}
</style>