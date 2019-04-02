<template>
  <div class>
    <div class="card-family" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)">
      <div class="card-inner">
        <div class="member-message flex-r vux-1px-b">
          <div class="message flex-r">
            <img src="../assets/images/person/person_1.png" alt>
            <div class="title-message">
              <p>王研之</p>
              <p class="message-age">
                <span>24岁</span>
                <span class="iconfont icon-nv" style="color:#E66DC5; font-size:12px;"></span>
              </p>
            </div>
          </div>
          <div class="code">
            <img src="../assets/images/inquiry/code.png" alt>
          </div>
        </div>
        <div class="card-num">
          <span>身份证</span>
          <span>130184****2650</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { log } from 'util';
export default {
  data(){
    return {
      pagex:0,
      pagey:0
    }
  },
  methods:{
    touchstart(e){
      
          this.pagex = e.touches[0].pageX;
          this.pagey = e.touches[0].pageY;
          console.log(this.pagex,this.pagey)

      console.log("开始");
      
    },
    touchmove(e){
      console.log("移动");
      let movex=e.touches[0].pageX;
      let dis=0;
      console.log(movex);
      if(movex>this.pagex){
        console.log('向右滑动');
        dis=movex-this.pagex;
        
      }else{
        console.log('向左滑动');
        dis=this.pagex-movex;
      }
      
      
    },
    touchend(){
      console.log('结束')
    }
  }
};
</script>
<style lang="less" scoped>
.card-family {
  box-shadow: 5px 5px 10px #888888;
  
  width: 689px;
  height: 220px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  margin: 0 auto;margin-bottom: 26px;
  > .card-inner {
    padding: 0 40px;
    height: 100%;

    > .member-message {
      align-items: center;
      justify-content: space-between;
      height: 60%;
      > .message {
        align-items: center;
        > img {
          width: 80px;
          height: 80px;
          display: block;
          border-radius: 50%;
          margin-right: 27px;
        }
        > .title-message {
          color: #333;
          font-size: 34px;
          > .message-age {
            font-size: 24px;
            > span:last-child {
              margin-left: 22px;
            }
          }
        }
      }
      > .code {
        > img {
          width: 64px;
          height: 64px;
          display: block;
        }
      }
    }
    > .card-num {
      display: flex;
      align-items: center;
      height: 40%;
      text-align: left;
      font-size: 30px;
      color: #333;
      >span:first-child{
        margin-right: 47px;
      }
    }
  }
}
</style>
