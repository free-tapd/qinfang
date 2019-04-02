<template>
  <div class="vg">
    <div class="card-manger">
      <div :class="{'cover':actionShow==true}" @click="actionShow=false">
        <div class="header">
          <p>卡管理</p>
          <p @click.stop="isShow=!isShow">
            <span>马素贞</span>
            <span class="iconfont icon-bottom" style="color:#42A0E2;font-size:12px;"></span>
          </p>
        </div>
        <div class="sel-hospital-box">
          <div class="sel-hospital" @click.stop="actionShow=!actionShow">
            <p>秦皇岛市第一医院</p>
            <span class="iconfont icon-bottom" style="color:#42A0E2;font-size:12px;"></span>
          </div>
          <!-- z选择医院 -->
          <div class="sick-hosital">
            <!-- 引入组件 -->
            <actionHospital :actionShow="actionShow"/>
          </div>
        </div>
      </div>

      <tab :tabArr="tabArr" @getItem="getItem"/>
      <div class="tab-swith-inner" v-show="activeId==1">
        <div class="add-card-box" v-if="false">
          <cardHospital v-for=" v in 5" :key="v"/>
          <div class="add-card" @click="changeJump('/addSickCard',{})">
            <span class="funbg"></span>
            <p>添加就诊卡</p>
          </div>
        </div>
        <div class="no-card">
          <img src="../../assets/images/person/nocard.png" alt>
          <p>暂无就诊卡</p>
        </div>
      </div>
      <!-- 住院号 -->
      <div class="tab-swith-inner" v-show="activeId==2">
        <div class="add-card-box" v-if="false">
          <cardHospital v-for=" v in 5" :key="v"/>
          <div class="add-card">
            <span class="funbg"></span>
            <p @click="changeJump('/addHospitalNum',{})">添加住院号</p>
          </div>
        </div>
        <div class="no-hospital-num">
          <p class="title">暂未选择医院，请先选择医院</p>
          <div class="no-btn">请先选择医院</div>
        </div>
      </div>
      <!-- 选择就诊人 -->
      <div class="cover" v-if="isShow" @click.stop="isShow=!isShow">
        <div class="sick-people">
          <ul>
            <li v-for=" (v,i) in 10" :key="v">
              <div class="img-box" @click.stop="cur=i">
                <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" alt>
                <span class="funbg" :class="{'active-sel':cur==i}"></span>
              </div>

              <p>张素贞</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tab from "@/components/tab";
import cardHospital from "@/components/cardHospital";
import actionHospital from "@/components/actionHospital";
export default {
  data() {
    return {
      tabArr: [{ title: "就诊卡", id: 1 }, { title: "住院号", id: 2 }],
      activeId: 1,
      cur: 0,
      isShow: false,
      actionShow: false
    };
  },
  components: {
    tab,
    cardHospital,
    actionHospital
  },
  methods: {
    getItem(item) {
      this.activeId = item.id;
    }
  }
};
</script>
<style lang="less" scoped>
.card-manger {
  & .header {
    padding: 28px 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    > p:first-child {
      font-size: 40px;
      font-family: PingFang-SC-Light;
      color: rgba(51, 51, 51, 1);
    }
    > p:last-child {
      position: absolute;
      right: 28px;
      top: 33px;
      font-size: 30px;
      color: rgba(66, 160, 226, 1);
    }
  }
  & .sel-hospital-box {
    background-color: #fff;
    padding-bottom: 36px;
    > .sel-hospital {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #42a0e2;
      width: 636px;
      height: 66px;
      background: rgba(250, 250, 250, 1);
      border: 1px solid rgba(238, 238, 238, 1);
      font-size: 28px;
      border-radius: 30px;
      > p {
        margin-right: 29px;
      }
    }
  }
  > .tab-swith-inner {
    padding-top: 30px;
    > .add-card-box {
      > .add-card {
        margin: 0 auto;
        width: 700px;
        height: 160px;
        background: rgba(255, 255, 255, 1);
        border: 1px dashed rgba(66, 160, 226, 1);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        > span {
          display: block;
          width: 40px;
          height: 40px;
          background-image: url("../../assets/images/person/plus.png");
        }
        > p {
          margin-left: 12px;
          font-size: 30px;
          color: #333;
        }
      }
    }
    > .no-card {
      > img {
        display: block;
        width: 200px;
        height: 200px;
        margin: 0 auto;
      }
      > p {
        font-size: 30px;
        color: #999;
        text-align: center;
      }
    }
    > .no-hospital-num {
      font-size: 34px;
      color: #999;
      text-align: center;
      >p{
        margin: 97px 0;
      }
      > .no-btn {
        width: 700px;
        height: 98px;
        background: rgba(66, 160, 226, 1);
        border: 1px solid rgba(66, 160, 226, 1);
        border-radius: 4px;
        color: #fff;
        line-height: 98px;
        text-align: center;
        margin: 0 auto;
      }
    }
  }
}
.active-sel {
  background-image: url("../../assets/images/jzr_ico_chose_set@2x.png");
}
.sick-people {
  min-height: 375px;
  position: absolute;
  background-color: white;
  > ul {
    padding: 37px 0px;
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 100%/4;
      > .img-box {
        position: relative;
        width: 97px;
        height: 97px;
        margin: 0 auto;
        > span {
          width: 18px;
          height: 18px;
          display: block;

          position: absolute;
          right: 0;
          bottom: 15%;
          z-index: 10;
        }

        > img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      > p {
        text-align: center;
        font-size: 24px;
        color: #666;
      }
      margin-bottom: 27px;
    }
  }
}
.sick-hospital {
  position: absolute;
}
</style>
