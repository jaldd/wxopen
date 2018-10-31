Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var context=wx.createContext();

    context.moveTo(50,50);
    context.lineTo(100,100);
    context.stroke();

    // context.rect(50,50,200,200);
    // context.stroke();

    // context.rotate(5 * Math.PI/180);
    // context.rect(50, 50, 200, 200);
    // context.stroke();

    // context.rotate(5 * Math.PI / 180);
    // context.rect(50, 50, 200, 200);
    // context.stroke();

    wx.drawCanvas({
      canvasId:'firstCanvas',
      actions:context.getActions()
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