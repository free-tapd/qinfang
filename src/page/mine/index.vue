<template>
    <div class="vg">
        <div class="top">

            <div id="head_id"><img src="../../assets/images/person/head.png"></div>
            <div id="name_id"><span>jkhbdfkjdkfjdk</span>  <span class="iconfont icon-right1"></span></div>
            <!-- <div id="msg_id"><img src="../../assets/images/person/message.png"></div> -->
            <div id="config_id" @click="changeJump('/set',{})"><img src="../../assets/images/person/config.png"></div>
            <!-- <div class="red_dot"></div> -->
        </div>
        <div class="person_service">
            <div class="service_sub" @click="changeJump('/appoint')">
                <div><img src="../../assets/images/new_person/person_service1.png"></div>
                <div>我的预约</div>
            </div>
            <div class="service_sub">
                <div><img src="../../assets/images/new_person/person_service2.png" alt=""></div>
                <div>我的问诊</div>
            </div>
            <div class="service_sub" @click="changeJump('/myServer',{})">
                <div><img src="../../assets/images/new_person/person_service3.png"></div>
                <div>我的服务</div>
            </div>
            <div class="service_sub" @click="changeJump('/myOrder',{})">
                <div><img src="../../assets/images/new_person/person_service4.png"></div>
                <div>我的订单</div>
            </div>
        </div>
        <div class="person_type  person_line" @click="changeJump('cardManger',{}) ">
            <div><img src="../../assets/images/new_person/c1.png"></div>
            <div>卡管理</div>
        </div>
        <div class="person_type  person_line" @click="changeJump('/familyMember',{})">
            <div><img src="../../assets/images/new_person/c2.png"></div>
            <div>家庭管理</div>
        </div>
        <div class="person_type person_line">
            <div><img src="../../assets/images/new_person/c3.png"></div>
            <div>健康档案</div>
        </div><div class="person_type person_line">
            <div><img src="../../assets/images/new_person/c4.png"></div>
            <div>我的体验</div>
        </div><div class="person_type person_line2">
            <div><img src="../../assets/images/new_person/c5.png"></div>
            <div>我的监护</div>
        </div>
        
        <div class="person_type  person_line">
            <div><img src="../../assets/images/new_person/c6.png"></div>
            <div>我的关注</div>
        </div>
        <div class="person_type  person_line" @click="changeJump('/myEvaluate',{})">
            <div><img src="../../assets/images/new_person/c7.png"></div>
            <div>我的评价</div>
        </div>
        <div class="person_type person_line2">
            <div><img src="../../assets/images/new_person/c8.png"></div>
            <div>我的医生</div>
        </div>
        <!-- <div class="person_phone">
            客服电话：12580-6
        </div> -->
        <!-- 引入尾部 -->
        <Xfooter/>
    </div>
</template>

<script>
import Xfooter from '@/components/footer'
export default {
    data(){
        return {};
    },
    components: {
        Xfooter
  }
}
</script>


<style lang="less" scoped>
    .vg{
        padding-bottom: 140px;
    }
    *{
        box-sizing:border-box;
    }
    .bg{
        height:100vh;
        background:#f7f7f7;
    }
    .top{
        height:216px;
        background:#42A0E2;
        position:relative;
    }
    .red_dot{
        width:9px;
        height:9px;
        border-radius:50%;
        background:red;
        position:absolute;
        top:22px;
        right:82px;
    }
    #head_id{
        position: absolute;
        left:52px;
        top:50%;
        margin-top: -40px;
    }
    #head_id img{
        width: 80px;
        height: 80px;
        border-radius: 100%;
    }
    #name_id{
        position: absolute;
        left: 160px;
        top: 50%;
        right: 0;
        margin-top: -55px;
        // width:580px;
        height:110px;
        font-size: 30px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #name_id span.iconfont{
        position: relative;
        right: 32px;
        font-size: 24px;
    }
    #msg_id{
        position: absolute;
        top:24px;
        right:88px;
    }
    #config_id{
        position: absolute;
        top:24px;
        right:32px;
    }
    #msg_id img,#config_id img{
        width:36px;
        height:36px;
    }
    .person_service{
        background:#fff;
        display: flex;
        display: -webkit-box; 
        display: -webkit-flex; 
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        box-sizing: border-box;
        text-align:center;
        margin-bottom:20px;
    }
    .person_service .service_sub{
        height:180px;
        width:30%;
        line-height:16px;
        padding-top:36px;
        padding-bottom:24px;
    }
    .person_service .service_sub:nth-child(1){
        padding-left:24px;
    }
    .person_service .service_sub:nth-child(3){
        padding-right:24px;
    }
    .person_service .service_sub div:last-child{
        padding-top:22px;
        font-size:26px;
        flex:1;
        color:#81818199;
        white-space:nowrap;
    }
    .person_service .service_sub img{
       width: 66px;
       height: 66px;
       display: block;
       margin: 0 auto;
    }
    .person_type{
        display: flex;
        display: -webkit-box; 
        display: -webkit-flex; 
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        box-sizing: border-box;
        padding:20px 20px 20px 40px;
        background: #fff url(../../assets/images/person/person_big.png) no-repeat 96% center;
        background-size: 20px;
    }
    .person_type:active{
        background: #e8e8e8 url(../../assets/images/person/person_big.png) no-repeat 96% center;
        background-size: 20px;
    }
    .person_type.person_line{
        border-bottom:1px solid #eee;
    }
    .person_type.person_line2{
        margin-bottom:20px;
    }
    .person_type img{
        width:50px;
        vertical-align: -4px
    }
    .person_type div:last-child{
        padding-left:12px;
        font-size:28px;
    }
    .person_phone{
        letter-spacing: .40px;
        margin-bottom:140px;
        text-align: center;
        height:90px;
        line-height: 90px;
        font-size:30px;
        color:#42A0E2;
        background: #fff;
    }
</style>

