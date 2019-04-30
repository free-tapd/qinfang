<template>
  <div class="vg">
    <!-- <x-header :left-options="{backText: '',showBack: true}">
      住院导航
      <a slot="right">
        <span class="iconfont icon-fenxiang"></span>
      </a>
    </x-header> -->
    <div class="content">
      <div class="bg-picture" :style="{backgroundImage:`url(${hospitalInformation.indexPicUrl})`}">
        <!-- 标注信息 -->
        <!-- https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg -->
        <div class="hospital-message flex-r">
          <div class="message-left">
            <p>{{hospitalInformation.hospitalName}}</p>
            <p>
              <span>{{hospitalInformation.hospitalLevel}}</span>
              <!-- <span class="appointment-num">预约量2.1万</span> -->
            </p>
          </div>
          <!-- <div class="message-right flex-c">
            <span class="iconfont icon-guanzhu"></span>
            <p>收藏</p>
          </div> -->
        </div>
      </div>
      <!-- 定位icon -->
      <div class="go-address flex-r">
        <div class="address-message flex-r vux-1px-r">
          <span class="iconfont icon-dingwei" style="color:#B3B3B3"></span>
          <h6>{{hospitalInformation.address}}</h6>
        </div>
        <a :href="'tel:'+hospitalInformation.telphone"  class="icons icon-phone">
           <!-- <i class="icons icon-phone" ></i> -->
           </a>
       
      </div>
      <!-- 预约list -->
      <ul class="navigation-map flex-r">
      
        <li class="flex-c" @click="goMap">
          <i class="icon-map"></i>
          <span>地图导航</span>
        </li>
        <li class="flex-c">
          <i class="icon-floor"></i>
          <span>楼层导航</span>
        </li>
          <li class="flex-c">
          <i></i>
          <span>就诊指南</span>
        </li>
      </ul>
      <!-- 医院交通 -->
      <div class="hospital-traffic">
        <h6>医院交通</h6>
        <p v-html="hospitalInformation.ridingRoute">
        </p>
      
      </div>
      <!-- 特色科室 -->
      <div class="hospital-traffic">
        <h6>特色科室</h6>
        <p v-html="hospitalInformation.specialSection">
          <!-- <span>心血管内科、心脏大血管外科、神经内科</span> -->
        </p>
      </div>
      <!-- 医院简介 -->
      <div class="hospital-traffic">
        <h6>医院简介</h6>
        <p v-html="hospitalInformation.description">
          
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader } from "vux";
import {post } from "@/utils/http"
export default {
  data() {
    return {
      isPay: true,
      hospitalInformation:{}
    };
  },
  mounted(){
    // this.$nextTick(()=>{
    //   this.getHospitalMessage();
    // })
    this.getHospitalMessage()
  },
  methods:{
    getHospitalMessage(){
      this.$post('hebHealthyApp.app.baseHospitalInfo.getHospitalByHospitalCode',{hospitalCode:this.$route.query.id}).then(res=>{
        console.log(res)
        if(res.code==0){
          this.hospitalInformation=res.data;
        }
      })
    },
   goMap(){
     location.href=`https://mo.amap.com/?q=${this.hospitalInformation.latitude}%2C${this.hospitalInformation.longitude}&name=${encodeURIComponent(this.hospitalInformation.hospitalName)}&dev=0`
   }
  },

  components: {
    XHeader
  },

};
</script>

<style lang="less" scoped>
@color: #42a0e2;

.icons {
  width: 34px;
  height: 36px;
  align-items: center;
  justify-content: center;
  // border-radius: 50%;
  color: #fff;
  font-size: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.icon-map {
  background-image: url("../../assets/images/map_daohang.png") !important;
}
.icon-floor {
  background-image: url("../../assets/images/lc_daohang.png") !important;
}
.icon-phone {
  background-image: url("../../assets/images/phone.png");
}

.bg-top {
  height: 115px;
  //   position: relative;
  background-color: @color;
}
.content {
  > .bg-picture {
    height: 436px;
    background-image: url("https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: relative;
    > .hospital-message {
      justify-content: space-between;
      align-items: center;
      height: 57px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      font-size: 26px;
      padding: 15px 30px;
      > .message-left {
        & .appointment-num {
          margin-left: 30px;
        }
        > p:last-child {
          width: 110%;
          transform: scale(0.9);
          & > span:first-child {
            opacity: 0.5;
          }
        }
      }
      > .message-right {
        align-items: center;
        justify-content: center;

        & > p {
          transform: scale(0.9);
          opacity: 0.5;
        }
      }
    }
  }
  > .go-address {
    box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1);
    background-color: #fff;
    margin-bottom: 10px;
    padding: 30px;
    color: #808080;
    font-size: 26px;
    align-items: center;
    justify-content: space-between;
    & > a {
      flex: 1;
    }
    > .address-message {
      flex: 3;
      align-items: center;
      > h6 {
        margin-left: 15px;
      }
    }
  }
  > .navigation-map {
    box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1),
      0px -1px 0px 0px rgba(230, 230, 230, 1);
    padding: 30px 0;
    background-color: #fff;
    margin-bottom: 10px;
    > li:not(:first-child) {
      border-left: 1px solid #d7d7d7;
    }
    > li {
      flex: 1;
      align-items: center;
      justify-content: center;

      > i {
        display: block;
        width: 90px;
        height: 90px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        background-image: url("../../assets/images/daohan_ico_jzzn.png");
      }
      > span {
        margin-top: 22px;
        font-size: 13px;
        color: #333;
      }
    }
  }
  > .hospital-traffic {
    box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1),
      0px -1px 0px 0px rgba(230, 230, 230, 1);
    background-color: #fff;
    margin-bottom: 10px;
    padding: 30px;
    > h6 {
      line-height: 26px;
      color: #333;
      font-size: 26px;
      padding-left: 30px;
      border-left: 4px solid @color;
      margin-bottom: 36px;
    }
    > p {
      color: #808080;
      font-size: 22px;
    }
    > p:first-child {
      // padding-top: 36px;
    }
  }

  > .medicine-list-box {
    position: relative;

    > .medicine-list {
      padding: 35px 30px;
      justify-content: space-between;
      list-style: none;
      font-size: 30px;
      color: #333;
      background-color: #fff;
      box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);
    }
  }

  > .waring {
    // align-items: center;
    // margin: 0 auto;
    //   width: 95%;
    padding: 30px;
    margin-top: 35px;
    font-size: 24px;
    color: #666;

    > .waring-text {
      margin-top: 9px;
      color: #ff2400;
      font-size: 50px;
      margin-right: 15px;
    }
  }
}
</style>
