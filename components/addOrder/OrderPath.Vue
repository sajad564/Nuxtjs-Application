<template>
    <div id="orderpath">
        <div class="bullets">
        <div class="bullet">1</div>
        <div class="bullet">2</div>
        <div class="bullet">3</div>
        <div class="bullet">4</div>
      </div>
    </div>
</template>
<script>
    export default {
        name : 'orderpath' ,
        props : ['number' ],
        data() {
            return {

            }
        } ,
    }
</script>

<style  scoped>
#orderpath {
  width : 70% ;
  margin-right : auto ;
  margin-left : auto; 
}
.bullets {
  margin-top: 70px;
  border-top: 1px dotted #cecece;
  height: 90px;
  display: grid;
  box-sizing: border-box;

  grid-template-columns: repeat(4, 60px);
  justify-content: space-between;
}
.bullet {
  margin-top: -30px;
  height: 55px;
  color: white;
  font-weight: bold;
  text-align: center;
  box-sizing: border-box;
  padding-top: 20px;
  border-radius: 50%;
  background-color: #2086eb;
}
</style>