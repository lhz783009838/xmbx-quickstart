//app.js
const common = require('./utils/common.js')
const wxchat = require('./utils/wxchat.js')
const authApi = require('./utils/authApi.js')
const clueApi = require('./utils/clueApi.js')
App({
  // 引入全局常量
  common: common,
  wxchat: wxchat,
  authApi: authApi,
  clueApi: clueApi,

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)



    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 监听小程序隐藏
  onHide: function () {

  },
  // 错误监听函数
  onError: function () {

  },
  // 页面不存在监听函数
  onPageNotFound: function () {
    // todo 404 error
  },
  globalData: {
    userInfo: null,
  }
})