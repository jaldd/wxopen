Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  position:{
    x:0,
    y:0
  },
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    this.draw();
  },
  canvasClick:function(){
    setInterval(this.draw,100)
  },
  draw:function(){
    this.position.x++;
    this.position.y++;
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100 + this.position.x, 100 + this.position.y, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  }
})