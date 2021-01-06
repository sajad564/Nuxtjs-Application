<template>
    <div id='addportfolio'>
        <div class='container' @submit.prevent='addPort'>
            <form enctype="multipart/form-data">
                <div class='input-container'>
                    <label for='name'> نام وبسایت </label>
                    <input id='name' type='text' v-model='portfol.webname'>
                </div>
                <div class='input-container'>
                    <label for='link'> لینک وبسایت </label>
                    <input id='link' type='text' v-model='portfol.link'>
                </div>
                <div class='input-container'>
                    <label for='photo'>  آپلود عکس </label>
                    <input id='photo' type='file' multiple='multiple' @change='selectedPhoto'>
                </div>
                <button type='submit'>افزودن </button>
                <div class='error-message' v-if='message || error'>
                    <div class="error"> {{error}} </div>
                    <div class="message">{{message}}</div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'addportfolio' , 
        data() {
            return {
                message : '' ,
                portfol : {
                    webname : '' ,
                    link : '' ,
                    photos : []
                },
                error : ''
            }
        },
        methods : {
            addPort() {
                const  fd = new FormData();
                fd.append('websiteName' , this.portfol.webname) ;
                fd.append('link',this.portfol.link) ;
                
                //  fd.append('photos',this.portfol.photos);
               
                for(let i=0;i<this.portfol.photos.length;i++) {
                    fd.append('file'+ i  , this.portfol.photos[i],this.portfol.photos[i]) ; 
                }
                this.$axios.$post('portfolio/add',fd , {
                    headers : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }).then(resp => {
                    this.portfol.link = '' ;
                    this.portfol.webname = ''
                    this.portfol.photos = []
                    this.message = "نمونه کار با موفقیت ذخیره شد"
                 }).catch(()=>{
                    this.error = 'مثل اینکه مشکلی پیش اومده,لطفا بعدا امتحان کنید'
                 })
            } , 
            selectedPhoto(event) {
                for(let i =0 ;i< event.target.files.length;i++) {
                    this.portfol.photos[i] = event.target.files[i]
                }
            }
        }
    }
</script>
<style scoped>
.error {
    color : red ;
}
.message {
    color : green ;
}
</style>