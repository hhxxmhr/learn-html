const http = require('http')
// commonjs 的模块化
// require三个层级：1、系统自带模块 2、npm 安装的模块  3、自定义的模块（引入的文件）
const fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log(req.headers)
    let path = req.url
    if (path.indexOf("/static")!==-1) {
        let filename = path.split("/static/")[1]
        console.log(filename)
        fs.readFile( filename, (err, data) => {
            res.statusCode = 200;
            console.log(data)
            // res.setHeader('Content-Type', 'text/html')

            // res.end(data.toString().replace("${name}", "王子"))
            res.write(data);
            return res.end();
        })
    }

    // if (path.indexOf("echo")) {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain')
    //     res.end(`echo ${req.url}`)
    // } else if (path.indexOf("say")) {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain')
    //     res.end(`say ${req.url}`)
    // } else if (path.indexOf("mhr")) {

    // }
    // console.log('请求好了，响应数据呢')
})

server.listen(3000, '127.0.0.1', () => {
    console.log(`Server running`);
})
// console.log('零零零零000')