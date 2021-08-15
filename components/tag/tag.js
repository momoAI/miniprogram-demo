Component({
  lifetimes: {
    created: function() {
      console.log('组件被创建')
      console.debug("debug....")
      console.info("info...")
      console.error("custom error ..")
      console.warn("custom warn ...")
    },
    attached: function() {
      console.log('组件初始化完毕')
      this.setData({
        num1: 10,
        num2: 22,
      })
      console.log('sum is ' + this.sum)
    },
    detached: function() {
      console.log('组件离开节点或页面退出')
    }
  },
  pageLifetimes: {
    show: function() {
      console.log('组件所在页面展示')
    },
    hide: function() {
      
    },
    resize: function() {

    }
  },
  options: {
    pureDataPattern: /^_/ // 以_开头的为纯数据
  },
  observers: {
    'num1,num2': function(n1, n2) {
      this.sum = n1 + n2
      // this.setData({
      //   sum: n1 + n2
      // })
    }
  },
  properties: {
    tagName: {
      type: String,
      value: "empty"
    },
    _pureProperty: {
      type: String,
      value: ''
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {
    innerData: "default text",
    num1: 0,
    num2: 0,
    sum: 0,
    show: false,
    array: [1,2,3],
    msgItem: {
      index: 0,
      msg: "test"
    },
    _pureData: ''
  },
  methods: {
    getInnerTag: function(param) {
      console.log(param)
      console.debug("debug....")
      console.info("info...")
      console.error("custom error ..")
      console.warn("custom warn ...")
    }
  },
  externalClasses: ['external'],
  relations: {

  }
})