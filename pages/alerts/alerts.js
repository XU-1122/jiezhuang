Page({
  data: {
    alerts: [],
    showDialog: false,
    currentAlert: {},
    solution: ''
  },

  onLoad() {
    this.loadAlerts();
  },

  loadAlerts() {
    const app = getApp();
    // 过滤掉 alert 为 '暂无异常' 的项目
    const alerts = app.globalData.boundaryMarkers.filter(item => {
      return item.alert && item.alert !== '暂无异常';
    });

    this.setData({ alerts });
  },

  showDismissDialog(event) {
    const id = event.currentTarget.dataset.id;
    const alertItem = this.data.alerts.find(item => item.id === id);
    this.setData({
      showDialog: true,
      currentAlert: alertItem
    });
  },

  handleInput(event) {
    this.setData({
      solution: event.detail.value
    });
  },

  cancelDialog() {
    this.setData({
      showDialog: false,
      solution: ''
    });
  },

  confirmDismiss() {
    const id = this.data.currentAlert.id;
    const solution = this.data.solution;

    if (!solution.trim()) {
      wx.showToast({
        title: '请输入处理方案',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    wx.showToast({
      title: `预警 ${id} 已提交审核`,
      icon: 'success',
      duration: 2000
    });

    // 更新状态为审核中
    this.setData({
      alerts: this.data.alerts.map(item => {
        if (item.id === id) {
          return { ...item, status: '审核中' };
        }
        return item;
      }),
      showDialog: false,
      solution: ''
    });

    // 更新全局数据
    const updatedMarkers = app.globalData.boundaryMarkers.map(marker => {
      if (marker.id === id) {
        return { ...marker, status: '审核中' }; // 更新状态为审核中
      }
      return marker;
    });
    app.globalData.boundaryMarkers = updatedMarkers;

    // 重新加载数据
    this.loadAlerts();
  },

  onPullDownRefresh() {
    this.loadAlerts();
    wx.stopPullDownRefresh();
  }
}); 