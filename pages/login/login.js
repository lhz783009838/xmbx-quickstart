// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenLoading: false
  },

  lodingHandler: function () {
    this.setData({
      hiddenLoading: !this.data.hiddenLoading
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 登录
    app.wxchat.login()
      .then(res => {
        if (res.code) {
          app.authApi
            .authorize(res.code)
            .then(res => {
              // 登录成功处理
              if (res.code == '0000') {
                this.setData({
                  hiddenLoading: !this.data.hiddenLoading
                })
                console.log(res);
                wx.setStorageSync('token', res.token);
                wx.redirectTo({
                  url: '../../pages/index/index',
                })
              } else {
                // 后台错误处理
                console.log(res);
              }
            })
            .catch(res => {
              // 请求失败处理
              console.log(res)
            })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})