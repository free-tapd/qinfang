import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/VmHome';
import Index from '@/page/index/index';
import Service from '@/page/service/index';
import Inquiry from '@/page/inquiry/index';
import Mine from '@/page/mine/index';
import hospitalMessage from '@/page/index/hospitalMessage';
import everyList from '@/page/index/everyList';
import historyList from '@/page/index/historyList';
import paymentList from '@/page/index/paymentList';
import paymentDetail from '@/page/index/paymentDetail';
import payRecord from '@/page/index/payRecord';
import payRecordDetail from '@/page/index/payRecordDetail';
import Hospitalization from '@/page/index/Hospitalization';
import hospitalRecharge from '@/page/index/hospitalRecharge';
import successPay from '@/page/index/successPay';
import queryReport from '@/page/index/queryReport';
import queryReportList from '@/page/index/queryReportList';
import departments from '@/page/index/departments';
import selHospital from '@/page/index/selHospital';
import addSection from '@/page/index/addSection';
import sureAppointment from '@/page/index/sureAppointment';
import partmentsList from '@/page/index/partmentsList';
import docutorAppointmentDetail from '@/page/index/docutorAppointmentDetail';
import successAppointment from '@/page/index/successAppointment';

Vue.use(Router);

export default new Router({
	// mode:'history',
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/inquiry',
			component: Inquiry
		},
		{
			path: '/service',
			component: Service
		},
		{
			path: '/mine',
			component: Mine
		},
		{
			path: '/hospitalMessage',
			component: hospitalMessage
		},
		{
			path: '/everyList',
			component: everyList,
			beforeEnter(to,from,next){
				document.getElementById('QF').innerHTML="每日清单"
				next()
			}
		},
		{
			path: '/historyList',
			component: historyList,
			beforeEnter(to,from,next){
				document.getElementById('QF').innerHTML="历史清单"
				next();
			}
		},
		{
			path: '/paymentList',
			component: paymentList,
			boforeEnter(to, from, next) {
				document.getElementById('QF').innerHTML = '缴费列表';
				next();
			}
		},
		{
			path: '/paymentDetail',
			component: paymentDetail
		},
		{
			path: '/payRecord',
			component: payRecord
		},
		{
			path: '/payRecordDetail',
			component: payRecordDetail
		},
		{
			path: '/Hospitalization',
			component: Hospitalization,
			beforeEnter(to, from, next) {
				document.getElementById('QF').innerHTML = '医院导航';
				next();
			}
		},
		{
			path: '/hospitalRecharge',
			component: hospitalRecharge
		},
		{
			path: '/successPay',
			component: successPay
		},
		{
			path: '/queryReport',
			component: queryReport
		},
		{
			path: '/queryReportList',
			component: queryReportList,
			boforeEnter(to, from, next) {
				document.getElementById('QF').innerHTML = '报告查询列表';
				next();
			}
		},
		{
			path: '/departments',
			component: departments,
			beforeEnter(to, from, next) {
				(document.getElementById('QF').innerHTML = '预约挂号'), next();
			}
		},
		{
			path: '/selHospital',
			component: selHospital,
			beforeEnter(to, from, next) {
				document.getElementById('QF').innerHTML = '选择医院';
				next();
			}
		},
		{
			path: '/addSection',
			component: addSection,
			beforeEnter(to, from, next) {
				document.getElementById('QF').innerHTML = '添加就诊卡';
				next();
			}
		},
		{
			path: '/sureAppointment',
			component: sureAppointment,
			beforeEnter(to, from, next) {
				document.getElementById('QF').innerHTML = '确认预约';
				next();
			}
		},{
      path:"/partmentsList",
      component:partmentsList,
      beforeEnter(to,from,next){
        document.getElementById('QF').innerHTML="预约时间"
        next()
      }
    },{
      path:"/docutorAppointmentDetail",
      component:docutorAppointmentDetail,
      beforeEnter(to,from,next){
        document.getElementById('QF').innerHTML="预约详情";
        next()
      }
    },{
			path:"/successAppointment",
			component:successAppointment,
			beforeEnter(to,from,next){
				document.getElementById('QF').innerHTML="预约成功";
				next();
			}
		}
	]
});
