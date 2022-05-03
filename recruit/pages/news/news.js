// pages/news/news.js
Page({

    /**
     * 页面的初始数据
     */
   

    data:{
      isChecked1:true,
      isChecked2:false,
      MessageList1:6,
      MessageList2:2,
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
    },
    // 前往聊天页面
    tojobChat(){
        wx.navigateTo({
          url: '/pages/jobChat/jobChat',
        })
    },

    messageBind(){
        this.setData({
            isChecked1:true,
            isChecked2:false
        })
    },
    interviewBind(){
        this.setData({
            isChecked1:false,
            isChecked2:true
        })
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
        // 再次进入页面首选“消息”标签
        // this.setData({
        //     isChecked1:true,
        //     isChecked2:false
        // })
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