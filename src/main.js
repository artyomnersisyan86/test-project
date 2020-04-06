import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import FlagIcon from 'vue-flag-icon'
// import VueResource from 'vue-resource'
import moment from 'moment'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/store'
// import { VueTabs } from "vue-nav-tabs"

Vue.use(FlagIcon)

Vue.use(VueAxios, axios)

export const eventEmitter = new Vue()

Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
})

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')