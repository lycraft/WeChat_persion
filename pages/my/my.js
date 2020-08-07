
Page({
    data: {
        userInfo: null
    },

    onLoad: function () {
        var userInfo = wx.getStorageSync('userInfo');
        if (userInfo) {
            this.setData({
                userInfo: userInfo
            })
        }
    },

    getMyInfo: function (e) {
        console.log(e.detail.userInfo)
        let info = e.detail.userInfo;
        this.setData({
            // name: info.nickName, //更新名称
            // src: info.avatarUrl //更新图片来源
            userInfo: info
        })
    },

    yuyueClick() {
        wx.navigateTo({
            url: '../seats/seats'
        })
    },

    weatherClick() {
        wx.navigateTo({
            url: '../weather/weather'
        })
    },

    infoClick() {
        wx.navigateTo({
            url: '../info/info'
        })
    },

    discountClick() {
        wx.showModal({
            title: '提示',
            content: '等待开发',
        })
    }
})