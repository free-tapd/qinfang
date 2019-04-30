<template>
  <div class="vg">
    <div class="bg-color"></div>
    <div class="service-box clearMar">
      <!-- div. -->
      <ul class="service-list flex-r">
        <li class="item" @click="changeJump('/capacity',{})">
          <img src="../../assets/images/service/myservice_1.png" alt>
          <span>症状自查</span>
        </li>
        <li class="item" @click="changeJump('/queryHealth',{})">
          <img src="../../assets/images/service/myservice_2.png" alt>
          <span>医保自查</span>
        </li>
        <li class="item" @click="changeJump('/accompany',{})">
          <img src="../../assets/images/service/myservice_3.png" alt>
          <span>陪诊导诊</span>
        </li>
        <li class="item">
          <img src="../../assets/images/service/myservice_4.png" alt>
          <span>家庭医生</span>
        </li>
      </ul>
      <!-- 健康管理 -->
      <div class="health-manger">
        <p class="health-title">健康管理</p>
        <ul class="manger-inner">
          <li>
            <img src="../../assets/images/service/myservice_heart.png" alt>
            <div class="manger-title">
              <p>血压监测</p>
              <span>实时关注血压状况</span>
            </div>
          </li>
          <li>
            <img src="../../assets/images/service/myservice_rain.png" alt>
            <div class="manger-title">
              <p>血糖监测</p>
              <span>正在建设中</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Xfooter/>
  </div>
</template>
<script>
import Xfooter from "@/components/footer";
export default {
  data() {
    return {};
  },
  components: {
    Xfooter
  }
};
</script>
<style lang="less" scoped>
.clearMar::before {
  display: table;
  content: "";
}
.vg{
  background-color: #fff;
}
.bg-color {
  height: 200px;
  background-color: #28acff;
}
.service-box {
  background-color: #fff;
  > .service-list {
    margin: 0 21px;
    background-color: #fff;
    padding: 28px 0;
    font-size: 26px;
    color: #333;
    box-shadow: 0px 0px 12px 0px rgba(4, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: -90px;
    > li {
      flex: 1;
      text-align: center;
      > img {
        width: 80px;
        height: 80px;
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }
  }
}
.health-manger {
  margin-top: 56px;
  padding: 21px;
  > .health-title {
    font-size: 24px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 53px;
  }
  > .manger-inner {
    color: #4b5071;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > li {
      display: flex;
      
      flex:1;
      align-items: center;
      > img {
        margin-right: 22px;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        display: block;
      }
      > .manger-title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        >span{
          font-size: 22px;
          color: #808080;
        }
      }
    }
  }
}
</style>