import Appoint from '@/page/mine/appoint';

let router=[
    {
        path: '/appoint',
        component: Appoint,
        beforEnter(to,from,next){
            document.getElementById('QF').innerHTML="我的预约";
            next();
        }
    },
]
export default router