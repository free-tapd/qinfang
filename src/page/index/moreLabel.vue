<template>
    <div class="content">
	<div class="subtitle vertical_line"><div>门诊服务</div></div>
	<div class="feachers ">
		<div class="item">
			<img src="../../assets/images/new_main/m_service0.png">
			<div>预约挂号</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/m_service1.png">
			<div>在线问诊</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/m_service2.png">
			<div>门诊充值</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/m_service3.png">
			<div>门诊缴费</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/m_service4.png">
			<div>报告查询</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/m_service5.png">
			<div>费用查询</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/m_service6.png">
			<div>排队叫号</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/m_service7.png">
			<div>检查预约</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/m_service8.png">
			<div>建卡/绑卡</div>
		</div>
	</div>
	<div class="subtitle vertical_line"><div>住院服务</div></div>
	<div class="feachers ">
		<div class="item">
			<img src="../../assets/images/new_main/in_service1.png">
			<div>住院预缴金</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/in_service2.png">
			<div>每日清单</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/in_service3.png">
			<div>历史记录</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/in_service4.png">
			<div>出/住院须知</div>
		</div>
	</div>
	<div class="subtitle vertical_line"><div>便民服务</div></div>
	<div class="feachers ">
		<div class="item" @click.stop="jumpHospitalNavigation">
			<img src="../../assets/images/new_main/q_service1.png">
			<div>医院导航</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/q_service2.png">
			<div>导诊机器人</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/q_service3.png">
			<div>在线药房</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/q_service4.png">
			<div>出/在线处方</div>
		</div>
	</div>
	<div class="subtitle vertical_line"><div>健康服务</div></div>
	<div class="feachers ">
		<div class="item">
			<img src="../../assets/images/new_main/h_service1.png">
			<div>健康体检</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/h_service2.png">
			<div>健康保险</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/h_service3.png">
			<div>健康监护</div>
		</div>
		<div class="item">
			<img src="../../assets/images/new_main/h_service4.png">
			<div>在线讲堂</div>
		</div>
	</div>
</div>
</template>

<script>
import {mapState} from "vuex"
import adpat from "@/utils/adpat";
export default {
    data(){
		return {}
	},
	computed:{
		...mapState(['hospitalCode'])
	},
	methods:{
		//跳转医院导航
		//判断当前是否有hospitalCode
		//没有的话先选择医院
		jumpHospitalNavigation(){
			if(!this.hospitalCode){
				this.changeJump('/selHospital',{})
			}else{
				this.changeJump('/Hospitalization',{id:this.hospitalCode})
			}
		}
	}
}
</script>

<style lang="less" scoped>
    @import url('../../styles/moreLabel.less');
</style>

