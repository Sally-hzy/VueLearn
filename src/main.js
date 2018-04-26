// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts  from 'echarts'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//通过原型就可以在全局使用 let myCharts=this.$echarts.init(document.getElementById('myChart'))
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

//全局引入
Vue.use(Element, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
