<template>
<div id='editpost'>
    <div class='container' v-if="post">
        
           
            
        
        <form @submit.prevent='postData' v-if='post'>
                <img v-bind:src='post.photourl' />
                {{post.photourl}}
                    <div class='input-container'>
                    <label for='title' >عنوان </label>
                    <input id='title' type='text' v-model='post.title'>
                </div>
                <div class='upload-area'>
                        <div class='section-one'>
                            <label for='description'> پاراگراف   </label>
                            <textarea v-model='post.description' id="description" name="w3review" rows="4" cols="50">
                               
                            </textarea>
                            <input type='file' @change='photoSelected'  >
                        </div>
                        
                </div>
              <div class='ok' v-if='noProblem'>
                {{noProblem}}
              </div>
                <div class='errors' v-if='errors'>
                    <div v-for='(err,index) of errors'>
                        {{err}}
                    </div>
                </div>
                <button type='submit'>ارسال</button>
        </form>
        <div class="tags" v-if="post.tags.length!=0">
            <div class="tag" v-for="(tag,index) of post.tags" :key="index">
                {{index+1}}-{{tag}}
            </div>
        </div>
                    <NuxtLink :to='{ name : "panel-index-EditTagForPost-postId" , params : {postId : post.id}}'>افزودن تگ به پست</NuxtLink>
    </div>
    
</div>
</template>
<script>
export default {
    name :'addpost' , 
    
    data() {
        return {
            noProblem : '' ,
            errors : [] ,
            postid : this.$route.params.Id ,
            post : ''
        }
    } ,
    methods : {
        photoSelected(event) {
            this.post.photo = event.target.files[0] ;
        } ,
        postData() {
            if(this.post.title && this.post.photo&&this.post.description) {
                const fd = new FormData() ;
            fd.append('photo',this.post.photo,this.post.photo.name) ;
            fd.append('title' , this.post.title);
            fd.append('description' , this.post.description);
            fd.append('postid' , this.postid)
            this.$axios.post('/post/edit-post' ,fd)
                .then(resp => {
                    this.noProblem = "پست مورد نظر با موفقیت ویرایش شد"
                    this.getAgain()
                })
                    
            }
        },
        getAgain() {
             this.$axios.$get('/post/detail'+ this.postid)
            .then( resp => {
                this.post = resp
            })
        }
    } ,
    async fetch() {
        await this.$axios.$get('/post/detail/'+ this.postid)
            .then( resp => {
                console.log(resp)
                this.post = resp
            })
    }
}
</script>
<style scoped>
* {
    padding : 0 ;
    margin : 0 ;
    border : 0 ;
    resize : none ;
    outline : none ;

}
.container {
    margin-top : 100px ;
    width : 500px ;
    margin-right : auto ;
    margin-left : auto ;
}
label {
    color : lightgray ;
}
form input {
    margin-bottom : 50px ;
    width : 420px ;
    margin-top : 10px ;
    display : block ;
    background-color : white ;
    box-shadow : 0 0 10px 2px #eee ;
    border-radius : 10px ;
    padding : 5px ;
}
textarea {
    display : block ;
    margin-top : 20px ;
    box-shadow : 0 0 10px 2px #eee ;
    border-radius : 10px ;
    padding : 5px ;
}
.number-of-parag {
    display : grid ;
    gap : 30px ;
    grid-template-columns : 1fr 2fr ;
 }
 .number-of-parag  input {
     display : block ;
    background-color : white ;
    box-shadow : 0 0 10px 2px #eee ;
    border-radius : 10px ;
    padding : 5px ;
    margin-bottom : 50px ;
 }
 .icons > * {
     cursor : pointer ;
     font-size : 2em ;
 }
 .green {
     color : #1BBEB0 ;
     
 }
 .red {
     color : #F82642 ;
 }
 .ok {
     color : green ;
     
 }
 .errors {
     color : red ;
 }
</style>