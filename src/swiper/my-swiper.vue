<template>
  <div>
    <div class="swiper">
      <div
        class="swiper-item"
        v-for="(item, index) in imgs"
        :key="item.id"
        :style="style[index]"
        @click="changeItem(item,index,style[index])"
      >
        <img :src="item.url" />
      </div>
    </div>
  </div>
</template>
<script>
let timer
export default {
  name: 'my-swiper',
  props: {
    images: {
      type: Array,
      default: function () {
        return [
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110814%2F6351-110Q400593394.jpg&refer=http%3A%2F%2Fimg.taopic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635418058&t=c1220b0daeb199418e265b8a7c7be258',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-11-30%2F5a1f9f605f784.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635418058&t=7163b67d9f0eeccc70ef214ee2e2796c',
          'https://img0.baidu.com/it/u=3681334220,6885109&fm=26&fmt=auto',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.tuchong.com%2F1685768%2Ff%2F1153179239.jpg&refer=http%3A%2F%2Fphoto.tuchong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635418058&t=3c683b8b694ef4909bb7d0b89f821899',
        ]
      },
    },
    stepInterval: {
      type: Number,
      default: 3000,
    },
  },

  data() {
    return {
      currentIndex: 1, //中间的
      imgs: [],
      //左中右样式
      style: [
        {
          id: 'left',
          width: '25%',
          height: '80%',
          top: '10%',
          left: '15%',
          opacity: 0.6,
          zIndex: 1,
        },
        {
          id: 'center',
          width: '40%',
          height: '100%',
          top: '0px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 1,
          zIndex: 2,
        },
        {
          id: 'right',
          width: '25%',
          height: '80%',
          top: '10%',
          right: '15%',
          opacity: 0.6,
          zIndex: 1,
        },
      ],
    }
  },
  created() {
    this.imgs = this.images.map((item, index) => {
      return { id: index + 1, url: item }
    })
    this.autoPlay()
  },
  methods: {
    autoPlay() {
      timer = window.setInterval(() => {
        this.next()
      }, this.stepInterval)
    },
    stopPlay() {
      clearTimeout(timer)
    },
    //注意v-for要绑定key不然没有过渡效果
    prev(index) {
      this.imgs.unshift(this.imgs.pop())
      this.currentIndex = this.currentIndex - 1
      if (this.currentIndex < 0) {
        this.currentIndex = this.imgs.length - 1
      }
    },
    next() {
      this.imgs.push(this.imgs.shift())
      this.currentIndex = this.currentIndex + 1
      if (this.currentIndex > this.imgs.length - 1) {
        this.currentIndex = 0
      }
    },
    // 点击
    changeItem(item, index, style) {
      this.stopPlay() // 关闭定时器
      if (style.id === 'left') {
        this.prev()
      } else if (style.id === 'right') {
        this.next()
      }
    },
  },
}
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 350px;
  position: relative;
  overflow: hidden;
  &-item {
    //默认剩下的图在片right位置
    width: 25%;
    height: 80%;
    top: 10%;
    right: 15%;
    opacity: 0;
    z-index: 0;
    border-radius: 2%;
    overflow: hidden;
    transition: 0.3s;
    position: absolute;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
