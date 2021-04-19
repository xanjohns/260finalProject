import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  songs: mock,
  pl1: [],
  pl2: [],
  pl3: [],
  pl4: [],
  playlists: [
    
  ],
  user: null,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
