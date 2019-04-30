<template>
  <div class="vg">
    <div class="my-order">
      <Xtab :tabArr="tabArr" @getItem="getItem"/>
      <div class="c" v-show="activeId==1">
        <orderList v-for="v in 10" :key="v"/>
      </div>
      <div class="c" v-show="activeId==2">
        <orderList v-for="v in 5" :key="v" :payed="true" @click.native="changeJump('/orderDetail',{})"/>
      </div>
    </div>
  </div>
</template>
<script>
import Xtab from "@/components/tab";
import orderList from "@/components/orderList";
export default {
  data() {
    return {
      tabArr: [{ title: "未付款", id: 1 }, { title: "已付款", id: 2 }],
      activeId:1
    };
  },
  components: {
    Xtab,
    orderList
  },
  beforRouteEnter(to, from, next) {
    document.getElementById("QF").innerHTML = "我的订单";
    next();
  },
  methods: {
    myJump() {
      this.changeJump("/serverDetail", {});
    },
    getItem(item){
        this.activeId=item.id
    }
  }
};
</script>