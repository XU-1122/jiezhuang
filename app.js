// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    boundaryMarkers: [
      {
        id: "JZ0001",
        status: "在线",
        level: "市县级",
        date: "2025-01-20",
        boundary: "澄迈-定安线",
        unit: "澄迈县民政局",
        address: "澄迈县永发镇",
        battery: "6%",
        latitude: 19.747235,
        longitude: 110.195203,
        alert: "低电量报警",
        alertTime: "2024-06-10 13:45:58"
      },
      {
        id: "JZ0002",
        status: "离线",
        level: "市县级",
        date: "2024-06-13",
        boundary: "海口-澄迈县",
        unit: "海口市民政局",
        address: "海口市长流镇康安村",
        battery: "78%",
        latitude: 20.002575,
        longitude: 110.201824,
        alert: "暂无异常"
      },
      {
        id: "JZ0003",
        status: "在线",
        level: "市县级",
        date: "2025-01-23",
        boundary: "澄迈-临高线",
        unit: "澄迈县民政局",
        address: "澄迈县红光农场红星队",
        battery: "34%",
        latitude: 19.888400,
        longitude: 109.898077,
        alert: "姿态异常报警",
        alertTime: "2024-06-10 14:00:00"
      },
      {
        id: "JZ0004",
        status: "在线",
        level: "市县级",
        date: "2024-01-20",
        boundary: "澄迈-临高线",
        unit: "澄迈县民政局",
        address: "澄迈县桥头镇中兴村",
        battery: "70%",
        latitude: 19.942285,
        longitude: 109.879540,
        alert: "定位异常报警",
        alertTime: "2024-06-10 15:30:00"
      }
    ],
    selectedMarker: null // 用于存储选中的界桩信息
  }
})
