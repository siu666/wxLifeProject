const ajax=require("../../util/request.js")
import {request} from '../../util/request2.js'//
// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     classic:{},
     latest:true,
     first:false,
     latestIndex:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request("/classic/latest").then(res=>{
      this.setData({
        classic:res.data,
        latestIndex:res.data.index
      })
      console.log(this.data)
      
    })
  },
   onNext:function(event){
     let index = this.data.classic.index
     index++;
     if(index>this.data.latestIndex){
       return
     }
     request(index != this.data.latestIndex ? "/classic" : "/classic/latest", index != this.data.latestIndex ?index:'').then(res => {
       this.setData({
         classic: res.data
       })
       console.log(this.data.classic)
     })
     this.setData({
       first: this.isFirst(index),
       latest: this.isLatest(index)
     })
   },
   onPrevious:function(event){

     let index=this.data.classic.index
     index--;
     if(index<'1'){
       return;
     }
     request("/classic",index).then(res => {
       this.setData({
         classic: res.data
       })
       console.log(this.data.classic)
     })
     this.setData({
       first: this.isFirst(index),
       latest: this.isLatest(index)
     })
   },
   isFirst(index){
       return index=='1'?true:false;
   },
   isLatest(index){
        return index==this.data.latestIndex?true:false;
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