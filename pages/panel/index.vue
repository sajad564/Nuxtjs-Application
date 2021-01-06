<template>
    <div id='adminsidebar'>
   
        <div class='container'>
        <div class='header'>
            <h2>پنل ادمین</h2>
        </div>
            <div class='links'>
                <div class='link'>
                    <NuxtLink to='/panel/orders'> سفارشات</NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/posts'>پست ها</NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/tags'>تگ ها</NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/tickets'>تیکت ها</NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/portfolios'> نمونه کار ها </NuxtLink>
                </div>
                 <div class='link'>
                    <NuxtLink to='/panel/contactuslist'>   ارتباط با ما </NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/comments' >آخرین کامنت ها</NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/services'> سرویس ها</NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/addfeature'> افزودن ویژگی </NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/users'> لیست کاربران</NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/roles'> رل ها </NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/admins'>ادمین ها</NuxtLink>
                </div>
                <div class='link'>
                    <NuxtLink to='/panel/faq'> سوالات متداول</NuxtLink>
                </div>
                
            </div>
        </div>
         <NuxtChild/>
    </div>
</template>
<script>

export default {
    name :'adminsidebar' , 
    data() {
        return {

        }
    } , 
    components : {
    }
}
</script>
<style scoped>
* {
    padding : 0 ;
    margin : 0 ;
    border : none ;
    outline : none ;
}
#adminsidebar{
    display : grid ;
    padding-top : 100px ;
    padding-bottom : 100px;
    gap : 30px ;
    background-color : #E0E8F5 ;
    grid-template-columns : 2fr 6fr; 
}
a {
    display : block ;
    color : lightgray ;
    text-decoration : none ;
}
div.container {
    border-top-left-radius : 20px ;
    border-bottom-left-radius : 20px ;
    
    
    background-color : #1F2837 ;
    padding-bottom : 15px ;
}
.link {
    text-align : center ;
    margin-top : 50px ;
    
}
.link:hover {
    font-size : 1.3em ;
}
.header {
    text-align : center ;
    height :50px ;
    background-color : #F44236 ;
    color : white ;
    padding-top : 10px ;
    border-top-left-radius : 20px ;
}
</style>