//logs.js
const util = require('../../utils/util.js')
const common = require('../../utils/common.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log(common.APP);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
