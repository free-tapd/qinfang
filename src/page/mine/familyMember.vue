<template>
  <div class="vg">
    <div class="family-member">
      <!-- 家庭成员的页面 -->
      <cardFamily v-for="v in 3" :key="v"/>
      <p class="war">你还可以添加两位就诊人</p>
      <div class="add-family-btn" @click="changeJump('/addMember',{})">添加家庭成员</div>
    </div>
  </div>
</template>
<script>
import cardFamily from "@/components/cardFamily";
export default {
  components: {
    cardFamily
  }
};
</script>
<style lang="less" scoped>
.family-member {
    padding-bottom: 115px;
  > .war {
    font-size: 26px;
    color: #808080;
    text-align: center;
  }
  > .add-family-btn {
      position: fixed;
      left: 50%;
      bottom: 26px;
      margin-left: -620px/2;
    width: 620px;
    height: 88px;
    background: #42A0E2;
    border-radius: 44px;
    text-align: center;
    line-height: 88px;
    font-size: 34px;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    // margin: 0 auto;
  }
}
</style>

