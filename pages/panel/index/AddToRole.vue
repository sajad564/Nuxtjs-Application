<template>
    <div id='addtorole'>
        <div class="container">
            <div v-if='users.length!=0'>
                <h1>وضعیت حضور کاربران در رل  {{rolename}}</h1>
                <div class="change">
                    <button @click='performChanges' >اعمال تغییرات</button> 
                    <p v-if="error" class='error'> {{error}} </p>
                    <p v-if="message" class='message'>{{message}}</p>
                </div>
                <div class="header">
                    <div>وضعیت حضور در رُل</div>
                    <div>آی دی کاربر</div>
                    <div>نام کاربری</div>
                    <div>ایمیل</div>
                </div>
                <div class="body" v-for='(user,index) of users' :key="index" >
                    <div>
                            <input  type="checkbox" id='isinrole' v-model="user.isinrole">
                    </div>
                    <div>{{user.id}}</div>
                    <div> {{user.username}} </div>
                    <div> {{user.email}} </div>
                    
                </div>
            </div>
            <div class="error" v-if="error && users.length==0">
                {{error}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'addtorole', 
    data() {
        return {
            error : '' ,
            message : '' , 
            users : [] ,
            rolename : this.$route.query.rolename
        }
    }, 
    async fetch() {
        await this.$axios.$get("/admin/get-users-in-role?Rolename=" + this.rolename )
            .then(resp => {
                this.users = resp
            })
                .catch(() => {
                    this.error = 'لطفا بعدا امتحان کنید'
                })
    },
    methods : {
        performChanges() {
            this.$axios.post("/admin/change-users-in-role?rolename=" + this.rolename , this.users)
                .then(() => {
                    this.message = 'تغییرات با موفقیت اعمال شد'
                })
                    .catch(() => {
                        this.error = 'مثل اینکه مشکلی پیش اومده,لطفا بعدا امتحان کنید'
                    })
        }
    }
}
</script>
<style scoped>
* {
    margin : 0 ;
    padding : 0; 
    border : none ;
}
.container {
    margin-top : 50px;
    width : 90% ;
    margin-right : auto ;
    margin-left : auto ;
}
h1 {
    text-align : center ;
    margin-bottom : 30px;
}
.header,.body {
    box-sizing : border-box ;
    padding : 0 30px;
    display : grid ;
    color : white ;
    grid-template-columns : repeat(4,1fr) ; 
}
.header {
    background-color : gray ;
}
.body {
    background-color : lightgray ;
}
.error {
    background-color : lightgray ; 
    color : red ;
}
.change {
    display : grid ;
    grid-template-columns : repeat(2,1fr) ;
}
.message {
    color : green ;
}
</style>