<template>
  <div class="pergnant vg">
    <div class="accompany-message funbg">

      <div class="pro-message">
        <div class="image-text">
          <img src="../../assets/images/service/icon-accom1.png" alt="">
          <div class="pregnant-message">
            <p class="accopany-title">孕妇陪诊</p>
            <span>基础服务时长4小时</span>
            <span>服务时间07:00-18:00</span>
          </div>
        </div>

        <span class="price">
          199元
        </span>
      </div>
      <div class="pro-intro">
        千万不要让繁琐的产检项目影响孕妇的心情，专业陪护人员更懂得如何让宝妈安心，轻松愉快的完成每一次产前检查。
      </div>
    </div>
    <!-- 服务内容 -->
    <div class="server-inner">
      <p class="server-title">
        <span :class="{'active-tab':cur==0}" @click="cur=0">服务内容</span>
        <span :class="{'active-tab':cur==1}" @click="cur=1">注意事项</span>
      </p>
      <!-- 服务内容 -->
      <ul class="server-list" v-show="cur==0">
        <li v-for="v in 3" :key="v">
          <div class="icon-inner">
            <i></i>
            <p></p>
          </div>
          <div class="list-content">
            <p>
              1、预约成功后，护士会在第一时间联系您，沟通症状，病史、 近期用药等相关情况，并确定就诊行程。帮助你合理安排就医。 </p>
            <p>2、就诊前，提醒诊前注意事项及所需准备（如空腹、憋尿等）所需物品（如就诊卡、医保卡、病历本、既往检查结果等）。</p>
          </div>
        </li>
      </ul>
      <!-- 注意事项 -->
      <ul class="matters">
        <li v-for="v in 5" :key="v">
          <h6>服务期限</h6>
          <p>1陪诊服务按单个陪诊申请单收费； </p>
          <p>2陪诊服务仅限申请的陪诊时间当天使用，陪伴时长不超过4小时。</p>
        </li>
      </ul>

    </div>
    <!-- 联系电话 -->
    <div class="link">
      服务过程中遇到任何问题及建议，请联系客服 <span class="link-phone">

        12580-6

      </span>
      ，我们会及时为您解答。

    </div>
    <!-- btn -->
    <div class="link-btn-box">
      <p @click.stop="changeJump('/accompanyMessage',{})">立即预约</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cur: 0
      }
    }
  }

</script>
<style lang="less" scoped>
  .active-tab {
    color: #2D9FF1;
  }

  .pergnant {
    padding-bottom: 160px;

    >.accompany-message {
      height: 342px;
      width: 100%;
      background-image: url('../../assets/images/service/accom-bg1.png');
      background-size: cover;
      color: #fff;
      font-size: 26px;

      >.pro-message {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 43px 22px 36px;

        >.image-text {
          display: flex;
          align-items: center;

          >img {
            width: 131px;
            height: 117px;
            border-radius: 10px;
            display: block;
            margin-right: 24px;
          }

          >.pregnant-message {
            display: flex;
            flex-direction: column;

            >.accopany-title {
              font-size: 34px;
              font-weight: bold;
            }

          }
        }

        >.price {
          font-size: 50px;
          font-family: Adobe Heiti Std R;
          font-weight: normal;
          color: rgba(255, 230, 16, 1);
          margin-right: 22px;
        }




      }

      >.pro-intro {
        padding: 0 22px;
      }

    }

    >.server-inner {
      min-height: 663px;
      margin: 0 22px;
      margin-top: -(60-34px);
      background-color: #fff;
      padding-bottom: 33px;

      >.server-title {
        font-size: 30px;
        font-family: DengXian-Regular;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        padding: 40px 0;
        display: flex;
        align-items: center;
        line-height: 1;

        >span {
          flex: 1;
          text-align: center;
        }

        >span:first-child {
          border-right: 1px solid #2D9FF1;
        }
      }

      >.server-list {
        padding: 0 16px;

        >li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;

          >.icon-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 22px;

            >i {
              width: 29px;
              height: 29px;
              display: block;
              border-radius: 50%;
              background-color: #a1c9f3;
            }

            >p {
              margin-top: 60px;
              width: 4px;
              background-color: #e3e3e5;
              height: 100px;
            }
          }

          >.list-content {
            color: #999999;
            font-size: 24px;

          }
        }

        >li:last-child {
          >.icon-inner {
            >p {
              height: 0;
            }
          }
        }

      }
      >.matters{
        font-size: 24px;
        color: #333;
        padding: 0 16px;
        >li{
          margin-bottom: 20px;
          >h6{
            color: #000;
          }
        }
      }
    }

    >.link {
      font-size: 24px;
      padding: 38px 22+38px;
      font-weight: normal;
      color: rgba(51, 51, 51, 1);
      opacity: 0.6;

      >.link-phone {
        color: #FF6600;
      }
    }

    >.link-btn-box {
      height: 153px;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      bottom: 0;

      >p {
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
    }
  }

</style>
