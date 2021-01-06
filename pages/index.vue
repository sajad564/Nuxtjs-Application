<template>
    <div id="index">
        <skill id="skill" />
        <introducing />
        <indexcomment data-aos="fade-right"  data-aos-offset="200" data-aos-duration="800" />
        <indexport   data-aos="fade-in"  data-aos-offset="300" data-aos-duration="1200"/>
        <commonquestion />
        <webdesignstep />
        <designtypes />
        <latestposts />
        <indexcontact />
    </div>
</template>
<script>
import designtypes from '~/components/index/DesignTypes'
import latestposts from '~/components/index/LatestPosts'
import webdesignstep from '~/components/index/WebDesignStep'
import indexport from '~/components/index/IndexPortfolio'
import skill from '~/components/index/SkillServices'
import introducing from '~/components/index/Introducing'
import indexcomment from '~/components/index/IndexComment'
import commonquestion from '~/components/index/CommonQuestion'
import indexcontact from '~/components/index/IndexContact'
export default {
    
    name : 'index' ,
    data() {
        return {

        }
    } ,
    layout : 'second' ,  
    components : {
        skill , 
        introducing,
        indexcomment,
        commonquestion,
        indexport,
        indexcontact,
        latestposts , 
        webdesignstep , 
        designtypes
    }
}
</script>
<style scoped >
*{
    margin : 0 ;
    padding : 0 ;
    border : none ;
    outline : none ;
}
#index {
    overflow: hidden;
    width : 100% ;
}
#skill {
    margin-top :50px;
}
/* background color is equal to #F5F4F9 */
</style>