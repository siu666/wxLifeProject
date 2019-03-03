const rpc = (path,index) => { 
  return new Promise((resolve, reject) => {   
    wx.request({
      url: `https://www.easy-mock.com/mock/5c179e146307e432d875de42/mockapi${url}`,
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })

  })
}

module.exports = {
  rpc: rpc
}