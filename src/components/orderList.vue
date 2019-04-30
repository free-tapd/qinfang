<template>
  <div class="order-list">
    <div class="order-top vux-1px-b">
      <p class="order-category">
        <img src="../assets/images/person/service1.png" alt>
        <span>图文咨询</span>
      </p>
      <span class="state" :style="{color:!payed?'#FF5001':''}" v-if="!payed">未付款</span>
      <span class="state" :style="{color:!payed?'#FF5001':''}" v-else>已退款</span>
    </div>
    <div class="order-b" :class="{'vux-1px-b':!payed}">
      <div class="docutor-message">
        <img src="../assets/images/person/doctor_pic.png" alt>
        <div class="docutor-name">
          <p class="physician-box">
            <span class="name">张淑芬</span>
            <span class="physician">主任医师</span>
          </p>
          <p>
            <span>河北医科大学第二医院 心血管科</span>
          </p>
        </div>
      </div>
      <p>￥15.00</p>
    </div>
    <!-- 未支付按钮 -->
    <div class="order-btn" v-if="!payed">
      <p>取消订单</p>
      <p>
        去付款
        <span class="iconfont icon-right" style="font-size:12px;"></span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    payed: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="less" scoped>
.order-list {
  margin-bottom: 12px;
  padding: 24px;
  background-color: #fff;
  font-size: 28px;
  color: #808080;
  //   display: flex;
  //   align-items: baseline;
  > .order-top {
    padding-bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .order-category {
      display: flex;
      align-items: center;
      color: #333;
      > img {
        width: 28px;
        height: 28px;
        display: block;
        margin-right: 30px;
      }
    }
    > .state {
      color: #999;
    }
  }
  > .order-b {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 28px 0;
    > .docutor-message {
      display: flex;
      align-items: center;
      > img {
        width: 84px;
        height: 84px;
        display: inline-block;
        margin-right: 33px;
      }
      > .docutor-name {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > .physician-box {
          > .name {
            font-size: 34px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-right: 45px;
          }
        }
      }
    }
  }
  > .order-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-top: 28px;
    > p {
      width: 160px;
      height: 60px;
      border: 1px solid rgba(179, 179, 179, 1);
      border-radius: 8px;
      text-align: center;
      line-height: 60px;
      font-size: 30px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
    > p:last-child {
      color: #ff5001;
      border-color: #ff5001;
      margin-left: 43px;
    }
  }
}
</style>
