// component/search/search.js
import {debounce} from '../../util/method.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showGuide:{
      type:Boolean,
      value:false
    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    searchList:[],
    forSaveSearchList: [{ value: '可以123' }, { value: '不可以234' }, { value: 'aa456' }, { value: 'bc678' }],
    hotSearch:['cv','123','阿瑟东'],
    inputValue:'',
    historyList:[],
    timer:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clearHistory(){
      console.log('clear')
      wx.clearStorageSync('historyList');
      this.setData({
        historyList:[]
      })
    },
    focus(){
      this.triggerEvent('showguide', true)
      const value = wx.getStorageSync('historyList')
      
      // wx.clearStorageSync()
      if(value){
        this.setData({
          historyList: value
        })
        
      }
      
    },
    blur(){
      

    },
    putHistory() {
      console.log(this.data.inputValue)
      if(!this.data.inputValue){
        return
      }
      this.data.historyList.unshift(this.data.inputValue)
      this.setData({
         historyList:this.data.historyList
      })
      wx.setStorage({
        key: 'historyList',
        data: this.data.historyList
      })
      this.triggerEvent('showguide', false)
    },
    
   change:debounce(function(e){
      
    
     
     var searchValue = e.detail.value;
     
     
     let a = this.data.forSaveSearchList;
     let b = a.concat()
     this.setData({
       inputValue: searchValue,
     })
     if (searchValue.length > 0) {
       let reg = new RegExp(searchValue)
       b = b.filter((item, index) => {
         return String(item.value).includes(searchValue)
       })
       b.map((item, index) => {
         if (String(item.value).includes(searchValue)) {
          
           b[index] = Object.assign({}, b[index])
          //  b[index].value=`<div style="padding-left:30px">${b[index].value}</div>`
          
           b[index].value = item.value.replace(searchValue, `<span style="color:red;">${searchValue}</span>`);
           b[index].value = '<div style="display:block;padding-left:30px;height:40px;line-height:40px">' + b[index].value +'</div>'


         }
    

         return item
       })

     
      
       this.setData({
         searchList: b
       })
       // filterList=[]
     } else {
       this.setData({
 
         searchList: []
       })
     }
   }),
  }
})
