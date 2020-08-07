// pages/index/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        region: ['浙江省', '杭州市', '临安区'],
        now: { "cloud": "91", "cond_code": "101", "cond_txt": "多云", "fl": "4", "hum": "59", "pcpn": "0.0", "pres": "1024", "tmp": "8", "vis": "6", "wind_deg": "42", "wind_dir": "东北风", "wind_sc": "3", "wind_spd": "15" }
    },
    // 换位置信息
    changeRegion: function (e) {
        this.setData({
            region: e.detail.value
        })
        this.getWeater(); //更新天气
    },
    getWeater: function () {
        var that = this; //this不可以直接在wxAPI函数内部使用
        wx.request({
            url: 'https://free-api.heweather.net/s6/weather/now?',
            data: {
                location: that.data.region[1],
                key: '7a6b4a675e1c4038af7d65ce9d203230'
            },
            success: function (res) {
                // console.log(res.data)
                that.setData({
                    now: res.data.HeWeather6[0].now
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getWeater();
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

    }
})