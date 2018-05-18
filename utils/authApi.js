// 微信小程序用户与厦门百姓后台校验API
const fetch = require('./fetch.js');
const common = require('./common.js');

const test_api_success = 'api/success';
const test_api_fail = 'api/fail';
const test_api_token = "api/token"
const authorize_api = 'miniapp/auth';

function http(api, params, method) {
  return fetch(common.URI, api, params, method);
}

/**
 * 测试接口调通
 */
function miniTestSuccess() {
  return http(test_api_success, {}, 'GET').then(res => res);
}

/**
 * 测试接口500
 */
function miniTestFail() {
  return http(test_api_fail, {}, 'GET')
    .then(res => {
      // 独自处理特殊请求异常
      if (res.statusCode && (res.statusCode == 404 || res.statusCode == 500)) {
        wx.showToast({
          title: '请求发生404|500异常',
        })
        throw "我错了"
      } else {
        return res
      }
    })
}

/**
 * 测试后台用户信息是否过期
 */
function validToken() {
  return http(test_api_token, {}, 'POST');
}

/**
 * 微信小程序-厦门百姓用户校验
 */
function authorize(code) {
  let params = {
    code: code
  }
  return http(authorize_api, params, 'POST').then(res => res.data);
}

module.exports = {
  miniTestSuccess,
  miniTestFail,
  validToken,
  authorize
}