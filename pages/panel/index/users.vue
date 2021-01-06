<template>
<div id='userslist'>
    <div class='container'>
        <table >
            <tr>
                <th> آی دی کاربر </th>
                <th>نام کاربری </th>
                <th>نام و نام خانوادگی</th>
                <th>تعداد پست </th>
                <th> تعداد کامنت </th>
                <th>سطح دسترسی</th>
                <th>مسدود کردن</th>
                <th> تاریخ عضویت </th>
                <th>آخرین بازدید</th>
                <th>تغییر مشخصات</th>
            </tr>
            <tr v-if='users' v-for='(user,index) of users' :key='index'>
                <th> {{user.username}} </th>
                <th> {{user.id}} </th>
                <th>{{user.fullname}} </th>
                <th>{{user.role}} </th>
                <th> {{user.commentNumber}}</th>
                <th>کاربر</th>
                <th> <blockuser :userid='user.id' :isblocked='user.isBlocked' /></th>
                <th>1399/2/3 </th>
                <th>دو ساعت قبل </th>
                <th> <NuxtLink :to='{name : "panel-index-EditUser-Id" ,  params : {Id : user.id}}' class='black'> کیلیک کنید </NuxtLink> </th>
            </tr>
            
        </table>
        <paginationbuttons @response='getFromChild' :pageCount='totalPage' :routename="'/admin/user_list'" v-if="totalPage" />
    </div>
</div>
</template>
<script>
import paginationbuttons from '~/components/shared/PaginationButton'
import blockuser from '~/components/panel/BlockUser'
export default {
    name : 'userslist' ,
    data() {
        return {
            users : [] ,
            totalPage : ''
        }
    }  ,
    methods : {
        getFromChild(value) {
            this.users = value 
        }
    } , 
    async fetch() {
        await this.$axios.get('/admin/user_list')
            .then(resp => {
                this.users = resp.data
                let pagination =  JSON.parse(resp.headers.pagination)
                this.totalPage = pagination.totalpage
            })
    } ,
    components : {
       blockuser ,
        paginationbuttons
    }
}
</script>
<style scoped>
* {
    padding :0 ;
    margin : 0 ;
    border : none ;
    outline : none ;
}
.container {
    
    box-sizing : border-box ;
    padding : 100px 30px ;
    background-color : #F7F7F7 ;
}
th {
    padding : 30px 0 ;
    text-align : center ;
    
}
table {
    box-shadow : 0 0 10px 2px #1F2837 ;
    border-radius : 10px ;
    color : lightgray ;
    width : 100%  ;
    background-color : white ;
}
button {
    cursor : pointer ;
}
.red {
    background-color : #F34334 ;
    border-radius : 5px ;
    color : white ;
    padding : 5px ;
}
.black {
    background-color : #1F2837 ;
    border-radius : 5px ;
    color : white ;
    padding : 5px ;
}
</style>