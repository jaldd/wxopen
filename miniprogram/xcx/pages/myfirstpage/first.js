var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "ldd",
    btnText: "btldd",
    show: true,
    news: ['a', 'b', 'c'],
    fytext:null,
    fyinfo:null
  },
  view1click: function (e) {
    console.log(111);
    console.log(e);
  },
  view2click: function () {
    console.log(222);
  },
  view3click: function () {
    console.log(333);
  },
  view4click: function () {
    console.log(444);
  },
  btnClick: function () {
    var thispage=this;
    app.getExpressInfo(this.data.fytext, function (data) {
      console.log(data);
      thispage.setData({ fyinfo:data});
    });
  },
  input:function(e){
    this.setData({ fytext:e.detail.value});
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

  btnclick: function () {
    console.log("click")
    var isShow = this.data.show;

    var newsdata = this.data.news;
    newsdata.shift();

    this.setData({ text: "jaldd", show: !isShow, news: newsdata })
  }
})