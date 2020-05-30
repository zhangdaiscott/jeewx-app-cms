import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip';

const API_SECRET_KEY = 'yun.jeecg.org'
const TIMESTAMP = util.getCurrentTime()
const MAIN_ID = 'ff808081661e74bb01661f12de5e03d6'
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async(params = {}, url) => {
  let data = params.query || {};
  //data.sign = SIGN;
  //data.time = TIMESTAMP;
  data.mainId = MAIN_ID;
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json' },
  });
  return res;
};

module.exports = {
  wxRequest
}
