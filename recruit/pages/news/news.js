// pages/news/news.js
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
   

    data:{
      isChecked1:true,
      isChecked2:false,
      //   应聘消息列表
      applyList:[],
      //   面试消息列表
      interviewList:[],
    },
    /**
     * 生命周期函数--监听页面加载
     */

    //  获取应聘消息列表
    async getApplyList(){
        let openId = wx.getStorageSync('openId')
        let applyList = await request('/message/getApply',{userID:openId})
        this.setData({
            applyList
        })
    },
    //  获取面试消息列表
    async getInterviewList(){
        let openId = wx.getStorageSync('openId')
        let interviewList = await request('/message/getRecruit',{userID:openId})
        this.setData({
            interviewList
        })
    },



    onLoad: function (options) {
        this.getApplyList()
        this.getInterviewList()
    },
    // 前往聊天页面
    tojobChat(event){
        let {info} = event.currentTarget.dataset;
        console.log(info)
        wx.navigateTo({
          url: '/pages/jobChat/jobChat?otherID=' +  info.otherID
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
        this.getApplyList()
        this.getInterviewList()
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