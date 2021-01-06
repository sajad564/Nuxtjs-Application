<template>
    <div id='managecomments'>
        <div class='container'>

            <div class='comments-container'>
                <div class='comment-header'>
                    <div class='comment-option'>آیدی</div>
                    <div class='comment-option'>متن کامنت</div>
                    <div class='comment-option'>تاریخ </div>
                    <div class='comment-option'>زمان</div>
                    <div class='comment-option'>آیدی نویسنده</div>
                    <div class='comment-option'>نام نویسنده</div>
                    <div class="comment-option">نمایش در ایندکس</div>
                    <div class='comment-option'> وضعیت</div>
                    <div class='comment-option'> پروفایل نویسنده</div>
                    <div class='comment-option'>  تغییر وضعیت</div>
                </div>
                <div class='comments' v-if='comments'>
                <div class='single-comment' v-for='(comment,index) of comments' :key="index">
                    <div class='single-comment-data'>

                        <div class='comment-option'> {{comment.id}} </div>
                    <div class='comment-option'> {{comment.description}} </div>
                    <div class='comment-option'> {{comment.persiandate}} </div>
                    <div class='comment-option'> {{comment.persiantime}} </div>
                    <div class='comment-option'> {{comment.userid}} </div>
                    <div class='comment-option'> {{comment.username}} </div>
                    <div>
                      <font-awesome-icon v-if="comment.isinindex" style="color : green; " :icon='["fas","check"]' />
                      <font-awesome-icon v-if="!comment.isinindex" style="color : red;" :icon='["fas","times"]' />
                    </div>
                    <div class='comment-option'> {{commentState(comment.havepermission)}} </div>
                    <div class='comment-option'> <img :src='comment.photourl'> </div>
                    <div class='comment-option'> <button @click='ShowChangeState(comment.id)'> برای تغییر کیلیک کنید</button> </div>
                    </div>
                    <div class='single-comment-change-state' v-if='comment.id==changeStateId'> 
                        <commentstate :id='comment.id' :state='comment.havepermission' :index='comment.isinindex' />
                     </div>
                </div>
            </div>
            </div>
            <div class='error' v-if='error'>
                {{error}}
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import commentstate from '~/components/panel/CommentState'
    export default {
        name : 'managecomments' ,
        data() {
            return {
                comments : '' , 
                error : '' , 
                changeStateId : ''
            }
        } , 
        components : {
            commentstate
        } ,
        methods : {
            ShowChangeState(value) {
                this.changeStateId = value ; 
            } ,
            commentState(value) {
                if(value==0) {
                    return 'در انتظار بررسی'
                }
                if(value==1) {
                    return 'تایید شده'
                }
                if(value==2) {
                    return 'عدم نمایش'
                }
            }
        } , 
        async fetch() {
            await this.$axios.$get('/admin/get-comments')
                .then(resp => {
                    
                    this.comments = resp
                })
                    .catch(() => {
                        this.error = 'مثل اینکه مشکلی یپش اومده لطفا بعدا امتحان کنید'
                    })
        }
    }
</script>
<style scoped >
    *{
        margin: 0 ; 
        padding : 0 ;
        border : none ;
        outline : none;
    }
    .comment-header{
        text-align : center ;
        box-sizing : border-box ;
        padding : 20px;
        display : grid ;
        grid-template-columns : repeat(10,1fr) ; 
        background-color : gray ;
        color : white ;

    }
    .comments {
         box-sizing : border-box ;
        padding : 20px;
    }
    .single-comment-data {
        font-size : .9em ;
        text-align : center;
        display : grid ;
        grid-template-columns : repeat(10,1fr) ; 
        background-color : lightgray ; 
        color : gray ;
        border-bottom : .2px solid #eee ; 
    }
    img {
        width : 100%;
    }
    button {
        margin-top : 20px;
        width : 90px;
        border-radius : 12px;
        background-color : green ;
        color : white ;
        padding : 5px;
        cursor : pointer ;
    }
    .single-comment-change-state {
        height : 200px;
        animation : changestateanimation 1s ;
        border : 1px solid black ;
    }
    @keyframes changestateanimation {
        0% {
            height : 0 ;
            opacity : 0;
        }
        100%{
            opacity : 1 ;
            height : 200px;
        }
    }
</style>