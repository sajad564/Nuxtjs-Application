<template>
    <div id="showroute">
        <div class="container">
            <div class="route">
                <span class="route-icon"><font-awesome-icon :icon='["fas","home"]' /></span>
                <p class="route-links-container">
                    <NuxtLink to='/' class="route-link">صفحه اصلی</NuxtLink> &gt;
                    <NuxtLink to='{name : currentRoute}' class="route-lik"> {{routeNameMessage()}} </NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'showroute' , 
    data() {
        return {

        }
    } , 
    computed: {
        currentRoute() {
            return this.$route.name  ; 
        }
    },
    methods: {
        routeNameMessage() {
            if(this.currentRoute=='contactus') {
                return "ارتباط با ما "
            }
            if(this.currentRoute=='portfolio') {
                return "نمونه کار ها"
            }
             if(this.currentRoute=='login') {
                return "ورود"
            }
             if(this.currentRoute=='register') {
                return " ایجاد حساب"
            }
             if(this.currentRoute=='profile') {
                return "حساب کاربری"
            }
             if(this.currentRoute=='order') {
                return "سفارش"
            }
             if(this.currentRoute=='feature') {
                return " خدمات"
            }
            if(this.currentRoute=='posts') {
                return " بلاگ"
            }
            if(this.currentRoute=='trackingorder') {
                return " پیگیری سفارش"
            }
            if(this.currentRoute=='aboutus') {
                return "  درباره ما"
            }
             if(this.currentRoute=='admins') {
                return " ادمین ها"
            }
             if(this.currentRoute=='edituser') {
                return " ویرایش کاربر"
            }
             if(this.currentRoute=='addfeature') {
                return "افزودن ویژگی"
            }
             if(this.currentRoute=='managecomments') {
                return " مدیریت کامنت ها"
            }
            if(this.currentRoute=='usersorder') {
                return "سفارشات کاربران"
            }
            if(this.currentRoute=='addservice') {
                return " افزودن خدمات"
            }
            if(this.currentRoute=='addquestion') {
                return " افزودن سوالات رایج  "
            }
            if(this.currentRoute=='statistics') {
                return "   پنل ادمین(نمای کلی)  "
            }
            if(this.currentRoute=='users') {
                return "   لیست کاربران  "
            }
            if(this.currentRoute=='roles') {
                return " لیست رل ها"
            }
            if(this.currentRoute=='manageposts') {
                return "    مدیریت پست ها  "
            }
            if(this.currentRoute=='addorder') {
                return " ثبت سفارش  "
            }
            
            
        }
    },
}
</script>
<style  scoped>
#showroute {
    margin-top : 50px;
    
}
* {
    font-size: 14px;
    margin : 0 ;
    border : none ; 
    padding : 0 ;
    text-decoration: none;
    
}
.container {
    text-align: center;
   
}
.route , .route a {
    color : #C4C4C4 ; 
}
p.route-links-container {
    display: inline;
}
</style>