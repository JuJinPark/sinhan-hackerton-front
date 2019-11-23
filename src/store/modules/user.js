import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import axios from 'axios'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  userId: '',
  gender: '',
  age: '',
  loginUser:''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USERID : (state, userId) => {
    state.userId = userId
  },
  SET_GENDER : (state, gender) => {
    state.gender = gender
  },
  SET_AGE : (state, age) => {
    state.age = age
  },
  SET_LOGINUSER: (state, loginUser) => {
    state.loginUser=loginUser
  }

}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {

      // axios.post('/login/'+walletId+'/_budget')
      // .then(response => {
      //   commit("UPDATE_FAMILYBUDGET",response.data);
      // })

      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response

        
        commit('SET_TOKEN', data.token)
        setToken(data.token)



        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { name, userId, gender, age } = data

        commit('SET_NAME', name)
        // commit('SET_AVATAR', avatar)
        commit('SET_USERID', userId)
        commit('SET_GENDER', gender)
        commit('SET_AGE', age)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

