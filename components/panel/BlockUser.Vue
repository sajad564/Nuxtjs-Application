<template>
    <div id='blockuser'>
        <button class='red' v-if='isblocked!=true' @click='blockChange'>مسدود سازی</button>
       
        <button class='green' v-if='isblocked==true' @click='blockChange'>آزاد سازی</button>
    </div>
</template>
<script>
export default {
    name : 'blockuser' ,
    props : ['userid' ,'isblocked'] ,
    data() {
        return {

        }
    } ,
    methods : {
        blockChange() {
             this.$axios.$post('/admin/block_user' , {
                userid : this.userid
            })
                .then(resp => {
                    this.isblocked = !this.isblocked
                })
        }
    }
}
</script>
<style scoped>
* {
    border : none ;
    padding : 0 ;
    margin : 0 ;
    outline : none ;
}
#blockuser {
    display : inline ;
}
.red {
    border-radius : 10px;
    width : 100px;
    padding : 10px 15px ;
    background-color : red ;
    color : white ;
}
</style>