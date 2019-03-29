<template>
  <div class="vg">
    <div class="add-sick">
      <p class="add-sick-title vux-1px-b">选择就诊人</p>
      <ul class="add-person">
        <li>
          <span class="iconfont icon-jiahao" style="color:#666;"></span>
        </li>
      </ul>
    </div>
    <!-- list2 -->
    <div class="add-sick">
      <p class="add-sick-title vux-1px-b">病情描述</p>
      <ul class="sick-inner">
        <li>
          1.症状、疾病和身体状况
          2.症状发生的时间、症状、部位、持续时间、有无伴随症状
          3.吃过什么药物
          4.如就诊过，提供医生诊断、治疗经过
          5.既往病史
        </li>
      </ul>
      <!-- 上传照片 -->
      <div class="add-proto vux-1px-t">
        <p>上传照片</p>
        <div class="file-img-box">
          <div class="file-img">
            <span class="iconfont icon-jiahao" style="color:#aaa;"></span>
          </div>
        </div>
        <span>病症部位，检查报告等辅助资料（限X张）</span>
      </div>
      <!-- 接受协议 -->

      <div class="protocol vux-1px-t"  @click="isReceive=!isReceive">
        <span class="funbg icon-prococal" :class="{'icon-nprococal':!isReceive}"></span>
        <span>接收协议</span>
      </div>
      <!-- <div class="protocol" v-if="cur==0" @click="cur=0">
        <span class="funbg icon-nprococal"></span>
        <span>接收协议</span>
      </div> -->
    </div>
    <div class="dis-btn">立即咨询</div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isReceive:true
        }
    }
};
</script>
<style lang="less" scoped>
  .dis-btn {
    text-align: center;
    height: 88px;
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 22px;
    background: rgba(66, 160, 226, 1);
    border-radius: 6px;
    font-size: 34px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
  }
.add-sick {
  padding: 0 23px;
  background-color: #fff;
  margin-bottom: 22px;
  > .add-sick-title {
    font-size: 30px;
    color: #333;
    padding: 20px 0;
  }
  > .add-person {
    padding: 30px 0;
    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 149px;
      height: 66px;
      background: rgba(238, 238, 238, 1);
      border-radius: 4px;
    }
  }
  > .sick-inner {
    padding: 30px 0;
    font-size: 26px;
    color: #999;
  }
  > .add-proto {
    padding: 30px 0;
    > p {
      font-size: 30px;
      color: #333;
    }
    > .file-img-box {
      margin: 30px 0;
      > .file-img {
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #aaa;
      }
    }
    > span {
      font-size: 22px;
      color: #999;
    }
  }
  > .protocol {
    padding: 30px 0;
    display: flex;
    align-items: center;
    font-size: 26px;
    color: #333;
    > span:first-child {
      width: 36px;
      height: 36px;
      display: block;
      margin-right: 12px;
    }
  }
}
.icon-prococal {
  background-image: url("../../assets/images/jzr_ico_chose_set@2x.png");
}
.icon-nprococal {
  background-image: url("../../assets/images/jzr_ico_chose_nor@2x.png");
}
</style>
