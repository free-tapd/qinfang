<template>
  <div class="container">
    <!-- 引入组件header -->
    <Xheader @selHospital="selHospital" />
    <div class="content">

      <!-- 组件swiper -->
      <div class="swiper-box">
        <swiper :list="baseList" :loop="true" :auto="true" dots-position="center"></swiper>
        <i class="radin funbg"></i>
      </div>




      <!-- 预约挂号 -->
      <div class="appointment-box flex-r" v-if="false">


        <div class="appointment-left flex-c vux-1px-r" @click="changeJump('/departments',{})">
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
        <!-- 推荐功能 -->
        <ul class="recommended-box">
          <li class="flex-c">
            <img src="../../assets/images/index/appo.png" alt="">
            <b> 预约挂号</b>
            <span>快速挂号精准预约</span>
          </li>
          <li class="flex-c" @click="changeJump('/inquiry',{})">
            <img src="../../assets/images/index/online.png" alt="">
            <b> 在线问诊</b>
            <span>快速挂号精准预约</span>
          </li>
          <li class="flex-c">
            <img src="../../assets/images/index/perscription.png" alt="">
            <b> 在线处方</b>
            <span>快速挂号精准预约</span>
          </li>
        </ul>
        <!-- 更多功能 -->

          <div class="main_service2" >
                <div class="mm_item">
                    <img src="../../assets/images/new_main/m_service2.png">
                    <div>门诊充值</div>
                </div>
                <div class="mm_item" @click.stop="changeJump('/queryReport',{})">
                    <img src="../../assets/images/new_main/main_service2.png">
                    <div>报告查询</div>
                </div>
                <div class="mm_item" >
                    <img src="../../assets/images/new_main/in_service1.png">
                    <div>住院预缴金</div>
                </div>
                <div class="mm_item building" >
                    <img src="../../assets/images/new_main/main_service3.png">
                    <div>家庭医生</div>
                </div>
                <div class="mm_item "  >
                    <img src="../../assets/images/new_main/h_service1.png">
                    <div>健康体检</div>
                </div>
                <div class="mm_item" >
                    <img src="../../assets/images/new_main/main_service4.png">
                    <div>健康监护</div>
                </div>
                <div class="mm_item  building">
                    <img src="../../assets/images/new_main/main_service5.png">
                    <div>健康保险</div>
                </div>
                <div class="mm_item" @click.stop="changeJump('/moreLabel',{})">
                    <img src="../../assets/images/new_main/main_service6.png">
                    <div>更多</div>
                </div>
            </div>

      
      </div>

      <div class="advert">
        <img src="../../assets/images/index/index-nav-banner.png" alt="">
      </div>
     
      <!-- 其他服务 -->
      <div class="other-server self-m flex-c" v-if="false">
        <div class="other-title">其他服务</div>
        <div class="other-server-list flex-r">
          <div class="server-item flex-c" v-for="(v,i) in serverList" :key="i" @click="isGoWhere(i)">
            <span class="icon-server" :style="{backgroundImage:`url(${v.icon})`}"></span>
            <span class="server-list-title ellipsis">{{v.title}}</span>
          </div>
        </div>
      </div>
      <!-- 健康讲堂 -->
      <div class="health-course" v-if="videoList.length>0">
        <!-- title -->
        <div class="health-title flex-r">
          <p>健康讲堂</p>
          <div class="more-list">
            <span >更多</span> 
            <span class="iconfont icon-right1"></span>
          </div>
        </div>
        <!-- list -->
        <div class="swiper-list-box">
          <div class="scroll-box flex-r" :style="{width:53.333*10+'vw'}">
            <div class="swiper-list flex-c" v-for="(v,i) in videoList" :key="i">
              <!-- 图片 -->
              <div class="swiper-img-box">
                <img :src="v.imageUrl" :alt="v.title">
                <span class="pause funbg"></span>
                <div class="swiper-cover flex-r">
                  <span class="docutor-name">{{v.doctorName}}</span>
                  <span class="docutor-type">{{v.sectionName}}</span>
                </div>
              </div>

              <p class="ellipsis">{{v.title}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 咨询 ->健康专题 -->
      <div class="health-theme">
        <div class="more-tab ">
          <div class="tab-width">
            <Xtab :tabArr="tabData" @getItem="getItem" :defaultColor="'#999'"/>
          </div>
            <div class="more-info vux-1px-b">
               <span class="iconfont icon-right1"></span>
            </div>
         
        </div>
        
        <div>
          <!-- 引入组件 -->
          <infoList v-for="(v,i) in infoListArr" :key="i" :infoItem="v" @infoDetail="infoDetail" />
        </div>
      </div>
    </div>

    <!-- 引入组件footer -->
    <Xfooter />
  </div>
</template>
<script>
  import Xfooter from "@/components/footer";
  import Xheader from "@/components/header";
  import Xtab from "@/components/tab";
  import infoList from "@/components/infoList";
  import {
    Swiper
  } from "vux";
  import indexData from "@/assets/data/index.json"
  import {
    post
  } from "@/utils/http.js"
  import {
    mapState,
    mapMutations
  } from "vuex"

  export default {
    data() {
      return {
        baseList: [],
        serverList: indexData.serverList,
        server1: indexData.server1,
        server2: indexData.server2,

        tabData: [{
            id: 1,
            title: "健康专题"
          },
          {
            id: 2,
            title: "社会万象"
          },
          {
            id: 3,
            title: "区域新知"
          },
          {
            id: 4,
            title: "健康提醒"
          }
        ],
        tabItem: {},
        infoListArr: [],
        videoList: [] //视屏的数组
      };
    },
    created() {
      this.tabItem = this.tabData[0];
      console.log(this.$store.state);
      
    },
    mounted() {
      this.$nextTick(() => {
        this.getSwiper();
        this.getHealthInfo();
        this.getVideoList();
        // this.hospitalLimit()
      })

    },
    components: {
      Xfooter,
      Xheader,
      Swiper,
      Xtab,
      infoList
    },
    computed: {
      ...mapState(['hospitalCode'])
    },
    methods: {
      
      getItem(msg) {
        console.log(msg);
        this.tabItem = msg;
        this.getInfoList(this.tabItem.id);
      },
      serverGo(i) {
        if (i == 0) {
          this.changeJump('/queryReport', {})
        } else {
          this.changeJump('/hospitalRecharge', {})
        }
      },
      serverGo1(i) {
        if (i == 0) {
          this.changeJump('/paymentList', {})
        } else {
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
          // this.changeJump("/queryReport", {});
          this.changeJump("/Hospitalization", {});
        }
      },
      /**
       *  @选择科室跳转
       */
      selHospital() {
        console.log('点击')
        // this.changeJump('/departments',{})
        this.changeJump('/selHospital', {})
      },
      // 获取轮播图
      getSwiper() {
        post('hebHealthyApp.app.cmsInfo.getPicturePlay', {
          hospitalCode: "311003"
        }).then(res => {
          // console.log(res);
          if (res.code == 0) {

            const urlList = res.data.map((item, index) => ({
              url: item.linkUrl,
              img: item.imageUrl,
              fallbackImg: "",
              title: ""
            }))
            this.baseList = urlList;
          }
        })
      },
      // 获取健康咨询类别的接口
      getHealthInfo() {
        post('hebHealthyApp.app.cmsInfo.getInformationType').then(res => {
          if (res.code == 0) {
            const textTab = res.data.map((item, index) => ({
              title: item.text,
              id: item.id
            }))
            this.tabData = textTab;
            // console.log(this.tabData);
            this.getInfoList(this.tabData[0].id)

          }
        })
      },
      //获取咨询列表
      getInfoList(id) {
        post('hebHealthyApp.app.cmsInfo.getInformation', {
          typeId: id,
          hospitalCode: this.hospitalCode
        }).then(res => {
          if (res.code == 0) {
            // console.log(res);
            this.infoListArr = res.data;
          }
        })
      },
      // 健康讲堂video
      getVideoList() {
        post('hebHealthyApp.app.cmsInfo.getHealthyVideo', {
          hospitalCode: this.hospitalCode
        }).then(res => {
          if (res.code == 0) {
            // console.log(res);
            this.videoList = res.data;
          }
        })
      },
      //跳转到咨询详情
      infoDetail(item) {
        window.location.href = item.linkUrl
      },
     



    }
  };

</script>
<style lang="less">
  @import url("../../styles/index.less");

</style>
