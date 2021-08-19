import {CONTENT_TYPE_FORM_URLENCODED, HTTP_GET} from "./constants.js";

const DEFAULTS = {
    // 请求类型
    method: HTTP_GET,
    // 请求头携带的参数
    params: null,
    /*params:{
        name:'哈哈哈'
    }*/
    // 请求体携带的参数
    data: null,
    /*data:{
        name:'哈哈哈'
    }*/
    // data:FormData数据
    // 请求体数据类型
    contentType: CONTENT_TYPE_FORM_URLENCODED,
    // 响应数据类型
    responseType: '',
    // 超时时间
    timeoutTime: 0,
    // 请求是否携带Cookie
    withCredentials: false,

    // 方法

    // 发送请求成功后成功的响应
    success() {
    },
    // 发送请求成功后失败的响应
    httpCodeError() {
    },
    // 发送请求失败
    error() {
    },
    // 请求阻止
    abort() {
    },
    // 请求超时
    timeout() {
    }

}
export default DEFAULTS;