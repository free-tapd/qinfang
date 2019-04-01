<template>
  <div class="visit-date">
    <!-- 就诊时间选择 -->
    <div class="title">
      <span>住院日期：</span>
      <span v-if="value.length>0">{{value[0]+"-" +value[1]+"-" +value[2]}}</span>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="date-list">
          <div class="week flex-r">
            <span v-for="v in week" :key="v">{{v}}</span>
          </div>
          <div class="date flex-r">
            <p v-for="v in addDate().splice(0,7)" :key="v">
               <span :class="{'active-color':day==v}" >{{v}}</span>
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="date-list">
          <div class="week flex-r">
            <span v-for="v in week" :key="v">{{v}}</span>
          </div>
          <div class="date flex-r">
            <p v-for="v in addDate().splice(7,14)" :key="v">
               <span :class="{'active-color':day==v}">{{v}}</span>
            </p>
           
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination swiper-custom"></div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      value: [],
      week: ["日", "一", "二", "三", "四", "五", "六"],
      day: 0,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
          // dynamicBullets: true
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed(){
    
  },
  mounted() {
    this.getDefaultTime();
    console.log(this.getWeekDate());
    console.log("这个月的天数" + this.getCountDays());
    console.log("当前的日期时间数组为" + this.addDate());
    console.log(
      "当前的日期时间数组为" + Object.prototype.toString.call(this.addDate())
    );
  },
  methods: {
    getDefaultTime(time = new Date()) {
      const date = new Date(time);
      //默认时间
      const Y = date.getFullYear();
      const M = date.getMonth() + 1;
      const D = date.getDate();
      const H = date.getHours();
      const Min = date.getMinutes();
      // 4 1 9 33
      console.log(Y,M, D, H, Min);
      this.value = [Y, M, D, H, Min].map(v=>v.toString());
      this.day = D;
    
    },

    //   获取当前是周几
    getWeekDate() {
      var now = new Date();
      var day = now.getDay();
      console.log(day);
      //    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
      var weeks = new Array("日", "一", "二", "三", "四", "五", "六");
      let arr = [];
      weeks.forEach((v, i) => {
        if (i < day) {
          arr.push(v);
        }
      });

      // console.log(arr);
      let newWeeks = [...[...weeks].splice(day, 7), ...arr];
      // console.log(newWeeks)
      // var week = weeks[day];
      this.week = newWeeks;
    },
    //添加日期arr
    addDate() {
      let day = new Date().getDate();
      let arr = [];
      console.log(this.getCountDays());
      for (let i = day; i <= this.getCountDays(); i++) {
        arr.push(i);
      }
      // console.log("添加的日期为");
      // console.log(arr);
      let len = arr.length;
      let newArr = [];
      if (len >= 14) {
        newArr = [...arr].splice(0, 14);
      } else {
        let addArr = [];
        for (let i = 1; i <= 14 - arr.length; i++) {
          addArr.push(i);
        }
        newArr = [...arr, ...addArr];
      }
      return newArr;
    },
    ///返回当月多少天
    getCountDays(time = new Date().getTime()) {
      //  new Date(year, month, 0).getDate()
      // 返回当月的一共多少天
      let d = new Date(time);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      return new Date(year, month, 0).getDate();
    },

  }
};
</script>
<style lang="less" scoped>
.visit-date {
  background-color: #fff;
  font-size: 26px;
  color: #666;
  position: relative;

  > .title {
    margin-bottom: 15px;
    // margin-top: 15px;
  }
  & .date-list {
    > .week {
      padding-top: 20px;
      font-size: 34px;
      color: #333;
      > span {
        display: block;
        width: 100%/7;
        text-align: center;
      }
    }
    > .date {
      padding-bottom: 20px;
      margin-top: 30px;
      font-size: 30px;
      color: #333;
      > p {
        position: relative;
        display: block;
        width: 100%/7;
        text-align: center;
        >span{
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
}
.swiper-custom {
  position: relative !important;
}
.active-color {
  display: block;
  width: 53px;
  height: 53px;
  color: #fff;
  background: rgba(85, 142, 255, 1);
  border-radius: 50%;
}
</style>
