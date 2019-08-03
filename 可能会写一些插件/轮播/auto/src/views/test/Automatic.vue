<template>
  <div class="Automatic">
    <slot> </slot>
  </div>
</template>

<script>
import $ from "jquery";
import { run } from "./Automatic.js";
export default {
  props: {
    option:{
        type:[Object]
    }
  },
  data() {
    return {
      run
    };
  },
  mounted() {
    this.run($, this.option);
  }
};
</script>

<style lang="less" scoped>
.Automatic {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .auto_slide {
    width: 100%;
    &:nth-child(1) {
      background: #e35177;
    }
    &:nth-child(2) {
      background: #8a6e54;
    }
    &:nth-child(3) {
      background: #c418d3;
    }
    &:nth-child(4) {
      background: #bbd318;
    }
    &:nth-child(5) {
      background: #2e18d3;
    }
    &:nth-child(6) {
      background: #2de231;
    }
    &:nth-child(7) {
      background: #2dd7e2;
    }
    &:nth-child(8) {
         background: #666;
     }
    &:nth-child(9) {
         background: #666;
     }
    &:nth-child(10) {
         background: #666;
     }
    &:nth-child(11) {
         background: #666;
     }
  }
}
</style>
