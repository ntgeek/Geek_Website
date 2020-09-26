// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "lib-flexible"
console.log("%c ", "background: url('http://img.nt-geek.club/geek_website_2020_easter_egg_geek.png') no-repeat center;padding-left:160px;padding-bottom: 80px;")
console.log("%c哦,你喜欢前端?", "background: blue; color: #ffffff; display: inline-block; font-size: 12px; font-weight: bold; line-height: 12px; letter-spacing: 1px; margin: 0 0 30px; padding: 10px 15px 8px; text-transform: uppercase;");
console.log("%c")
Vue.config.productionTip = false
    /* eslint-disable no-new */


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})