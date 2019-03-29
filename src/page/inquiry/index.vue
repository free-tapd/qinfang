<template>
  <div class="vg">
    <!-- 搜索框 -->
    <div class="search" >
      <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        placeholder="搜索科室、医院"
        v-model="value"
        position="absolute"
        auto-scroll-to-top
        top="0px"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search"
      ></search>
    </div>

    <!-- content -->
    <div class="contents" :class="{'active-focus':isFocus}">
      <div class="sel-list">
        <flexbox gutter="4">
          <flexbox-item>
            <div class="inquiry-item flex-r">
              <span class="funbg"></span>
              <div class="inquiry-title">
                <p>按科室</p>
                <span>按科室搜索医生</span>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <!-- <div class="flex-demo">2</div> -->
            <div class="inquiry-item flex-r inquiry-item-bg">
              <span class="funbg"></span>
              <div class="inquiry-title">
                <p>按医院</p>
                <span>按医院搜索医生</span>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <!-- 选择科室 -->
      <div class="sel-department">
        <!-- 标题 -->
        <ul class="department-title flex-r">
          <li class="flex-r">
            <span class="icons funbg icon-hot"></span>
            <p class="c">热门科室</p>
          </li>
          <li>查看更多</li>
        </ul>
        <!-- 科室icon -->
        <div class="cv">
          <ul class="department-list" ref="boxWidth">
            <li class="flex-c" v-for="v in 10" :key="v">
              <span class="funbg icon-depart"></span>
              <p class="office-title">消化科</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 广告 advert -->
      <div class="advert-box">
        <img src="../../assets/images/inquiry/advert1.png" alt>
      </div>
      <!-- 选择医生 -->
      <div class="sel-department sel-docutor-box">
        <!-- 标题 -->
        <ul class="department-title flex-r">
          <li class="flex-r">
            <span class="icons funbg icon-zan2"></span>
            <!-- <img src="../../assets/images/inquiry/swylyc_zzy.png" alt=""> -->
            <p class="c">热门科室</p>
          </li>
          <li @click.stop="changeJump('/docutorList',{})">查看更多</li>
        </ul>
        <!-- 科室icon -->
        <div class="cv">
          <ul class="department-list" ref="boxWidth2">
            <li class="flex-c sel-docutor" v-for="v in 10" :key="v">
              <span class="funbg icon-docutor"></span>
              <!-- <p class="office-title">消化科</p> -->
              <p class="docutor-name">王志斌</p>
              <p class="docutor-grade">主治医师</p>
              <p class="docutor-office">美容整容科</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Xfooter/>
  </div>
</template>
<script>
import Xfooter from "@/components/footer";
import { Search, Flexbox, FlexboxItem } from "vux";
export default {
  data() {
    return {
      isFocus:false,
    };
  },
  mounted() {
    console.log(window.innerWidth);
    let W = window.innerWidth / 5;
    let W2 = window.innerWidth / 3.5;
    this.$refs.boxWidth.style.width = W * 10 + "px";
    this.$refs.boxWidth2.style.width = W2 * 10 + "px";
  },
  components: {
    Xfooter,
    Flexbox,
    FlexboxItem,
    Search
  },
  methods:{
    onFocus(){
      this.isFocus=true
    },
    onCancel(){
      this.isFocus=false
    }
  }
};
</script>
<style lang="less" scoped>
.vg {
  padding-bottom: 53px * 2;
}

.contents {
  > .sel-list {
    padding: 10px;
    background-color: #fff;
    padding-bottom: 19px;
    margin-bottom: 11px;
  }
  & .inquiry-item {
    align-items: center;
    justify-content: center;
    height: 160px;
    background: #eaf6f6;
    border-radius: 4px;
    > span {
      width: 81px;
      height: 81px;
      display: block;
      background-image: url("../../assets/images/inquiry/section.png");
    }
    > .inquiry-title {
      color: rgba(95, 183, 249, 1);
      > p {
        font-size: 34px;
        font-weight: bold;
      }
      > span {
        font-size: 24px;
        font-weight: 500;
      }
    }
  }

  > .sel-department {
    margin-bottom: 11px;
    padding: 10px;
    font-size: 24px;
    background-color: #fff;
    > .department-title {
      padding: 30px 0;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;
      > li:first-child {
        flex: 1;
        align-items: center;
        color: #333;
        > p {
          margin-left: 13px;
        }
      }
      > li:last-child {
        flex: 1;
        color: #666;
        text-align: right;
      }
    }
    > .cv {
      overflow: scroll;
      //   padding-bottom: 30px;
      & .department-list {
        display: flex;
        align-items: center;
        > .sel-docutor {
          background-color: #f6f6f6;
          // background-color: #000;
          > .docutor-name {
            font-size: 30px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 36px;
          }
          > .docutor-grade {
            font-size: 22px;
            font-weight: 400;
            color: rgba(95, 183, 249, 1);
            line-height: 36px;
          }
          > .docutor-office {
            font-size: 24px;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 36px;
          }
        }

        > .sel-docutor:not(:first-child) {
          margin-left: 9px;
        }
        > li {
          padding: 25px 0;
          justify-content: center;
          align-items: center;
          width: 20%;
          > .icon-depart {
            width: 65px;
            height: 65px;
            display: block;
          }
          > .icon-docutor {
            width: 90px;
            height: 90px;
            display: block;
            border-radius: 50%;
            background-color: #fff;
            background-repeat: no-repeat;
            background-size: cover;
          }
          > .office-title {
            line-height: 60px;
            font-size: 24px;
            color: #333;
          }
        }
      }
    }
  }
  > .sel-docutor-box {
    padding-bottom: 40px;
  }
  //   advert
  > .advert-box {
    margin-bottom: 11px;
    > img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
}
.inquiry-item-bg {
  background-color: #fdf3e7 !important;
  > span {
    background-image: url("../../assets/images/inquiry/hospital.png") !important;
  }
  & .inquiry-title {
    color: #f58d1e !important;
  }
}
.icons {
  width: 24px;
  height: 24px;
  display: block;
  background-repeat: no-repeat;
}
.icons1 {
  width: 90px;
  height: 90px;
  display: block;
  background-repeat: no-repeat;
}
.icon-hot {
  background-image: url("../../assets/images/inquiry/hot.png");
}
.icon-depart {
  background-image: url("../../assets/images/inquiry/consult1.png");
}
.icon-docutor {
  background-image: url("../../assets/images/inquiry/swylyc_zzy.png");
}
.icon-zan2 {
  background-image: url("../../assets/images/inquiry/zan2.png");
}
.active-focus{
  margin-top: 100px;
}
</style>