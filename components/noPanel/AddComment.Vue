<template>
  <div id="addcomment">
      <div class="container">
          <div class="message">
              <h4>ارسال نظر</h4>
          </div>
          <div class="form-container">
              <form @submit.prevent='sendComment' >
                  
                 <!-- <div class="input-container">
                      <input type="text" placeholder="ایمیل" v-model='comment.title'>
                  </div>-->
                  
                  <div class="textarea-container">
                      <textarea name="" id="" cols="50" rows="6" placeholder="پیام شما" v-model='comment.description'></textarea>
                  </div>
                  <div class='ok' v-if='message'>
                    {{message}}
                  </div>
                  <div class='error' v-if='error.other'>
                    {{error.other}}
                  </div>
                  <div class="button-container">
                      <button type="submit">ثبت نظر</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'addcomment' ,
    props : ['postid'] ,
    data() {
        return {
            message : '',
            comment : {
                postid : this.postid ,
                description : ''
            } ,
            error : {
                title : '' ,
                
                other : ''
            }
        }
    } ,
    methods : {
        sendComment() {
           if(this.errorHandler()) {
                 this.$axios.$post('/comment/add',this.comment)
                .then(resp => {
                    this.comment.description = ''
                    this.message ="پیامت ثبت شد "
                })
                    .catch( ()=> {
                        this.error.other ="مثل اینکه مشکلی پیش اومده,میتونی بعدا امتحان کنی"
                    })
           }
        },
        errorHandler() {
           
            if(!this.comment.description) {
                this.error.description = 'لطفا توضیحات کامنت خود را وارد کنید'
            }
            else {
                this.error.description = ''
            }
            if(this.comment.description) {
                return true
            }
        }
    }
}
</script>

<style scoped>
* {
    margin : 0 ;
    padding : 0 ;
    outline : none ;
}
.container {
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 100px;
}
.message {
    color : #3A95ED ; 
    margin-bottom: 20px;
    margin-right: -50px;
}
.inputs {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(2,1fr);
}


input {
    
    border: 1px solid #ECECEC;
    height: 30px;
    width: 100%;
}
textarea {
        border: 1px solid #ECECEC;
    margin-top: 20px;
    resize: none;
    padding-top: 3px;
    width: 100%;
}
input::placeholder ,  textarea::placeholder {
    padding-right: 30px;
    color :  #ECECEC ;
}
button {
    width: 130px;
    box-sizing: border-box;
    padding: 8px;
    margin-top: 5px;
    cursor : pointer ;
    border: none;
    color : white ;
    background-color : #2086EA ;
    display: block; 
    margin-right: auto;
    border-radius: 2px;
}
.ok {
    color : green ;
}
.error {
    color : red ;
}
</style>