// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
        hotSearchList:['货车司机','销售经理','送餐员','配送员','驾驶员'],
        // 历史记录
        historyList:[],
    },
    onChange(e) {
        this.setData({
          value: e.detail,
        });
      },
      onSearch() {
        console.log('搜索1' + this.data.value)
      },
      onClick() {
        console.log('搜索2' + this.data.value);
      },

      hotClick(event){
        let index = event.currentTarget.dataset;
        console.log(index.index)
        this.setData({
            value:this.data.hotSearchList[index.index]
        })
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