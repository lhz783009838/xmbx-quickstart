// 厦门百姓线索相关API
const fetch = require('./fetch.js');
const common = require('./common.js');

// 线索相关接口path
// 根据线索id获取单条线索
const get_clue_api = 's/get_clue';


function http(api, params, method) {
  return fetch(common.URI, api, params, method);
}

function get_clue(clue_id) {
  let params = {
    clue_id: clue_id
  }
  return http(get_clue_api, params, 'GET').then(res => res.data);
}

module.exports = {
  get_clue
}