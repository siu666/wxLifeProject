// component/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     title:{
       type:String,
       value:'123'
     },
     first:Boolean,
     latest:Boolean
  },
  attached:function(){
    console.log(this.properties)
  },
  /**
   * 组件的初始数据
   */
  data: {
     disLeftSrc:'images/triangle.dis@left.png',
     leftSrc:'images/triangle@left.png',
     disRightSrc: 'images/triangle.dis@right.png',
     rightSrc: 'images/triangle@right.png',
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function (event) {
        this.triggerEvent('left')
    
    },
    onRight: function (event) {     
        this.triggerEvent('right')
      
    }
  }
})
