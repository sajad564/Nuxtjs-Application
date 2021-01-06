<template>
    <div id='statistics'>
        
            <div class='container'>
                <div class='section '>
                    <div class='circle posts'><h2> {{counts.post}} پست </h2></div>
                </div>
            <div class='section '>
                <div class='circle admins'><h2>{{counts.admin}} ادمین </h2></div>
            </div>
            <div class='section '>
                <div class='circle users' ><h2>{{counts.user}} کاربر </h2></div>
            </div>
            <div class='section '>
                <div class='circle portfolios' ><h2> {{counts.portfolio}} نمونه کار </h2></div>
            </div>
            </div>
    </div>
</template>
<script>
    export default {
        name : 'statistics',
        data() {
            return {
                counts : {
                    admin : '' ,
                    user : '' , 
                    portfolio : '' ,
                    post : ''
                }
            }
        } ,
        async fetch() {
            await this.$axios.$get('/admin/statistics')
                .then(resp => {
                    this.getCounts(resp)
                })
        } , 
        methods : {
            getCounts(data) {
                this.counts.admin = data.adminCount
                this.counts.portfolio = data.portfolioCount
                this.counts.user = data.userCount
                this.counts.post = data.postCount
            }
        }
    }
</script>
<style scoped >
*{
    padding :0 ;
    margin : 0 ;
    border : none ;
    outline : none ;
    text-decoration : none ;
}
#statistics {
    background-color : #E0E8F5 ;
     
}

.container {
     width : 900px ;
     height : 600px ;
    
    
    gap : 40px ;
    display : grid ;
    grid-template-columns : repeat(2,1fr);
}
.section {
    border-radius : 10px ;
    box-sizing : border-box ; 
    padding : 20px ;
    background-color : #FFFFFF ;
    
}
.circle {
    text-align : center ;
    margin-right : auto ;
    box-sizing : border-box ;
    padding : 100px  0;
    margin-left : auto ;
    width : 240px ;
    height : 240px ;
    
    border-radius : 50%; 
    
}
.posts {
    box-shadow : 0 0 15px 2px #39A9FC ;
    color : #39A9FC ;
}
.admins {
    
    box-shadow : 0 0 15px 2px #1BC0AF ;
    color : #1BC0AF ;
}
.users {
    
    box-shadow : 0 0 15px 2px #FCB644 ;
    color : #FCB644 ; 
}
.portfolios {
    box-shadow : 0 0 15px 2px  #F54C61; 
    color : #F54C61 ;
}
.circle:hover {
    cursor : pointer ;
    font-size : 1.3em ;
}
</style>