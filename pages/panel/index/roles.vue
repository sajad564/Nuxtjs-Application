<template>
    <div id='roles'>
        <NuxtLink to='{path : "/panel/addrole"}' class='addrole'>افزودن رل</NuxtLink>
        <div class="container">
            <div class="header">
                <div>آی دی نقش</div>
                <div> نام نقش</div>
                <div> تعداد کاربران دارای این نقش </div>
                <div>افزودن کاربر به رل</div>
            </div>
            <div class="body" v-if="roles" v-for="(role,index) of roles" :key="index">
                <div>{{role.id}}</div>
                <div>{{role.name}}</div>
                <div>{{role.numberofuser}}</div>
                <div>
                    <button @click="addToRole(role.name)">کیلیک کنید</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'roles' ,
        data() {
            return {
                roles : []
            }
        } , 
        async fetch() {
            await this.$axios.$get('/admin/roles')
                .then(resp => {
                   
                    this.roles = resp
                })
        } , 
        methods : {
            addToRole(rolename) {
                this.$router.push({path : '/panel/addtorole' , query : {rolename :rolename }})
            }
        }
    }
</script>
<style scoped>
    .container {
        margin-top : 100px;
        width : 95% ;
        margin-right : auto ;
        margin-left : auto ;
    }
    .header,.body {
    height : 60px;
    box-sizing : border-box ;
    padding-top : 15px;
    text-align : center ;
    color : white ;
    display : grid ;
        grid-template-columns: repeat(4,1fr);
    }
    .header {
        background-color : gray ;
    }
    .body {
        background-color : lightgray ;
    }
    a.addrole {
        text-decoration : none ;
        color : white ;
        background-color : green ;
        display : block ;
        width : 120px;
        height : 40px;
        box-sizing : border-box ;
        padding-top : 8px;
        text-align : center ;
        margin-right : auto ;
        margin-left : 100px;
        border-radius : 20px;
    }
    button {
        width : 100px;
        height : 30px;
        border-radius : 12px;
        text-align : center ;
        background-color : green ;
        color : white ;
        border : none ;
        outline : none ;
        cursor : pointer ;
    }
</style>