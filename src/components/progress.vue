<template>
	<div>
		<div class="g-progress">
		<div class="g-progress-bar" :style="{ height: `${strokeWidth}px` }">
			<div class="g-progress-bar-outer">
				<div class="g-progress-bar-inner" :style="barStyle"></div>
			</div>
		</div>
	</div>
	<div class="g-progress-bar-text" v-if="showText">{{ percentage }}%</div>
	</div>
</template>

<script>
  export default {
    name: "g-progress",
	  props: {
      percentage: {
        type: Number,
	      require: true,
      },
	color: {
        type: String,
			  default: '#409eff'
		  },
		  strokeWidth: {
        type: Number,
			  default: 6
		  },
      showText: {
        type: Boolean,
	      default: true
      }
	  },
	  computed: {
      barStyle() {
	      return {
          width: `${this.percentage}%`,
		      backgroundColor: this.color
	      }
      }
	  }
  }
</script>

<style scoped lang="scss">
.g-progress {
	width: 100%;
	margin-bottom: 15px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	&-bar {
		width: 100%;
		position: relative;
		margin-right: -55px;
		box-sizing: border-box;
		line-height: 1;
		&-outer {
			position: relative;
			width: 100%;
			height: 100%;
			background: #fff;
			border-radius: 100px;
		}
		&-inner {
			position: absolute;
			border-radius: 100px;
			height: 100%;
			left: 0;
			top: 0;
			transition: all .3s;
		}
		&-text {
			height: 100%;
			color: #606266;
			line-height: 1;
			font-size: 16px;
			color: #1A5632;
			text-align: center;
			margin-top: -5px;
		}
	}
}
</style>