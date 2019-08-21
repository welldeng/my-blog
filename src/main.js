import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import blogComponent from './components'
// import './assets/js/rem'

Vue.use(blogComponent)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
