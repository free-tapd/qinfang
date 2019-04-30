<template>
  <div class="vg">
    <div class="order-detail">
      <div class="order-pannel">
        <p class="pannel-stick"></p>
        <div class="order-status">
          <!-- <img src="../../assets/images/person/no-pay.png" alt> -->
          <!-- <img src="../../assets/images/person/no-pay@2x.png" alt> -->
          <img src="../../assets/images/person/over-pay@2x.png" alt>
          <div class="pay-status">
            <p>未付款</p>
            <span>24小时内未付款订单将取消</span>
          </div>
          <p class="pay-price">
            <span>￥</span>
            <span>450.00</span>
          </p>
        </div>
      </div>
      <!-- 商品信息 -->
      <div class="pro-detail">
        <cellInput title="商品信息" value="共1件商品" :tColor="'#333'" type="0" :islink="true">
          <span class="funbg icon-pro" slot="icon"></span>
        </cellInput>

        <ul class="pro-inner">
          <li>
            <p class="pro-title">商品名称：</p>
            <p class="pro-aws">陪诊服务</p>
          </li>
          <li>
            <p class="pro-title">数量：</p>
            <p class="pro-aws">x1</p>
          </li>
          <li>
            <p class="pro-title">服务期限：</p>
            <p class="pro-aws">2017-09-05至2017-12-05</p>
          </li>
          <li>
            <p class="pro-title">服务医生：</p>
            <p class="pro-aws">刘航</p>
          </li>
          <li>
            <p class="pro-title"></p>
            <p class="pro-aws">金牌服务</p>
          </li>
          <li>
            <p class="pro-title">服务地点：</p>
            <p class="pro-aws">河北医科大学第二医院</p>
          </li>
          <li>
            <p class="pro-title">服务类别：</p>
            <p class="pro-aws">老年人陪诊</p>
          </li>
          <li>
            <p class="pro-title">服务内容：</p>
            <p class="pro-aws">挂号、充值、引导、排队等服务</p>
          </li>
          <!--  图文资讯未付款 -->
          <li>
            <p class="pro-title">服务内容：</p>
            <div class="pro-aws">
              <div class="aws-item">
                <p>
                  <span class="funbg icon-chouse"></span>
                  <span class="aws-txt">图文咨询</span>
                </p>
                <span>30次</span>
              </div>
              <div class="aws-item">
                <p>
                  <span class="funbg icon-chouse"></span>
                  <span class="aws-txt">控压报告</span>
                </p>
                <span>9次</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 订单信息 -->
      <div class="pro-detail">
        <cellInput title="订单信息" value :tColor="'#333'" type="0" :islink="false">
          <span class="funbg icon-order" slot="icon"></span>
        </cellInput>

        <ul class="pro-inner">
          <li>
            <p class="pro-title">订单号：</p>
            <p class="pro-aws">352468545968552</p>
          </li>
          <li>
            <p class="pro-title">订单时间：</p>
            <p class="pro-aws">2017-10-28 19:26</p>
          </li>
          <li>
            <p class="pro-title">用户名：</p>
            <p class="pro-aws">王冰</p>
          </li>
          <li>
            <p class="pro-title">支付状态：</p>
            <p class="pro-aws">已支付</p>
          </li>
          <li>
            <p class="pro-title">支付金额：</p>
            <p class="pro-aws" style="color:#FF5001">￥450.00</p>
          </li>
          <li>
            <p class="pro-title">订单状态：</p>
            <p class="pro-aws">未付款</p>
          </li>
        </ul>
      </div>
      <!-- 未支付按钮 -->
      <div class="order-btn vux-1px-t" v-if="false">
        <p>取消订单</p>
        <p class="go-pay">
          去付款
          <span class="iconfont icon-right" style="font-size:12px;"></span>
        </p>
      </div>
      <!-- 去评价 -->
      <div class="order-btn vux-1px-t" v-if="false">
        <p>去评价</p>
        <p class="go-evaluate">
          再次购买
          <!-- <span class="iconfont icon-right" style="font-size:12px;"></span> -->
        </p>
      </div>
      <!-- 已支付 -->
      <div class="order-btn vux-1px-t" >
        <p class="cancle-order">取消订单</p>
      </div>
      <!-- 已经评价 -->
      <div class="order-btn vux-1px-t" v-if="false">
        <p class="over-evaluate">去评价</p>
        <p class="go-evaluate">
          再次购买
          <!-- <span class="iconfont icon-right" style="font-size:12px;"></span> -->
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import cellInput from "@/components/cellInput";
export default {
  data() {},
  components: {
    cellInput
  }
};
</script>

<style lang="less" scoped>
.vg {
  padding-bottom: 157px;
}
.icon-pro {
  width: 30px;
  height: 30px;
  background-image: url("../../assets/images/person/merchant.png");
  margin-right: 19px;
}
.icon-order {
  // order_message
  width: 30px;
  height: 30px;
  background-image: url("../../assets/images/person/order_message.png");
  margin-right: 19px;
}
.order-detail {
  background-color: #fff;
  > .order-pannel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 261px;
    width: 750px;
    height: 261px;
    background: linear-gradient(
      0deg,
      rgba(75, 154, 254, 1),
      rgba(109, 182, 251, 1)
    );
    > .pannel-stick {
      width: 660px;
      height: 18px;
      //   background: rgba(101, 175, 252, 1);
      //   background-color: #65affc;
      background-color: #fff;
      border: 4px solid rgba(255, 255, 255, 1);
      border-radius: 9px;
      box-shadow: 5px 5px 20px #65affc inset;
    }
    > .order-status {
      height: 170px;
      width: 644px;
      background-color: #fff;
      border-radius: 0px 0px 10px 10px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      > img {
        width: 72px;
        height: 63px;
        display: block;
        // margin-right: 30px;
      }
      > .pay-status {
        //   line-height: 1.1;
        > p {
          font-size: 34px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
        }
        > span {
          font-size: 24px;
          font-weight: 400;
          color: rgba(128, 128, 128, 1);
        }
      }
      > .pay-price {
        color: #ff5001;
        font-weight: bold;
        > span:first-child {
          font-size: 12px;
        }
      }
    }
  }
  > .pro-detail {
    /deep/.cell-title {
      font-size: 30px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    > .pro-inner {
      padding: 30px;

      > li {
        padding: 17px 0;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        > .pro-title {
          font-size: 28px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
        }
        > .pro-aws {
          font-size: 30px;
          font-weight: 400;
          color: #666;
          > .aws-item {
            padding: 17px 0;
            display: flex;
            align-items: center;
            font-size: 30px;
            color: #00a36f;
            > p {
              display: flex;
              align-items: center;
              > .aws-txt {
                margin: 0 30px 0 15px;
              }
            }
            > span {
              color: #666;
            }
          }
        }
      }
    }
  }
}
.order-btn {
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  // padding-top: 28px;
  height: 120px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

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
  .cancle-order {
    margin-left: 43px;
    margin-right: 62px;
  }
  > .over-evaluate {
    border: none;
  }
  > .go-pay {
    color: #ff5001;
    border-color: #ff5001;
    margin-left: 43px;
    margin-right: 62px;
  }
  > .go-evaluate {
    color: #129dfe;
    border-color: #129dfe;
    margin-left: 43px;
    margin-right: 62px;
  }
}
</style>
