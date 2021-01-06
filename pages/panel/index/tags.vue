<template>
    <div id="managetags">
        <div class="container" >
            <div class="add">
                <button class="add-button" @click="addTag"><font-awesome-icon :icon='["fas","plus"]' /></button>
            </div>
            <div class="tag-header">
                 <div class="tag-prop">آیدی</div>
                  <div class="tag-prop">نام</div>
                  <div class="tag-prop">ویرایش</div>
            </div>
            <div class="tags" v-if="tags.length!=0" >
                <div class="tag" v-for="tag of tags" >
                    <div class="tag-prop">{{tag.id}}</div>
                    <div class="tag-prop"> {{tag.name}} </div>
                    <div class="tag-prop"> <button @click="editTag(tag.id)" class="add-button">کیلیک کنید</button> </div>
                </div>
            </div>
            <div class="error" v-if="error">
                {{error}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'managetags' , 
    data() {
        return {
            tags : [] , 
            error  : ''
        }
    } , 
    async fetch() {
        await this.$axios.$get("/admin/get-tags")
            .then(resp => {
                this.tags = resp
            })
                .catch(err => {
                    if(err.response.status==404) {
                        this.error = 'در حال حاضر هیچ تگی وجود ندارد'
                    }
                })
    } ,
    methods : {
        addTag() {
            this.$router.push({path : '/panel/addtag'})
        } , 
        editTag(id) {
            this.$router.push({name : 'panel-index-EditTag-id' , params : {id : id}})
        }
    }
}
</script>
<style scoped>
    * {
        margin : 0 ;
        padding : 0 ;
        border : none ;
        outline : none ;
    }
    .container {
        width : 90% ;

    }
    .error {
        background-color : lightgray ;
        color : red ;
        box-sizing : border-box ;
        padding-top : 17px;
        height : 60px;
        text-align : center ;
    }
    .tag-header {
        background-color : gray ;
        color : white ;
    }
    .tags {
        background-color : lightgray ;
        color : white ;
    }
    .tag-header,.tag {
        box-sizing : border-box ;
        padding :20px  ; 
        align-content : center ;
        display: grid;
        grid-template-columns : auto 50px 100px ; 
        grid-gap: 30px;
    }
    .tag-prop { 
        text-align : center ;
    }
    .add-button {
        cursor : pointer ;
        
        background-color :green ;
        display : block ;
        margin-right : auto ;
        color : white ;
        text-align : center ;
        width : 80px;
        border-radius : 10px;
        box-sizing : border-box ;
        padding : 5px 0 ;
    }
    .add {
        margin-bottom : 20px;
    }
</style>