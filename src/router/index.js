import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from "../components/FirstPage"
import SecondPage from "../components/SecondPage"
import transition from "../components/transition"
import fontend from "../components/fontend"

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'FirstPage',
            component: FirstPage,
            children: [{
                    path: "/",
                    name: 'transition',
                    component: transition
                },
                {
                    path: "fontend",
                    name: 'fontend',
                    component: fontend
                }
            ]
        },
        {
            path: '/',
            name: 'SecondPage',
            component: SecondPage
        }
    ]
})