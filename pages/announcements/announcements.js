Page({
  data: {
    announcements: [
      {
        title: "海南省民政厅办公室关于做好2021年县级行政区域界线集中巡查工作的通知",
        content: "\n暂无",
        author: "\n超级管理员",
        date: "2022-10-15 15:14:36"
      },
      {
        title: "智慧界桩管理系统使用手册",
        content: "\n欢迎使用智慧界桩管理系统\n",
        author: "超级管理员",
        date: "2022-10-15 15:14:36"
      },
      {
        title: "关于加强界桩管理的紧急通知",
        content: "\n请各单位加强对界桩的日常巡查，确保界桩的安全和稳定。",
        author: "\n超级管理员",
        date: "2022-10-16 09:00:00"
      },
      {
        title: "界桩管理系统更新公告",
        content: "\n系统将于本周末进行更新，届时可能会影响部分功能的使用。",
        author: "\n系统管理员",
        date: "2022-10-17 14:30:00"
      },
      {
        title: "关于界桩巡查工作的指导意见",
        content: "\n为提高巡查效率，请各单位参考最新的巡查工作指导意见。",
        author: "\n巡查部",
        date: "2022-10-18 11:15:00"
      },
      {
        title: "界桩数据安全管理培训通知",
        content: "\n将于下周举办数据安全管理培训，请相关人员准时参加。",
        author: "\n培训部",
        date: "2022-10-19 10:00:00"
      },
      {
        title: "界桩维护工作计划",
        content: "\n本月的界桩维护工作计划已发布，请各单位按计划执行。",
        author: "\n维护部",
        date: "2022-10-20 08:45:00"
      },
      {
        title: "界桩管理系统用户反馈收集",
        content: "\n欢迎用户提交对系统的使用反馈，以帮助我们改进系统功能。",
        author: "\n客服部",
        date: "2022-10-21 16:00:00"
      },
      {
        title: "界桩管理系统使用技巧分享",
        content: "\n本周五将举办使用技巧分享会，欢迎大家参加。",
        author: "\n技术支持",
        date: "2022-10-22 14:00:00"
      },
      {
        title: "界桩管理系统年度总结会议通知",
        content: "\n年度总结会议将于月底召开，请各单位准备相关材料。",
        author: "\n会议组织部",
        date: "2022-10-23 09:30:00"
      }
    ],
    hasMoreData: true // 标志是否有更多数据
  },

  onReachBottom() {
    if (!this.data.hasMoreData) {
      wx.showToast({
        title: '没有更多公告了',
        icon: 'none',
        duration: 1000
      });
      return;
    }

    // 模拟加载更多数据
    wx.showToast({
      title: '加载更多公告',
      icon: 'loading',
      duration: 1000
    });

    // 模拟延迟加载
    setTimeout(() => {
      const moreAnnouncements = [
        {
          title: "新公告标题",
          content: "\n新公告内容",
          author: "\n超级管理员",
          date: "2022-10-16 10:00:00"
        }
      ];

      // 假设只加载一次更多数据
      this.setData({
        announcements: this.data.announcements.concat(moreAnnouncements),
        hasMoreData: false // 设置为 false，表示没有更多数据
      });
    }, 1000);
  }
}); 