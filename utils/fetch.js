/**
 * 远程api调用工具
 * @param api 请求url
 * @param path 路径
 * @param method 请求方法 [GET POST PUT DELETE OPTION]
 */
module.exports = function (api, path, params, method) {
  let token = wx.getStorageSync('token') || '';
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${api}/${path}`,
      data: Object.assign({}, params),
      method: method,
      header: { 'Content-Type': 'application/json', 'token': token },
      success: res => {
        if (res.data && res.data.code == '7304') {
          wx.redirectTo({
            url: '../../pages/login/login',
          })
        } else {
          resolve(res);
        }
      },
      fail: reject
    })
  })
}