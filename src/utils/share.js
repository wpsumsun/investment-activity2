import shareRequest from '@/utils/shareRequest.js'
/*
  win 顶层对象（wx）
  data数据
  shareInfo { // 分享的数据
    title: '', // 标题
    desc: '', // 主题
    link: '', // 跳转链接 http://hmjwechattest.jahwa.com.cn/h5_dabainikanjia_bcj/auth/ShareIndex.do?fromopenid={openid}   这是自定义分享要使用的URL。注意传糁
    shareicon: '' // 分享图片
  }
  openid: 团长的openid
*/
export default function wxShare (win, data, shareInfo, openid) {
  console.log('win', win)
  console.log('data', data)
  console.log('shareinfo', shareInfo)
  console.log('openid', openid)
  const myInterval = setInterval(function () {
    clearInterval(myInterval)
    shareRequestBefore(data).then(res => {
      console.log('shareRequestBefore', res)
      let result = res.data
      if (result.state === 0) {
        win.config({
          debug: false,
          appId: result.appId,
          timestamp: result.timestamp,
          nonceStr: result.nonceStr,
          signature: result.signature,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'hideMenuItems', 'addCard', 'chooseCard', 'openCard']
        })
        win.ready(function () {
          win.hideMenuItems({
            menuList: [
              'menuItem:share:qq',
              'menuItem:share:weiboApp',
              'menuItem:favorite',
              'menuItem:share:facebook',
              'menuItem:share:QZone',
              'menuItem:copyUrl',
              'menuItem:exposeArticle',
              'menuItem:setFont',
              'menuItem:openWithSafari',
              'menuItem:openWithQQBrowser'
            ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮
          })
          win.onMenuShareTimeline({ // 分享朋友圈
            title: shareInfo.title,
            desc: shareInfo.desc,
            link: shareInfo.link,
            imgUrl: shareInfo.shareicon,
            success () {
              share(3, openid)
            },
            cancel () {
              alert('分享好友圈取消')
            }
          })
          win.onMenuShareAppMessage({ // 分享给朋友
            title: shareInfo.title,
            desc: shareInfo.desc,
            link: shareInfo.link,
            imgUrl: shareInfo.shareicon, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success () {
              share(4, openid)
            },
            cancel () {
              alert(2)
            }
          })
        })
        win.error(function (res) {
          // alert(res)
        })
      }
    })
  }, 1000)
}
// 获取签名
// 请求 https://hmjwechattest.jahwa.com.cn/
function shareRequestBefore (data) {
  // 'Business.ashx?para=jsapi&apiurl=' + encodeURIComponent(location.href),
  return shareRequest({
    url: '/wechat/Business.ashx?para=jsapi&apiurl=' + encodeURIComponent(location.href.split('#')[0]), // 地址
    method: 'post',
    data
  })
}
// 后台存储函数
// https://hmjwechattest.jahwa.com.cn/wechat/kanjia.ashx分享链接
function shareRequestFn (data) {
  return shareRequest({
    url: '/api/KMH/WXShare', // 地址
    method: 'get',
    params: data
  })
}
// 分享 3-分享朋友圈 4-分享朋友
function share (type, openid) {
  if (openid !== '' || openid !== undefined) {
    shareRequestFn({type: type, openid: openid}).then(res => {
      console.log('shareRequestFn', res)
      if (res.data.Status === 2) {
        window.location.reload()
      }
    })
  }
}
