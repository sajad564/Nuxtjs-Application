<template>
    <div id='addfeature'>
        <div class='container'>
            <form @submit.prevent='addFeatureToDb'>
                <div class='input-container'>
                    <label for='name' >عنوان ویژگی </label>
                    <input type='text' id='name' v-model='featurename' >
                </div>
                <div class='error' v-if='error'> {{error}} </div>
                <div class='ok' v-if='message'>  {{message}} </div>
            <button type='submit' >ذخیره</button>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'addfeature' ,
        data() {
            return {
                featurename : '',
                message : '',
                error : ''
            }
        },
        methods : {
            addFeatureToDb() {
                if(this.featurename) {
                     this.$axios.$post('/services/add-feature', {
                        featurename : this.featurename
                    })
                        .then(() => {
                            this.featurename =''
                            this.error = ''
                            this.message = 'ویژگی مورد نظر با موفقیت در دیتابیس ذخیره شد'
                        })
                        .catch(() => {
                            this.error ='مثل اینکه مشکلی پیش اومده ,لطفا بعدا امتحان کنید'
                            this.message =''
                        })
                }
                else {
                    this.error ='لطفا فیلد مورد نظر را پر کنید'
                    this.message =''
                }
            }
        }
    }

</script>
<style scoped>
.ok {
    color : green ;
}
.error {
    color : red ;
}
</style>