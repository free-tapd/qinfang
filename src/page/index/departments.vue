<template>
  <div class="vg departments">
    <!-- 选择科室 -->
    <!-- 预约挂号 -->
    <div class="departments-hospital-title vux-1px-b flex-r" ref="q1" @click="isSel=!isSel">
      <span>{{hospitalName}}</span>
      <span class="funbg icon-choose"></span>
    </div>
    <!-- 引入组件xtab -->
    <div class="c" ref="q2" >
      <Xtab :tabArr="tabData"  @getItem="getItem"/>
    </div>

    <div class="departments-list flex-r">
      <!-- <div class="cv flex-r"> -->
      <!-- 左边 -->
      <ul class="department-left">
        <li v-for="(v,i) in sections" :key="i" :class="{'active': i==cur}" @click="getTwoSection(v.id,i,tabId)">{{v.text}}</li>
      </ul>
      <!-- 右边 -->
      <ul class="department-right">
        <li v-for=" (v,i) in sections2" :key="i" @click="changeJump('/partmentsList',{})">{{v.text}}</li>
      </ul>
      <!-- </div> -->
    </div>

    <!-- 背景框 -->
    <!-- <div class="cover" v-if="isShow">
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
    </div> -->
    <!-- 选择医院 -->
    <div class="cover" v-if="isSel" @click.stop="isSel=!isSel">
      <div class="sel-hospital flex-r">
        <!-- <div class="departments-list flex-r"> -->
        <!-- 左边 -->
        <ul class="department-left">
          <li v-for="(v,i) in cityList" :key="i" :class="{'active': i==cur1}" @click.stop="clickHospital(v.id,v.text,i)">{{v.text}}</li>
        </ul>
        <!-- 右边 -->
        <ul class="department-right">
          <li v-for=" (v,i) in hospitalList" :key="i" class="flex-r" @click.stop="saveHospitalCode1(v)">
            <p class=" funbg icon-hos" :style="{backgroundImage:`url(${v.iconUrl})`}"></p>
            <div class="hospital-inner">
                <p> {{v.hospitalName}}</p>
                <span>{{v.hospitalLevel}}</span>
            </div>
          </li>
        </ul>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import Xtab from "@/components/tab";
  import {mapMutations} from "vuex";
  import {
    log
  } from "util";

  export default {
    data() {
      return {
        isShow: true,
        isSel: false,
        cur: 0,
        cur1:0,
        isTwo:0,
        tabData: [],
        sections: [], //科室列表
        sections2: [], //二级科室列表
        tabId:-1,
        cityList:[],//城市列表
        hospitalList:[],//医院列表
      };
    },
    computed: {
      hospitalCode() {
        return this.$store.state.hospitalCode
      },
     
      hospitalName(){
        return this.$store.state.hospitalMessage.hospitalName
      },
     
    },
    created(){
      this.erupt()
    },
    mounted() {
      this.$nextTick(() => {
        
        this.getHospitalList();
        
      })
    },
    watch:{
      "$route"(to,from){
        this.erupt();
      }
    },
    methods: {
      calcHeight(isTab){
         var clientHeight =
        document.body.clientHeight || document.documentElement.clientHeight;
      if(isTab){
        document.querySelector('.departments-list').style.top = (this.$refs.q1.offsetHeight + this.$refs.q2
        .offsetHeight) + "px";
      }else{
          document.querySelector('.departments-list').style.top = (this.$refs.q1.offsetHeight) + "px";
      }
      
      },
      //判断该院是否有分院
      isBranch() {
        return this.$post('hebHealthyApp.app.baseHospitalInfo.getHospitalBranchByHospitalCode', {
          hospitalCode: this.hospitalCode
        })
      },
      // 获取一级菜单
      getOneSection() {
        return this.$post('hebHealthyApp.app.baseHospitalInfo.getOneSection')
      },
      //根据id获取二级菜单
      getTwoSection(id,index, branchCode = "") {
        branchCode=branchCode?branchCode:""
        this.cur=index;
        this.$post('hebHealthyApp.app.baseHospitalInfo.getSection', {
          hospitalCode: this.hospitalCode,
          firstLevelId: id,
          hospitalBranchCode: branchCode
        }).then(res => {
          if (res.code == 0) {
            // console.log(res)
            this.sections2 = res.data;
            
          }
        })
      },
      //处理并发的
      erupt() {
        Promise.all([this.getOneSection(), this.isBranch()]).then(res => {
          if (res[0].code == 0) {
            this.sections = res[0].data;
          }
          let a = []
          if (res[1].code == 0) {
            if (res[1].data.length != 0) {
              a = res[1].data.map(v => ({
                id: v.id,
                title: v.text
              }))
            }
          }
          this.tabData = a;
          let isB = this.tabData.length > 0 ? this.tabData[0].id : "";
          // 初始化左边的科室
          this.tabId = isB;
          this.isTwo=this.tabData.length;
          this.calcHeight(this.tabData.length)
          this.getTwoSection(this.sections[0].id,this.cur, isB);
        })
      },
      //切换tabbar
      getItem(msg){
        this.tabId=msg.id
        this.getTwoSection(this.sections[0].id,0,msg.id)
      },

      /**
       * 
       * 获取医院相关内容
       * 从选择医院copy
       */
      ...mapMutations(['saveHospitalCode',"saveCity"]),
    // 获取医院列表
    getHospitalList(){
      this.$post('hebHealthyApp.app.baseHospitalInfo.getCityListHospitalList',{version:1}).then(res=>{
        // console.log(res)
        if(res.code==0){
          this.cityList=res.data.cityList;
          this.clickHospital(this.cityList[0].id,this.cityList[0].text)
        }
      })
    },
    //点击地名获取当前地区的所有医院
    clickHospital(id,text,index=0){
      this.cur1=index;
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
      this.changeJump('./departments',{var:Math.random()+1*100})
      this.isSel=!this.isSel;

    }



    },

    components: {
      Xtab
    }
  };

</script>
<style lang="less" scoped>
  .active {
    color: #42a0e2;
    background-color: #fff;
  }

  .departments-list {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
    font-size: 30px;
  
  }

  .department-left {
    overflow: scroll;
    background: rgba(248, 248, 248, 1);
    height: 100%;
    flex: 1;

    >li {
      padding: 30px 0;
      text-align: center;
    }
  }

  .department-right {
    height: 100%;
    overflow: scroll;
    flex: 3;
    background-color: #fff;

    >li {
      align-items: center;
      padding: 30px 0;
      margin-left: 40px;

      >.icon-hos {
        width: 68px;
        height: 68px;
        background-image: url("../../assets/images/logo1.png");
      }

      >.hospital-inner {
        margin-left: 15px;

        >p {}

        >span {
          font-size: 24px;
          color: #999;
        }
      }
    }
  }

  .departments {
    position: relative;

    >.departments-hospital-title {
      font-size: 40px;
      font-weight: bold;
      color: #333;
      padding: 24px 0;
      text-align: center;
      align-items: center;
      justify-content: center;

      >.icon-choose {
        display: block;
        width: 24px;
        height: 12px;
        background-image: url("../../assets/images/choose.png");
        margin-left: 16px;
      }
    }

    & .depart-message-box {
      width: 100%;
      height: 100%;
      align-items: center;
      background-color: transparent;
      justify-content: center;

      >.depart-message {
        background-origin: border-box;
        position: relative;
        width: 600px;
        height: 787px;
        background: rgba(255, 255, 255, 1);
        border-radius: 10px;
        padding: 37px;

        >.title {
          font-size: 30px;
          color: #333;
          text-align: center;
          font-weight: 300;
        }

        >.content {
          // width: 524px;
          height: 483px;
          overflow: scroll;
          font-size: 28px;
          font-family: PingFangSC-Light;
          font-weight: 300;
          color: #666;
          line-height: 36px;
          margin-top: 32px;

          >.c-title {
            >p {
              font-size: 28px;
              color: #333;
              margin-bottom: 15px;
            }

            >span {
              font-size: 24px;
            }
          }
        }

        >.content::-webkit-scrollbar {
          display: none;
          opacity: 0;
        }

        >.understand {
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

    & .sel-hospital {
      font-size: 30px;
      position: fixed;
      height: 549px;
      background-color: #fff;
      overflow: scroll;
      left: 0;
      right: 0;
      align-items: flex-start;
      top: 0;
    }
  }

</style>
