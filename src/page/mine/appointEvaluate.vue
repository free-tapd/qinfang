<template>
  <div class="vg">
    <div class="evaluate-box vux-1px-b">
      <div class="evaluate flex-r">
        <div class="evaluate-left flex-r">
          <img src="../../assets/images/person/doctor_pic.png" alt>
          <div class="title-box">
            <p class="hos-title">
              <span>河北医科大学第二医院</span>
            </p>
            <span>胸外科正高职</span>
          </div>
        </div>
        <!-- <span class="evaluate-date">2018-09-70</span> -->
      </div>
    </div>
    <div class="no-evaluate" v-if="false">
      <div class="grade-star vux-1px-b">
        <div class="grade-left">
          <span class="funbg icon-star-no"></span>
          <span class="funbg icon-star-no"></span>
          <span class="funbg icon-star-no"></span>
          <span class="funbg icon-star-no"></span>
          <span class="funbg icon-star-no"></span>
        </div>
        <div class="grade-right">点星星评分，5星最高</div>
      </div>
      <div class="text-bg">
        <group>
          <x-textarea
            :max="200"
            placeholder="请留下您宝贵意见"
            @on-focus="onEvent('focus')"
            @on-blur="onEvent('blur')"
          ></x-textarea>
        </group>
      </div>
    </div>
    <!-- 已经评价了的 -->
    <div class="evaluated">
      <div class="grade-star grade-over">
        <span class="my-eva">我的评价：</span>
        <div class="grade-left">
          <span class="funbg icon-star"></span>
          <span class="funbg icon-star-no"></span>
          <span class="funbg icon-star-no"></span>
          <span class="funbg icon-star-no"></span>
          <span class="funbg icon-star-no"></span>
        </div>
        <!-- <div class="grade-right">点星星评分，5星最高</div> -->
      </div>
      <div class="message-box">
        <p class="p-title">医生对我很有帮助。</p>
        <span class="eva-method">类型：预约就诊 2018-09-70</span>
      </div>
    </div>

    <div class="evaluate-btn">删除评价</div>
  </div>
</template>
<script>
import { XTextarea, Group } from "vux";

export default {
  components: {
    XTextarea
  }
};
</script>

<style lang="less" scoped>
.grade-over {
  justify-content: flex-start !important;
  margin-bottom: 22px;
}
.message-box {
  height: 186px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 5px 0px rgba(230, 230, 230, 1);
  position: relative;
  padding: 23px;
  > .p-title {
    font-size: 26px;
    color: #666666;
  }
  > .eva-method {
    font-size: 24px;
    color: #666;
    position: absolute;
    right: 23px;
    bottom: 23px;
  }
}
.grade-star {
  padding: 0 23px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .grade-left {
    > span.funbg {
      width: 30px;
      height: 30px;
      display: inline-block;
    }
  }
  > .my-eva {
    font-size: 30px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 107px;
  }
  > .grade-right {
    font-size: 24px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 90px;
  }
}
.text-bg {
  background-color: #fff;
}
.icon-star {
  background-image: url("../../assets/images/gold_star.png");
}
// grey_star
.icon-star-no {
  background-image: url("../../assets/images/grey_star.png");
}
.evaluate-box {
  background-color: #fff;
  font-size: 26px;
  color: #333;
  padding: 23px;
  margin-bottom: 22px;
  > .evaluate {
    justify-content: space-between;
    align-items: flex-start;
    > .evaluate-left {
      > img {
        width: 80px;
        height: 80px;
        display: block;
        margin-right: 35px;
        border-radius: 50%;
      }
      > .title-box {
        > .hos-title {
          font-size: 30px;
          color: #333;
          font-weight: bold;
          > .department-title {
            font-size: 26px;
          }
        }
        > .star-box {
          color: #666;
          display: flex;
          align-items: center;
          > p {
            margin-right: 28px;
          }
          > .star-line {
            > .star {
              width: 30px;
              height: 30px;
              display: inline-block;
            }
            > .star:not(:first-child) {
              margin-left: 11px;
            }
          }
        }
      }
    }
    > .evaluate-date {
      font-size: 24px;
      color: #666;
    }
  }
  > .list-eva {
    margin-top: 41px;
    padding-left: 80+35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .eva-status {
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 44px;
    }
    > .eva-status2 {
      font-weight: 400;
      color: #009aff;
      line-height: 44px;
    }
  }
}
.evaluate-btn {
  width: 704px;
  height: 82px;
  background: rgba(232, 110, 100, 1);
  border-radius: 41px;
  text-align: center;
  line-height: 82px;
  position: fixed;
  left: 50%;
  bottom: 18px;
  margin-left: -704px/2;
  color: #fff;
  font-size: 36px;
}
</style>
