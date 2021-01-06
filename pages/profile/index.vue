<template>
  <div id="profile">
  
     
      <div class="container">
          <div class="information">
              <div class="img-container">
                  <img :src="userinfo.photourl" alt="">
              </div>
              
                <div class="welcome user-option">خوش اومدی ,{{userinfo.username}}</div>
                <div class='inline-mobile'>
              <div class="payed user-option">پرداختی ها</div>
              <div class="orders user-option"> <NuxtLink to='/profile/orders'>سفارش ها</NuxtLink> </div>
              <div class="comments user-option"> <NuxtLink to="/profile/comments" >کامنت ها</NuxtLink> </div>
             
              <div class="tickets user-option x"> <NuxtLink to='/profile/tickets'>تیکت ها</NuxtLink> </div>
              </div>
          </div>
          <div class='left-side'>
            <div class="logout">
              <button class="logout-button" @click="signOut">خروج</button>
          </div>
          <div class='child-components'>
            <NuxtChild/>
          </div>
          </div>
      </div>
      
  </div>
</template>

<script>

export default {
name : 'profile' , 
data() {
    return {
        userinfo : {
            username : '' , 
            email : '' , 
            fullname : '' , 
            photourl : ''
        }
        
    }
},
 beforeMount() {
     this.$axios.$get("/account/profile")
        .then(resp => {
            console.log(resp)
            this.setData(resp)

        })
            .catch(err => {
                console.log(err)
            })
} , 
methods : {
    signOut() {
        if(process.browser) {
            this.deleteLocalData() ;
            this.$router.push({ path: '/' }) 
        }
    } ,
    deleteLocalData() {
        localStorage.removeItem("access_token") ;
    } ,
    setData(data) {
         this.userinfo.username = data.username 
         this.userinfo.email = data.email 
         this.userinfo.fullname = data.fullname 
         this.userinfo.photourl = data.photoUrl
    }
} ,

}
</script>

<style scoped>

* {
    margin : 0 ;
    border : none ;
    padding : 0 ; 
    text-decoration: none;
}
#profile {
    background-image: url("~assets/background-wave.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
.information {
    position : relative ;
}
div.container {
    display: grid ;
    min-height :500px ;
    box-sizing: border-box;
    padding :0 20px 20px 20px;
    grid-template-columns: 1fr 3fr ;
    margin-top : 100px;
    width :70%  ; 
     background-color : white ;
    box-shadow: 0 0 5px 0.5px #eee;
    margin-right : auto ;
    margin-left : auto ; 
    margin-bottom : 30px;
    border-radius: 5px;
}
.img-container {
    width : 110px ;
    height : 110px;
    position : absolute ;
    top : 0 ;
    right : 50px ;
    transform : translateY(-50%) ;
    
}
img {
    border-radius: 50%;
    height : 100% ;
    width : 100% ;
    

}
.user-option {
    cursor : pointer ;
    color : #929292 ;
    
    padding-bottom : 7px ;
    padding-right : 8px ;
    width : 200px;
    margin : 25px 0  ;
}
.user-option > a {
    color : #929292 ; 
}
.welcome {
    margin-top: 60px;
    padding-right: 0;
    margin-bottom: 30px;
    text-align: center;
    color : #373737 ;
    font-weight: bold;
}
.tickets {
    border : none ;
}
.logout {
    text-align: center;
    box-sizing: border-box;
    padding :50px;
    height : 100px;
    
}
.logout-button {
    
    margin-right : auto ;
    display : block ;
    cursor: pointer;
    border-radius: 20px;
    background-color: #FE8182;
    color : white ;
    width: 140px;
    padding : 10px;
   
}
.logout-button:hover {
    box-shadow : 0 0 10px 1px #FE8182; 
}

@media only screen and (max-width :902px) {
    div.container {
        width : 85% ;
        
        
    }
}
@media only screen and (max-width :870px) {
    div.container  {
        position : relative ;
        grid-template-columns : 1fr ;
      
    }
    /* .welcome {
        margin-right : 20px;
    } */
    .inline-mobile {
        display : grid ;
        gap : 15px ;
        text-align : center ;
        grid-template-columns : repeat(4,1fr)
    }
    .inline-mobile > div:hover {
        box-shadow:  #2086EA  0px 10px 5px -10px;
        border : none ;
        transition : all .3s ;
    }
    .user-option:not(.welcome) {
        width : auto ;
        
    }
    .tickets {
        border-bottom : .1px solid #EEEEEE; 
    }
    
    .logout {
        position : absolute ;
        top : -20px;
        left : 5px ;
    }
    
}
@media only screen and (max-width :580px) {
    
    .img-container {
        position : absolute ;
        right : 50% ;
        transform:  translate(50%,-50%);
    }
    .logout {
        margin-top : 20px;
       left : 50% ;
       transform : translateX(-50%) ; 
       top : 45px;
    }
    .welcome {
        position : absolute ;
        left : 50% ;
        transform : translateX(-50%) ; 
        top : 5px;
    }
    .inline-mobile {
        margin-top : 160px ;
    }
}
@media only screen and (max-width :500px) {
    
    .inline-mobile {
        gap : 5px ;
        font-size : 12px ;
        margin-top : 200px ;
    }
}
</style>