<template>
    <div class="header flex-r">
        <div class="select-address flex-r" @click="departments">
            <span class="address-title" v-if="hospitalCode"> <b>{{hospitalMessage.cityName}} </b> <span>&bull;</span> {{hospitalMessage.hospitalName}} </span>
            <span class="address-title " style="color:#228cff;" v-else> 请选择医院 </span>
            <!-- <span class="triangle_border_up"> </span> -->
            <span class="iconfont icon-right1"></span>

        </div>
        <span class="iconfont icon-buzutixing" style="font-size:17px;"></span>
    </div>
</template>
<script>
import {mapState} from "vuex";
export default {
    methods:{
        departments(){
            this.$emit('selHospital',"")
        }
    },
    computed:{
        ...mapState(['hospitalMessage','hospitalCode'])
    },
    mounted(){
        console.log('haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        
        console.log(this.hospitalCode);
        
    }
    
}
</script>
<style lang="less">
    @import url('../styles/base.less');
    .header{
        padding: 0 24px;
        font-size: 29px;
        height:88px;
        background:rgba(255,255,255,1);
        justify-content: space-between;
        align-items: center;
        &>.select-address{ 
            &>.address-title{
                margin-right: 15px;
                color: #333;
            }
            color: @baseColor;
             justify-content: space-between;
             align-items: center;
        }
    }

</style>