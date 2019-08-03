<template>
  <div class="test" id="test">
    <Automatic :option="option">
      <div class="auto_slide" v-for="i in 7" :key="i">{{ i }}</div>
    </Automatic>
  </div>
</template>

<script>
import Automatic from "./Automatic.vue";
export default {
  components: {
    Automatic
  },
  data(){
      return{
          /*
          * interval:每行延迟时间
          * time:轮播时间
          * */
          option:{
              el:"#test",
              interval:100,
              time:1000,
              mode:"even",
              group:3,
              // bottomGroup:3,
              // fillGroupWithBlank:false
          }
      }
  }
};
</script>

<style lang="less" scoped>
html,body{
    width: 100%;
    height: 100%;
}
.test {
  margin: 50px auto;
  width: 30%;
  height: 60%;
  border: 1px solid;

}
</style>
