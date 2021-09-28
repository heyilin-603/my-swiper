import Vue from 'vue'
import App from './App.vue'
import MySwiper from './swiper/index'

Vue.use(MySwiper)

new Vue({
  el: '#app',
  render: h => h(App)
})
