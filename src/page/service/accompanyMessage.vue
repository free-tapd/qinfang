<template>
  <div class="vg">
    <cellInput type="0" title="选择就诊人" :islink="true" value="请选择" :tColor="'#333'" />
    <cellInput type="1" title="联系方式" :islink="true" placeholder="" :tColor="'#333'" />
    <cellInput type="0" title="就诊医院" :islink="true" value="请选择" :tColor="'#333'" />
    <cellInput type="3" title="是否挂号" :islink="true" value="请选择" :tColor="'#333'">
      <div slot="ismean" class="sel-box">
        <div class="ornan" @click="cur=0">
          <i class="funbg" :class="{'active-sel':cur==0}"></i>
          <span>已挂号</span>
        </div>
        <div class="ornan" @click="cur=1">
          <i class="funbg" :class="{'active-sel':cur==1}"></i>
          <span>未挂号</span>
        </div>
      </div>
    </cellInput>
    <cellInput type="0" title="就诊时间" :islink="true" value="请选择" :tColor="'#333'" />
    <div class="agree">
      <i class="funbg"></i>
      <p>已阅读 <span>
          《服务协议》
        </span> </p>
    </div>
    <div class="total-money">
      <span>总计：</span>
      <span>￥150</span>
    </div>

    <div class="accompany-btn" @click="changeJump('/payOrder',{})">
      立即预约
    </div>
  </div>
</template>
<script>
  import cellInput from "@/components/cellInput"
  export default {
    data() {
      return {
        cur: 0
      }
    },
    components: {
      cellInput
    }
  }

</script>
<style lang="less" scoped>
  .active-sel {
    background-image: url('../../assets/images/jzr_ico_chose_set@2x.png') !important;
  }

  .sel-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    >.ornan {
      display: flex;
      align-items: center;
      font-size: 24px;
      color: #888;

      >i {
        width: 30px;
        height: 30px;
        display: block;
        background-image: url('../../assets/images/tyuan.png');
        margin-right: 16px;
      }
    }

    >.ornan:first-child {
      margin-right: 67px;
    }
  }

  .agree {
    display: flex;
    align-items: center;
    padding: 25px 32px;

    >i {
      width: 24px;
      height: 24px;
      display: block;
      background-image: url('../../assets/images/icon-agreement-1.png');
      margin-right: 18px;
    }

    >p {
      font-size: 23px;
      font-weight: bold;
      color: #333;

      >span {
        color: #1CA3FE;
      }
    }
  }

  .total-money {
    padding: 25px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 36px;
    color: #333;

    >span:last-child {
      color: #EC5330;
      font-size: 50px;
    }
  }

  .accompany-btn {
    position: fixed;
    left: 50%;
    margin-left: -690/2px;
    bottom: 32px;
    width: 690px;
    height: 88px;
    background: rgba(50, 152, 254, 1);
    box-shadow: 0px 6px 10px 0px rgba(43, 118, 220, 0.42);
    border-radius: 44px;
    line-height: 88px;
    font-size: 38px;
    font-family: DengXian-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }

</style>
