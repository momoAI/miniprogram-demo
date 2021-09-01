// pages/position/position.js

const order = ['demo1', 'demo2', 'demo3']

Page({
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },

  data: {
    toView: 'demo1'
  },

  upper(e) {
    console.log('upper...' + e)
  },

  lower(e) {
    console.log('lower...' + e)
  },

  scroll(e) {
    // console.log('scroll....' + e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    console.log('tap....')
    for (let i = 0; i < order.length; ++i) {
      console.log(i)
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})