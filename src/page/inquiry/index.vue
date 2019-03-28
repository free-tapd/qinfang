<template>
    <div>
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
      ref="search"></search>
         <Xfooter/>
    </div>
</template>
<script>
import Xfooter from '@/components/footer'
import { Search } from 'vux'
export default {
    data(){
        return {};
    },
    components: {
        Xfooter,
        Search 
  }
}
</script>
<style lang="less" scoped>
    
</style>