Page({

  /**
   * 页面的初始数据
   */
  data: {
    qid:[],
    list:[]
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
    var that=this;
    wx.request({
      url: '',
      method: 'get',
      success(res) {
        console.log("get id")
        this.setData({
          qid: res.data.qid
        })
      }
    })

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
  formSubmit:function(e){
    var that=this;
    wx.request({
      url: app.baseUrl + '/AddAnswer',
      method: 'POST',
      success(res) {
        console.log("successfully postdata!")
        data({
          qid:qid,
          content:e.detail.value.content
        })
    }
    })
  }
})