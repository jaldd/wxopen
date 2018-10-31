var bmap = require('../assets/libs/bmap-wx.min.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: {},
    future: {}
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // this.loadInfo();
    this.loadCurrentWeather();
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
  loadInfo: function () {
    var that = this;
    wx.getLocation({
      type:'gcj02',
      success: function(res) {
        var latitude=res.latitude;
        var longitude=res.longitude;
        console.log(latitude, longitude);
        that.loadWeather(longitude,latitude);
      },
    })
  },
  loadCurrentWeather: function () {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: app.globalData.ak
    });
    var fail = function (data) {
      console.log('fail!!!!')
    };
    var success = function (data) {
      console.log('success!!!');
      var weatherData = data.currentWeather[0];
      weatherData.tipt = data.originalData.results[0].index[0].des;
      console.log(data.originalData.results[0].weather_data);
      that.setData({
        today: weatherData,
        future: data.originalData.results[0].weather_data
      });
    }
    BMap.weather({
      fail: fail,
      success: success
    });
  },
  loadWeather: function (longitude, latitude) {
    var that = this;
    let weatherparam = {
      coord_type: 'gcj02',
      output: 'json',
      ak: app.globalData.ak,
      sn: '',
      timestamp: '',
      location: longitude + ',' + latitude
    };
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather',
      data: weatherparam,
      header: {
        "content-type": "application/json"
      },
      method: 'GET',
      success(data) {
        let res = data["data"];
        if (res["error"] === 0 && res["status"] === 'success') {
          let weatherArr = res["results"];
          console.log(weatherArr[0]);
          let outputRes = {};
        } 
      },
      fail(data) {
        otherparam.fail(data);
      }
    });
  }
})