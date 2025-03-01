Page({
  data: {
    marker: {},
    photoPath: ''
  },

  onLoad(options) {
    const app = getApp();
    const marker = app.globalData.boundaryMarkers.find(m => m.id === options.id);
    if (marker) {
      this.setData({ marker });
    }
  },

  takePhoto() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          photoPath: tempFilePaths[0]
        });
        wx.showToast({
          title: '拍照成功',
          icon: 'success'
        });
        console.log('拍照成功，文件路径:', tempFilePaths[0]);
      },
      fail: (error) => {
        console.error('拍照失败', error);
        wx.showToast({
          title: '拍照失败',
          icon: 'none'
        });
      }
    });
  },

  confirmUpload() {
    wx.showToast({
      title: '上传成功',
      icon: 'success'
    });
    console.log('确认上传，文件路径:', this.data.photoPath);
    // 清除照片路径以重置界面
    this.setData({
      photoPath: ''
    });
  }
}); 