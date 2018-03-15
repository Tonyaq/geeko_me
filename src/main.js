// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 一下两行为m引入ElementUI */
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css' 

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
