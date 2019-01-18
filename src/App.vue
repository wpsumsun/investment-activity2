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
          <img src="~@/assets/images/logo.png" class="logo">
          <img src="~@/assets/images/chuangye.png" class="chuangye">
          <img src="~@/assets/images/xiaobiaoti.png" class="xiaobiaoti">
          <img src="~@/assets/images/taijini.png" class="taijini">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-2">
          <img class="jieshao" src="~@/assets/images/jieshao.png">
          <img class="jieshao-detail" src="~@/assets/images/item2bg.jpg">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-3">
           <img class="zone" src="~@/assets/images/zone.png">
           <img class="slogon" src="~@/assets/images/slogon.png">
           <img class="group" src="~@/assets/images/group.jpg">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-4">
           <img class="title" src="~@/assets/images/title4.png">
           <img class="tree" src="~@/assets/images/tree.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-5">
           <img class="yingkuibg" src="~@/assets/images/yingkuibg.png">
           <img class="shouru animated" :class="{ 'bounceInRight': isFifth }" src="~@/assets/images/shouru.png">
           <img class="chengben animated" :class="{ 'bounceInRight': isFifth }" src="~@/assets/images/cehngben.png">
           <img class="zujin animated" :class="{ 'bounceInRight': isFifth }" src="~@/assets/images/zujin.png">
           <img class="zujin2 animated" :class="{ 'bounceInRight': isFifth }" src="~@/assets/images/zujin2.png">
           <img class="yuejingli animated" :class="{ 'bounceInRight': isFifth }" src="~@/assets/images/yuejingli.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-6">
           <img class="jiamengbg" src="~@/assets/images/item6bg.png">
           <img class="triangle" :class="{ 'delay-animation': isSixth }" src="~@/assets/images/triangle.png">
           <img class="protocol" :class="{ 'delay-animation-1': isSixth }" src="~@/assets/images/protocol.png">
           <img class="text" :class="{ 'delay-animation-2': isSixth }" src="~@/assets/images/text.png">
           <img class="text2" :class="{ 'delay-animation-3': isSixth }" src="~@/assets/images/text2.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-7">
           <img class="jmprotocol" src="~@/assets/images/jmprotocol.png">
           <img class="line" :class="{ 'delay-animation': isSeventh }" src="~@/assets/images/line.png">
           <img class="jiamengfei" :class="{ 'delay-animation-1': isSeventh }" src="~@/assets/images/jiamengfei.png">
           <img class="jiamengfei-text" :class="{ 'delay-animation-2': isSeventh }" src="~@/assets/images/jiamengfei-text.png">
           <img class="kaidian" :class="{ 'delay-animation-3': isSeventh }" src="~@/assets/images/kaidian.png">
           <img class="kaidian-text" :class="{ 'delay-animation-4': isSeventh }" src="~@/assets/images/kaidian-text.png">
           <img class="zhichi" :class="{ 'delay-animation-5': isSeventh }" src="~@/assets/images/zhichi.png">
           <img class="zhichi-text" :class="{ 'delay-animation-6': isSeventh }" src="~@/assets/images/zhichi-text.png">
           <img class="fudao" :class="{ 'delay-animation-7': isSeventh }" src="~@/assets/images/fudao.png">
           <img class="fudao-text" :class="{ 'delay-animation-8': isSeventh }" src="~@/assets/images/fudao-text.png">
           <img class="huiyuan" :class="{ 'delay-animation-9': isSeventh }" src="~@/assets/images/huiyuan.png">
           <img class="huiyuan-text" :class="{ 'delay-animation-10': isSeventh }" src="~@/assets/images/huiyuan-text.png">
           <img class="huodong" :class="{ 'delay-animation-11': isSeventh }" src="~@/assets/images/huodong.png">
           <img class="huodong-text" :class="{ 'delay-animation-12': isSeventh }" src="~@/assets/images/huodong-text.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-8">
           <img class="kaidianbg" src="~@/assets/images/proceed/kaidianbg.png">
           <img class="jiedan" :class="{ 'delay-animation-1': isEighth }" src="~@/assets/images/proceed/jiedan.png">
           <img class="day3" :class="{ 'delay-animation-2': isEighth }" src="~@/assets/images/proceed/3.png">
           <img class="celiang" :class="{ 'delay-animation-2': isEighth }" src="~@/assets/images/proceed/celiang.png">
           <img class="day7-10" :class="{ 'delay-animation-3': isEighth }" src="~@/assets/images/proceed/7-10.png">
           <img class="tuzhi" :class="{ 'delay-animation-3': isEighth }" src="~@/assets/images/proceed/tuzhi.png">
           <img class="day2" :class="{ 'delay-animation-4': isEighth }" src="~@/assets/images/proceed/2.png">
           <img class="baojia1" :class="{ 'delay-animation-4': isEighth }" src="~@/assets/images/proceed/baojia1.png">
           <img class="dayx" :class="{ 'delay-animation-5': isEighth }" src="~@/assets/images/proceed/x.png">
           <img class="yunshu" :class="{ 'delay-animation-5': isEighth }" src="~@/assets/images/proceed/yunshu.png">
           <img class="day1-2-2" :class="{ 'delay-animation-6': isEighth }" src="~@/assets/images/proceed/1-2.png">
           <img class="anzhuang2" :class="{ 'delay-animation-6': isEighth }" src="~@/assets/images/proceed/anzhuang2.png">
           <img class="daogui30" :class="{ 'delay-animation-7': isEighth }" src="~@/assets/images/proceed/daogui30.png">
           <img class="baojia2" :class="{ 'delay-animation-4': isEighth }" src="~@/assets/images/proceed/baojia2.png">
           <img class="day25" :class="{ 'delay-animation-5': isEighth }" src="~@/assets/images/proceed/25.png">
           <img class="daogui" :class="{ 'delay-animation-5': isEighth }" src="~@/assets/images/proceed/daogui.png">
           <img class="day1-2" :class="{ 'delay-animation-6': isEighth }" src="~@/assets/images/proceed/1-2.png">
           <img class="anzhuang1" :class="{ 'delay-animation-6': isEighth }" src="~@/assets/images/proceed/anzhuang1.png">
           <img class="zhuanmaidian45" :class="{ 'delay-animation-7': isEighth }" src="~@/assets/images/proceed/zhuanmaidian45.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-9">
           <div class="wenjuan">
             <img class="wenjuanbg" src="~@/assets/images/wenjuanbg.png">
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
                 <img class="arrow" src="~@/assets/images/arrow.png">
               </span>
             </div>
             <div class="row">
               <span class="name">详细地址：</span>
               <input @blur="handleBlur" class="input-text long-input" type="text" maxlength="30" v-model="formData.detailedAddress">
             </div>
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
                <img class="submit-btn" @click="handleSubmit" src="~@/assets/images/button.png">
              </div>
           </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item item-10">
          <img class="jiamengbg" src="~@/assets/images/jiamengbg.png">
          <img class="jiameng-title" src="~@/assets/images/jiameng-title.png">
          <img class="map" src="~@/assets/images/map.gif">
          <img class="jiameng-mobile" src="~@/assets/images/jiameng-mobile.png">
        </div>
      </swiper-slide>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <img v-show="!isLoading" @click="handleToggle" class="audio-img" :class="{ active: isPlaying }" src="~@/assets/images/music.png">
    <van-popup class="popover" position="bottom" v-model="show" :overlay="true">
      <van-area
        @confirm="handleConfirm"
        @cancel="handleCancel"
        :area-list="areaList"
        :columns-num="3"/>
    </van-popup>
    <audio id="audio" :src="audioPath" autoplay preload loop></audio>
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
          preloadImages: true,
          initialSlide: 0 ,
          // shortSwipes : false,
          threshold: 10,
          // touchMoveStopPropagation: true,
          navigation: {
            nextEl: '.swiper-button-next',
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
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$el.swiper
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
  mounted() {
      var audio = document.getElementById('audio')
      document.addEventListener("WeixinJSBridgeReady",function() {
        audio.play() 
      },false);
      this.handleProgress()
  },
  methods: {
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
      if (!this.formData.detailedAddress) {
        Toast({ message: '请填写详细地址', duration: 1500 });
        return
      }
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
      const url = 'http://iopewx.cddapp.com/iope/youhuijuan/questionnaireSurvey'
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
      font-size: 14px;
    }
    .van-radio__label {
      margin-left: 4px;
      margin-right: 10px;
      font-size: 12px;
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
        width: 7.4667rem;
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
        width: 7.1733rem;
        left: 50%;
        transform: translateX(-47%);
        top: 2.2667rem;
      }
      .group {
        position: absolute;
        width: 100%;
        left: 0;
        top: 5.3333rem;
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
      }
      .chengben {
        animation-delay: 0.3s;
      }
      .zujin {
        animation-delay: 0.5s;
      }
      .zujin2 {
        animation-delay: 0.7s;
      }
      .yuejingli {
        animation-delay: 0.9s;
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
       .text2 {
        position: absolute;
        width: 1.8133rem;
        left: 2.0267rem;
        top: 7.68rem;
        opacity: 0;
        &.delay-animation-3 {
          animation: fadeIn  3s forwards;
          animation-delay: 2s;
        }
      }
       .text {
        position: absolute;
        width: 3.68rem;
        left: 50%;
        margin-left: -1.84rem;
        top: 12.7733rem;
        opacity: 0;
        &.delay-animation-2 {
          animation: fadeIn  3s forwards;
          animation-delay: 3s;
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
          animation: slideFromRight 1s forwards ease-in-out;
        }
      }
      .jiamengfei-text {
        position: absolute;
        width: 2.6667rem;
        left: 100%;
        top: 4.1333rem;
        &.delay-animation-2 {
          animation: slideFromRight  1s forwards;
          animation-delay: 1s;
        }
      }
       .kaidian {
        position: absolute;
        width: 2.0933rem;
        top: 5.0667rem;
        right: 100%;
        &.delay-animation-3 {
          animation: slideFromLeft  1s forwards;
          animation-delay: 2s;
        }
      }
       .kaidian-text {
        position: absolute;
        width: 2.6667rem;
        top: 5.68rem;
        right: 100%;
        &.delay-animation-4 {
          animation: slideFromLeft3  1s forwards;
          animation-delay: 3s;
        }
      }
      .zhichi {
        position: absolute;
        width: 2.1067rem;
        top: 6.4533rem;
        left: 100%;
        &.delay-animation-5 {
          animation: slideFromRight 1s forwards;
          animation-delay: 4s;
        }
      }
      .zhichi-text {
        position: absolute;
        width: 3.1333rem;
        left: 100%;
        top: 7.0933rem;
        &.delay-animation-6 {
          animation: slideFromRight  1s forwards;
          animation-delay: 5s;
        }
      }
      .fudao {
        position: absolute;
        width: 2.0933rem;
        top: 7.9467rem;
        right: 100%;
        &.delay-animation-7 {
          animation: slideFromLeft  1s forwards;
          animation-delay: 6s;
        }
      }
       .fudao-text {
        position: absolute;
        width: 2.8933rem;
        top: 8.5867rem;
        right: 100%;
        &.delay-animation-8 {
          animation: slideFromLeft4  1s forwards;
          animation-delay: 7s;
        }
      }
      .huiyuan {
        position: absolute;
        width: 2.1067rem;
        top: 9.3067rem;
        left: 100%;
        &.delay-animation-9 {
          animation: slideFromRight 1s forwards;
          animation-delay: 8s;
        }
      }
      .huiyuan-text {
        position: absolute;
        width: 3.36rem;
        left: 100%;
        top: 9.9467rem;
        &.delay-animation-10 {
          animation: slideFromRight2  1s forwards;
          animation-delay: 9s;
        }
      }
       .huodong {
        position: absolute;
        width: 2.0933rem;
        top: 10.88rem;
        right: 100%;
        &.delay-animation-11 {
          animation: slideFromLeft  1s forwards;
          animation-delay: 10s;
        }
      }
       .huodong-text {
        position: absolute;
        width: 3.36rem;
        top: 11.4933rem;
        right: 100%;
        &.delay-animation-12 {
          animation: slideFromLeft2  1s forwards;
          animation-delay: 11s;
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
        font-size: 13px;
        color: #1A5632;
        margin-bottom:10px;
        &.row-special {
          height: 20px;
          display: flex;
          align-items: center;
          margin-top: 15px;
        }
        &.row-center {
          text-align: center;
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
          font-size: 13px;
          vertical-align: bottom;
          &.long-input {
            width: 4.8rem;
          }
        }
        .radio-wrapper {
          padding-top: 10px;
        }
        .address {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          width: 4.5867rem;
          position: relative;
          border-bottom: 1px solid #1A5632;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .arrow {
            width: 0.16rem;
            position: absolute;
            right: 0;
            bottom: 4px;
          }
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
@keyframes fadeIn {
  0% { opacity:0; }
  100% { opacity:1; }
}
@keyframes spin {
  0% { transform: rotate(0);}
  100% { transform: rotate(360deg);}
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
