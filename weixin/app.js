// app.js 创建一个小程序
App({
  // 生命周期函数指的是在某一时刻会自动执行的函数
  // 在小程序启动的时候，自动执行的函数
  onLaunch(options) {
    console.log("onLaunch",options)
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },

  // 在小程序重新展示的时候，自动执行函数
  onShow(){

  },

  // 在小程序取消展示的时候，自动执行函数
  onHide(){

  },
  // 脚本执行错误的时候，自动执行的函数
  onError(){

  },
  globalData: {
    userInfo: null
  }
})
