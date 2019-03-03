// component/liles/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     isCollected:{
       type:Boolean,
       value:false,
     },
     count:{
       type:Number
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      this.setData({
        isCollected: !this.properties.isCollected,
        count: this.properties.isCollected ? this.properties.count - 1 : this.properties.count+1
      })
      

    }
  }
})
