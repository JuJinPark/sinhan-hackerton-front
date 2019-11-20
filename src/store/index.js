import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import homeTab from './modules/homeTab'
import homechat from './modules/homechat'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    homeTab,
    homechat
  },
  getters
  
})

export default store
