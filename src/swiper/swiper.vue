<template>
  <div class="swiper">
    <ul class="swiper-wrap">
      <li :class="['swiper-item',isCurrent]" v-for="(item,index) in images" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 轮播的图片地址
    images: {
      type: Array,
      default: [1, 2, 3, 4],
    },
    // 轮番展示的图片数
    displayNumber: {
      type: Number,
    },
    // 每次轮播的时间间隔
    stepInterval: {
      type: Number,
    },
  },
  setup(props, context) {
    let isCurrent = ref(false)
    return {
      isCurrent,
    }
  },
}
</script>

<style lang="less">
.swiper {
  &-wrap {
    .swiper-item {
      width: 200px;
      height: 200px;
      background-color: aqua;
    }
  }
}
</style>