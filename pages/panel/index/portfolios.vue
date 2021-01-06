<template>
    <div id="portfoliolist">
        <div class="container">
            <div class="add-portfolio">
                <NuxtLink to='{path : "/panel/addportfolio"}'>جدید</NuxtLink>
            </div>
            <div class="table-container" v-if="portfolios.length!=0">
                <div class="header">
                    <div class="field">نام وبسایت</div>
                    <div class="field">لینک وبسایت</div>
                    <div class="field">تصاویر</div>
                    <div class="field">حذف</div>
                </div>
                <div class="portfolios" v-for="(portfolio,index) of portfolios" :key="index" >
                    <div class="body">
                        <div class="field"> {{portfolio.websitename}} </div>
                        <div class="field">{{portfolio.link}}</div>
                        <div class="field photos" @click="showimg=portfolio.id">[]</div>
                        <div class="field">
                            <button @click="deleteId=portfolio.id">کیلیک کنید</button>
                        </div>
                    </div>
                    <div class="delete-portfolio" v-if="deleteId==portfolio.id">
                        <deleteportfolio :id="deleteId" @removecomponent='removeChild' @refreshData='refreshData' />
                    </div>
                    <div class="portfolio-imgs" v-if="showimg==portfolio.id">
                        <imgs :id='showimg' />
                    </div>
                </div>
                
            </div>
            <div class="error" v-if="error">
                {{error}}
            </div>
        </div>
    </div>
</template>
<script>
import deleteportfolio from '~/components/panel/DeletePortfolio'
import imgs from '~/components/panel/PortfolioImgs'
export default {
    name : 'portfoliolist' ,
    data() {
        return {
            portfolios : [] ,
            error : '',
            deleteId : '' , 
            showimg : ''
        }
    } , 
    async fetch() {
        await this.$axios.$get('/admin/portfolio-list')
            .then(resp => {
                this.portfolios = resp
            })
                .catch(() => {
                    this.error ='در حال حاضر نمونه کاری موجود نمیباشد'
                })
    } ,
    methods : {
        removeChild(value) {
            if(value) {
                this.deleteId = ''
            }
        },
        refreshData(value) {
        if(value) {
             this.$axios.$get('/admin/portfolio-list')
            .then(resp => {
                this.portfolios = resp
            })
                .catch(() => {
                    this.error ='در حال حاضر نمونه کاری موجود نمیباشد'
                })
        }
    } 
    }  ,
    
    components : {
        deleteportfolio,
        imgs
    }
}
</script>
<style scoped>
*{
    margin : 0 ;
    padding : 0 ;
    border : none ;
    outline : none ;
}
.container {
    width : 80% ;
    margin-top : 100px;
}
.add-portfolio {
    margin-bottom : 10px;
    text-align : center ;
    width : 60px;
    background-color : green ;
    
    border-radius : 12px;
    margin-right : auto ;
}
.add-portfolio a {
    display : block;
    color : white ;
    text-decoration : none ;
}
.portfolios-container {
    
    margin-right : auto ;
    margin-left : auto ;
}
.header,.body {
    display : grid ;
    grid-template-columns : repeat(4,1fr) ;
    height : 30px;
}
.header {
    background-color : gray ;
}
.body {
    background-color : lightgray ;
}
.photos {
    cursor : pointer ;
}
    .error {
        background-color : lightgray ;
        color : red ;
        width : 60% ;
        box-sizing : border-box ;
        padding : 20px;
        text-align : center ;
    }
</style>