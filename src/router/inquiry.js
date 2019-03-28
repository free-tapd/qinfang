import Inquiry from '@/page/inquiry/index';

let router=[
    {
        path: '/inquiry',
        component: Inquiry,
        beforEnter(to,from,next){
            document.getElementById('QF').innerHTML="问诊"
        }
    },
]
export default router