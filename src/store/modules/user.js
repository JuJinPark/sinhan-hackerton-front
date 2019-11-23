import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, setIdToken, removeIdToken, getIdToken} from '@/utils/auth'
import { resetRouter } from '@/router'
import axios from 'axios'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  // userId: '',
  // gender: '',
  // age: '',
  loginUser:{},
  today:'2019-11-24'

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
  // SET_USERID : (state, userId) => {
  //   state.userId = userId
  // },
  // SET_GENDER : (state, gender) => {
  //   state.gender = gender
  // },
  // SET_AGE : (state, age) => {
  //   state.age = age
  // },
  SET_LOGINUSER: (state,loginUser) => {
    console.log("commit")
    state.loginUser=loginUser
  }

}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
<<<<<<< HEAD

      // axios.post('/login/'+walletId+'/_budget')
      // .then(response => {
      //   commit("UPDATE_FAMILYBUDGET",response.data);
      // })

      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response

        
        commit('SET_TOKEN', data.token)
        setToken(data.token)



        resolve()
=======
       
      axios.post('/login',{ userId: username.trim(), password: password })
      .then(response => {
      
        setIdToken(userInfo.username.trim())
   

        login({ username: 'admin', password: password }).then(response => {
          const { data } = response
  
          console.log(data.token)
          commit('SET_TOKEN', data.token)
          setToken(data.token)
  
  
  
          resolve('okay')
        }).catch(error => {
          reject(error)
        })
>>>>>>> 562e448a8aee7085375fae78256f5aef751c3800
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

        const { name, avatar} = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        // commit('SET_USERID', userId)
        // commit('SET_GENDER', gender)
        // commit('SET_AGE', age)
        
      let loginUser={}
      console.log("getuserInfo again")
      axios.get('/users/'+getIdToken())
      .then(response => {
        console.log("getuserInfo again")
        loginUser=response.data
        

         axios.get('/users/'+getIdToken()+'/wallets')
           .then(response => {
            loginUser.walletId=response.data[0].id
            commit('SET_LOGINUSER',loginUser)
             console.log("--완료--")
            resolve()

         }).catch(error => {
          reject(error)
        })

        
      }).catch(error => {
          reject(error)
        })

      
      }).catch(error => {
        reject(error)
      })
  



  
    })
  },

  getUserInfo(){

  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        removeIdToken()
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
      removeIdToken()
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

