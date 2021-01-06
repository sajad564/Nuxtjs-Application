<template>
    <div id="edittagforpost">
        <div class="container">
            <div class="tags" v-if="tags.length!=0">
                <form @submit.prevent='sendData'>
                    <div class="tag" v-for="(tag,index) of tags" :key="index" >
                    <input type="checkbox" id="tag" v-model='tag.isinpost'>
                    <label for="tag">{{tag.name}}</label>
                </div>
                <div class="error" v-if="error">
                    {{error}}
                </div>
                <div class="message" v-if="message" >
                    {{message}}
                </div>
                <button type="submit">ارسال</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'edittagforpost' ,
    data() {
        return {
            id : this.$route.params.postId ,
            tags : [] , 
            error : '',
            message : ''
        }
    } , 
    methods : {
        sendData() {
            this.$axios.post("/admin/edit-tag-for-post-post?PostId=" + this.id , this.tags)
            .then(() => {
                this.message = 'اعمال شد'
                this.error = ''
            })
                 .catch(() => {
                     this.message = ''
                     this.error = 'مثل اینکه مشکلی پیش اومده, لطفا اطلاعات خود را بررسی کنید و یا بعدا امتحان کنید'
                 })
        }
    } ,
    async fetch() {
        await this.$axios.$get("/admin/edit-tag-for-post-get?postid=" + this.id)
            .then(resp => {
                this.tags = resp
            })
                .catch(err => {
                    if(err.response.status==404) {
                        this.error = 'در حال حاضر هیچ تگی برای این پست ثبت نشده است'
                    }
                })
    }
}
</script>
<style scoped>
    .error,.message {
        background-color : lightgray ;
    }
    .error {
        color : red ;
    }
    .message {
        color  : green ;
    }
</style>