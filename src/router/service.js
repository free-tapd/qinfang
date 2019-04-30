import Service from '@/page/service/index';
import queryHealth from '@/page/service/queryHealth';
import healthDetail from '@/page/service/healthDetail';
import accompany from '@/page/service/accompany';
import pregnant from '@/page/service/pregnant';
import capacity from '@/page/service/capacity';
import searchSick from '@/page/service/searchSick';
import sickResult from '@/page/service/sickResult';
import accompanyMessage from '@/page/service/accompanyMessage';
import payOrder from '@/page/servicE/payOrder';

let router = [{
  path: '/service',
  component: Service,
  meta: {
    title: "服务"
  }
}, {
  path: "/queryHealth",
  component: queryHealth,
  meta: {
    title: "医保自查"
  }
}, {
  path: "/healthDetail",
  component: healthDetail,
  meta: {
    title: "医保详情"
  }
}, {
  path: '/accompany',
  component: accompany,
  meta: {
    title: "陪诊"
  }
}, {
  path: "/pregnant",
  component: pregnant,
  meta: {
    title: "孕妇陪诊",
  }
}, {
  path: "/capacity",
  component: capacity,
  meta: {
    title: "智能分诊"
  }
}, {
  path: "/searchSick",
  component: searchSick,
  meta: {
    title: "疾病"
  }
}, {
  path: "/sickResult",
  component: sickResult,
  meta: {
    title: "病例介绍"
  }
}, {
  path: "/accompanyMessage",
  component: accompanyMessage,
  meta: {
    title: "陪诊信息"
  }
},
{
	path:"/payOrder",
	component:payOrder,
	meta:{
		title:"订单支付"
	}
}
];
export default router;
