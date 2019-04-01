<template>
  <div class="card-hospital-box">
    <div class="card-hospital">
      <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" alt>
      <div class="hospital-message flex-c">
        <p class="hos-title">秦皇岛市第一医院</p>
        <span class="zy-num">住院号</span>
        <span class="num">1127485</span>
      </div>
      <span class="funbg icon-code-x"></span>
    </div>
 
  </div>
</template>
<script>
export default {
    // 1就诊卡
    // 2住院号 default1
    props:{
        tabType:{
            type:Number,
            default:1
        }
    }
};
</script>
<style lang="less" scoped>
.card-hospital-box {
  width: 700px;
  height: 160px;
  background: rgba(24, 194, 156, 1);
  border-radius: 4px;

  margin: 0 auto;
  margin-bottom: 6px;
  > .card-hospital {
    position: relative;
    padding: 0 25px;
    height: 100%;
    display: flex;
    align-items: center;
    > img {
      width: 69px;
      height: 69px;
      background: rgba(255, 255, 255, 1);
      border-radius: 50%;
      display: block;
    }
    > .hospital-message {
      color: #fff;
      font-size: 24px;
      margin-left: 25px;
      > .hos-title {
        font-size: 30px;
        // font-weight: bold;
      }
      > .zy-num {
        opacity: 0.5;
        font-size: 24px;
      }
    }
  }
}
.icon-code-x {
  height: 29px;
  width: 29px;
  display: block;
  background-image: url("../assets/images/person/code.png");
  position: absolute;
  right: 31px;
  top: 31px;
}
</style>
