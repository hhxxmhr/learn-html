const http = require('http')
const querystring = require('querystring')
const server = http.createServer((req, res) => {
  const url = req.url
  console.log('url is:' + url)
  const path = url.split('?')[0]
  const queryStr = url.split('?')[1]
  const method = req.method
  // 解析query
  // const query = {}
  // queryStr && queryStr.split('&').forEach(it => {
  //   const key = it.split('=')[0]
  //   const value = it.split('=')[1]
  //   query[key] = value
  // })
  const query = querystring.parse(queryStr)
  console.log('query is:', query)
  // 定义路由
  if (path === '/api/list' && method === 'GET') {
    // res.end(`url is /list`)
    const result = {
      errno: 0,
      message: '获取列表'
    }
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.end(JSON.stringify(result))
  }

  if (path === '/api/create' && method === 'POST') {
    // const result = {
    //   errno: 0,
    //   message: '创建成功'
    // }
    // res.writeHead(200, { 'Content-type': 'application/json' })
    // res.end(JSON.stringify(result))
    
    // res.end('url is /api/create')

    // 接受请求体参数
    const contentType = req.headers['content-type']
    let bodyStr = ''
    req.on('data', chunk => { // 服务端去识别流，并接受数据
      bodyStr += chunk.toString()
    })
    req.on('end', () => { // 服务端怎么知道流完了
      if (contentType == 'application/json') {
        const body = JSON.parse(bodyStr)
        console.log(body)
      }
      res.end('jieshou') // 异步的。如果下面一行没有return，刚进入到这个if里面，还没执行到这一行，就会往下到404 那里
    })
    return
  }
  // 没有命中路由，默认404
  // res.writeHead(404, { 'Content-type': 'text/plain' })
  // res.end('404 NOT Found')
  // 或者类型是HTML
  res.writeHead(404, { 'Content-type': 'text/html' })
  res.end(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404</title>
</head>
<body>
<h1>404 NOT Found<h1/>
</body>
</html>`)
})
server.listen(3000)
