// pages/book/book.js
import { request,requestApi } from '../../util/request2.js'//
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgHeight:150,
      bookList:[],
      arr:[],
    arrHight:[],
    screenHeight:'',
    scrollHeight:'',
    demoHeight:''
  },
  scroll(e) {
    console.log(this.data.scrollHeight);
    console.log(this.data.demoHeight)
    var event = e;
    var scrollTop = event.detail.scrollTop;
    var arr = this.data.arr;
    var str = parseInt((scrollTop + this.data.scrollHeight) / this.data.demoHeight)
    var index1=str*2;
    var index2=str*2+1;
    // console.log(str)
    if (this.data.arr[index1] ==true&&this.data.arr[index2] ==true){
      return
    }
    this.data.arr[index1]=true;
    this.data.arr[index2]=true
    this.setData({
      arr: arr
    })
  },
  lower(e) {
    wx.showLoading({
      title: '加载中',
    })
    request("/hotBookList").then(res => {
      wx.hideLoading();
      var arr = [];
      var length = res.data.bookList.length;
      
      for (var i = 0; i < length; i++) {
        arr[i] = false;
      }
      this.setData({
        arr:this.data.arr.concat(arr),
       
        bookList: this.data.bookList.concat(this.setAttr(res.data.bookList))
      })
      console.log(this.data.bookList)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  goAlert(){
    
  },
  onLoad: function (options) {
    let _this = this
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.select('#scroll-view').boundingClientRect(function (rect) {
      _this.setData({
           scrollHeight:rect.height,
        })
    }).exec();
    
   
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        _this.setData({
          screenHeight: res.windowHeight
        })
        console.log(_this.data.screenHeight)
      },
    })
    request("/hotBookList").then(res => {
      
      console.log(res)
      var arr = [];
      var length = res.data.bookList.length;
    
      for (var i = 0; i < length; i++) {
        
        arr[i] = false;     
        
      }
      this.setData({
        arr:arr,
        bookList: res.data.bookList
      })
      query.select('#book-comp').boundingClientRect(function (rect) {
        // console.log(rect.height)
        _this.setData({
          demoHeight: rect.height
        })
        console.log(this.data.demoHeight)
      }).exec();
      // console.log(this.data.scrollHeight);
     
      setTimeout(()=>{
        for (let i = 0; i < length; i++) {
          if (Math.floor(i / 2) * this.data.demoHeight < this.data.scrollHeight) {
            arr[i] = true;
            this.setData({
              arr: arr,
            })
          }
        }
      },500)
     
      
    })
  },
  setAttr(arr){
   return  arr.map(item=>{
        item.loadImg=false;
        return item
    })
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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