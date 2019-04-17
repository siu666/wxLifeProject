// pages/my/my.js
import { debounce } from '../../util/method.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:'0',
    toView:'热门',
    canScroll:false,
    diff:-1,
    fixedTop:'',
    width:'',
    left:'',
    locIndex:'0',
    currentIndex:0,
    cateLen:'',
    scrollleft:'',
    afterPaint:false,
    translate3d:'(0px,0px,0px)',
    classicfyList: ['热门', '文学', '国内', '国学', '哲学', '浪漫', '诗体', '可以', '犬薇', '微软', '认添', '收到', '参数'],
    shopList: [{ index: '热门', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123']},
      { index: '文学', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '国内', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '国学', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '哲学', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '浪漫', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '诗体', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '可以', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '犬薇', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '微软', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '认添', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '收到', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] },
      { index: '参数', data: ['123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123', '123'] }],
      indexList: [],
    indexHeight:'',
    scrollTop:'',
    sceenHeight:'',
    transition:true,
    circular: false,
    direction:'down',

    //是否显示画板指示点

    indicatorDots: false,

    //选中点的颜色

    indicatorcolor: "#ededed",

    //是否竖直

    vertical: false,

    //是否自动切换

    autoplay: false,

    //滑动动画时长毫秒

    duration: 200,

    //索引

    current: 0,
  },
  

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
        
  },
  choiceWordindex: function (event) {
    // console.log(event.target.id);
    // if (this.data.locIndex == event.target.id){
    //   return
    // }
    // let direction
    // if (event.target.id<this.data.locIndex){
    //   direction='up'
    // }
    // if (event.target.id > this.data.locIndex){
    //   direction = 'down'
    // }
    // this.setData({
    //   locIndex: event.target.id,
    //   direction:direction,
    //   canScroll:true,
    //   transition: false
    // })
    // setTimeout(()=>{
    //   this.setData({
    //     canScroll:false,
    //     transition: true
    //   })
    // },400)
    
    let wordindex = event.currentTarget.id;
      this.setData({
        canScroll:true
      })
      this.setData({
        locIndex:wordindex,
        scrollTop: this.data.indexList[wordindex].top,
        canScroll:false
      })
    

    console.log(this.data.toView);
  } ,
  clickY(){
    this.setData({
      transition: 'none',
      top: '600px'
     })
      setTimeout(()=>{
           this.setData({
              transition:'0.3s',
              top:'0'
           })
      },400)
      
  },
  clickTo(e){

    let currentIndex = e.target.dataset.index
        console.log(currentIndex)

     this.setData({
       current: currentIndex,
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

      console.log(e.detail.scrollTop)

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
    wx.createSelectorQuery().selectAll('#index-name').boundingClientRect(function (rect) {
      console.log(rect)
      _this.setData({
            indexList:rect
      })
      
     
    }).exec()  
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
           sceenHeight:res.screenHeight+'px'
        }) 
      },
    })
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
  swiperitemchange_func: debounce(function (e) {

    var current = e.detail.current;
    
    
    console.log('1')
    // let timer=setTimeout(()=>{
    //      this.data.timer=time
    // },1000)

    this.setData({ current: current,
      scrollleft:current*100-100
      })

  },500),

  //用户点击tab进行切换时

  navbarchange_func: function (e) {

    var current = e.currentTarget.dataset.current

    this.setData({ current: current })

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