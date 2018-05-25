const finder = require('../libs/finder')
const router = require('koa-router')({
  prefix: '/api'
})

// fetch location info
router.get('/mobile', ctx => {
  let data = finder(ctx.query.q)
  if (!data) {
    ctx.body = 'ERROR'
  } else {
    ctx.body = data
  }
})

module.exports = router
