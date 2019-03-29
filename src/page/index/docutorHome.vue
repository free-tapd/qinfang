<template>
  <div class="docutor-home vg">
    <!-- 医生主页 -->
    <div class="docutor-message flex-r">
      <div class="img-box">
        <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" alt>
        <div class="code" @click="isCode=!isCode">
          <span class="funbg"></span>
        </div>
      </div>
      <div class="flex-c profession">
        <!-- first -->
        <div class="docutor-lv flex-r">
          <!-- 医生信息 -->
          <div class="docutor-name">
            <p class="docutor-title">李素珍</p>
            <p>
              <span>主任医师</span>
              <span>妇科</span>
            </p>
            <p>
              <span>河北大学第二医院</span>
            </p>
          </div>
          <!-- 关注 -->
          <div class="follow-btn">关注</div>
        </div>
        <!-- seconed -->
        <!-- 一生的业务信息 -->
        <div class="follow-msg flex-r">
          <div class="msg-item">
            <p>324</p>
            <p>咨询</p>
          </div>
          <div class="msg-item">
            <p>324</p>
            <p>咨询</p>
          </div>
          <div class="msg-item">
            <p>324</p>
            <p>咨询</p>
          </div>
        </div>
      </div>
    </div>
    <!--zixunfangshi -->
    <ul class="consultative flex-r">
      <!-- 咨询 -->
      <li>
        <img src="../../assets/images/pic1.png" alt>
        <p class="consultative-title">预约挂号</p>
        <span>￥30元/次</span>
      </li>
      <li @click="isShow=!isShow">
        <img src="../../assets/images/pic2.png" alt>
        <p class="consultative-title">图文咨询</p>
        <span>￥30元/次</span>
      </li>
      <li @click.stop="changeJump('/videoSicker',{})">
        <img src="../../assets/images/pic3.png" alt>
        <p class="consultative-title">视频问诊</p>
        <span>￥30元/次</span>
      </li>
      <li>
        <img src="../../assets/images/pic4.png" alt>
        <p class="consultative-title">电话问诊</p>
        <span>￥30元/次</span>
      </li>
    </ul>
    <!-- 擅长 -->
    <div class="skill">
      <div class="list-skill vux-1px-b">
        <p class="flex-r">
          <span class="icons funbg icon-zan"></span>
          <span>擅长</span>
        </p>
        <span class="inner">Edgewise矫正技术、Tip—Edge矫治技术、MBT矫治技术、活动矫治技术、功能性矫治技术</span>
      </div>
      <div class="list-skill">
        <p class="flex-r">
          <span class="icons funbg icon-jianjie"></span>
          <span>擅长</span>
        </p>
        <span class="inner ellipsis-2">Edgewise矫正技术、Tip—Edge矫治技术、MBT矫治技术、活动矫治技术、功能性矫治技术</span>
      </div>
    </div>
    <!-- 评价 -->
    <div class="discuess">
      <p class="flex-r vux-1px-b">
        <span class="icons funbg icon-pinjia"></span>
        <span>评价</span>
      </p>
      <div class="discuess-inner flex-c vux-1px-b" v-for="v in 5" :key="v">
        <div class="star-box flex-r">
          <span>王**</span>
          <div class="star">
            <span class="star-list funbg icon-star"></span>
            <span class="star-list funbg icon-star"></span>
            <span class="star-list funbg icon-star"></span>
            <span class="star-list funbg icon-star"></span>
            <span class="star-list funbg icon-star"></span>
          </div>
          <span>2017-10-22</span>
        </div>
        <div class="dis-tag">
          <span v-for="v in 4" :key="v">及时回复</span>
        </div>
        <div class="dis-inner">
          医生对我的回答很有帮助，以后小病可以先在线问医生啦，真方
          便！
        </div>
      </div>
    </div>
    <!-- 咨询弹窗 -->
    <div class="cover" v-if="isShow">
      <div class="pannel-box">
        <div class="img-box">
          <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" alt>
          <p>李淑珍</p>
        </div>
        <!-- 咨询条目 -->
        <div class="dis-box">
          <p class="dis-title">图文资讯</p>
          <div class="dis-price">
            <p>
              <span>￥</span>
              <span class="price-num">80</span>
            </p>
            <p>
              <a>￥100</a>
            </p>
          </div>
          <!-- 选择日期 -->
          <ul class="dis-day">
            <li v-for="(v,i) in dayArr" :key="v" :class="{'active-day':cur==i}" @click="cur=i">{{v}}</li>
          </ul>
          <!-- 服务内容 -->
          <div class="dis-inner">
            <p>服务说明</p>
            <span>
              1.本次咨询为限时付费咨询，文字/图片方式交流，限时（24小时）
              信息。医生将在24小时内回复您的问题。
              2.为珍惜您的咨询时间，请全部围绕病情进行沟通，避免无关内容
              3.如果付费24小时后，医生没有进行回复，订单将自动取消并全部退款至您的账户。
            </span>
          </div>
        </div>
        <div class="dis-btn" @click="goSeek">立即咨询</div>
      </div>
    </div>

    <div class="cover" v-if="isCode" @click="isCode=!isCode">
      <div class="co">
        <ul class="qrcode-box">
          <li class="title">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" alt>
            <p>李素珍</p>
          </li>
          <li class="qrcode">
            <!-- <img src alt> -->
            <qrcode :value="value" :fg-color="fgColor"></qrcode>
          </li>
          <li class="cue">扫一扫关注医生</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Qrcode } from "vux";
export default {
  data() {
    return {
      dayArr: ["每次", "每周", "包月"],
      cur: 0,
      isShow: false,
      value:"https://vux.li",
      fgColor:"#ff0",
      isCode:false,
    };
  },
  components: {
    Qrcode
  },
  mounted () {
    setInterval(() => {
      this.value = `https://vux.li?t=${Math.random()}`
      this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }, 1000)
  },
  methods: {
    goSeek() {
      // 隐藏
      this.isShow = false;
      // 跳转
      this.changeJump("/addSicker", {});
    }
  }
};
</script>
<style lang="less" scoped>
.co{
   width: 488px;
  height: 536px;background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -488px/2;
  margin-top: -536px/2;
  
}
.qrcode-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
height: 100%; 
  
  
  > .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > img {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      display: block;
      margin-right: 43px;
    }
    > p {
      font-size: 40px;
      color: #333;
    }
  }
  > .qrcode {
    // margin-top: 33px;
    /deep/ img {
      margin: 0 auto;
      // width: 283px;
      // height: 271px;
      display: block;
    }
  }
  > .cue {
    // margin-top: 33px;
    text-align: center;
    font-size: 24px;
    color: #333;
  }
}

.docutor-home {
  > .docutor-message {
    padding: 30px;
    background-color: #fff;
    margin-bottom: 20px;
    font-size: 26px;
    color: #666;
    > .img-box {
      flex: 1;
      > .code {
        margin-top: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 74px;
        height: 74px;
        margin-left: 25px;
        background-color: #dcf1ff;
        > span {
          display: block;
          width: 30px;
          height: 30px;
          background-image: url("../../assets/images/inquiry/code.png");
        }
      }
      > img {
        z-index: 10;
        display: block;
        border-radius: 50%;
        width: 124px;
        height: 124px;
      }
    }
    > .profession {
      flex: 3;
      > .docutor-lv {
        align-items: center;
        justify-content: space-between;
        > .docutor-name {
          > .docutor-title {
            font-size: 34px;
            color: #333;
            font-weight: bold;
            margin-bottom: 20px;
          }
        }
        > .follow-btn {
          width: 100px;
          height: 40px;
          border-radius: 20px;
          line-height: 40px;
          text-align: center;
          color: #fff;
          font-size: 24px;
          background-color: #5eb7f9;
        }
      }
      > .follow-msg {
        align-items: center;
        justify-content: flex-start;
        margin-top: 30px;
        > .msg-item {
          > p:first-child {
            font-size: 30px;
            color: #333;
            font-weight: bold;
          }
          > p:last-child {
            font-size: 24px;
            color: #999;
          }
        }
        > .msg-item:not(:first-child) {
          margin-left: 131px;
        }
      }
    }
  }
  > .consultative {
    padding: 30px;
    background-color: #fff;
    align-items: center;
    margin-bottom: 20px;
    > li {
      flex: 1;
      text-align: center;
      > img {
        width: 96px;
        height: 80px;
        display: block;
        margin: 0 auto;
        margin-bottom: 15px;
      }
      > .consultative-title {
        font-size: 28px;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 28px;
      }
      > span {
        line-height: 1;
        font-size: 12px;
        transform: scale(0.9);
        color: #ff6c00;
        line-height: 12px;
      }
    }
  }
  > .skill {
    margin-bottom: 20px;
    padding: 15px 30px;
    background-color: #fff;
    > .list-skill {
      font-size: 28px;
      color: #666;
      padding: 15px 0;
      > p {
        align-items: center;
        justify-content: flex-start;
        > span:last-child {
          margin-left: 15px;
        }
      }
      > .inner {
        font-size: 26px;
        color: #333;
      }
    }
  }
  > .discuess {
    background-color: #fff;
    > p {
      font-size: 28px;
      color: #666;
      align-items: center;
      padding: 30px;
      > span:last-child {
        margin-left: 15px;
      }
    }
    > .discuess-inner {
      padding: 30px;
      > .star-box {
        width: 100%;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
        color: #999;
        > .star {
          display: flex;
          align-items: center;
          > .star-list {
            width: 29px;
            height: 29px;
            display: block;
          }
        }
      }
      > .dis-tag {
        margin-top: 30px;
        > span {
          background: rgba(242, 242, 242, 1);
          border-radius: 4px;
          padding: 8px 15px;
          color: #808080;
          text-align: center;
          font-size: 24px;
          line-height: 36px;
        }
        > span:not(:first-child) {
          margin-left: 18px;
        }
      }
      > .dis-inner {
        font-size: 24px;
        color: #030e13;
        margin-top: 30px;
      }
    }
  }
}
.active-day {
  background: rgba(66, 160, 226, 1);
  color: #fff !important;
}
.pannel-box {
  padding: 22px;
  height: 900px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  > .img-box {
    text-align: center;
    margin-bottom: 30px;
    > img {
      width: 124px;
      height: 124px;
      border-radius: 50%;
      display: block;
      margin: 0 auto;
      margin-top: -(124px/1.5);
    }
    > p {
      font-size: 34px;
      color: #333;
      font-weight: bold;
      text-align: center;
    }
  }
  > .dis-box {
    > .dis-title {
      margin-bottom: 30px;
      font-size: 34px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .dis-price {
      margin-bottom: 30px;
      font-size: 24px;
      color: #999;
      display: flex;
      align-items: baseline;
      > p:first-child {
        color: #ff780a;
        > .price-num {
          font-size: 40px;
        }
      }
      > p:last-child {
        margin-left: 24px;
        > a {
          text-decoration: line-through;
        }
      }
    }
    > .dis-day {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      > li {
        width: 182px;
        height: 56px;
        // background: rgba(66, 160, 226, 1);
        border: 2px solid rgba(66, 160, 226, 1);
        border-radius: 4px;
        text-align: center;
        line-height: 56px;
        font-size: 28px;
        font-weight: bold;
        color: rgba(66, 160, 226, 1);
      }
      > li:not(:first-child) {
        margin-left: 27px;
      }
    }
    > .dis-inner {
      > p {
        font-size: 30px;
        color: #333;
      }
      > span {
        font-size: 26px;
        color: #666;
      }
    }
  }
  > .dis-btn {
    text-align: center;
    height: 88px;
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 22px;
    background: rgba(66, 160, 226, 1);
    border-radius: 6px;
    font-size: 34px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
  }
}
.icons {
  width: 27px;
  height: 27px;
  display: block;
}
.icon-zan {
  background-image: url("../../assets/images/zan@2x.png");
  // background-position: 0 0;
}
.icon-jianjie {
  background-image: url("../../assets/images/jianjie.png");
}
.icon-pinjia {
  background-image: url("../../assets/images/blur_star.png");
}
.icon-star {
  background-image: url("../../assets/images/gold_star.png");
}
</style>
