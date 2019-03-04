// pages/book/book.js
import { request,requestApi } from '../../util/request2.js'//
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bookList:[]
  },
  lower(e) {
    request("/hotBookList").then(res => {

      this.setData({
        bookList: this.data.bookList.concat(res.data.bookList)
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
    this.goAlert();
    request("/hotBookList").then(res => {
      
      this.setData({
        bookList:res.data.bookList
      })
      console.log(this.data.bookList)
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