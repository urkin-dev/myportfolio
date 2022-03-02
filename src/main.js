import Vue from 'vue'
import App from './App.vue'
import './styles/styles.scss'
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.config.silent = true

Vue.use(VueFullPage)

new Vue({
	render: (h) => h(App)
}).$mount('#app')
