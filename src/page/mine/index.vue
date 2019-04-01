<template>
    <div class="bg">
        <div class="top">
            <div id="head_id"><img src="../../assets/images/person/head.png"></div>
            <div id="name_id">jkhbdfkjdkfjdkf</div>
            <div id="msg_id"><img src="../../assets/images/person/message.png"></div>
            <div id="config_id"><img src="../../assets/images/person/config.png"></div>
            <div class="red_dot"></div>
        </div>
        <div class="person_service">
            <div class="service_sub" @click="changeJump('/appoint')">
                <div><img src="../../assets/images/person/person_service1.png"></div>
                <div>我的预约</div>
            </div>
            <div class="service_sub">
                <div><img src="../../assets/images/person/person_service2.png"></div>
                <div>我的服务</div>
            </div>
            <div class="service_sub">
                <div><img src="../../assets/images/person/person_service3.png"></div>
                <div>我的订单</div>
            </div>
        </div>
        <div class="person_type  person_line" @click="changeJump('cardManger',{}) ">
            <div><img src="../../assets/images/person/person_appoint.png"></div>
            <div>卡管理</div>
        </div>
        <div class="person_type  person_line">
            <div><img src="../../assets/images/person/person_home.png"></div>
            <div>家庭管理</div>
        </div>
        <div class="person_type person_line2">
            <div><img src="../../assets/images/person/person_health.png"></div>
            <div>健康档案</div>
        </div>
        <div class="person_type  person_line">
            <div><img src="../../assets/images/person/person_concern.png"></div>
            <div>我的关注</div>
        </div>
        <div class="person_type  person_line">
            <div><img src="../../assets/images/person/person_eval.png"></div>
            <div>我的评价</div>
        </div>
        <div class="person_type person_line2">
            <div><img src="../../assets/images/person/person_doctor.png"></div>
            <div>我的医生</div>
        </div>
        <div class="person_phone">
            客服电话：12580-6
        </div>
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
        top:80px;
    }
    #head_id img{
        width: 80px;
        height: 80px;
        border-radius: 100%;
    }
    #name_id{
        position: absolute;
        padding-top:.5rem;
        left: 160px;
        top: 76px;
        width:580px;
        height:110px;
        font-size: 30px;
        color: #fff;
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
        font-size:28px;
        flex:1;
        color:#999;
        white-space:nowrap;
    }
    .person_service .service_sub img{
        width:80px;
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
        width:40px;
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

