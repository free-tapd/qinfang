<template>
  <div class="container">
    <!-- 引入组件header -->
    <Xheader @selHospital="selHospital"/>
    <div class="content">
      <!-- 组件swiper -->
      <swiper :list="baseList" loop="true" auto="true" dots-position="center"></swiper>
      <!-- 预约挂号 -->
      <div class="appointment-box flex-r">
        <div class="appointment-left flex-c vux-1px-r">
          <img src="../../assets/images/appoint-left.png" alt>
          <p>预约挂号</p>
          <span class="min-title">快速挂号精准预约</span>
        </div>
        <div class="appointment-right flex-c">
          <img src="../../assets/images/appoint-right.png" alt>
          <p>在线咨询</p>
          <span class="min-title">在线预约挂号</span>
        </div>
      </div>
      <!-- 报告检查 -->
      <div class="report-box flex-r vux-1px-b">
        <div
          class="report flex-r"
          v-for="(v,i) in server1"
          :key="i"
          :class="{'vux-1px-r':i%2==0}"
          @click="serverGo(i)"
        >
          <div>
            <p>{{v.title}}</p>
            <span class="min-title">{{v.titleIntro}}</span>
          </div>
          <div class="report-icon">
            <span :style="{backgroundImage:`url(${v.icon})`}"></span>
          </div>
        </div>
      </div>
      <!-- 报告检查2 -->
      <div class="report-box self-m flex-r">
        <div
          class="report flex-r"
          v-for="(v,i) in server2"
          :key="i"
          :class="{'vux-1px-r':i%2==0}"
          @click="serverGo1(i)"
        >
          <div>
            <p>{{v.title}}</p>
            <span class="min-title">{{v.titleIntro}}</span>
          </div>
          <div class="report-icon">
            <span :style="{backgroundImage:`url(${v.icon})`}"></span>
          </div>
        </div>
      </div>
      <!-- 其他服务 -->
      <div class="other-server self-m flex-c">
        <div class="other-title">其他服务</div>
        <div class="other-server-list flex-r">
          <div
            class="server-item flex-c"
            v-for="(v,i) in serverList"
            :key="i"
            @click="isGoWhere(i)"
          >
            <span class="icon-server" :style="{backgroundImage:`url(${v.icon})`}"></span>
            <span class="server-list-title ellipsis">{{v.title}}</span>
          </div>
        </div>
      </div>
      <!-- 健康讲堂 -->
      <div class="health-course">
        <!-- title -->
        <div class="health-title flex-r">
          <p>健康讲堂</p>
          <div class="more-list">
            更多
            <span class="iconfont icon-right"></span>
          </div>
        </div>
        <!-- list -->
        <div class="swiper-list-box">
          <div class="scroll-box flex-r" :style="{width:53.333*10+'vw'}">
            <div class="swiper-list flex-c" v-for="v in 10" :key="v">
              <!-- 图片 -->
              <div class="swiper-img-box">
                <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt>
                <span class="pause"></span>
                <div class="swiper-cover flex-r">
                  <span class="docutor-name">李月凯</span>
                  <span class="docutor-type">消化内科</span>
                </div>
              </div>

              <p class="ellipsis">利用午休来补觉，怎么能提高效率？</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 咨询 ->健康专题 -->
      <div class="health-theme">
        <Xtab :tabArr="tabData" @getItem="getItem"/>
        <div class v-if="tabItem.id==1">
          <!-- 引入组件 -->
          <infoList v-for="v in 5" :key="v"/>
        </div>
      </div>
    </div>

    <!-- 引入组件footer -->
    <Xfooter/>
  </div>
</template>
<script>
import Xfooter from "@/components/footer";
import Xheader from "@/components/header";
import Xtab from "@/components/tab";
import infoList from "@/components/infoList";
import { Swiper } from "vux";
import indexData from "@/assets/data/index.json"
const baseList = [
  {
    url: "javascript:",
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg"
    //   title: '送你一朵fua'
  },
  {
    url: "javascript:",
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg"
    //   title: '送你一辆车'
  },
  {
    url: "javascript:",
    img: "https://static.vux.li/demo/5.jpg", // 404
    //   title: '送你一次旅行',
    fallbackImg:
      "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
  }
];
export default {
  data() {
    return {
      baseList,
      serverList: indexData.serverList,
      server1:indexData.server1,
      server2: indexData.server2,

      tabData: [
        { id: 1, title: "健康专题" },
        { id: 2, title: "社会万象" },
        { id: 3, title: "区域新知" },
        { id: 4, title: "健康提醒" }
      ],
      tabItem: {}
    };
  },
  created() {
    this.tabItem = this.tabData[0];
  },
  mounted() {},
  components: {
    Xfooter,
    Xheader,
    Swiper,
    Xtab,
    infoList
  },
  methods: {
    getItem(msg) {
      console.log(msg);
      this.tabItem = msg;
    },
    serverGo(i){
      if(i==0){
        this.changeJump('/queryReport',{})
      }else{
        this.changeJump('/hospitalRecharge',{})
      }
    }, 
    serverGo1(i){
      if(i==0){
        this.changeJump('/paymentList',{})
      }else{
        // this.changeJump('/hospitalRecharge',{})
      }
    },

    // 跳转判断
    isGoWhere(i) {
      if (i == 0) {
        this.changeJump("/hospitalMessage", {});
      } else if (i == 1) {
        this.changeJump("/payRecord", {});
      } else if (i == 2) {
        this.changeJump("/Hospitalization", {});
      } else {
        this.changeJump("/queryReport", {});
      }
    },
    /**
     *  @选择科室跳转
     */
    selHospital(){
      console.log('点击')
      // this.changeJump('/departments',{})
      this.changeJump('/selHospital',{})
    }
  }
};
</script>
<style lang="less">
@import url("../../styles/base.less");

.appo {
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #333;
}

.min-title {
  font-size: 22px;
  color: #999;
  transform: scale(0.8);
}
.self-m{
  margin-bottom: 15px;
}
.container {
  padding-bottom: 53px * 2;

  & > .content {
    background: #f5f5f5;
    color: #333;

    & > .appointment-box {
      padding: 27px 0;
      margin-bottom: 15px;
      align-items: center;
      background-color: #fff;

      & img {
        display: block;
        width: 126px;
        height: 126px;
      }

      & > .appointment-left {
        &:extend(.appo);
      }

      & > .appointment-right {
        &:extend(.appo);
      }
    }

    & > .report-box {
      padding: 15px;
      font-size: 30px;
      color: #333;
      flex-wrap: wrap;
      background-color: #fff;
      & > .report {
        // width: 50%;
        flex: 1;
        align-items: center;
        justify-content: space-around;

        & > .report-icon {
          // border: 1px dashed #999;
          width: 85px;
          height: 85px;

          & > span {
            display: block;
            width: 100%;
            height: 100%;
            background-image: url("../../assets/images/home_baogaocx@2x.png");
            background-size: contain;
            background-position: center;
          }
        }
      }
    }

    & > .other-server {
      font-size: 30px;
      padding: 18px 30px;
      background-color: #fff;

      // color: @baseColor;
      & > .other-title {
        padding: 15px 0;
      }

      & > .other-server-list {
        color: @baseColor;

        & > .server-item {
          flex: 1;
          align-items: center;
          justify-content: center;

          & > .icon-server {
            display: block;
            width: 60px;
            height: 60px;
            // border: 1px dashed #999;
            background-size: contain;
            background-position: center;
          }

          & > .server-list-title {
            margin-top: 14px;
            font-size: 24px;
            transform: scale(0.9);
          }
        }
      }
    }

    & > .health-course {
      background-color: #fff;
      padding: 30px;
      margin-bottom: 15px;
      & > .health-title {
        font-size: 30px;
        justify-content: space-between;
        align-items: center;

        & > .more-list {
          color: #999;
        }
      }

      & > .swiper-list-box {
        overflow-x: scroll;
        padding: 15px 0;
        & .swiper-list:not(:first-child) {
          margin-left: 20px;
        }

        & .swiper-list {
          font-size: 24px;
          width: 410px;
          & > .swiper-img-box {
            position: relative;
            border-radius: 10px;
            & > img {
              display: block;
              width: 100%;
              // height: auto;
              height: 220px;
              border-radius: 10px;
            }
            & > .pause {
            }
            & > .swiper-cover {
              padding: 0 15px;
              height: 30%;
              //   width: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              color: #fff;
              align-items: center;
              justify-content: baseline;

              & > .docutor-name {
                font-size: 32px;
                margin-right: 15px;
              }

              > .docutor-type {
                font-size: 24px;
              }
            }
          }
        }
      }
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
