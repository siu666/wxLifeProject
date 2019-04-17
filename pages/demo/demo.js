// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollLeft: 0,
    isClickChange: false,
    currentTab: 0,
    menuTabs: [{
      name: '政策咨询'
    }, {
      name: '就业分配'
    }, {
      name: '战友互助'
    }, {
      name: '趣味杂谈'
    }, {
      name: '怀旧时光'
    }, {
      name: '军旅生活'
    }],
    swiperDateList: [[], [], [], [], [], []]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // for (var i = 0; i < this.data.swiperDateList.length; i++) {
    //   this.getDateList(i);
    // }

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

  },
 
})