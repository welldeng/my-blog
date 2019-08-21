import bus from '../utils/bus'

// 组件
import navBar from './nav-bar'
import '../plugins/vant.js'

// 样式
import '../assets/less/reset.less'
import '../assets/less/app.less'

const components = [
    navBar
]

const setPrototype = (Vue) => {
    Vue.prototype.$bus = bus
}

const install = (Vue) => {
    components.filter(v => typeof v !== 'function').forEach(v => Vue.component(v.name, v))
    setPrototype(Vue)
}

// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue)
// }

export default install