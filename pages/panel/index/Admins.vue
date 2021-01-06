<template>
    <div id='admins'>
        <div class='container' v-if='admins.length!=0'>
            <div class="header">
                <div>نام و نام خانوادگی</div>
                <div>نام کاربری</div>
                <div>ایمیل</div>
                <div>شماره تماس</div>
                <div>تعداد کامنت ها</div>
                <div>تعداد پست ها</div>
                <div>عکس پروفایل</div>
            </div>
            <div class="body" v-if="admins.length!=0" v-for="admin of admins">
                <div> {{admin.fullname}} </div>
                <div>{{admin.username}}</div>
                <div>{{admin.email}}</div>
                <div>{{admin.phonenumber}}</div>
                <div>{{admin.commentscount}}</div>
                <div>{{admin.postcount}}</div>
                <div>
                    <img :src="admin.photourl" alt="picture of admin">
                </div>
            </div>
        </div>
        <div class="error" v-if="error">
            {{error}}
        </div>
    </div>
</template>
<script>
export default {
    name : 'admins' , 
    data() {
        return {
            admins : [],
            error : ''
        }
    } ,
    async fetch() {
        await this.$axios.$get("/admin/admins")
            .then(resp => {
                this.admins  = resp
            })
                .catch(()=> {
                    this.error = 'مثل اینکه مشکلی پیش اومده,شاید هم فعلا هیچ ادمینی وجود نداشته باشه...در هرصورت لطفا بعدا امتحان کنید'
                })
    }
}
</script>
<style scoped>
    .error {
        height : 60px;
        box-sizing : border-box ;
        padding-top : 20px ;
        width : 80%;
        margin-right : auto ;
        margin-left : auto ;
        text-align : center ;
        margin-top : 120px;
        background-color : lightgray ;
        color : red ;
        
    }
    #admins {
        margin-top : 100px;
    }
    .container {
        
        width : 95% ;
        margin-right : auto ;
        margin-left : auto ;
    }
    .header {
        background-color : gray
    }
    .body {
        background-color : darkgray;
    }
    .header,.body {
        box-sizing : border-box ;
        padding : 20px;
        color : white ;
        display : grid ;
        grid-template-columns : repeat(7,1fr) ;
    }
    img {
        width : 100% ;
        height : auto ;
    }
</style>