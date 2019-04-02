<template>
  <div class="server-item">
    <div class="server-title">
      <p class="server-left">
        <img src="../assets/images/person/service1.png" alt>
        <!-- <img src="../assets/images/person/service2.png" alt> -->
        <!-- <img src="../assets/images/person/service3.png" alt> -->
        <span>图文咨询</span>
        <span class="message-name" style="color:#999">已关闭</span>
      </p>
      <span>￥40.00</span>
    </div>
    <div class="server-title">
      <p class="server-left">
        <img src alt>
        <span class="message-plac">河北医科大学第二医院</span>
        <span class="message-name">邹建申</span>
      </p>
      <span>2017/02/12</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.server-item {
  margin-bottom: 11px;
  padding: 21px;
  background-color: white;
  > .server-title:first-child {
    margin-bottom: 30px;
  }
  > .server-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    color: #999;

    > .server-left {
      display: flex;
      align-items: center;
      font-size: 30px;
      color: #333;
      > .message-plac {
        font-size: 24px;
        color: #333;
      }
      > .message-name {
        font-size: 24px;
        color: #666;
        margin-left: 22px;
      }
      > img {
        width: 30px;
        height: 30px;
        display: inline-block;
        margin-right: 30px;
      }
    }
  }
}
</style>

