<template>
  <div class="vg">
    <x-header :left-options="{backText: '',showBack: true}">缴费列表</x-header>
    <div class="bg-top"></div>
    <div class="bg-bottom">
      <div class="bg-inner-box">
        <sickCard />
        <Xtab :tabArr="tabArr" :defaultColor="'#ccc'" :activeColor="'#fff'" :barColor="'#fff'" @getItem="getItem" />
      </div>

    </div>
    <div class="content">
      <!-- 引入组件 -->

      <div class="switch-start-end" v-if="false">
        <div class="padd">
          <div class="switch-start flex-r">
            <div class="flex-r">
              <p class="icons icon-start flex-r"> <span class="c"> 起</span></p>
              <p class="switch-date">2017-05-23</p>
            </div>

            <span class="iconfont icon-right" style="font-size:12px"></span>

          </div>
          <!-- 切换图标 -->
          <div class="icons icon-switch">
            |
          </div>
          <div class="switch-end flex-r">
            <div class="flex-r">
              <p class="icons icon-end flex-r"><span>止</span> </p>
              <p class="switch-date">2017-05-23</p>
            </div>

            <span class="iconfont icon-right" style="font-size:12px"></span>
          </div>
        </div>

      </div>


      <div class="visit-box">
        <!-- <div class="date-list">
          2017/07/21-2017/07/30
        </div> -->
        <div class="visit-list">
          <div class="flex-r visit-item ">
            <span class="is-checked" v-if="isPay"></span>
            <div class="offices-name flex-c">
              <div class="off-list1">
                <p>全科医疗科</p>
                <!-- <span class="off-date">2017-05-26</span> -->
              </div>
            </div>
            <div class="pay-money flex-c">
              <div class="money-num1">
                2017-07-25 </div>
            </div>
          </div>
          <div class="flex-r visit-item vux-1px-b" v-for="v in 5" :key="v" @click="changeJump('./paymentDetail',{})">
            <span class="is-checked" v-if="isPay"></span>
            <div class="offices-name flex-c">
              <div class="off-list">
                <p>中药费</p>
                <!-- <span class="off-date">2017-05-26</span> -->
              </div>
            </div>
            <div class="pay-money flex-c">
              <div class="money-num">
                500.00
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- 注意事项 -->
      <div class="waring flex-c" v-show="isPay">
        <span class="waring-text"></span> <span>注意事项</span>
        <span class="waring-text"></span> <span>1、暂不支持医保支付
        </span>
        <span class="waring-text"></span> <span>2、请在 下午16：00前完成支付</span>
        <span class="waring-text"></span> <span>3、暂不支持在线缴纳检查费用
        </span>
      </div>
    </div>
    <div class="pay-btn-box vux-1px-t flex-r" v-show="isPay">
      <p class="pay-text"> <span>共:</span>
        
        <span>￥562.20</span></p>
      <div class="pay-btn">
          立即支付
      </div>
    </div>
  </div>
</template>
<script>
  import date from '@/components/date'
  import payList from '@/components/payList'
  import sickCard from '@/components/sickCard'
  import Xtab from '@/components/tab'
  import {
    XHeader,

  } from 'vux'

  export default {
    data() {
      return {
        tabArr: [{
            id: 1,
            title: "待支付"
          },
          {
            id: 2,
            title: "已支付"
          }
        ],
        isPay:true,
      }
    },
    
    components: {
      XHeader,
      date,
      payList,
      sickCard,
      Xtab
    },
    methods:{
      getItem(item){
        console.log(item)
        if(item.id==1){
          // 待支付
          this.isPay=true
        }else{
          // 已支付
          this.isPay=false;
        }
      }
    }
  }

</script>
<style lang="css">
  .vux-tab {
    background-color: transparent !important;
  }

</style>
<style lang="less" scoped>
  @color: #42a0e2;
  .vg{
    padding-bottom: 120px;
  }
  .icons {
    width: 54px;
    height: 54px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff;
    font-size: 24px;
  }

  .bg-top {
    height: 115px;
    //   position: relative;
    background-color: @color;
  }

  .bg-bottom {
    background-color: @color;

    >.bg-inner-box {
      // padding-bottom: 30px;
    }
  }

  .pay-btn-box {
    justify-content: space-between;
    align-items: center;
    height: 119px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 19px;
    >.pay-text{
      font-size: 34px;
      >span:last-child{
        color: #FF8400;
        margin-left: 20px;
      }
    }
    >.pay-btn {
      width: 302px;
      height: 88px;
      font-size: 34px;
      color: #fff;
      background-color: @color;
      line-height: 88px;
      text-align: center;
      border-radius: 40px;
    }
  }

  .content {
    >.switch-start-end {
      width: 95%;
      margin: 0 auto;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
      margin-top: 17px;
      background-color: #fff;


      >.padd {
        padding: 0 30px;

        >.switch-start {
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;

          & .icon-start {
            background: rgba(59, 179, 255, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 156, 255, 0.5);
          }
        }

        >.switch-end {
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;

          .icon-end {
            background: #FFA403;
            box-shadow: 0px 2px 4px 0px rgba(255, 145, 12, 0.5);
          }
        }

        >.icon-switch {
          color: #333;
          text-align: center;
        }

        & .switch-date {
          font-size: 30px;
          color: #333;
          margin-left: 15px;
        }
      }

    }

    >.waring {
      // align-items: center;
      // margin: 0 auto;
      // width: 95%;
      padding: 30px;
      margin-top: 35px;
      font-size: 24px;
      color: #666;

      >.waring-text {
        margin-top: 9px;
        color: #FF2400;
        font-size: 50px;
        margin-right: 15px;
      }
    }

    >.visit-box {
      background-color: #fff;
      // width: 95%;
      margin: 0 auto;
      margin-top: 15px;

      >.date-list {
        padding: 15px 0;
        color: #333;
      }

      >.visit-list {
        // box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
        // padding: 30px;
        width: 95%;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
        color: #000;

        & .offices-name {
          flex: 1;

          >.off-list {
            font-size: 28px;
            color: #666;

            >.off-date {
              font-size: 30px;
              color: #666;
            }
          }

          >.off-list1 {
            font-size: 30px;
            color: #333;

            >.off-dete {
              color: #999;
              font-size: 26px;
            }
          }
        }

        & .pay-money {
          flex: 1;
          justify-content: flex-end;

          >.money-num {
            text-align: right;
          }

          >.money-num1 {
            text-align: right;
            color: #999;
            font-size: 26px;
          }

        }

        &>.visit-item {
          align-items: center;
          padding: 26px 0;

          >.is-checked {
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: @color;
            margin-right: 15px;
          }

        }

        &>.visit-item:not(:first-child) {}
      }
    }


  }

</style>
