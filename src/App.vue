<template>
  <div id="app">
    <swiper  
      :options="swiperOption" 
      class="swiper-box" 
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
           <img class="zujin animated" :class="{ 'bounceInRight': isFifth }" src="~@/assets/images/zujin.jpg">
           <img class="zujin2 animated" :class="{ 'bounceInRight': isFifth }" src="~@/assets/images/zujin.jpg">
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
      <swiper-slide class="swiper-item">Slide 8</swiper-slide>
      <swiper-slide class="swiper-item">Slide 9</swiper-slide>
      <swiper-slide class="swiper-item">Slide 10</swiper-slide>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <img class="audio-img" src="~@/assets/images/music.png">
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'app',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      currentIndex: 6,
      swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          preloadImages: true,
          initialSlide: 6,
          navigation: {
            nextEl: '.swiper-button-next',
          },
        }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    isFifth() {
      return this.currentIndex === 4
    },
    isSixth() {
      return this.currentIndex === 5
    },
    isSeventh() {
      return this.currentIndex === 6
    }
  },
  mounted() {
  },
  watch: {
    currentIndex(){
      this.handleAnimation()
    }
  },
  methods: {
    handleNextTransitionStart() {
      this.currentIndex+=1
      console.log(this.currentIndex)
    },
    handlePrevTransitionStart() {
      this.currentIndex-=1
      console.log(this.currentIndex)
    },
    handleAnimation() {
      if (this.currentIndex === 5) {
        console.log('动画开始')
      }
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
        transform: translateX(-50%);
      }
      .taijini {
        width: 96%;
        position: absolute;
        top: 8.8rem;
        left: 50%;
        transform: translateX(-50%);
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
        transform: translateX(-50%);
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
          animation: slideFromLeft  1s forwards;
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
          animation: slideFromLeft  1s forwards;
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
          animation: slideFromRight  1s forwards;
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
          animation: slideFromLeft  1s forwards;
          animation-delay: 11s;
        }
      }
    }
  }
  .swiper-button-next {
      left: 50%;
      top: auto;
      width: 40px;
      height: 40px;;
      bottom: 20px !important;
      margin-left: -22px;
      // background: #fff;
      border-radius: 50%;
      background-image: url('~@/assets/images/next.png');
      background-size: cover;
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
.fadeIn {
  animation: fadeIn .7s;
}
@keyframes fadeIn {
  0% { opacity:0; }
  100% { opacity:1; }
}
@keyframes slideFromRight {
  0% { left: 100%; }
  100% { left: 6.4rem; }
}
@keyframes slideFromLeft {
  0% { right: 100%; }
  100% { right: 6.4rem; }
}
</style>
