Page({
  data: {
    account: '',
    password: ''
  },

  handleAccountInput(event) {
    this.setData({
      account: event.detail.value
    });
  },

  handlePasswordInput(event) {
    this.setData({
      password: event.detail.value
    });
  },

  handleLogin() {
    const { account, password } = this.data;
    if (account === 'admin' && password === 'admin') {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      });
      // 使用 switchTab 跳转到界桩信息页面
      wx.switchTab({
        url: '/pages/boundaryInfo/boundaryInfo'
      });
    } else {
      wx.showToast({
        title: '账号或密码错误',
        icon: 'none',
        duration: 2000
      });
    }
  }
}); 