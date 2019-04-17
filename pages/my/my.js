// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diff:-1,
    fixedTop:'',
    width:'',
    left:'',
    locIndex:'0',
    translate3d:'(0px,0px,0px)',
    classicfyList: ['热门', '文学', '国内', '国学', '哲学', '浪漫', '诗体', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'],
    shopList: [{ index: '热门', data: ['123', '123', '123', '123', '123', '123', '123', '123']},
      { index: '文学', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '国内', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '国学', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '哲学', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '浪漫', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '诗体', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: 'aaa', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: 'bbb', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: 'ccc', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: 'ddd', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: 'eee', data: ['123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: 'fff', data: ['123', '123', '123', '123', '123', '123', '123', '123'] }],
      indexList: [],
    indexHeight:'',
  },
  

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
        
  },
  setLoc(i){
    if (this.data.locIndex == i) {

      return
    }



    this.setData({
      locIndex: i,

    })
  },
  scroll(e){
      console.log(e.detail.scrollTop)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var query = wx.createSelectorQuery();
    let _this=this
   

    query.selectAll('#index-Name').boundingClientRect(function (rect) {
          console.log(rect)
           rect.forEach(item=>{
             _this.data.indexList.push(item.top)
           })
      _this.setData({
        indexHeight:rect[0].height,
        left:rect[0].left,
        width:rect[0].width+'px',
        indexList:_this.data.indexList
      })
      console.log(_this.data.indexHeight)
    }).exec();
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})