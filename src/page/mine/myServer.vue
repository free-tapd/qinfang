<template>
  <div class="vg">
    <div class="my-server">
      <div class="all-server"></div>
      <Xtab :tabArr="tabArr"/>
      <div class="c">
        <serverList v-for="v in 10 " :key="v" @myJump="myJump"/>
      </div>
    </div>
  </div>
</template>
<script>
import Xtab from "@/components/tab";
import serverList from "@/components/serverList";
export default {
  data() {
    return {
      tabArr: [{ title: "服务中", id: 1 }, { title: "已完成", id: 2 }]
    };
  },
  components: {
    Xtab,
    serverList
  },
  methods:{
    myJump(){
      this.changeJump('/serverDetail',{})
    }
  }
};
</script>
<style lang="less" scoped>
</style>

