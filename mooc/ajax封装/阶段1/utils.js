// 工具函数

// 数据序列化成urlencoded 格式的字符串
// 就是将对象格式的参数转为xxx=111&yyyy=222格式的
const serialize = param => {
    if (!param) return '';
    let res = [];
    for (let [key, value] of Object.entries(param)) {
        res.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
    return res.join('&');
}
// 数据序列化成JSON格式的字符串
const serializeJSON = param => {
    return JSON.stringify(param);
}

//给url添加参数
const addURLParam = (url, str) => {
    if (!str) return '';
    let mark = str.includes('?') ? '&' : '?';
    return `${mark}${str}`;
}
export {serialize, addURLParam, serializeJSON}