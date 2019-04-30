<template>
  <div class="co">
    <div class="capacity" v-show="tabIndex==0">

      <div class="swtch-sex">
        <p class="funbg" :class="{'sel':cur==0}" @click.stop="cur=0"></p>
        <p class="funbg" :class="{'sel':cur==1}" @click.stop="cur=1"></p>
      </div>
      <div class="image-x funbg" @click="isMan=!isMan">
        <!-- <img src="../../assets/images/service/back@2x.png" alt=""> -->
      </div>
      <!-- 女 -->
      <div class="model" v-if="cur==1">
        <img src="../../assets/images/service/lady@2x.png" alt="" v-if="isMan">
        <img src="../../assets/images/service/图层 541@2x.png" alt="" v-else>
      </div>
      <!-- 男 -->
      <div class="model" v-if="cur==0">
        <img src="../../assets/images/service/male@2x.png" alt="" v-if="isMan">
        <img src="../../assets/images/service/图层 543@2x.png" alt="" v-else />
      </div>

    </div>
    <!-- 列表模块 -->
    <div class="list-box" v-show="tabIndex==1">
      <cellInput :islink="true">
        <div slot="icon" class="flex-r">
          <span class="sex">性别</span>
          <div class="switch-list">
            <p class="funbg" :class="{'sel':cur==0}" @click.stop="cur=0"></p>
            <p class="funbg" :class="{'sel':cur==1}" @click.stop="cur=1"></p>
          </div>
        </div>
      </cellInput>
      <cellInput title="头部" type="0" :islink="true" :tColor="'#333'" @click.native="changeJump('/searchSick',{})"/>
      <cellInput title="胸部" type="0" :islink="true" :tColor="'#333'" v-for="v in 10" :key="v" />
    </div>

    <div class="footer-sel vux-1px-t">
      <span class="vux-1px-r" :class="{'tabActive':tabIndex==0}" @click="tabIndex=0">图像</span>
      <span :class="{'tabActive':tabIndex==1}" @click="tabIndex=1">列表</span>
    </div>
  </div>
</template>
<script>
  import cellInput from "@/components/cellInput"
  export default {
    data() {
      return {
        cur: 0,
        isMan: true,
        tabIndex: 0
      }
    },
    components: {
      cellInput,
    }
  }

</script>
<style lang="less" scoped>
  .tabActive {
    color: #2D9FF1;
  }

  .sex {
    margin-right: 15px;
  }

.list-box{
  padding-bottom: 100px;
}

  .switch-list {
    
    width: 110px;
    height: 46px;
    background: rgba(233, 233, 233, 1);
    border: 2px solid rgba(220, 219, 217, 1);
    border-radius: 23px;
    //   position: absolute;
    //   left: 10%;
    //   top: 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >p {
      //   flex:1;
      height: 54px;
      width: 54px;
      border-radius: 50%;
      //   background-color: #fff;
      background-image: url('../../assets/images/service/icon-lady.png');
    }

    >p:first-child {
      background-image: url("../../assets/images/service/icon-male@2x.png");
    }

    >.sel {
      background-color: #fff;
    }

  }

  .capacity {
      padding-top: 35px;
    >.image-x {
      width: 76px;
      height: 64px;
      display: block;
      position: fixed;
      right: 10%;
      bottom: 20%;

      background-image: url('../../assets/images/service/back@2x.png');
    }

    >.swtch-sex {
      width: 110px;
      height: 46px;
      background: rgba(233, 233, 233, 1);
      border: 2px solid rgba(220, 219, 217, 1);
      border-radius: 23px;
      position: absolute;
      left: 10%;
      top: 6%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      >p {
        //   flex:1;
        height: 54px;
        width: 54px;
        border-radius: 50%;
        //   background-color: #fff;
        background-image: url('../../assets/images/service/icon-lady.png');
      }

      >p:first-child {
        background-image: url("../../assets/images/service/icon-male@2x.png");
      }

      >.sel {
        background-color: #fff;
      }
    }

    >.model {
      height: 1049px;

      >img {
        max-height: 100%;
        width: auto;
        display: block;
        margin: 0 auto;
      }
    }


  }

  .footer-sel {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px 0;
    background-color: #fff;
    display: flex;
    align-items: center;

    >span {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
    }
  }

</style>
