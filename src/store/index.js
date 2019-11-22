import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import homeTab from './modules/homeTab'
import myTab from './modules/myTab'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    homeTab,
    myTab
  },
  getters
  
})

export default store
