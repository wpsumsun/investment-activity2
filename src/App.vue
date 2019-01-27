<template>
  <div id="app">
    <div class="loading-page" v-show="isLoading">
      <div class="loading-main">
        <div class="text-wrapper">Loading...</div>
        <Progress :percentage="percentage" :stroke-width="10" color="#638c0b"></Progress>
      </div>
    </div>
    <swiper
      v-show="!isLoading"
      :options="swiperOption"
      class="swiper-box"
      ref="mySwiper"
      @slideNextTransitionStart="handleNextTransitionStart"
      @slidePrevTransitionStart="handlePrevTransitionStart">
      <swiper-slide class="swiper-item">
        <div class="item item-1">
          <img src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/logo.png" class="logo">
          <img src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/chuangye.png" class="chuangye">
          <img src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/xiaobiaoti.png" class="xiaobiaoti">
          <img src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/taijini.png" class="taijini">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-2">
          <img class="jieshao swiper-lazy" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/jieshao.png">
          <img class="jieshao-detail swiper-lazy" :class="{ 'delay-animation': isSecond }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/item2bg.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-3">
          <img class="swiper-lazy zone" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/zone.png">
          <img class="swiper-lazy slogon" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/slogon.png">
          <img class="swiper-lazy group"  :class="{ 'delay-animation': isThird }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/group.jpg">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-4">
          <img class="swiper-lazy title" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/title4.png">
          <img class="swiper-lazy tree" :class="{ 'delay-animation': isFourth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/tree.png">
          <img class="swiper-lazy tree1" :class="{ 'delay-animation': isFourth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/tree1.png">
          <img class="swiper-lazy tree2" :class="{ 'delay-animation': isFourth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/tree2.png">
          <img class="swiper-lazy tree3" :class="{ 'delay-animation': isFourth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/tree3.png">
          <img class="swiper-lazy tree4" :class="{ 'delay-animation': isFourth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/tree4.png">
          <img class="swiper-lazy tree5" :class="{ 'delay-animation': isFourth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/tree5.png">
          <img class="swiper-lazy tree6" :class="{ 'delay-animation': isFourth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/tree6.png">
          <img class="swiper-lazy tree7" :class="{ 'delay-animation': isFourth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/tree7.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-5">
          <img class="swiper-lazy yingkuibg" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/yingkuibg.png">
          <img class="swiper-lazy shouru animated" :class="{ 'bounceInRight': isFifth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/shouru.png">
          <img class="swiper-lazy chengben animated" :class="{ 'bounceInRight': isFifth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/cehngben.png">
          <img class="swiper-lazy zujin animated" :class="{ 'bounceInRight': isFifth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/zujin.png">
          <img class="swiper-lazy zujin2 animated" :class="{ 'bounceInRight': isFifth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/zujin2.png">
          <img class="swiper-lazy yuejingli animated" :class="{ 'bounceInRight': isFifth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/yuejingli.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-6">
          <img class="swiper-lazy jiamengbg" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/item6bg.png">
          <img class="swiper-lazy triangle" :class="{ 'delay-animation': isSixth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/triangle.png">
          <img class="swiper-lazy protocol" :class="{ 'delay-animation-1': isSixth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/protocol.png">
          <div class="circle-wrapper" :class="{ 'delay-animation-spin': isSixth }">
            <img class="swiper-lazy zuo" :class="{ 'delay-animation-2': isSixth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/zuo.png">
          </div>
          <div class="circle-wrapper" :class="{ 'delay-animation-spin': isSixth }">
            <img class="swiper-lazy xia" :class="{ 'delay-animation-2': isSixth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/xia.png">
          </div>
          <div class="circle-wrapper" :class="{ 'delay-animation-spin': isSixth }">
            <img class="swiper-lazy you" :class="{ 'delay-animation-2': isSixth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/you.png">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-7">
          <img class="swiper-lazy jmprotocol" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/jmprotocol.png">
          <img class="swiper-lazy line" :class="{ 'delay-animation': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/line.png">
          <img class="swiper-lazy jiamengfei" :class="{ 'delay-animation-1': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/jiamengfei.png">
          <img class="swiper-lazy jiamengfei-text" :class="{ 'delay-animation-2': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/jiamengfei-text.png">
          <img class="swiper-lazy kaidian" :class="{ 'delay-animation-3': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/kaidian.png">
          <img class="swiper-lazy kaidian-text" :class="{ 'delay-animation-4': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/kaidian-text.png">
          <img class="swiper-lazy zhichi" :class="{ 'delay-animation-5': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/zhichi.png">
          <img class="swiper-lazy zhichi-text" :class="{ 'delay-animation-6': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/zhichi-text.png">
          <img class="swiper-lazy fudao" :class="{ 'delay-animation-7': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/fudao.png">
          <img class="swiper-lazy fudao-text" :class="{ 'delay-animation-8': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/fudao-text.png">
          <img class="swiper-lazy huiyuan" :class="{ 'delay-animation-9': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/huiyuan.png">
          <img class="swiper-lazy huiyuan-text" :class="{ 'delay-animation-10': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/huiyuan-text.png">
          <img class="swiper-lazy huodong" :class="{ 'delay-animation-11': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/huodong.png">
          <img class="swiper-lazy huodong-text" :class="{ 'delay-animation-12': isSeventh }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/huodong-text.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-8">
          <img class="swiper-lazy kaidianbg" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/kaidianbg.png">
          <img class="swiper-lazy jiedan" :class="{ 'delay-animation-1': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/jiedan.png">
          <img class="swiper-lazy day3" :class="{ 'delay-animation-2': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/3.png">
          <img class="swiper-lazy celiang" :class="{ 'delay-animation-2': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/celiang.png">
          <img class="swiper-lazy day7-10" :class="{ 'delay-animation-3': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/7-10.png">
          <img class="swiper-lazy tuzhi" :class="{ 'delay-animation-3': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/tuzhi.png">
          <img class="swiper-lazy day2" :class="{ 'delay-animation-4': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/2.png">
          <img class="swiper-lazy baojia1" :class="{ 'delay-animation-4': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/baojia1.png">
          <img class="swiper-lazy dayx" :class="{ 'delay-animation-5': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/x.png">
          <img class="swiper-lazy yunshu" :class="{ 'delay-animation-5': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/yunshu.png">
          <img class="swiper-lazy day1-2-2" :class="{ 'delay-animation-6': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/1-2.png">
          <img class="swiper-lazy anzhuang2" :class="{ 'delay-animation-6': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/anzhuang2.png">
          <img class="swiper-lazy daogui30" :class="{ 'delay-animation-7': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/daogui30.png">
          <img class="swiper-lazy baojia2" :class="{ 'delay-animation-4': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/baojia2.png">
          <img class="swiper-lazy day25" :class="{ 'delay-animation-5': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/25.png">
          <img class="swiper-lazy daogui" :class="{ 'delay-animation-5': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/daogui.png">
          <img class="swiper-lazy day1-2" :class="{ 'delay-animation-6': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/1-2.png">
          <img class="swiper-lazy anzhuang1" :class="{ 'delay-animation-6': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/anzhuang1.png">
          <img class="swiper-lazy zhuanmaidian45" :class="{ 'delay-animation-7': isEighth }" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/zhuanmaidian45.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-9">
          <div class="wenjuan">
            <img class="wenjuanbg swiper-lazy" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/wenjuanbg.png">
            <div class="row">
              <span class="name">姓名：</span>
              <input @blur="handleBlur" class="input-text" type="text" maxlength="10" v-model="formData.name">
            </div>
            <div class="row">
              <span class="name">电话：</span>
              <input @blur="handleBlur" class="input-text" type="tel" maxlength="11" v-model="formData.phone">
            </div>
            <div class="row row-special">
              <span class="name">目前居住城市：</span>
              <span class="address" @click="show=true" v-text="formData.city">
               </span>
              <img class="arrow swiper-lazy" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/arrow.png"/>
            </div>
            <!-- <div class="row">
							<span class="name">详细地址：</span>
							<input @blur="handleBlur" class="input-text long-input" type="text" maxlength="30" v-model="formData.detailedAddress">
						</div> -->
            <div class="row">
              <span class="name">您目前从事的工作？</span>
              <div class="radio-wrapper">
                <van-radio-group v-model="formData.job">
                  <van-radio
                    class="radio-item"
                    v-for="job in jobsMapping"
                    :key="job.value"
                    :name="job.label"
                    checked-color="#1A5632">{{ job.label }}</van-radio>
                </van-radio-group>
              </div>
            </div>
            <div class="row">
              <span class="name">您是否有心仪的选址？</span>
              <div class="radio-wrapper">
                <van-radio-group v-model="formData.favoriteAddress">
                  <van-radio class="radio-item" name="是"  checked-color="#1A5632">是</van-radio>
                  <van-radio class="radio-item" name="否" checked-color="#1A5632">否</van-radio>
                </van-radio-group>
              </div>
            </div>
            <div class="row">
              <span class="name">如果创业开店的话，会以怎样的模式经营？</span>
              <div class="radio-wrapper">
                <van-radio-group v-model="formData.model">
                  <van-radio
                    class="radio-item"
                    v-for="model in modelsMapping"
                    :key="model.value"
                    :name="model.label"
                    checked-color="#1A5632">{{ model.label }}</van-radio>
                </van-radio-group>
              </div>
            </div>
            <div class="row">
              <span class="name">如果创业开店，您计划什么时候开始？</span>
              <div class="radio-wrapper">
                <van-radio-group v-model="formData.planStart">
                  <van-radio
                    class="radio-item"
                    v-for="date in dateMapping"
                    :key="date.value"
                    :name="date.label"
                    checked-color="#1A5632">{{ date.label }}</van-radio>
                </van-radio-group>
              </div>
            </div>
            <div class="row row-center">
              <img class="submit-btn" @click="handleSubmit" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/button.png">
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-10">
          <img class="swiper-lazy jiamengbg" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/jiamengbg.png">
          <img class="swiper-lazy jiameng-title" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/jiameng-title.png">
          <img class="swiper-lazy map" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/map.png">
          <img
            v-for="(dot, dotIndex) in dots"
            :key="dotIndex"
            :style="{  left: dot.left, top: dot.top, animationDuration: dot.duration }"
            :label="dot.label"
            class="dot swiper-lazy"
            data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/dot.png">
          <img class="jiameng-mobile" data-src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/jiameng-mobile.png">
        </div>
      </swiper-slide>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <img v-show="!isLoading" @click="handleToggle" class="audio-img" :class="{ active: isPlaying }" src="http://iopewx.cddapp.com/iope/baicaojiHtml/img1/music.png">
    <van-popup class="popover" position="bottom" v-model="show" :overlay="true">
      <van-area
        @confirm="handleConfirm"
        @cancel="handleCancel"
        :area-list="areaList"
        :columns-num="3"/>
    </van-popup>
    <audio id="audio" src="http://img.tooguo.com/bgm2.mp3" autoplay preload loop></audio>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Popup from 'vant/lib/popup'
  import Area from 'vant/lib/area'
  import radioGroup from 'vant/lib/radio-group'
  import Radio from 'vant/lib/radio'
  import Toast from 'vant/lib/toast'
  import 'vant/lib/popup/style'
  import 'vant/lib/area/style'
  import 'vant/lib/radio-group/style'
  import 'vant/lib/radio/style'
  import 'vant/lib/toast/style'
  import areaList from '@/utils/area.js'
  import Progress from '@/components/progress'
  import wxJSSDK from 'weixin-js-sdk'
  import share from '@/utils/share.js'

  export default {
    name: 'app',
    components: {
      swiper,
      swiperSlide,
      'van-popup': Popup,
      'van-area': Area,
      'van-radio-group': radioGroup,
      'van-radio': Radio,
      'van-toast': Toast,
      Progress,
    },
    data() {
      return {
        percentage: 0,
        isLoading: true,
        show: false,
        audioPath: require('./assets/video/bgm2.mp3'),
        audio: '',
        areaList: areaList,
        isPlaying: true,
        query: {},
        formData: {
          name: '',
          phone: '',
          city: '',
          favoriteAddress: '',
          detailedAddress: '',
          job: '',
          model: '',
          planStart: ''
        },
        timer: null,
        currentIndex: 0,
        swiperOption: {
          // noSwiping: false,
          direction: 'vertical',
          slidesPerView: 1,
          mousewheel: true,
          preloadImages: false,
          initialSlide: 0,
          // shortSwipes : false,
          threshold: 10,
          // touchMoveStopPropagation: true,
          navigation: {
            nextEl: '.swiper-button-next',
          },
          lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2,
          },
          on: {
            imagesReady: ()=>{
              this.percentage = 100
              clearInterval(this.timer)
              setTimeout(()=>{
                this.isLoading = false
              }, 200)
            },
          },
        },
        jobsMapping: [
          { label: '公司职工', value: 1},
          { label: '离职创业', value: 2},
          { label: '个体老板', value: 3},
          { label: '其他', value: 4},
        ],
        modelsMapping: [
          { label: '自己经营', value: 1},
          { label: '家人合作', value: 2},
          { label: '朋友合伙', value: 3},
          { label: '雇佣管理', value: 4},
        ],
        dateMapping: [
          { label: '1个月内', value: 1},
          { label: '3个月内', value: 2},
          { label: '半年内', value: 3},
          { label: '暂时观望', value: 4},
        ],
        shareInfo: {
          title: '佰草集养美空间火热招商', // 标题
          desc: '招商|佰草集养美空间诚邀合伙人!', // 主题
          link: 'http://bcjymkj.puman.cn/', // 跳转链接 http://hmjwechattest.jahwa.com.cn/h5_dabainikanjia_bcj/auth/ShareIndex.do?fromopenid={openid}   这是自定义分享要使用的URL。注意传糁
          shareicon: 'http://img.puman.cn/Content/iope/baicaoji.jpg' // 分享图片
        },
        dots: [
          {  left: '2.72rem', top: '7.52rem', duration: '6s', delay: '0s', label: '新疆'},
          {  left: '6.16rem', top: '7.5467rem', duration: '4s', delay: '3s', label: '内蒙古'},
          {  left: '7.8667rem', top: '6.3733rem', duration: '6s', delay: '3s', label: '黑龙江'},
          {  left: '8rem', top: '7.0133rem', duration: '4s', delay: '5s', label: '吉林'},
          {  left: '7.6rem', top: '7.44rem', duration: '6s', delay: '5s', label: '辽宁'},
          {  left: '6.6667rem', top: '8.1067rem', duration: '4s', delay: '4s', label: '河北'},
          {  left: '6.2667rem', top: '8.24rem', duration: '6s', delay: '4s', label: '山西'},
          {  left: '7.0667rem', top: '8.3467rem', duration: '4s', delay: '2s', label: '山东'},
          {  left: '6.48rem', top: '8.7733rem', duration: '5s', delay: '0s', label: '河南'},
          {  left: '7.0667rem', top: '9.1467rem', duration: '5s', delay: '2s', label: '安徽'},
          {  left: '7.4667rem', top: '8.9067rem', duration: '6s', delay: '4s', label: '江苏'},
          {  left: '6.2933rem', top: '9.2267rem', duration: '7s', delay: '6s', label: '湖北'},
          {  left: '6.9067rem', top: '9.7867rem', duration: '8s', delay: '8s', label: '江西'},
          {  left: '7.2267rem', top: '10.0267rem', duration: '5s', delay: '4s', label: '福建'},
          {  left: '7.52rem', top: '9.52rem', duration: '4s', delay: '6s', label: '浙江'},
          {  left: '6.2933rem', top: '9.76rem', duration: '5s', delay: '8s', label: '湖南'},
          {  left: '6.6133rem', top: '10.48rem', duration: '6s', delay: '10s', label: '广东'},
          {  left: '5.84rem', top: '10.5067rem', duration: '7s', delay: '4s', label: '广西'},
          {  left: '6.0267rem', top: '11.2rem', duration: '8s', delay: '4s', label: '海南'},
          {  left: '4.6667rem', top: '10.4rem', duration: '7s', delay: '6s', label: '云南'},
          {  left: '5.5733rem', top: '10rem', duration: '6s', delay: '6s', label: '贵州'},
          {  left: '4.8533rem', top: '9.3333rem', duration: '5s', delay: '4s', label: '四川'},
          {  left: '5.6533rem', top: '9.4933rem', duration: '4s', delay: '4s', label: '重庆'},
          {  left: '3.9733rem', top: '8.5333rem', duration: '5s', delay: '0s', label: '青海'},
          {  left: '5.1467rem', top: '8.6133rem', duration: '6s', delay: '4s', label: '甘肃'},
          {  left: '5.3867rem', top: '8.24rem', duration: '7s', delay: '2s', label: '宁夏'},
          {  left: '5.7867rem', top: '8.8533rem', duration: '8s', delay: '2s', label: '陕西'},
        ],
        preloadImages: [
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/logo.png',
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/chuangye.png',
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/xiaobiaoti.png',
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/proceed/zhuanmaidian45.png',
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/taijini.png',
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/jieshao.png',
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/item2bg.png',
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/zone.png',
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/group.jpg',
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/slogon.png',
            'http://iopewx.cddapp.com/iope/baicaojiHtml/img1/music.png',
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$el.swiper
      },
      isSecond() {
        return this.currentIndex === 1
      },
      isThird() {
        return this.currentIndex === 2
      },
      isFourth() {
        return this.currentIndex === 3
      },
      isFifth() {
        return this.currentIndex === 4
      },
      isSixth() {
        return this.currentIndex === 5
      },
      isSeventh() {
        return this.currentIndex === 6
      },
      isEighth() {
        return this.currentIndex === 7
      },
    },
    created() {
      this.imagesPreload()
    },
    mounted() {
      var audio = document.getElementById('audio')
      document.addEventListener("WeixinJSBridgeReady",function() {
        audio.play()
      },false);
      this.handleProgress()
      // share(wxJSSDK, {}, this.shareInfo, '')
    },
    methods: {
      imagesPreload() {
        const total = this.preloadImages.length
        let loadCount = 0
        this.preloadImages.forEach(url => {
          const img = new Image()
          img.src = url
          img.onload = ()=>{
            console.log('假造');
            loadCount+=1
            if (loadCount>=total) {
              this.percentage = 100
              setTimeout(()=>{
                this.isLoading = false
              }, 200)
            }
          }
        })
      },
      handleProgress() {
        this.timer = setInterval(() => {
          this.percentage +=1
          if (this.percentage == 90) {
            clearInterval(this.timer)
          }
        }, 200)
      },
      handleToggle() {
        if (this.isPlaying) {
          audio.pause()
        } else {
          audio.play()
        }
        this.isPlaying = !this.isPlaying
      },
      audioPlayauto() {
        this.audio = document.getElementById('audio')
        document.addEventListener("WeixinJSBridgeReady",function() {
          this.audio.play()
        },false);
      },
      handleConfirm(arr) {
        this.formData.city = arr.map(item => item.name).join(' ')
        this.show = false
      },
      handleCancel() {
        this.show = false
      },
      handleSubmit() {
        if (!this.formData.name) {
          Toast({ message: '请填写姓名', duration: 1500 });
          return
        }
        if (!this.formData.phone || !(/^1[3|4|5|7|8]\d{9}$/.test(this.formData.phone))) {
          Toast({ message: '请填写正确的手机号', duration: 1500 });
          return
        }
        if (!this.formData.city) {
          Toast({ message: '请选择目前居住城市', duration: 1500 });
          return
        }
        // if (!this.formData.detailedAddress) {
        //   Toast({ message: '请填写详细地址', duration: 1500 });
        //   return
        // }
        if (!this.formData.job) {
          Toast({ message: '请选择目前从事的工作', duration: 1500 });
          return
        }
        if (!this.formData.favoriteAddress) {
          Toast({ message: '请选择是否有心仪的选址', duration: 1500 });
          return
        }
        if (!this.formData.model) {
          Toast({ message: '请选择经营模式', duration: 1500 });
          return
        }
        if (!this.formData.planStart) {
          Toast({ message: '请选择计划开始时间', duration: 1500 });
          return
        }
        const xhr = new XMLHttpRequest()
        // const url = 'http://iopewx.cddapp.com/iope/youhuijuan/questionnaireSurvey'
        const url = 'http://iopewx.cddapp.com/iope/baicaoji/questionnaireSurvey'
        const { name, phone, city, favoriteAddress, detailedAddress, job, model, planStart } = this.formData
        const params = `name=${name}&phone=${phone}&city=${city}&favoriteAddress=${favoriteAddress}&detailedAddress=${detailedAddress}&job=${job}&model=${model}&planStart=${planStart}`
        xhr.open( 'POST', url)
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== 4 || xhr.status !== 200) {
            return
          }
          if(xhr.responseText === '1') {
            Toast({ message: '提交成功', duration: 1500 });
          } else {
            Toast({ message: '提交失败', duration: 1500 });
          }
        }
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(params);
        // xhr.send(this.formData);
      },
      handleBlur() {
        // this.swiper.update()
        setTimeout(function() {
          var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
          window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);
      },
      handleNextTransitionStart() {
        this.currentIndex+=1
      },
      handlePrevTransitionStart() {
        this.currentIndex-=1
      },
    }
  }
</script>

<style lang="scss" scoped>
  // @import '@/styles/reset.scss';
  #app /deep/{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: #e5f4ec;
    .loading-page {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .text-wrapper {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: #1A5632;
        margin-bottom: 8px;
      }
      .loading-main {
        width: 60%;
        height: 100px;
      }
    }
    .radio-item {
      display: inline-block;
      .van-radio__input {
        font-size: 0.3733rem;
      }
      .van-radio__label {
        margin-left: 4px;
        margin-right: 5px;
        font-size: 0.32rem;
      }
    }
    // .van-popup {
    //   position: absolute !important;
    // }
    // .van-overlay {
    //   position: absolute;
    // }
    .swiper-box {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
    .swiper-item {
      height: 100%;
      text-align: center;
      font-size: 18px ;
      display: flex;
      align-items: center;
    }
    .item {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat:  no-repeat;
      position: relative;
      background-image: url('~@/assets/images/indexbg.jpg');
      &.item-1 {
        .logo {
          width: 3.4667rem;
          position: absolute;
          top: 0.6933rem;
          left: 50%;
          transform: translateX(-50%);
        }
        .chuangye {
          width: 8rem;
          position: absolute;
          top: 2.4rem;
          left: 50%;
          transform: translateX(-50%);
        }
        .xiaobiaoti {
          width: 8rem;
          position: absolute;
          top: 6.1333rem;
          left: 50%;
          transform: translateX(-46%);
        }
        .taijini {
          width: 96%;
          position: absolute;
          top: 8.8rem;
          left: 50%;
          transform: translateX(-48%);
        }
      }
      &.item-2 {
        .jieshao {
          position: absolute;
          left: 0.2133rem;
          top: 0.4267rem;
          width: 2.6667rem;
          z-index: 12;
        }
        .jieshao-detail {
          width: 8.24rem;
          position: absolute;
          left: 50%;
          top: 2.2667rem;
          transform: translateX(-50%);
          &.delay-animation {
            animation: fadeIn ease-in 2s;
          }
        }
      }
      &.item-3 {
        .zone {
          position: absolute;
          left: 0.1867rem;
          top: 0.4267rem;
          width: 2.7467rem;
        }
        .slogon {
          position: absolute;
          width: 8rem;
          left: 50%;
          transform: translateX(-47%);
          top: 2.2667rem;
        }
        .group {
          position: absolute;
          width: 100%;
          // left: -100%;
          left: 0;
          top: 5.3333rem;
          opacity: 0;
          &.delay-animation {
            animation: fadeIn ease-in 2.5s forwards;
          }
        }
      }
      &.item-4 {
        .title {
          position: absolute;
          width: 7.7067rem;
          left: 50%;
          transform: translateX(-50%);
          top: 1.28rem;
        }
        .tree {
          position: absolute;
          width: 100%;
          left: 0;
          top: 2.8267rem;
          opacity: 0;
          &.delay-animation {
            animation: fadeIn ease-in 2s forwards;
          }
        }
        .tree1 {
          position: absolute;
          width: 1.8533rem;
          left: 3.8133rem;
          top: 4.74rem;
          opacity: 0;
          &.delay-animation {
            animation: fadeIn ease-in 1.5s forwards;
            animation-delay: 1s;
          }
        }
        .tree2 {
          position: absolute;
          width: 1.84rem;
          left: 6.1467rem;
          top: 5.52rem;
          opacity: 0;
          &.delay-animation {
            animation: fadeIn ease-in 1.5s forwards;
            animation-delay: 1.6s;
          }
        }
        .tree3 {
          position: absolute;
          width: 2.0267rem;
          left: 4.4rem;
          top: 6.57rem;
          opacity: 0;
          &.delay-animation {
            animation: fadeIn ease-in 1.5s forwards;
            animation-delay: 2.2s;
          }
        }
        .tree4 {
          position: absolute;
          width: 2.3867rem;
          left: 1.3rem;
          top: 6.60rem;
          opacity: 0;
          &.delay-animation {
            animation: fadeIn ease-in 1.5s forwards;
            animation-delay: 2.8s;
          }
        }
        .tree5 {
          position: absolute;
          width: 2.16rem;
          left: 3.1rem;
          top: 8.60rem;
          opacity: 0;
          &.delay-animation {
            animation: fadeIn ease-in 1.5s forwards;
            animation-delay: 3.4s;
          }
        }
        .tree6 {
          position: absolute;
          width: 2.7467rem;
          left: 5.73rem;
          top: 8.75rem;
          opacity: 0;
          &.delay-animation {
            animation: fadeIn ease-in 1.5s forwards;
            animation-delay: 4s;
          }
        }
        .tree7 {
          position: absolute;
          width: 2.72rem;
          left: 3.65rem;
          top: 11.10rem;
          opacity: 0;
          &.delay-animation {
            animation: fadeIn ease-in 1.5s forwards;
            animation-delay: 4.6s;
          }
        }
      }
      &.item-5 {
        .yingkuibg {
          position: absolute;
          width: 8.96rem;
          left: 0.1867rem;
          top: 0.4267rem;
        }
        >img {
          width: 7.4133rem;
          margin-top: 0.32rem;
        }
        .shouru {
          margin-top: 4.8rem;
          animation-duration: 2s;
        }
        .chengben {
          animation-delay: 0.3s;
          animation-duration: 2s;
        }
        .zujin {
          animation-delay: 0.5s;
          animation-duration: 2s;
        }
        .zujin2 {
          animation-delay: 0.7s;
          animation-duration: 2s;
        }
        .yuejingli {
          animation-delay: 0.9s;
          animation-duration: 2s;
        }
      }
      &.item-6 {
        .jiamengbg {
          position: absolute;
          width: 8.96rem;
          left: 0.1867rem;
          top: 0.4267rem;
        }
        .triangle {
          position: absolute;
          width: 7.7333rem;
          left: 50%;
          margin-left: -3.8667rem;
          top: 6.08rem;
          z-index: 12;
          opacity: 0;
          &.delay-animation {
            animation: fadeIn ease-in 4s forwards;
          }
        }
        .protocol {
          position: absolute;
          width: 1.04rem;
          left: 50%;
          margin-left: -0.52rem;
          top: 9.9467rem;
          opacity: 0;
          &.delay-animation-1 {
            animation: fadeIn  3s forwards;
            animation-delay: 1s;
          }
        }
        .circle-wrapper {
          position: absolute;
          width: 6.96rem;
          height: 6.96rem;
          left: 50%;
          margin-left: -3.48rem;
          top: 7.1rem;
          &.delay-animation-spin {
            animation: spinReverse  2.5s forwards;
            animation-delay: 4.8s;
          }
          .zuo {
            width: 100%;
            height: 100%;
            opacity: 0;
            &.delay-animation-2 {
              animation: fadeThenSpin  2s forwards;
              animation-delay: 2s;
            }
          }
          .xia {
            width: 100%;
            height: 100%;
            opacity: 0;
            &.delay-animation-2 {
              animation: fadeThenSpin  2s forwards;
              animation-delay: 3s;
            }
          }
          .you {
            width: 100%;
            height: 100%;
            opacity: 0;
            &.delay-animation-2 {
              animation: fadeThenSpin  2s forwards;
              animation-delay: 4s;
            }
          }
        }
      }
      &.item-7 {
        .jmprotocol {
          position: absolute;
          width: 9.52rem;
          left: 0.1867rem;
          top: 0.4267rem;
        }
        .line {
          position: absolute;
          width: 2.3467rem;
          left: 50%;
          margin-left: -1.1733rem;
          top: 3.0933rem;
        }
        .jiamengfei {
          position: absolute;
          width: 1.68rem;
          top: 3.4667rem;
          left: 100%;
          &.delay-animation-1 {
            animation: slideFromRight 1s forwards;
          }
        }
        .jiamengfei-text {
          position: absolute;
          width: 2.6667rem;
          left: 100%;
          top: 4.1333rem;
          &.delay-animation-2 {
            animation: slideFromRight  1s forwards;
          }
        }
        .kaidian {
          position: absolute;
          width: 2.0933rem;
          top: 5.0667rem;
          right: 100%;
          &.delay-animation-3 {
            animation: slideFromLeft  1s forwards;
            animation-delay: 1s;
          }
        }
        .kaidian-text {
          position: absolute;
          width: 2.6667rem;
          top: 5.68rem;
          right: 100%;
          &.delay-animation-4 {
            animation: slideFromLeft3  1s forwards;
            animation-delay: 1s;
          }
        }
        .zhichi {
          position: absolute;
          width: 2.1067rem;
          top: 6.4533rem;
          left: 100%;
          &.delay-animation-5 {
            animation: slideFromRight 1s forwards;
            animation-delay: 2s;
          }
        }
        .zhichi-text {
          position: absolute;
          width: 3.1333rem;
          left: 100%;
          top: 7.0933rem;
          &.delay-animation-6 {
            animation: slideFromRight  1s forwards;
            animation-delay: 2s;
          }
        }
        .fudao {
          position: absolute;
          width: 2.0933rem;
          top: 7.9467rem;
          right: 100%;
          &.delay-animation-7 {
            animation: slideFromLeft  1s forwards;
            animation-delay: 3s;
          }
        }
        .fudao-text {
          position: absolute;
          width: 2.8933rem;
          top: 8.5867rem;
          right: 100%;
          &.delay-animation-8 {
            animation: slideFromLeft4  1s forwards;
            animation-delay: 3s;
          }
        }
        .huiyuan {
          position: absolute;
          width: 2.1067rem;
          top: 9.3067rem;
          left: 100%;
          &.delay-animation-9 {
            animation: slideFromRight 1s forwards;
            animation-delay: 4s;
          }
        }
        .huiyuan-text {
          position: absolute;
          width: 3.36rem;
          left: 100%;
          top: 9.9467rem;
          &.delay-animation-10 {
            animation: slideFromRight2  1s forwards;
            animation-delay: 4s;
          }
        }
        .huodong {
          position: absolute;
          width: 2.0933rem;
          top: 10.88rem;
          right: 100%;
          &.delay-animation-11 {
            animation: slideFromLeft  1s forwards;
            animation-delay: 5s;
          }
        }
        .huodong-text {
          position: absolute;
          width: 3.36rem;
          top: 11.4933rem;
          right: 100%;
          &.delay-animation-12 {
            animation: slideFromLeft2  1s forwards;
            animation-delay: 5s;
          }
        }
      }
      &.item-8 {
        .kaidianbg {
          position: absolute;
          width: 9.0933rem;
          left: 0.1867rem;
          top: 0.4267rem;
        }
        .jiedan {
          position: absolute;
          width: 1.96rem;
          left: 2.08rem;
          top: 2.88rem;
          opacity: 0;
          &.delay-animation-1 {
            animation: fadeIn 3s forwards;
          }
        }
        .day3 {
          position: absolute;
          width: 0.4rem;
          left: 3.8667rem;
          top: 3.2rem;
          opacity: 0;
          &.delay-animation-2 {
            animation: fadeIn 1s forwards 1s;
          }
        }
        .celiang {
          position: absolute;
          width: 1.9467rem;
          left: 4.5067rem;
          top: 2.56rem;
          opacity: 0;
          &.delay-animation-2 {
            animation: fadeIn 3s forwards 1s;
          }
        }
        .day7-10 {
          position: absolute;
          width: 0.72rem;
          left: 6.0533rem;
          top: 3.44rem;
          opacity: 0;
          &.delay-animation-3 {
            animation: fadeIn 1s forwards 2s;
          }
        }
        .tuzhi {
          position: absolute;
          width: 2.72rem;
          left: 6.2933rem;
          top: 4.1067rem;
          opacity: 0;
          &.delay-animation-3 {
            animation: fadeIn 3s forwards 2s;
          }
        }
        .day2 {
          position: absolute;
          width: 0.4rem;
          left: 5.8667rem;
          top: 5.5467rem;
          opacity: 0;
          &.delay-animation-4 {
            animation: fadeIn 1s forwards 3s;
          }
        }
        .baojia1 {
          position: absolute;
          width: 2.2533rem;
          left: 3.9733rem;
          top: 5.36rem;
          opacity: 0;
          &.delay-animation-4 {
            animation: fadeIn 3s forwards 3s;
          }
        }
        .dayx {
          position: absolute;
          width: 0.4533rem;
          left: 3.12rem;
          top: 5.8933rem;
          opacity: 0;
          &.delay-animation-5 {
            animation: fadeIn 1s forwards 4s;
          }
        }
        .yunshu {
          position: absolute;
          width: 2.4667rem;
          left: 1.1733rem;
          top: 5.4933rem;
          opacity: 0;
          &.delay-animation-5 {
            animation: fadeIn 3s forwards 4s;
          }
        }
        .day1-2-2 {
          position: absolute;
          width: 0.5733rem;
          left: 1.3333rem;
          top: 8.1867rem;
          opacity: 0;
          &.delay-animation-6 {
            animation: fadeIn 1s forwards 5s;
          }
        }
        .anzhuang2 {
          position: absolute;
          width: 3.92rem;
          left: 1.9733rem;
          top: 8rem;
          opacity: 0;
          &.delay-animation-6 {
            animation: fadeIn 3s forwards 5s;
          }
        }
        .daogui30 {
          position: absolute;
          width: 4.56rem;
          left: 2.1333rem;
          top: 10.2667rem;
          opacity: 0;
          &.delay-animation-7 {
            animation: fadeIn 3s forwards 6s;
          }
        }
        .baojia2 {
          position: absolute;
          width: 3.5333rem;
          left: 5.7333rem;
          top: 7.3867rem;
          opacity: 0;
          &.delay-animation-4 {
            animation: fadeIn 3s forwards 3s;
          }
        }
        .day25 {
          position: absolute;
          width: 0.52rem;
          left: 7.4133rem;
          top: 8.7733rem;
          opacity: 0;
          &.delay-animation-5 {
            animation: fadeIn 1s forwards 4s;
          }
        }
        .daogui {
          position: absolute;
          width: 2.4667rem;
          left: 6.9333rem;
          top: 9.3867rem;
          opacity: 0;
          &.delay-animation-5 {
            animation: fadeIn 3s forwards 4s;
          }
        }
        .day1-2 {
          position: absolute;
          width: 0.5733rem;
          left: 1.3333rem;
          top: 8.1867rem;
          opacity: 0;
          &.delay-animation-6 {
            animation: fadeIn 1s forwards 5s;
          }
        }
        .anzhuang1 {
          position: absolute;
          width: 3.92rem;
          left: 5.2533rem;
          top: 12.88rem;
          opacity: 0;
          &.delay-animation-6 {
            animation: fadeIn 3s forwards 5s;
          }
        }
        .day1-2 {
          position: absolute;
          width: 0.5733rem;
          left: 7.7333rem;
          top: 12.3467rem;
        }
        .zhuanmaidian45 {
          position: absolute;
          width: 3.84rem;
          left: 1.1733rem;
          top: 12.72rem;
          opacity: 0;
          &.delay-animation-7 {
            animation: fadeIn 3s forwards 6s;
          }
        }
      }
      &.item-9 {
        .wenjuan {
          position: relative;
          // width: 8.9733rem;
          width: 100%;
          height: 100%;
          // margin-left: 0.1867rem;
          // margin-top: 0.4267rem;
          padding-left: 1.4133rem;
          padding-top: 3.9rem;
          box-sizing: border-box;
          .wenjuanbg {
            position: absolute;
            left: 0.1867rem;
            top: 0.4267rem;
            width: 8.9733rem;
            z-index: 1;
          }
        }
        .row {
          position: relative;
          z-index: 12;
          text-align: left;
          font-size: 0.3467rem;
          color: #1A5632;
          margin-bottom:10px;
          &.row-special {
            height: 0.5333rem;
            display: flex;
            align-items: center;
            margin-top: 0.4rem;
            margin-bottom: 0.4rem;
          }
          &.row-center {
            text-align: center;
            margin-top: 0.3rem;
          }
          .submit-btn {
            width: 2.1333rem;
            margin-left: -1.6rem;
          }
          .input-text {
            width: 2.4533rem;
            border: none;
            border-bottom: 1px solid #1A5632;
            background: transparent;
            border-radius: 0;
            color: #1A5632;
            font-size: 0.3467rem;
            vertical-align: bottom;
            &.long-input {
              width: 4.8rem;
            }
          }
          .radio-wrapper {
            padding-top: 0.2667rem;
          }
          .address {
            display: inline-block;
            height: 0.5333rem;
            line-height: 0.5333rem;
            width: 4.5867rem;
            position: relative;
            border-bottom: 1px solid #1A5632;
            font-size: 0.32rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .arrow {
            width: 0.1667rem;
            position: absolute;
            right: 1.8667rem;
            bottom: 4px;
          }
        }
      }
      &.item-10 {
        .jiamengbg {
          position: absolute;
          width: 8.9733rem;
          left: 0.1867rem;
          top: 0.4267rem;
        }
        .jiameng-title {
          position: absolute;
          width: 7.6933rem;
          left: 50%;
          transform: translate(-48%);
          top: 3.1467rem;
        }
        .map {
          position: absolute;
          width: 7.6267rem;
          left: 50%;
          transform: translate(-50%);
          top: 5.5733rem;
        }
        .dot {
          width: 0.2133rem;
          height: 0.2133rem;
          position: absolute;
          // left: 2.72rem;
          // top: 7.52rem;
          animation: flash  infinite forwards;
        }
        .jiameng-mobile {
          position: absolute;
          width: 6.28rem;
          left: 50%;
          transform: translate(-50%);
          top: 9.7067rem;
        }
      }
    }
    .swiper-button-next {
      left: 50%;
      top: auto;
      width: 40px;
      height: 40px;;
      bottom: 8px !important;
      margin-left: -22px;
      // background: #fff;
      border-radius: 50%;
      background-image: url('~@/assets/images/next.png');
      background-size: cover;
      opacity: 0.7;
    }
    .audio-img {
      position: absolute;
      width: 0.7467rem;
      height: 0.7467rem;
      right: 0.64rem;
      top: 0.64rem;
      z-index: 9;
    }
    .next-wrapper {
      width: 1rem;
      height: 1rem;
      line-height: 1;
      text-align: center;
      position: absolute;
      bottom: 20px;
      left: 50%;
      margin-left: -20px;
      z-index: 9;
      background: red;
      >img {
        width: 100%;
      }
    }
  }
  .audio-img {
    &.active {
      animation: spin 3s infinite linear;
    }
  }
  .fadeIn {
    animation: fadeIn .7s;
  }
  @keyframes fadeThenSpin {
    0% { opacity:0; }
    100% { opacity:1; }
  }
  @keyframes fadeIn {
    0% { opacity:0; }
    100% { opacity:1; }
  }
  @keyframes flash {
    0% { opacity:1; }
    25% { opacity:0.5; }
    50% { opacity:0; }
    75% { opacity:0.5; }
    100% { opacity:1; }
  }
  @keyframes spin {
    0% { transform: rotate(0);}
    100% { transform: rotate(360deg);}
  }
  @keyframes spinReverse {
    0% { transform: rotate(0);}
    100% { transform: rotate(-360deg);}
  }
  @keyframes slideFromRight {
    0% { left: 100%; }
    100% { left: 6.4rem; }
  }
  @keyframes slideFromRight2 {
    0% { left: 100%; }
    100% { left: 6.3rem; }
  }
  @keyframes slideFromLeft {
    0% { right: 100%; }
    100% { right: 6.4rem; }
  }
  @keyframes slide2Left {
    0% { left: -1.8rem; }
    100% { left: 0; }
  }
  @keyframes slideFromTop1 {
    0% { top: -4rem; }
    100% { top: 5.3333rem; }
  }
  @keyframes slideFromTop2 {
    0% { top: -3.6533rem; }
    100% { top: 5.3333rem; }
  }
  @keyframes slideFromBottom1 {
    0% { top: calc(100% + 5.4533rem); }
    100% { top: 8.9333rem }
  }
  @keyframes slide2Right {
    0% { right: -4rem; }
    100% { right: 0; }
  }
  @keyframes slideFromLeft2 {
    0% { right: 100%; }
    100% { right: 5.9rem; }
  }
  @keyframes slideFromLeft3 {
    0% { right: 100%; }
    100% { right: 6.6rem; }
  }
  @keyframes slideFromLeft4 {
    0% { right: 100%; }
    100% { right: 6.35rem; }
  }
  @keyframes shake {
    from,
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    10%,
    50%,
    70%,
    90% {
      -webkit-transform: translate3d(-2px, 0, 0);
      transform: translate3d(-2px, 0, 0);
    }

    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translate3d(2px, 0, 0);
      transform: translate3d(2px, 0, 0);
    }
  }
</style>
