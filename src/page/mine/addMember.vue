<template>
  <div class="vg">
    <div class="add-member">
      <div class="cell-input">
        <cellInput title="姓名" value="请输入姓名" :islink="false" type="1" placeholder="请输入姓名"></cellInput>
        <cellInput title="身份证号" value="请输入姓名" :islink="false" type="2" placeholder="请输入身认证号"></cellInput>
        <cellInput title="性别" value="请输入姓名" :islink="false" type="3">
          <div class="sel-mean" slot="ismean">
            <div class="mean-item" :class="{'active-b':cur==1}" @click="cur=1">
              <img src="../../assets/images/person/nan拷贝5.png" v-if="cur==1" alt>
              <img src="../../assets/images/person/nan拷贝4.png" v-else alt>

              <span>男</span>
            </div>
            <div class="mean-item" :class="{'active-b':cur==0}" @click="cur=0">
              <img src="../../assets/images/person/nv拷贝3.png" v-if="cur==0" alt>
              <img src="../../assets/images/person/nv拷贝2.png" v-else alt>
              <span>女</span>
            </div>
          </div>
        </cellInput>
        <!-- 0 展示效果 1input 可以输入效果 -->
      </div>
      <div class="cell-inpu">
        <cellInput title="手机号" placeholder="请输入手机号" type="2"/>
        <cellInput :isCode="true" type="3">
          <div class="phone-code active-code" slot="ismean">获取验证码</div>
        </cellInput>
      </div>
    </div>
    <div class="cell-btn">确定添加</div>
  </div>
</template>
<script>
import cellInput from "@/components/cellInput";
export default {
  data() {
    return {
      cur: 1
    };
  },
  components: {
    cellInput
  }
};
</script>
 <style lang="less" scoped>
.active-b {
  border: 1px solid #42a0e2 !important;
  color: #42a0e2 !important;
}
.add-member {
  padding-top: 20px;
}
.cell-input {
  margin-bottom: 20px;
}
.sel-mean {
  display: flex;
  > .mean-item {
    width: 111px;
    height: 53px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid transparent;
    color: #999;
    font-size: 30px;
    border-radius: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 27px;
      height: 35px;
      display: block;
    }
    > span {
      margin-left: 14px;
    }
  }
}

.phone-code {
  width: 176px;
  height: 57px;
  background: rgba(229, 229, 229, 1);
  border-radius: 29px;
  font-size: 24px;
  color: #999;
  text-align: center;
  line-height: 57px;
}
.active-code{
    background-color: #fff;
    border-color: #42a0e2;
    border-width: 1px;
    border-style: solid;
    color: #42a0e2;
}
.cell-btn {
  width: 700px;
  height: 98px;
  background: rgba(66, 160, 226, 1);
  opacity: 0.5;
  border-radius: 4px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  line-height: 98px;
  margin: 0 auto;
  margin-top: 39px;
}
</style>


