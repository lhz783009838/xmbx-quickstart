// 对微信部份异步api封装

// 用户接口 start 
/**
 * 微信用户登录
 */
let login = function () {
  return new Promise((resolve, reject) => {
    wx.login({
      success: resolve,
      fail: reject
    })
  })
}

/**
 * 获取用户信息
 */
let getUserInfo = function () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: resolve,
      fail: reject
    })
  })
}
// 用户接口 end

// 数据缓存操作 start

/**
 * 本地缓存信息-异步
 * @param key
 * @param value
 */
let setStorage = function (key, value) {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key: key,
      data: value,
      success: resolve,
      fail: reject
    })
  })
}

/**
 * 根据Key获取本地缓存信息-异步
 * @param key
 */
let getStorage = function (key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: key,
      success: resolve,
      fail: reject
    })
  })
}

// 数据缓存操作 end

// 多媒体操作 start


// 多媒体操作 end

// 位置操作 start

/**
 * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
 * @param type default:wgs84 other:gcj02
 * @param altitude true/false 是否高精度定位信息，高精度回传速度减慢
 */
let getLocation = function (type, altitude) {
  let var1 = altitude || false;
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: type,
      altitude: var1,
      success: resolve,
      fail: reject
    })
  })
}

/**
 * 打开地图选择位置。必须执行success的回调
 */
let chooseLocation = function () {
  return new Promise((resolve, reject) => {
    wx.chooseLocation({
      success: resolve,
      fail: reject
    })
  })
}
// 位置操作 end

// 设备信息 start
// 设备信息 end

// 暴露组件
module.exports = {
  login,
  getUserInfo,
  setStorage,
  getStorage,
  getLocation,
  chooseLocation
}