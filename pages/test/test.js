// pages/test/test.js

const app = getApp()
Page({

  // test
  apiToSuccess: function () {
    app.authApi.miniTestSuccess()
      .then(res => {
        console.log(res);
      })
  },
  apiToFail: function () {
    app.authApi.miniTestFail()
      .then(res => {
        console.log(res)
      }).catch(err => console.log(err))
  },
  apiToValidToken: function () {
    app.authApi.validToken()
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err)
      })
  },
  apiWxRequest: function () {
    wx.request({
      url: 'http://localhost:8080/api/fail',
      success: res => console.log('调用成功'),
      fail: function (err) {
        console.log('调用失败')
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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