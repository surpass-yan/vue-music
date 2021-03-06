import jsonp from 'common/js/jsonp'
import * as config from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

  const data = Object.assign({},config.commonParams,{
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  });

  return jsonp(url, data, config.options);
}

export function getDescList() {
  const url = '/api/getDiscList';

  const data = Object.assign({},config.commonParams,{
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json',
    loginUin:0
  });

  return axios.get(url,{
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  })
}
