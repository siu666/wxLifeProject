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
    screenHeight:''
  },
  scroll(e) {
 
    var seeHeight = this.data.clientHeight; //可见区域高度
    var arrHight = this.data.arrHight;
    var event = e;
    var scrollTop = event.detail.scrollTop;
    var arr = this.data.arr;
    
    for (var i = 0; i < this.data.bookList.length; i++) {
      if (arrHight[i]-this.data.screenHeight < scrollTop) {
        if (arr[i] == false) {
          arr[i] = true;
          // arr[i*2]   arr[i*2+1] 
        }
        //n = i + 1;
      }
      //arr[i] = true;
    }
    this.setData({
      arr: arr
    })
  },
  lower(e) {
    
    request("/hotBookList").then(res => {
      var arr = [];
      var length = res.data.bookList.length;
      var arrHight = [];
      for (var i = 0; i < length; i++) {
        arr[i] = false;
        console.log(Math.floor((i + this.data.bookList.length) / 2) * (320 / 750) * 520)
        arrHight[i] = Math.floor((i + this.data.bookList.length) / 2) * (320 / 750) * 520;
      }
      this.setData({
        arr:this.data.arr.concat(arr),
        arrHight: this.data.arrHight.concat(arrHight),
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
    let _this=this
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
      var isD = length % 2 == 0 ? true : false;
      var arrHight = [];
      for (var i = 0; i < length; i++) {
        
        console.log(Math.floor(i / 2) * (320 / 750) * 520)
        arr[i] = false;
        arrHight[i] = Math.floor(i / 2) * (320 / 750) * 520;
      }
      this.setData({
        arr:arr,
        arrHight: arrHight,
        bookList: res.data.bookList
      })
      for (var i = 0; i < this.data.bookList.length; i++) {
        if (arrHight[i] - this.data.screenHeight < 0) {
          if (arr[i] == false) {
            arr[i] = true;
            // arr[i*2]   arr[i*2+1] 
          }
          //n = i + 1;
        }
        //arr[i] = true;
      }
      this.setData({
        arr: arr
      })
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