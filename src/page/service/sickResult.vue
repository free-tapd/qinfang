<template>
  <div>
    <group>
      <cell title="综述" is-link :border-intent="false" :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001"></cell>

      <template v-if="showContent001">
        <div class="inner">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In incidunt quod iure iusto assumenda velit
          asperiores quaerat fugit. Quo nam nostrum totam sapiente alias soluta dolorem accusamus asperiores, suscipit
          error.
        </div>
      </template>
      <cell title="检查鉴别" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'"
        @click.native="showContent002 = !showContent002"></cell>

      <template v-if="showContent002">
        <div class="inner">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In incidunt quod iure iusto assumenda velit
          asperiores quaerat fugit. Quo nam nostrum totam sapiente alias soluta dolorem accusamus asperiores, suscipit
          error.
        </div>
      </template>
      <cell title="检查鉴别" is-link :border-intent="false" :arrow-direction="showContent003 ? 'up' : 'down'"
        @click.native="showContent003 = !showContent003"></cell>

      <template v-if="showContent003">
        <div class="inner">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In incidunt quod iure iusto assumenda velit
          asperiores quaerat fugit. Quo nam nostrum totam sapiente alias soluta dolorem accusamus asperiores, suscipit
          error.
        </div>
      </template>
      <cell title="检查鉴别" is-link :border-intent="false" :arrow-direction="showContent004 ? 'up' : 'down'"
        @click.native="showContent004 = !showContent004"></cell>

      <template v-if="showContent004">
        <div class="inner">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In incidunt quod iure iusto assumenda velit
          asperiores quaerat fugit. Quo nam nostrum totam sapiente alias soluta dolorem accusamus asperiores, suscipit
          error.
        </div>
      </template>
    </group>

  </div>

</template>

<script>
  import {
    Cell,
    CellBox,
    CellFormPreview,
    Group,
    Badge
  } from 'vux'
  export default {
    mounted() {
      setTimeout(() => {
        this.money = -1024
      }, 2000)
    },
    components: {
      Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge
    },
    methods: {
      onClick() {
        console.log('on click')
      }
    },
    data() {
      return {
        list: [{
          label: 'Apple',
          value: '3.29'
        }, {
          label: 'Banana',
          value: '1.04'
        }, {
          label: 'Fish',
          value: '8.00'
        }],
        money: null,
        showContent001: false,
        showContent002: false,
        showContent003: false,
        showContent004: false
      }
    }
  }

</script>

<style scoped>
  .sub-item {
    color: #888;
  }

  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }

  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }

  .inner {
    padding: 0 30px;
    color: #666;
  }

</style>
