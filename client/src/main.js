// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { store } from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(ElementUI)


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBJ5Zpkcgy1EuvPDrnj3TliVV7SFcr_1dQ',
    v: '3.exp',
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
