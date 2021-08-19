import DEFAULTS from "./defaults.js";
import {addURLParam, serialize, serializeJSON} from "./utils.js";
import {CONTENT_TYPE_FORM_URLENCODED, CONTENT_TYPE_JSON, HTTP_GET} from "./constants.js";

class Ajax {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign({}, DEFAULTS, options);
        // 初始化
        this.init();
    }

    init() {
        this.xhr = new XMLHttpRequest();
        this.bindEvents();
        this.xhr.open(this.options.method, this.url + this.addParam(), true);
        // 设置属性
        const {responseType, withCredentials, timeoutTime} = this.options;
        this.xhr.responseType = responseType;
        this.xhr.withCredentials = withCredentials;
        if (this.options.timeoutTime > 0) {
            this.xhr.timeout = timeoutTime;
        }
        // 发送请求
        this.send();
    }

    send() {
        // 判断请求体是否有数据,get请求和data为null时，就不用处理数据了
        let {method, data} = this.options;
        if (data && method.toLowerCase() !== HTTP_GET.toLowerCase()) {
            let resultData;
            // 是否是FormData格式的
            if (data instanceof FormData) {
                resultData = data;
            } else if (this.options.contentType.toLowerCase().includes(CONTENT_TYPE_FORM_URLENCODED)) {
                resultData = serialize(data);
                this.xhr.setRequestHeader('Content-Type', CONTENT_TYPE_FORM_URLENCODED);
            } else if (this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON)) {
                resultData = serializeJSON(data);
                this.xhr.setRequestHeader('Content-Type', CONTENT_TYPE_JSON);
            } else {
                // 发送其他格式的数据
                this.xhr.setRequestHeader('Content-Type', this.options.contentType);
                resultData = data;
            }
            this.xhr.send(resultData);
        }

    }

    // url上添加参数的方法
    addParam() {
        let {params} = this.options;
        let paramStr = serialize(params);
        return addURLParam(this.url, paramStr)
    }

    // 绑定响应事件处理程序
    bindEvents() {
        let {success, httpCodeError, error, abort, timeout} = this.options;
        // load
        this.xhr.addEventListener('load', () => {
            if ((this.xhr.status >= 200 && this.xhr.status < 300) || this.xhr.status === 304) {
                success(this.xhr.response, this.xhr);
            } else {
                httpCodeError(this.xhr.status, this.xhr);
            }
        }, false);

        // error 请求出错的时候触发
        this.xhr.addEventListener('error', () => {
            error(this.xhr);
        }, false);

        // abort
        this.xhr.addEventListener('abort', () => {
            abort();
        }, false);

        // timeout
        this.xhr.addEventListener('timeout', () => {
            timeout();
        }, false);
    }

    // 获取xhr对象
    getXHR() {
        return this.xhr;
    }

}

export default Ajax;