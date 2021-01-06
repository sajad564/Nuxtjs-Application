<template>
    <div id="contactuslist">
        <div class="container">
            <div class="table" v-if="data.length!=0">
                <div class="single-contact" v-for="(contact ,index) of data" :key="index">
                    <div class="row">
                        <div class="half-line">آیدی</div>
                        <div class="half-line"> {{contact.id}} </div>
                    </div>
                    <div class="row">
                        <div class="half-line">نام</div>
                        <div class="half-line"> {{contact.fullName}} </div>
                    </div>
                    <div class="row">
                        <div class="half-line">ایمیل</div>
                        <div class="half-line"> {{contact.email}} </div>
                    </div>
                    <div class="row">
                        <div class="half-line">شماره تماس</div>
                        <div class="half-line"> {{contact.phoneNumber}} </div>
                    </div>
                    <div class="row">
                        <div class="half-line">کد رهگیری</div>
                        <div class="half-line"> {{contact.trackingCode}} </div>
                    </div>
                    <div class="row">
                        <div class="half-line">پیام</div>
                        <div class="half-line"> {{contact.message}} </div>
                    </div>
                    <div class="row">
                        <div class="half-line">پاسخ</div>
                        <div class="half-line">
                             <textarea  v-model='contact.response' id="" cols="60" rows="6"></textarea>
                            <span v-if="updatedId==contact.id">
                                <font-awesome-icon class='update-icon' :icon='["fas","check"]'/>
                            </span>
                         </div>
                    </div>
                    <div class="row">
                        <div class="half-line">بروزرسانی</div>
                        <div class="half-line">
                            <button @click='updateMessage(contact.response , contact.id)'>کیلیک کنید</button>
                        </div>
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
export default {
    name : 'contactuslist' , 
    data() {
        return {
            data : [],
            error : '' ,
            updatedId  : ''
        }
    } , 
    async fetch() {
        await this.$axios.$get("/admin/get-contact-us")
            .then(resp => {
                this.data = resp
            })
                .catch(() => {
                    this.error = 'در حال حاضر هیچ درخواستی ثبت نشده است'
                })
    } , 
    methods : {
        updateMessage(value , id) {
           this.$axios.$post("/admin/update-contact" , {
               id : id , 
               response : value 
           })
            .then(() => {
                this.updatedId =id
            })
        }
    }
}
</script>
<style >
    * {
        margin : 0 ;
        padding : 0 ;
        border : none ;
        outline : none ;
    }
    .error {
        background-color : lightgray ;
        color : red ;
        margin-top : 100px;
    }
    .single-contact {
        padding : 20px;
        display : grid ;
        grid-template-rows: repeat(5,40px) repeat(3,auto);
        margin-bottom : 70px;
        background-color : gray ;
        
    }
    .row {
        border-bottom : 1px solid white ;
        display : grid ;
        grid-template-columns : repeat(2,1fr) ; 
    }
    button {
        cursor : pointer ;
        width : 100px;
        display : block ;
        margin : 10px auto 10px 100px;
        height : 30px;
        background-color : green ;
        color : white ;
        border-radius : 10px;
    }
    textarea {
        margin-top : 10px; 
        margin-bottom : 10px;
    }
    .update-icon {
        color : green ;
    }
</style>