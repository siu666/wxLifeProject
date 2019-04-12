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
    currentIndex:0,
    cateLen:'',
    scrollleft:'',
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
  clickTo(e){
    console.log()
    let currentIndex = e.target.dataset.index
     this.setData({
       currentIndex: currentIndex,
       scrollleft: currentIndex*100-100
     })
  },
  setLoc(i){
    if (this.data.locIndex == i) {

      return
    }
    this.setData({
      locIndex: i,

    })
    console.log(this.data.locIndex)
  },
  scroll(e){
    let scrollTop=e.detail.scrollTop
    console.log(scrollTop)
    return
    let arr = this.data.indexList
    for (var i = 0; i < arr.length;i++){
          if(arr[i]<=scrollTop&&scrollTop<arr[i+1]){
            let diff = arr[i + 1] - scrollTop
            this.setLoc(i)
            
            //   console.log(diff)
            //   var fixedTop
            //   // let fixedTop = (diff > 0 && diff < this.data.indexHeight) ? (diff - this.data.indexHeight) : 0
            //   if (diff > 0 && diff < this.data.indexHeight){
            //     // console.log(diff)
            //     fixedTop = diff - this.data.indexHeight
            //   }else{
            //     console.log('1')
            //     fixedTop=0
            //   }
            //   console.log(fixedTop)
            //   if(this.data.fixedTop==fixedTop){
            //     return
            //   }
            //   // this.data.fixedTop=fixedTop;
            //   this.setData({
            //     fixedTop:fixedTop,
            //   })
            //   this.data.translate3d = `translate3d(0px,${fixedTop}px,0px)`
            
            // this.setData({
              
            //   translate3d: this.data.translate3d
            // })
            // console.log(fixedTop)
            // if (this.data.fixedTop === fixedTop) {
            //   return
            // }
            // this.data.fixedTop = fixedTop
            // this.data.translate3d = `(0,${fixedTop}px,0)`
            // console.log(this.data.translate3d)
             
           
          }
   }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    this.setData({
      cateLen:this.data.classicfyList.length-1
    })
    let _this=this
    wx.createSelectorQuery().selectAll('#tag').boundingClientRect(function (rect) {
      let len=0
      rect.forEach(item=>{
          len=parseFloat(item.width)+parseFloat(len)
      })
      _this.setData({
           width:len+'px'
      })
    }).exec()  

    
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