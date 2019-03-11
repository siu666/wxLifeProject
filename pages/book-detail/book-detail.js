// pages/book-detail/book-detail.js
import { request } from '../../util/request2.js'//
Page({

  /**
   * 页面的初始数据
   */
  data: {
     bookDetail:[],
    commentList: [{ content: "这是我看过最好的", likeNum: '2' }, { content: "内核架构里面最好的", likeNum: '2' }, { content: "好", likeNum: '2' },{ content: "好", likeNum: '2' }, { content: "不好", likeNum: '3' }, { content: "不错", likeNum: '4' }],
    posting:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     const id =options.bid
     const params={
        id:id
     }
     let list = 
     request(`/bookDetail`, params).then(res=>{
          this.setData({
              bookDetail:res.data,
              commentList:this.setSort(this.data.commentList)
          })
        console.log(res)
     })
  },
  formatDate(str){
      return 'str+str';
  },
  onFakePost(){
    // this.selectComponent('#inputComp').focus();
    this.setData({
      posting:true
    })
  },
  onCancel(){
    this.setData({
      posting: false
    })
  },
  onPost(e){
       console.log(e)
  },
  blur:function(e){
    console.log(e)
    this.data.commentList.unshift({ content: e.detail.value, likeNum: '1' })
    console.log('1')
    this.setData({
      commentList: this.data.commentList,
      posting:false,
    })
  },
  focus(){
    
  },
  setSort(arr){
      console.log(arr)
      return arr.sort((a,b)=>{
       return   b.likeNum - a.likeNum
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