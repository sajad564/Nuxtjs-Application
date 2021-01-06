<template>
    <div id="deleteportfolio">
        <div class="container">
            <div class="confirm" v-if="!deletedMessage">
                <p>آیا از حذف این نمونه کار مطمئن هستید ؟</p>
                <div class="buttons">
                    <button @click="DeletePortfolio(true)">بله</button>
                    <button @click="DeletePortfolio(false)">خیر</button>
                </div>
            </div>
            <div v-if="deletedMessage">
                <p> {{deletedMessage}} </p>
                <button @click='okMethod'>تایید</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'deleteportfolio' ,
    props : ['id'] ,
    data() {
        return {
             deletedMessage : '' ,
        }
    } , 
    methods : {
        DeletePortfolio(value) {
            if(value) {
                 this.$axios.$post('/admin/delete-portfolio' , {
                id : this.id
            })
            .then(()=> {
                this.deletedMessage  = 'نمونه کار مد نظر با موفقیت حذف شد'
            })
            }
            else {
                this.$emit('removecomponent' , true)
            }
        },
        okMethod() {
            this.$emit('removecomponent',true)
            this.$emit('refreshData',true)
        }
    }
}
</script>