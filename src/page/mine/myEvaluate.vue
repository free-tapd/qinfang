<template>
    <div class="evaluate">
        <Xtab :tabArr="tabArr" @getItem="getItem"/>
        <div class="c">
            <evaluate @jump="jump"/>
        </div>
    </div>
</template>
<script>
import Xtab from "@/components/tab"
import evaluate from "@/components/evaluate"
export default {
    data(){
        return {
            tabArr:[
                {id:1,title:"预约评价"},
                {id:2,title:"问诊评价"},
                {id:3,title:"陪诊评价"},
            ],
            activeId:1
        }
    },
    components:{
        Xtab,
        evaluate
    },
    methods:{
        getItem(msg){
            this.activeId=msg.id
            if(this.activeId==1){
                //.....
            }
        },
        jump(item){
            this.changeJump('/appointEvaluate',{})
        }
    }
}
</script>
