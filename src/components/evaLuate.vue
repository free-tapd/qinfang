<template>
  <div class="evaluate-box vux-1px-b" @click="jump(item)">
    <div class="evaluate flex-r">
      <div class="evaluate-left flex-r">
        <img src="../assets/images/person/doctor_pic.png" alt>
        <div class="title-box">
          <p class="hos-title"> <span>河北医科大学第二医院</span> <span class="department-title">胸外科正高职</span>  </p>
          <!-- <span>胸外科正高职</span> -->
          <div class="star-box">
              <p>打分</p>
              <div class="star-line">
                  <span class="star funbg icon-star"></span>
                  <span class="star funbg icon-star"></span>
                  <span class="star funbg icon-star"></span>
                  <span class="star funbg icon-star"></span>
                  <span class="star funbg icon-star"></span>
                  
              </div>
          </div>
        </div>
      </div>
      <span class="evaluate-date">2018-09-70</span>
    </div>
    <div class="list-eva" v-if="false">
      <span class="eva-status">未评价</span>
      <span class="eva-status2">未评价</span>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        jump(item){
            this.$emit('jump',item)
        }
    }
};
</script>

<style lang="less" scoped>
.icon-star{
    background-image: url('../assets/images/gold_star.png')
}
.evaluate-box {
  background-color: #fff;
  font-size: 26px;
  color: #333;
  padding: 23px;
  > .evaluate {
    justify-content: space-between;
    align-items: flex-start;
    > .evaluate-left {
      > img {
        width: 80px;
        height: 80px;
        display: block;
        margin-right: 35px;
        border-radius: 50%;
      }
      > .title-box {
        > .hos-title {
          font-size: 30px;
          color: #333;
          font-weight: bold;
          >.department-title{
              font-size: 26px;
          }
        }
        > .star-box {
            color: #666;
            display: flex;
            align-items: center;
            >p{
                margin-right: 28px;
            }
            >.star-line{
                >.star{
                    width: 30px;
                    height: 30px;
                    display: inline-block;
                }
                >.star:not(:first-child){
                    margin-left: 11px;
                }
            }

        }
      }
    }
    > .evaluate-date {
      font-size: 24px;
      color: #666;
    }
  }
  > .list-eva {
    margin-top: 41px;
    padding-left: 80+35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .eva-status {
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 44px;
    }
    > .eva-status2 {
      font-weight: 400;
      color: #009aff;
      line-height: 44px;
    }
  }
}
</style>
