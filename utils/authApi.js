// 微信小程序用户与厦门百姓后台校验API
const fetch = require('./fetch.js');
const common = require('./common.js');
// 用户后台校验地址
const auth_api = '';

function request(api,params){
  return fetch(common.URI,api,params);
}

/**
 * 微信小程序-厦门百姓用户校验
 */
function authorize(){
  // openId
}