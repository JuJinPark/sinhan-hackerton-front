import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import homeTab from './modules/homeTab'
import myTab from './modules/myTab'
import dashboadTab from './modules/dashboardTab'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    homeTab,
    myTab,
    dashboadTab
  },
  getters
})

export default store
