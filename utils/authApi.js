// 微信小程序用户与厦门百姓后台校验API
const fetch = require('./fetch.js');
const common = require('./common.js');

// 登录相关接口path
// 使用code登录接口
const authorize_api = 'xcx/code/login';

function http(api, params, method) {
  return fetch(common.URI, api, params, method);
}


/**
 * 微信小程序-厦门百姓用户校验
 */
function authorize(code) {
  let params = {
    code: code
  }
  return http(authorize_api, params, 'GET').then(res => res.data);
}

module.exports = {
  authorize
}