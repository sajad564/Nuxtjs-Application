<template>
    <div id="edittag">
        <div class="container">
            <form @submit.prevent='editTag' >
                <div class="input-container">
                    <label for="name">name</label>
                    <input type="text" id="name" v-model="tag.name">
                </div>
                <div class="message" v-if="message"> {{message}} </div>
                <div class="error" v-if="error">  {{error}} </div>
                <button type="submit">ویرایش</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name : 'edittag' , 
    data() {
        return {
            id : this.$route.params.id , 
            tag : '' , 
            message : '' , 
            error : ''
        }
    } ,
    methods : {
        editTag() {
            this.$axios.post("/admin/edit-tag" , this.tag)
                .then(() => {
                    this.tag = ''
                    this.message = 'ویرایش شد'
                    this.error = '' 
                })
                    .catch(() => {
                        this.error = 'مثل اینکه مشکلی پیش اومده لطفا بعدا امتحان کنید'
                        this.message = ''
                    })
        }
    } ,
    async fetch() {
        if(this.id) {
            await this.$axios.$get("/tag/get-tag?tagId="  + this.id)
                .then(resp => {
                    this.tag = resp
                })
        }
    }
}
</script>
<style  scoped>
* {
    margin : 0 ;
    padding : 0 ;
    border : none ; 
    outline : none ;
}
    .error,.message {
        background-color : gray ;
    }
    .error {
        color : red ;
    }
    .message {
        color : green ; 
    }
    button {
        background-color : green ;
        color : white ;
        width : 100px ;
        border-radius : 10px ;
        cursor : pointer ;
        margin-top : 30px;
        box-sizing : border-box ;
        padding : 5px 0 ;
    }
</style>