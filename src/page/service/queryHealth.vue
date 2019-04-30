<template>
  <div class="vg">
    <div>
      <ul class="health">
        <li class="vux-1px-b" v-for="v in 10" :key="v" @click.stop="changeJump('/healthDetail',{})">
          <p class="health-title">国家医保局明确工作重点</p>
          <span class="health-name">药剂科 孙乙萌</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    // beforeRouteEnter(to,from,next){
    //     document.getElementById('QF').innerHTML="医保自查"
    //     next();
    // }
};
</script>
<style lang="less" scoped>
.health {
  padding:0 30px;
  background-color: #fff;
  > li {
      padding: 30px 0; 
    font-size: 28px;
    color: #333;
    > .health-name {
      font-size: 24px;
      color: #999;
    }
  }
}
</style>
