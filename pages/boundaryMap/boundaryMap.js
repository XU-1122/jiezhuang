// pages/boundaryMap/boundaryMap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 39.9042, // 默认北京的纬度
    longitude: 116.4074, // 默认北京的经度
    isSatellite: false, // false: 普通地图, true: 卫星地图
    markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setMarkers();
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
    const selectedMarker = wx.getStorageSync('selectedMarker');
    if (selectedMarker) {
      this.setData({
        latitude: selectedMarker.latitude,
        longitude: selectedMarker.longitude
      });
      // 清除已使用的存储数据
      wx.removeStorageSync('selectedMarker');
    } else {
      this.getLocation();
    }
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      }
    });
  },

  setMarkers() {
    const app = getApp();
    const markers = app.globalData.boundaryMarkers.map((marker, index) => {
      return {
        id: index,
        latitude: parseFloat(marker.latitude),
        longitude: parseFloat(marker.longitude),
        title: marker.id,
        iconPath: '/images/marker.png',
        width: 30,
        height: 30,
        callout: {
          content: marker.id,
          color: '#000',
          fontSize: 14,
          borderRadius: 5,
          bgColor: '#fff',
          padding: 5,
          display: 'ALWAYS'
        }
      };
    });
    this.setData({ markers });
  },

  locate() {
    this.getLocation();
  },

  toggleLayer() {
    this.setData({
      isSatellite: !this.data.isSatellite
    });
  },

  onMarkerTap(event) {
    const markerId = event.markerId;
    const marker = this.data.markers[markerId];
    if (marker) {
      wx.openLocation({
        latitude: marker.latitude,
        longitude: marker.longitude,
        name: marker.title,
        scale: 18
      });
    }
  }
})