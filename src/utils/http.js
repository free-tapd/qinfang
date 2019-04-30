// import axios from 'axios';

// const http = axios.create({
//   timeout: 5000
// });

// http.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response.data;
// }, (error) => {
//   // 对响应错误做点什么
//   console.log(error.response.status);
//   return Promise.reject(error);
// });

// export default http;


/**
 * Created by superman on 17/2/16.
 * http配置
 */
import {
  dateFormat
} from 'vux'
import axios from 'axios'
// import { Message} from 'element-ui'
import QS from "qs"
import Vue from 'vue'
import {
  md5
} from 'vux'
// import store from './store/store'
// import * as types from './store/types'
// import router from './router'

// axios 配置
axios.defaults.timeout = 30000
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = 'http://192.168.1.141:9000/api/'
// axios.defaults.baseURL = '/api/'

// http request 拦截器
axios.defaults.responseType = "json";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

axios.interceptors.request.use(

  config => {
    // if (store.state.token) {
    //   config.headers.Authorization = `token ${store.state.token}`
    // }
    // Vue.$loading.show('')
    return config

  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // Vue.$loading.hide();
    //  Vue.$toast.show('提示',"参数错误")
    return response

  },
  error => {
    if (error.response) {
      // tryHideFullScreenLoading();
      //   switch (error.response.status) {
      //     case 401:
      //       // 401 清除token信息并跳转到登录页面
      //       store.commit(types.LOGOUT)

      //       // 只有在当前路由不是登录页面才跳转
      //       router.currentRoute.path !== 'login' &&
      //         router.replace({
      //           path: 'login',
      //           query: { redirect: router.currentRoute.path },
      //         })
      //   }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response)
  },
)

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err)
      })
  });
}
// 对象转字符串
function rankSign(obj) {
  let secret = "hebHealthyApp1234567890"
  let arrStr = []
  for (let i in obj) {
    let str = i.toString() + obj[i].toString();
    arrStr.push(str)
  }
  let newArrStr = arrStr.sort((a, b) => a > b).join("");
  return secret + newArrStr + secret
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params={}) {
  let defaultParams = {
    "apiCode": url,
    "appId": "hebHealthyApp",
    "params": JSON.stringify(params),
    "timeStamp": new Date().getTime(),
    "token": "",
    "clientType": "5"
  }
  // defaultParams.sign = rankSign(defaultParams).toLocaleLowerCase();
  defaultParams.sign = md5(rankSign(defaultParams)).toLowerCase();
  // console.log('获取签名');

  // console.log(JSON.stringify(defaultParams) );
  return new Promise((resolve, reject) => {
    console.log(params)
    axios.post( axios.defaults.baseURL,JSON.stringify( defaultParams ))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err)
      })
  });
}
