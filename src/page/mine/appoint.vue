<style lang="less" scoped>
    *{
        box-sizing:border-box;
    }
    .bg{
        height:100vh;
        background:#fff;
    }
    .mytab{
        border-bottom:12px solid #f7f7f7;
    }
    .item{
        min-height:131px;
        background:#fff;
        position:relative;
        border-bottom:1px solid #eee;
        overflow:hidden;
        .item1{
            position:absolute;
            color:#000;
            font-size:26px;
            top:26px;
            left:35px;
        }
        .item2{
            font-size:23px;
            color:#333;
            position:absolute;
            top:26px;
            right:25px;
        }
        .item3{
            padding-bottom:20px;
            margin-top:78px;
            margin-left:35px;
            color:#666666;
            font-size:22px;
            span{
                padding-left:20px;
            }
        }
        .item4{
            color:#EA5800;
            position:absolute;
            font-size:22px;
            top:75px;
            right:25px;
        }
    }
</style>

<template>
    <div class="bg">
        <Tab class="mytab"  :tabArr="tabArr"  :defaultColor="'#666'"  :barColor="'#019CFF'":activeColor="'#019CFF'"  @getItem="getItem" />
        <div class="allitems" v-show="tabIndex==1">
            <div class="item" v-for="(item,key) in items_data">
                <div class="item1">{{item.position}}</div>
                <div class="item2" v-bind:style="{ color: getColor(item.state) }">{{getState(item.state)}}</div>
                <div class="item3">{{item.section}}<span></span>{{item.date}}</div>
            </div>
        </div>
        <div class="allitems" v-show="tabIndex==2">
            <div class="item" v-for="(item,key) in items_data2">
                <div class="item1">{{item.position}}</div>
                <div class="item2">已取消</div>
                <div class="item3">{{item.section}}<span></span>{{item.date}}</div>
                <div class="item4">未付款</div>
            </div>
        </div>
    </div>
</template>

<script>
import Tab from "@/components/tab.vue";
export default {
    data(){
        return {
            tabIndex: 1,
            tabArr: [
                { title: "已预约", id: 1 },
                { title: "已取消", id: 2 },
            ],
            items_data:[{//1，预约成功        2.待付款        3.已成功   4.已结束
                position:"神经内科正高职",
                state:1,  
                section:"呼吸内二科",
                date:"2018-04-22"
            },{
                position:"神经内科正高职",
                state:2,  
                section:"呼吸内二科",
                date:"2018-04-22"
            },{
                position:"神经内科正高职",
                state:3,  
                section:"呼吸内二科",
                date:"2018-04-22"
            },{
                position:"神经内科正高职",
                state:4,  
                section:"呼吸内二科",
                date:"2018-04-22"
            }
            ],
            items_data2:[{
                position:"神经内科正高职",
                section:"呼吸内二科",
                date:"2018-04-22"
            }]
        };
    },
    components: {
        Tab
    },
    methods: {
        getItem(msg) {
          this.tabIndex = msg.id;
        },
        getState(state){
            if(state==1){
                return "预约成功";
            }else if(state==2){
                return "待付款";
            }else if(state==3){
                return "已成功";
            }else{
                return "已结束";
            }
        },
        getColor(state){
            if(state==1){
                return "#019CFF";
            }else if(state==2){
                return "#EA5800";
            }else if(state==3){
                return "#019CFF";
            }else{
                return "#333";
            }
        }
    }
}
</script>




