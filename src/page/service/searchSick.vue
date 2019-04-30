<template>
  <div class="co">
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="40px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    <!-- search result -->
    <div class="search-result">
        <cellInput type="0" title="阿司匹林诱发哮喘" :islink="true" :tColor="'#000'" v-for="v in 10" :key="v" @click.native="changeJump('/sickResult',{})"/>
    </div>
  </div>
</template>

<script>
import { Search} from 'vux'
import cellInput from "@/components/cellInput"
export default {
  components: {
    Search,
    cellInput
  },
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  data () {
    return {
      results: [],
      value: 'test'
    }
  }
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
<style lang="less" scoped>
.co{
    // padding-top: 50px;
}
    .search-result{
        // margin-top: 50px;
    }
</style>

