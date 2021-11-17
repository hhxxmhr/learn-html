const router = require('koa-router')()

router.prefix('/api')

router.get('/list', function (ctx, next) {
  const query = ctx.query
  console.log(query)
  ctx.body = {
    a: 1, b: 2
  }
})

router.post('/create', function (ctx, next) {
  const query = ctx.request.body
  console.log(query)
  ctx.body = 'this is a users/bar response'
})

module.exports = router
