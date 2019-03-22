import axios from 'axios';

export default function(type, url, data, callback) {

  if(!type){
    console.log('请求方式未定义 !');
    return;
  }

  if(!url){
    console.log('请求地址为空 !');
    return;
  }

  axios[type](url, data).then( (res, info) => {

    if(callback)callback(res.data, info);

  }).catch( err => {
    console.warn('接口请求失败请联系管理员或检查网络: ',err);
  });

}
