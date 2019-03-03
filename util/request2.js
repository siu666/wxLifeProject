export function request(path,param={},index='') {
  return new Promise((resolve, reject) => {
    console.log(path,index,param)
    let url = path
    if(index){
       url=url+'/'+index
    }
    if(Object.keys(param).length){
      url=url+'/'+'58'
    }
    console.log(url)
    const params={a:'1',b:'2'}
    wx.request({
      url: `https://www.easy-mock.com/mock/5c179e146307e432d875de42/mockapi${url}`,
      data:params,
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
export function requestApi(url,successCallBack) {
  let p = wx.request({
    url: `https://www.easy-mock.com/mock/5c179e146307e432d875de42/mockapi${url}`,
    success:function(res){
        successCallBack(res)
    },
    fail:function(err){
      p.catch(err)
    }
  })
  return p;
}