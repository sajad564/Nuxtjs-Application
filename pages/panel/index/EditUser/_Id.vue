<template>
    <div id='edituser'>
        <div class='container' v-if="user && roles" >
            <form @submit.prevent="sendData">
                <div class="input-container">
                    <label for="username">نام کاربری</label>
                    <input type="text" id='username' v-model="user.username">
                </div>
                <div class="input-container">
                    <label for="fullname">نام و نام خانوادگی</label>
                    <input type="text" id='fullname' v-model="user.fullname">
                </div>
                <div class="input-container">
                    <label for="email"> ایمیل</label>
                    <input type="text" id='email' v-model="user.email">
                </div>
                <div class="input-container">
                    
                    <input type="checkbox" id='isblock' v-model='user.isblocked' >
                    <label for="isblock" >بلاک کردن کاربر </label>
                </div>
                <div class='roles-checkbox'  >
                    <h1 class="hint">از طریق چک باکس های زیر میتوانید رل هایی که کاربر میتواند به آنها دسترسی داشته باشد را تعیین کنید</h1>
                    <div class="input-container" v-for='(role,index) of roles' :key="index">
                        <input type="checkbox" id="role" :value="role.name" v-model="user.roles">
                        <label for="role">{{role.name}}</label>
                    </div>
                </div>
                <button type="submit"> تغییر </button>
            </form>
            <div class="message" v-if="message">
                {{message}}
            </div>
            <div class="error" v-if="error">
                {{error}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'edituser',
    data() {
        return {
            user : '' , 
            roles : [] ,
            message  : '' , 
            error : ''
        }
    } ,
    async fetch() {
        let id = this.$route.params.Id
        await this.$axios.$get("/admin/change-userinfo-get?userid=" + id)
            .then(resp => {
                this.user = resp
            }) ;
        await this.$axios.$get("/admin/roles")
            .then(resp => {
                this.roles = resp
            }) ; 
        
    },
    methods : {
        sendData() {
            this.$axios.post("/admin/change-userinfo-post" , this.user)
                .then( ()=> {
                    this.message = 'اطلاعات کاربر با موفقیت تغییر یافت'
                } ) 
                    .catch( () => {
                        this.error = 'مثل اینکه مشکلی پیش اومده لطفا بعدا امتحان کنید'
                    })
        }
    }
}
</script>
<style  scoped>
.container {
    width : 80% ;
    margin-right : auto ;
    margin-left : auto ;
}
.error {
    background-color : lightgray ;
    color : red ;
}
.message {
    background-color : lightgray ;
    color : green ;
}
.roles-checkbox {
    margin-top : 50px;
}
.hint {
    font-size : 20px;
    margin-bottom : 50px;
}
</style>