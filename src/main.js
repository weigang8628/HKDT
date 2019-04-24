import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 全局头部
import Header from './components/Header'
Vue.use(Header);
// 全局底部
import Footer from './components/Footer'
Vue.use(Footer);
// 全局底部
import Banner from './components/Banner'
Vue.use(Banner);
// 苹方字体
import './assets/font/font.css'
// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI);
//引入多语言支持
import i18n from './i18n'

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
