<template>
  <div class="vg">
    <div class="c">
      <group gutter="0">
        <cell title="医院名称" value="秦皇岛中医院" is-link></cell>
        <cell title="就诊人" value="马素贞" is-link></cell>
        <!-- <cell title="类型" :value="sickName" is-link @click.native="show=!show"></cell> -->
        <cell title="住院号" value="1127485" is-link></cell>
        <!-- <cell :title="$t('Money')" @click.native="onClick" :is-loading="!money" :value="money"></cell>
        <cell :title="$t('Withdraw')" disabled is-link></cell>-->
      </group>
    </div>
  <!-- TODO: 样式的修改，自己写cell组件。actionssheet组件 -->
  <!-- TODO: 还有添加就诊卡的 -->
  <!-- FIXME:  -->
    <div class="btn-app">确定添加</div>
    <!-- actions -->
    <actionsheet
      v-model="show"
      :menus="menus1"
      :close-on-clicking-mask="true"
      @on-click-menu="getMenu"
    >
    <p slot="header" class="s-header flex-r" >
        <span>取消</span>
        <span>确认</span>
    </p>
    </actionsheet>
  </div>
</template>

<script>
import { Cell, Group, Actionsheet } from "vux";
export default {
  mounted() {},
  components: {
    Group,
    Cell,
    Actionsheet
  },
  methods: {
    onClick() {
      console.log("on click");
    },
    getMenu(i, v) {
      console.log(i, v);
      this.sickName = v;
    }
  },
  data() {
    return {
      show: false,
      menus1: ["社保卡", "就诊卡", "健康卡"],
      sickName: ""
    };
  }
};
</script>

<style lang="less" scoped>
.s-header {
    align-items: center;
    justify-content: space-between;
    font-size: 32px;
    color: #929292;
    padding: 0 30px;
    >span:last-child{
        color: #42A0E2;
    }
}
.btn-app {
  width: 90%;
  background-color: #42a0e2;
  height: 98px;
  margin: 0 auto;
  line-height: 98px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top: 93px;
}
</style>