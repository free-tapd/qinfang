<template>
  <div class>
    <!-- 按需搜索 -->
    <div class="search-box" v-if="actionShow">
      <div class="pannel-search-hospital">
        <!-- 1 -->
        <ul class="pannel-left">
          <li>全部</li>
          <li>保定</li>
          <li v-for="(v,i) in 10" :key="v" :class="{'active-item':cur2==i}" @click.stop="cur2=i">邯郸</li>
        </ul>
        <!-- 2 -->
        <ul class="pannel-right">
          <li class="flex-r" v-for="v in 10" :key="v">
            <img src="../assets/images/logo1.png" alt>
            <div class="hospital-name">
              <p>河北医科大学第二医院</p>
              <span>三级甲等</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 按照科室查询 -->
      <div class="pannel-search-hospital pannel-search-department" v-if="cur==2">
        <!-- 1 -->
        <ul class="pannel-left">
          <li v-for="(v,i) in 10" :key="i" :class="{'active-item':cur1==i}" @click.stop="cur1=i">内科</li>
        </ul>
        <!-- 2 -->
        <ul class="pannel-right">
          <li class="flex-r" v-for="v in 10" :key="v">
            <!-- <img src="../../assets/images/logo1.png" alt> -->
            <div class="hospital-name">
              <!-- <p>河北医科大学第二医院</p> -->
              <span>全部</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="pannel-search-hospital pannel-search-all" v-if="cur==1">
        <ul class="choose-from">
          <li v-for="(v,i) in chooseArr" :key="i">
            <p class="choose-title">{{v.title}}</p>
            <div class="choose-list">
              <span
                v-for="(r,j) in v.choose.chooseList"
                :key="j"
                :class="{'active-choose':v.choose.cur==j}"
                @click.stop="chooseTag(v,j)"
              >{{r.chooseTitle}}</span>
              <!-- <span></span> -->
            </div>
          </li>
        </ul>
        <div class="choose-btn">
          <span>重置</span>
          <span>确定</span>
        </div>
      </div>
    </div>
    <!-- 医生列表 -->
    <!-- <div class="cover"></div> -->
  </div>
</template>
<script>
import { Flexbox, FlexboxItem } from "vux";
export default {
  props: {
    actionShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabArr: [
        { id: 1, title: "综合" },
        { id: 2, title: "科室" },
        { id: 3, title: "医院" }
      ],
      chooseArr: [
        {
          id: 1,
          title: "按咨询量",
          choose: {
            cur: 0,
            chooseList: [
              { chooseTitle: "从高到底", isClick: false },
              { chooseTitle: "从低到高", isClick: false }
            ]
          }
        },
        {
          id: 2,
          title: "按好评量",
          choose: {
            cur: 0,
            chooseList: [
              { chooseTitle: "从高到底", isClick: false },
              { chooseTitle: "从低到高", isClick: false }
            ]
          }
        },
        {
          id: 3,
          title: "医生状态",
          choose: {
            cur: 0,
            chooseList: [
              { chooseTitle: "在线医生", isClick: false },
              { chooseTitle: "全部医生", isClick: false }
            ]
          }
        }
      ],
      cur: 0,
      cur1: 0,
      cur2: 0,
      activeId: -1
    };
  },
  components: {
    Flexbox,
    FlexboxItem
  },
  mounted() {
    console.log(document.getElementsByTagName("body"));
    // document.getElementsByTagName("body")[0].style.overflow = "hidden";
  },
  methods: {
    allHandler(v) {
      console.log(v);

      this.activeId = v.id;
      if (this.cur == v.id) {
        this.cur = 0;
        document.getElementsByTagName("body")[0].style.overflow = "";
      } else {
        this.cur = v.id;
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
      }
    },
    chooseTag(item, j) {
      item.choose.cur = j;
    }
  }
};
</script>
<style lang="less" scoped>
.active {
  color: #00a0e9 !important;
}
.active-icon {
  // translate: 50% 50%;
  background-image: url("../assets/images/inquiry/blur_array.png") !important;

  // transform: rotate(180deg);s
}
.active-item {
  background-color: #fff;
  color: #00a0e9;
}
.search-box {
  z-index: 10;
  position: relative;
  background-color: #fff;
  & .flex-demo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88px;
    line-height: 88px;
    font-weight: 400;
    font-size: 24px;
    color: #333;

    > span {
      width: 16px;
      height: 16px;
      display: block;
      margin-left: 24px;
      transition: all linear 0.5s;
    }
  }
}
.pannel-search-hospital {
  display: flex;
  // align-items: baseline;

  height: 549px;
  background-color: #fff;
  // position: absolute;
  // bottom: 0;s
  left: 0;
  right: 0;
  > .pannel-left {
    overflow: scroll;
    background: rgba(248, 248, 248, 1);
    width: 197px;
    height: 100%;
    font-size: 30px;
    color: #333;
    > li {
      text-align: center;
      padding: 30px 0;
    }
  }
  > .pannel-right {
    overflow: scroll;
    height: 100%;
    > li {
      display: flex;
      align-items: center;
      padding: 19.5px 30px;
      > img {
        width: 68px;
        height: 68px;
        display: block;
        border-radius: 50%;
        margin-right: 30px;
      }
      > .hospital-name {
        font-size: 30px;
        color: #333;
        // line-height: 1;
        > span {
          font-size: 24px;
          color: #999;
        }
      }
    }
  }
}
.pannel-search-department {
  & .hospital-name {
    > span {
      font-size: 30px !important;
      color: #00a0e9 !important;
    }
  }
  & > .pannel-right {
    > li {
      line-height: 1.6;
      padding: 30px !important;
    }
  }
}
.pannel-search-all {
  height: auto !important;
  flex-direction: column;
  .choose-from {
    padding: 33px;
    > li {
      margin-bottom: 22px;
      > .choose-title {
        font-size: 24px;
        color: #999;
        margin-bottom: 22px;
      }
      > .choose-list {
        display: flex;
        align-items: center;
        > span {
          display: block;
          width: 180px;
          height: 60px;
          border: 1px solid rgba(215, 215, 215, 1);
          line-height: 60px;
          text-align: center;
          color: #333;
          font-size: 24px;
        }
        > span:first-child {
          margin-right: 19px;
        }
      }
    }
  }
  .choose-btn {
    // width: 100%;
    height: 88px;
    display: flex;
    > span {
      flex: 1;
      text-align: center;
      line-height: 88px;
      background-color: #f5fbff;
      color: #42a0e2;
      font-size: 24px;
    }
    > span:last-child {
      background-color: #42a0e2;
      color: #fff;
    }
  }
}
.active-choose {
  background-color: #00a0e9 !important;
  color: #fff !important;
}
.icon-top {
  background-image: url("../assets/images/inquiry/zhedie.png");
}
</style>


