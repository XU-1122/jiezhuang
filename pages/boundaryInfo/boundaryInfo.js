// pages/boundaryInfo/boundaryInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boundaryMarkers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const app = getApp();
    const markers = app.globalData.boundaryMarkers.map(marker => {
      return {
        ...marker,
        batteryClass: parseInt(marker.battery) > 20 ? 'battery-high' : 'battery-low',
        titleClass: marker.alert !== "暂无异常" ? 'title-alert' : 'title-normal'
      };
    });
    this.setData({
      boundaryMarkers: markers
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 模拟数据刷新
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 模拟加载更多数据
    console.log('加载更多数据');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  locateMarker(event) {
    const id = event.currentTarget.dataset.id;
    const marker = this.data.boundaryMarkers.find(m => m.id === id);
    if (marker) {
      console.log('Navigating to boundaryMap with marker:', marker); // 调试输出
      wx.setStorageSync('selectedMarker', marker); // 存储选中的界桩信息
      wx.switchTab({
        url: '/pages/boundaryMap/boundaryMap',
        success: () => {
          console.log('Switch to boundaryMap successful');
        },
        fail: (err) => {
          console.error('Switch to boundaryMap failed:', err);
          wx.showToast({
            title: '跳转失败',
            icon: 'none'
          });
        }
      });
    }
  },

  handleCheckIn(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/checkIn/checkIn?id=${id}`
    });
  },

//  click(){
//    wx.navigateTo({
    //  url: '/pages/boundaryMap',
//    })
//   }

})