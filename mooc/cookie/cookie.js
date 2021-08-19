// 写入Cookie
export const set = (name, value, {maxAge, domain, path, secure} = {}) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (typeof maxAge === 'number') {
        cookieText += `; max-age=${maxAge}`
    }
    if (domain) {
        cookieText += `; domain=${domain}`
    }
    if (path) {
        cookieText += `; path=${path}`
    }
    if (secure) {
        cookieText += `; secure`
    }
    document.cookie = cookieText;
}

// 通过name获取cookie的值
export const get = name => {
    name = encodeURIComponent(name);
    let cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        let [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
}

// 根据name、domain、path删除cookie
export const remove = (name, {domain, path} = {}) => {
    set(name, '', {domain, path, maxAge: -1});
}