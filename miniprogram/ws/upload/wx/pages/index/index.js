//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatar:null
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.chooseImage({
    //   success: function(res) {
    //     var filePath=res.tempFilePaths;
    //     wx.uploadFile({
    //       url: 'http://localhost:8080/upload',
    //       filePath: filePath[0],
    //       name: 'file',
    //       formData:{
    //         'user':'test'
    //       }
    //     })
    //   }
    // })
    var that=this;
    wx.downloadFile({
      url:'http://localhost:8080/1.jpg',
      type:'image',
      success:function(res){
        that.setData({avatar:res.tempFilePath})
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
