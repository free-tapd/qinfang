<template>
  <div class="vg departments">
    <!-- 选择科室 -->
    <!-- 预约挂号 -->
    <!-- <div class="departments-hospital-title vux-1px-b flex-r">
      <span>河北省人民第六医院</span>
      <span class="funbg icon-choose"></span>
    </div> -->
    <div class="departments-list flex-r">
      <!-- 左边 -->
      <ul class="department-left">
        <li v-for="(v,i) in cityList" :key="i" :class="{'active': i==cur}" @click="clickHospital(v.id,v.text,i)">{{v.text}}</li>
      </ul>
      <!-- 右边 -->
      <ul class="department-right">
        <li v-for=" (v,i) in hospitalList" :key="i" class="flex-r" @click="saveHospitalCode1(v)">
            <p class=" funbg icon-hos" :style="{backgroundImage:`url(${v.iconUrl})`}"></p>
            <div class="hospital-inner">
                <p> {{v.hospitalName}}</p>
                <span>{{v.hospitalLevel}}</span>
            </div>

        </li>
      </ul>
    </div>

    <!-- 背景框 -->
    <div class="cover" v-if="isShow">
      <div class="depart-message-box flex-r">
        <div class="depart-message flex-c">
          <div class="title">预约挂号须知</div>
          <div class="content">
            <div class="c-title">
              <p>1.预约途径</p>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nulla expedita eius dolorem animi at, quasi ab tenetur perferendis officia necessitatibus, voluptate labore itaque non? Doloremque nulla est ipsa sunt!</span>
              <span
                v-for="v in 5"
                :key="v"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse aut atque veritatis vero nam fugit inventore consectetur? At dolorum aperiam inventore repudiandae quidem sunt sit facere minima dignissimos exercitationem.</span>
            </div>
          </div>
          <div class="understand">
            <p class="c" @click="isShow=!isShow">我已了解</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {post} from "@/utils/http"
import {mapMutations} from "vuex";
export default {
  data() {
    return {
      isShow: 0,
      cur: 0,
      cityList:[],
      hospitalList:[]
    };
  },
  mounted(){
    this.getHospitalList();
  },
  methods:{
    ...mapMutations(['saveHospitalCode',"saveCity","saveHospitalLimit"]),
    // 获取医院列表
    getHospitalList(){
      post('hebHealthyApp.app.baseHospitalInfo.getCityListHospitalList',{version:1}).then(res=>{
        // console.log(res)
        if(res.code==0){
          this.cityList=res.data.cityList;
          this.clickHospital(this.cityList[0].id,this.cityList[0].text)
        }
      })
    },
    //点击地名获取当前地区的所有医院
    clickHospital(id,text,index=0){
      this.cur=index;
      let arr=[];
      this.cityList.forEach(v=>{
        if(v.id==id){
          arr=v.hospitalList
        }
      })
      this.hospitalList=arr;
      this.saveCity({id,cityName:text});
    },
    saveHospitalCode1(item){
      // localStorage.setItem('hospitalCode',item.hospitalCode);
      this.saveHospitalCode(item)
      // this.$router.back(-1);
      this.hospitalLimit()
      this.changeJump('./departments',{})
      

    },
     // 查询当前医院的权限
      hospitalLimit(){
        this.$post('hebHealthyApp.app.baseHospitalInfo.getHospitalExtendByHospitalCode',{hospitalCode:this.hospitalCode}).then(res=>{
          console.log(res);
          if(res.data==0){
             this.limitList=res.data
          this.saveHospitalLimit(res.data);
          }
         
        })
      }
  }
};
</script>
<style lang="less" scoped>
.active {
  color: #42a0e2;
  background-color: #fff;
}
.departments {
  position: relative;
  > .departments-hospital-title {
    font-size: 40px;
    font-weight: bold;
    color: #333;
    padding: 24px 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    > .icon-choose {
      display: block;
      width: 24px;
      height: 12px;
      background-image: url("../../assets/images/choose.png");
      margin-left: 16px;
    }
  }
  > .departments-list {
    // justify-content: baseline;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    font-size: 30px;
    > .department-left {
      // position: fixed;
      // bottom: 0;
      // left: 0;
      overflow: scroll;
      flex: 1;
      > li {
        padding: 30px 0;
        text-align: center;
      }
    }
    > .department-right {
      overflow: scroll;
      flex: 3;
      background-color: #fff;
      > li {
          align-items: center;
        padding: 30px 0;
        margin-left: 40px;
        >.icon-hos{
            width: 68px;
            height: 68px;
            background-image: url('../../assets/images/logo1.png');
            
        }
        >.hospital-inner{
            margin-left: 15px;
            >p{

            }
            >span{
                font-size: 24px;
                color: #999;
            }
        }
      }
    }
  }
  & .depart-message-box {
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: transparent;
    justify-content: center;
    > .depart-message {
      background-origin: border-box;
      position: relative;
      width: 600px;
      height: 787px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      padding: 37px;
      > .title {
        font-size: 30px;
        color: #333;
        text-align: center;
        font-weight: 300;
      }
      > .content {
        // width: 524px;
        height: 483px;
        overflow: scroll;
        font-size: 28px;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: #666;
        line-height: 36px;
        margin-top: 32px;
        > .c-title {
          > p {
            font-size: 28px;
            color: #333;
            margin-bottom: 15px;
          }
          > span {
            font-size: 24px;
          }
        }
      }
      > .content::-webkit-scrollbar {
        display: none;
        opacity: 0;
      }
      > .understand {
        height: 105px;
        line-height: 105px;
        text-align: center;
        background-color: #f0f0f0;
        color: #42a0e2;
        position: absolute;
        bottom: 37px;
        left: 37px;
        right: 37px;
      }
    }
  }
}
</style>


