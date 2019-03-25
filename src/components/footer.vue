<template>
  <div class="c">
    <tabbar style="position:fixed">
      <tabbar-item link="/" >
        <img slot="icon" src="../assets/images/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/inquiry">
        <img slot="icon" src="../assets/images/home.png">
        <span slot="label">问诊</span>
      </tabbar-item>
      <tabbar-item link="/service">
        <img slot="icon" src="../assets/images/home.png">
        <span slot="label">服务</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/mine">
        <img slot="icon" src="../assets/images/home.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  import {
    Tabbar,
    TabbarItem
  } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    }
  }

</script>
