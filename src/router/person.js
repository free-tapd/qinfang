import Appoint from '@/page/mine/appoint';
import cardManger from '@/page/mine/cardManger';


let router=[
    {
        path: '/appoint',
        component: Appoint,
        beforEnter(to,from,next){
            document.getElementById('QF').innerHTML="我的预约";
            next();
        }
    },{
        path:"/cardManger",
        component:cardManger,
        beforEnter(to,from,next){
            document.getElementById('QF').innerHTML="卡管理"
            next()
        }
    }
]
export default router