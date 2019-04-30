<template>
  <div class="vg">

    <cellInput type="0" title="服务时间" value="2019-04-19 13:32" :tColor="'#333'" />
    <cellInput type="0" title="就诊医院" value="河北医科大学第二医院" :tColor="'#333'" />
    <cellInput type="0" title="联系人" value="王培" :tColor="'#333'" />
    <cellInput type="0" title="联系人" value="19923326120" :tColor="'#333'" />

    <div class="agree">
      选择支付方式
    </div>

    <ul class="pay-methods">
        <li class="vux-1px-r" @click="cur=0">
            <i class="funbg" :class="{'active-weipay':cur==0}"></i>
            <span>微信支付</span>
        </li>
        <li @click="cur=1">
            <i class="funbg " :class="{'active-alipay':cur==1}"></i>
            <span>支付宝支付</span>
        </li>
    </ul>
        <p class="pickUp"> 
                            请在
                        <span>
                            30分钟
                        </span>
                            内完成付款，否则挂号自动取消
                        </p>
    <div class="accompany-btn">
      确认支付
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
.active-alipay{
    background-image: url(../../assets/images/zhifubaoa@2x.png)!important;
}
.active-weipay{
    background-image: url(../../assets/images/weipay@2x.png)!important;
}

.pay-methods{
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 23px 0;
    justify-content: space-evenly;
    >li{
        padding: 21px 0;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        >i{
            border-radius: 50%;
            display: block;
            background-image: url('../../assets/images/zhifubao@2x.png');
            width:69px;
            height: 66px;
            margin-right: 23px;
        }
        
        >span{
            font-size: 33px;
            color: #333;
        }
    }
    >li:first-child{
        >i{
            background-image: url('../../assets/images/weipaya.png');
        }
    }
}
  .active-sel {
    background-image: url('../../assets/images/jzr_ico_chose_set@2x.png') !important;
  }
  .agree {
    display: flex;
    align-items: center;
    padding: 25px 32px;
  }

.pickUp{
    font-size: 24px;
    color: #666;
    padding: 30px;
    >span{
        color: #FF4747;
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
