<template>
  <div style="background:#fff;">
    <div class="cell-input1" :class="{'vux-1px-b':isBorder}">
      <div class="left-title">
        <slot name="icon"></slot>
        <span class="cell-title" v-if="!isCode" :style="{color:tColor}">{{cell.title}}</span>
        <input type="text" placeholder="请输入验证码" v-else>
      </div>

      <!-- 0 展示效果 1 input 可以输入效果 2 number 3solt-->
      <div class="type-box flex-r" v-if="cell.type==0" :style="{color:vColor}">
        <span>{{cell.value}}</span>
        <span class="iconfont icon-right" style="font-size:16px;margin-left:6px;" v-if="islink"></span>
      </div>
      <div class="input-type" v-if="cell.type==1">
        <input type="text" :placeholder="cell.placeholder">
      </div>
      <div class="input-type" v-if="cell.type==2">
        <input type="number" :placeholder="cell.placeholder">
      </div>
      <div class="slot-box" v-if="cell.type==3">
        <slot name="ismean"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cell: {}
    };
  },
  props: {
    // title:{
    //     type:String,
    //     default:''
    // },
    // value:{
    //     type:String,
    //     default:""
    // },
    islink: {
      type: Boolean,
      default: false
    },
    isCode: {
      type: Boolean,
      default: false
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    tColor: {
      type: String,
      default: "#999"
    },
    vColor: {
      type: String,
      default: "#999"
    }
  },
  created() {
    console.log(this.$attrs); //注意这里
    this.cell = this.$attrs;
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.cell-input1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 21px 35px 21px;
  background-color: #fff;
  font-size: 30px;
  color: #999;
  > .left-title {
    display: flex;
    align-items: center;
    > input[type="text"] {
      border: none;

      color: #333;
    }
  }

  > .type-box {
    align-items: center;
  }
  > .input-type {
    > input[type="text"] {
      border: none;
      width: 153px;
      min-width: 153px;
      color: #333;
    }
    > input[type="number"] {
      border: none;
      width: 219px;
      min-width: 219px;
      color: #333;
    }
  }
}
</style>


