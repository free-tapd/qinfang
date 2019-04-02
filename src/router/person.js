import Appoint from '@/page/mine/appoint';
import cardManger from '@/page/mine/cardManger';
import addSickCard from '@/page/mine/addSickCard';
import addHospitalNum from '@/page/mine/addHospitalNum';
import familyMember from '@/page/mine/familyMember';
import addMember from '@/page/mine/addMember';
import myServer from '@/page/mine/myServer';


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
    },{
        path:"/addSickCard",
        component:addSickCard,
        beforEnter(to,from,next){
            document.getElementById('QF').innerHTML="添加就诊卡"
            next()
        }
    },{
        path:"/addHospitalNum",
        component:addHospitalNum,
        beforEnter(to,from,next){
            document.getElementById('QF').innerHTML="添加医院号"
            next();
        }
    },{
        path:"/familyMember",
        component:familyMember,
        beforEnter(to,from,next){
            document.getElementById('QF').innerHTML="家庭成员"
            next();
        }
    },{
        path:"/addMember",
        component:addMember
    },{
        path:"/myServer",
        component:myServer
    }
]
export default router