import Inquiry from '@/page/inquiry/index';
import docutorList from '@/page/inquiry/docutorList';
import addSicker from '@/page/inquiry/addSicker';
import videoSicker from '@/page/inquiry/videoSicker';

let router = [{
  path: '/inquiry',
  component: Inquiry,
  meta: {
    title: "问诊"
  }
}, {
  path: "/docutorList",
  component: docutorList,
  meta: {
    title: "医生列表"
  }
}, {
  path: "/addSicker",
  component: addSicker,
  beforEnter(to, from, next) {
    document.getElementById('QF').innerHTML = "描述病状"
    next();
  }
}, {
  path: "/videoSicker",
  component: videoSicker,
  beforEnter(to, from, next) {
    console.log(document.getElementById('QF'))
    document.getElementById('QF').innerHTML = "描述病状"
    next();
  }
}];
export default router;
