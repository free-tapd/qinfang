<template>
  <div class="docutor-list">
    <!-- 医生列表   页面 -->
    <div class="docutor-message flex-r vux-1px-b ">
      <div class="img-box">
        <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" alt>
      </div>
      <div class="flex-c profession ">
        <!-- first -->
        <div class="docutor-lv flex-r">
          <!-- 医生信息 -->
          <div class="docutor-name">
            <div class="docutor-skill">
              <p class="docutor-title">李素珍</p>
              <span class="docutor-grade">主任医师</span>
              <span class="docutor-partment">消化科</span>
            </div>
            <!-- 所属医院 -->
            <p class="hospital-name">天津大学总医院</p>
            <div class="score">
              <span class="icon-star-pink funbg"></span>
              <span>5.0</span>
              <span>40次咨询</span>
            </div>
          </div>
          <!-- 关注 -->
          <!-- <div class="follow-btn">关注</div> -->
          <div class="is-online">
            <i></i>
            <p>在线</p>
          </div>
        </div>
        <!-- seconed -->
        <!-- 一生的业务信息 -->
        <div class="follow-msg flex-r ellipsis">Edgewise矫正技术、Tip—Edge矫治技术、MBT...</div>
        <div class="server-price flex-r vux-1px-t">
          <p class="flex-r">
            <i class="funbg"></i>
            <span>￥30</span>
          </p>
          <p class="flex-r">
            <i class="funbg icon-video"></i>
            <span>￥60</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.docutor-message {
  padding: 30px;
  background-color: #fff;
  // margin-bottom: 20px;
  font-size: 26px;
  color: #666;
  > .img-box {
    flex: 1;

    > img {
      display: block;
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
  }
  > .profession {
    flex: 5;
    > .docutor-lv {
      align-items: center;
      justify-content: space-between;
      > .docutor-name {
        display: flex;
        flex-direction: column;
        align-items: baseline;

        > .hospital-name {
          font-size: 24px;
          transform: scale(0.86);
          color: #999;
        }
        > .docutor-skill {
          display: flex;
          align-items: center;
          line-height: 40px;
          margin-bottom: 20px;
          > .docutor-title {
            font-size: 28px;
            color: #333;
            font-weight: bold;
          }
          > .docutor-grade {
            font-size: 20px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-left: 30px;
          }
          > .docutor-partment {
            font-size: 24px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            transform: scale(0.86);
            margin-left: 30px;
          }
        }
        > .score {
          display: flex;
          align-items: center;
          color: #999;
          vertical-align: center;
          > .icon-star-pink {
            width: 20px;
            height: 20px;
            display: block;
            background-image: url("../assets/images/inquiry/gold_star2.png");
          }
          > span:nth-child(2) {
            color: #ff6e04;
            font-size: 24px;
            transform: scale(0.86);
          }
          > span:last-child {
            font-size: 24px;
            transform: scale(0.86);
          }
        }
      }
      > .is-online {
        display: flex;
        align-items: center;
        > i {
          width: 11px;
          height: 11px;
          background-color: #70e100;
          border-radius: 50%;
          display: block;
        }
        > p {
          font-size: 24px;
          color: #999;
          transform: scale(18/24);
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
    > .server-price {
        // padding: 30px 0; 
        padding-top: 30px;
        margin-top: 30px;
        align-items: center;
        font-size: 24px;
        color: #999;
      > p {
        > i {
          width: 38px;
          height: 38px;
          display: block;
          background-image: url("../assets/images/inquiry/online.png");
          margin-right: 26px;
        }
      }
      >p:not(:first-child){
          margin-left: 50px;
      }
    }
    > .follow-msg {
      font-size: 24px;
      color: #999;

    }
  }
}
.icon-video{
    background-image: url('../assets/images/inquiry/video.png')!important;
}
</style>

