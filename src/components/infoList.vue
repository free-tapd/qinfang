<template>
    <div class="info-list flex-r vux-1px-b" @click="infoDetail(infoItem)">
        <div class="img-box">
            <img :src="infoItem.imageUrl" alt="">
        </div>
        <div class="info-title flex-c">
            <p>{{infoItem.title}}</p>
            <div class="tag-list flex-r">
                <p>
                    <span>  {{infoItem.gmtCreate}}</span>
                </p>
                <!-- <p class="read-info"> 阅读 <span> 15322</span></p> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        infoItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        infoDetail(item){
            this.$emit('infoDetail',item)
        }
    }
}
</script>
<style lang="less" scoped>
@w:150px;
    .info-list{
        padding: 30px;
        align-content: flex-start;
        justify-content: flex-start;
        >.img-box{
          flex:1;
            width: @w;
            height: @w;
            >img{
                width:100% ;
                // height: auto;
                height: 100%;
                display: block;
                border-radius: 10px;
            }
        }
        >.info-title{
            align-items: baseline;
            justify-content: space-between;
            flex:2;
              margin-left: 30px;
            font-size: 32px;
            color: #333;
            >.tag-list{
                color: #999;
                font-size: 24px;
                >.read-info{
                    margin-left: 30px;
                }
            }
        }
    }
    
</style>