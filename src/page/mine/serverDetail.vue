<template>
  <div class="vg">
    <div class="server-detail">
      <div class="consult-category">
        <div class="consult-message">
          <img src="../../assets/images/person/picture_pic.png" alt>
          <div class="consult-text">
            <p>图文咨询</p>
            <span>包月服务</span>
          </div>
        </div>
        <p class="consult-price">
          450.00
          <span>元</span>
        </p>
      </div>
      <!-- input组件 -->
      <div class="server-people">
        <cellInput
          title="服务医生"
          value="张树根"
          type="0"
          :tColor="'#333'"
          :vColor="'#333'"
          :isBorder="false"
        />
      </div>
      <!-- 服务有效期 -->
      <div class="server-people">
        <cellInput
          title="服务期限"
          value="2017/8/17 至 2017/9/27"
          type="0"
          :tColor="'#333'"
          :isBorder="false"
        />
      </div>
      <div class="server-people">
        <cellInput title="联系人" :tColor="'#333'" :vColor="'#333'" type="3" :isBorder="false">
          <div class="linkman" slot="ismean">
            <p>马素贞</p>
            <span>135442421415</span>
          </div>
        </cellInput>
      </div>
      <!-- 服务内容 -->
      <div class="server-inner">
        <h6 class="server-title">服务内容</h6>
        <div class="inner">
          1医生从专业角度汇报病历
          2.专家对病情更了解，敢于给具体治疗方案
          3.预约成功后，客服会致电确认。
          4.到约定时间后请进入健康河北app与医生进行视频通话
          5.未预约成功将全额退款
        </div>
      </div>
      <!-- 服务图文咨询，咨询中次 -->
      <div class="server-inner">
        <table style="background-color:#fff;">
          <thead>
            <tr>
              <th>服务内容</th>
              <th>服务次数</th>
              <th>已用</th>
              <th>剩余</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="icon-chouse funbg"></span> 图文咨询
              </td>
              <td>10次</td>
              <td>4次</td>
              <td>6次</td>
            </tr>
            <tr>
              <td>
                <span class="icon-chouse funbg"></span>图文咨询
              </td>
              <td>10次</td>
              <td>4次</td>
              <td>6次</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="consult-box vux-1px-t">
      <div class="consult-p">
        <div class="docutor-message-box">
          <img src="../../assets/images/person/person_1.png" alt>
          <div class="docutor-message">
            <p>孟丽</p>
            <span>妇科 主任医师</span>
          </div>
        </div>
        <p class="vux-1px-l">继续咨询</p>
      </div>
    </div>
  </div>
</template>
<script>
import cellInput from "@/components/cellInput";
import { XTable } from "vux";
export default {
  components: {
    cellInput,
    XTable
  },
  beforeRouteEnter(to, from, next) {
    document.getElementById("QF").innerHTML = "服务详情";
    next();
  }
};
</script>
<style lang="less" scoped>
.basefonfig {
  font-size: 30px;
  color: #333;
  padding: 0 30px;
  margin-bottom: 11px;
  background-color: #fff;
}
// .icon-chouse {
//   width: 26px;
//   height: 26px;
//   display: block;
//   background-image: url("../../assets/images/person/chouse.png");
// }
.server-detail {
  > .consult-category {
    &:extend(.basefonfig);

    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding: 30px;
    height: 168px;
    > .consult-message {
      display: flex;
      align-items: center;
      > img {
        width: 80px;
        height: 80px;
        display: block;
        margin-right: 36px;
      }
      > .consult-text {
        line-height: 1.1;
        font-size: 34px;
        color: #333;
        > span {
          font-size: 24px;
          color: #999;
        }
      }
    }
    > .consult-price {
      font-size: 38px;
      color: #fb3f3f;
      > span {
        font-size: 24px;
      }
    }
  }
  > .server-people {
    &:extend(.basefonfig);
    // padding: 0;
    padding: 0 15px;
    & .linkman {
      font-size: 30px;
      color: #333;
        line-height: 1.2;
      > p {
        text-align: right;
        font-weight: 100;
      }
      > span {
        font-size: 24px;
        color: #666;
      }
    }
  }
  > .server-inner {
    &:extend(.basefonfig);
    padding: 30px;
    > .server-title {
      margin-bottom: 40px;
    }
    > .inner {
      color: #666;
    }
    > table {
      width: 100%;
      font-size: 30px;
      > thead {
        & th {
          text-align: left;
          font-size: 24px;
          color: #808080;
          padding-bottom: 20px;
        }
        & th:first-child {
          font-size: 30px;
          color: #333;
        }
      }
      > tbody {
        > tr {
          margin-top: 41px;
          & > td {
            text-align: left;
            padding: 20px 0;
          }
          & > td:first-child {
            display: flex;
            align-items: center;
            font-size: 30;
            color: #00a36f;
            > .icon-chouse {
              margin-right: 15px;
            }
          }
          > td:last-child {
            color: #28aaf5;
          }
        }
      }
    }
  }
}
.consult-box {
  height: 120px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  > .consult-p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 30px;
    font-size: 34px;
    color: #129dfe;
    > .docutor-message-box {
      display: flex;
      align-items: center;
      > img {
        width: 80px;
        height: 80px;
        display: block;
        margin-right: 36px;
      }
      > .docutor-message {
        color: #333;
        line-height: 1.1;
        > span {
          font-size: 24px;
        }
      }
    }
    > p {
      padding-left: 35px;
      font-weight: 400;
    }
  }
}
</style>

