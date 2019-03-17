// component/search/search.js
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
    searchList: [{ value: '可以123' }, { value: '不可以234' }, { value: 'aa456' }, { value: 'bc678' }],
    forSaveSearchList: [{ value: '可以123' }, { value: '不可以234' }, { value: 'aa456' }, { value: 'bc678' }],
    hotSearch:['cv','123','阿瑟东']
  },

  /**
   * 组件的方法列表
   */
  methods: {

   change(e){
     var searchValue = e.detail.value;

     let a = this.data.forSaveSearchList;
     let b = a.concat()


     //   // console.log(a);
     //   console.log(b);
     //  return
     if (searchValue.length > 0) {
       let reg = new RegExp(searchValue)
       b = b.filter((item, index) => {
         return String(item.value).includes(searchValue)
       })
       b.map((item, index) => {
         if (String(item.value).includes(searchValue)) {
           //  console.log(index)
           b[index] = Object.assign({}, b[index])
          //  b[index].value=`<div style="padding-left:30px">${b[index].value}</div>`
          
           b[index].value = item.value.replace(searchValue, `<span style="color:red;">${searchValue}</span>`);
           b[index].value = '<div style="display:block;padding-left:30px;height:40px;line-height:40px">' + b[index].value +'</div>'


         }
         console.log(b[index])

         return item
       })

       console.log(b)
       // console.log(filterList)
       this.triggerEvent('showguide', true)
       this.setData({
         
         searchList: b
       })
       // filterList=[]
     } else {
       this.triggerEvent('showguide',false)
     }
   },
  }
})
