import Appoint from '@/page/mine/appoint';
import cardManger from '@/page/mine/cardManger';
import addSickCard from '@/page/mine/addSickCard';
import addHospitalNum from '@/page/mine/addHospitalNum';
import familyMember from '@/page/mine/familyMember';
import addMember from '@/page/mine/addMember';
import myServer from '@/page/mine/myServer';
import serverDetail from '@/page/mine/serverDetail';
import myOrder from '@/page/mine/myOrder';
import orderDetail from '@/page/mine/orderDetail';
import myEvaluate from '@/page/mine/myEvaluate';
import appointEvaluate from '@/page/mine/appointEvaluate';
import set from '@/page/mine/set';

let router = [
	{
		path: '/appoint',
		component: Appoint,
		beforEnter(to, from, next) {
			document.getElementById('QF').innerHTML = '我的预约';
			next();
		}
	},
	{
		path: '/cardManger',
		component: cardManger,
		beforEnter(to, from, next) {
			document.getElementById('QF').innerHTML = '卡管理';
			next();
		}
	},
	{
		path: '/addSickCard',
		component: addSickCard,
		beforEnter(to, from, next) {
			document.getElementById('QF').innerHTML = '添加就诊卡';
			next();
		}
	},
	{
		path: '/addHospitalNum',
		component: addHospitalNum,
		beforEnter(to, from, next) {
			document.getElementById('QF').innerHTML = '添加医院号';
			next();
		}
	},
	{
		path: '/familyMember',
		component: familyMember,
		beforEnter(to, from, next) {
			document.getElementById('QF').innerHTML = '家庭成员';
			next();
		}
	},
	{
		path: '/addMember',
		component: addMember
	},
	{
		path: '/myServer',
		component: myServer
	},
	{
		path: '/serverDetail',
		component: serverDetail
	},
	{
		path: '/myOrder',
		component: myOrder,
		meta: {
			title: '我的订单'
		}
	},
	{
		path: '/orderDetail',
		component: orderDetail,
		meta: {
			title: '订单详情'
		}
	},
	{
		path: '/myEvaluate',
		component: myEvaluate,
		meta: {
			title: '我的评价'
		}
	},
	{
		path: '/appointEvaluate',
		component: appointEvaluate,
		meta: {
			title: '预约评价'
		}
	},{
		path:"/set",
		component:set,
		meta:{
			title:"设置"
		}
	}
];
export default router;
