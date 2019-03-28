<template>
  <div class="c">
    <tabbar style="position:fixed" icon-class="home" @on-index-change="onIndexChange">
      <tabbar-item link="/"  @on-item-click="handleClick1">
        <img slot="icon" src="../assets/images/tab/un_registration.png">
        <img slot="icon-active" src="../assets/images/tab/registration.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/inquiry">
        <img slot="icon" src="../assets/images/tab/un_inquiry.png">
        <img slot="icon-active" src="../assets/images/tab/inquiry.png">
        <span slot="label">问诊</span>
      </tabbar-item>
      <tabbar-item link="/service">
        <img slot="icon" src="../assets/images/tab/footer-me.png">
        <img slot="icon-active" src="../assets/images/tab/footer-me-1.png">
        <span slot="label">服务</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/mine">
        <img slot="icon" src="../assets/images/tab/footer-me1.png">
        <img slot="icon-active" src="../assets/images/tab/footer-me1-1.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>  
     <!-- <tabbar style="position:fixed" icon-class="home" @on-index-change="handleClick">
      <tabbar-item selected  @on-item-click="handleClick1">
        <img slot="icon" src="../assets/images/tab/un_registration.png">
        <img slot="icon-active" src="../assets/images/tab/registration.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot >
        <img slot="icon" src="../assets/images/tab/un_inquiry.png">
        <img slot="icon-active" src="../assets/images/tab/inquiry.png">
        <span slot="label">问诊</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/images/tab/footer-me.png">
        <img slot="icon-active" src="../assets/images/tab/footer-me-1.png">
        <span slot="label">服务</span>
      </tabbar-item>
      <tabbar-item badge="2" >
        <img slot="icon" src="../assets/images/tab/footer-me1.png">
        <img slot="icon-active" src="../assets/images/tab/footer-me1-1.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar> -->
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vux";

export default {
  data(){
    return {
      cur:0
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {
    onIndexChange(index) {
      console.log(index)
      // this.cur=index;
      // console.log("点击");
      // if(index==0){
      //   this.changeJump('/',{})
      // }else if(index==1){
      //   this.changeJump('/inquiry',{})
      // }else if(index==2){
      //   this.changeJump('/server',{})
      // }else{
      //   this.changeJump('/mine',{})
      // }
    },
    handleClick1(index) {
      console.log(index)
      console.log("点击");
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 35px;
  height: 35px;
  background-image: url("../assets/images/tab/registration.png");
}
</style>

