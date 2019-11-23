import axios from 'axios'
//글로벌 변수 
const state = {
  myTodayExpense:{},
  myTodayIncome:{},
  myMonthlyExpense:{},
  myMonthlyIncome:{},
  myShareResult:{}

}
//<!--위에있는 데이터를 글로벌변수 -->
const mutations = {

  UPDATE_MYTODAYEXPENSE: (state, myTodayExpense) => {
    state.myTodayExpense = myTodayExpense
  },
   
  UPDATE_MYTODAYINCOME: (state, myTodayIncome) => {
    state.myTodayIncome = myTodayIncome;
  },

  UPDATE_MYMONTHLYEXPENSE: (state, myMonthlyExpense) => {
    state.myMonthlyExpense = myMonthlyExpense
  },

  UPDATE_MYMONTHLYINCOME: (state, myMonthlyIncome) => {
    state.myMonthlyIncome = myMonthlyIncome
  },
  UPDATE_MYSHAREMONEY: (state, myShareResult) => {
    state.myShareResult = myShareResult
  }

}
//액션을 통해 커밋으로 뮤테이션에 하는것에 의해서 값을 변경시킨다. 
const actions = {
  getShareMoney({ commit },payload) {
    // console.log("-ex-")
     console.log(payload)
    // var today2=new Date().setDate(payload.today.getDate() + 1)
    axios.get('/wallets/'+payload.loginUser.walletId+'/users/'+payload.loginUser.id+'/_sync')
    .then(response => {
      commit("UPDATE_MYSHAREMONEY",response.data);
    })
  },
  getMyTodayExpense({ commit },payload) {
    // console.log("-ex-")
    // console.log(payload)
    // var today2=new Date().setDate(payload.today.getDate() + 1)
    axios.get('/users/'+payload.loginUser.id+'/expenses?start='+payload.start+'&end='+payload.end+'&size=5')
    .then(response => {
      commit("UPDATE_MYTODAYEXPENSE",response.data);
    })
  },

  getMyTodayIncome({commit,state },payload) {
    // console.log("-income-")
    // console.log(payload)
    // var today2=new Date().setDate(payload.today.getDate() + 1)
    axios.get('/users/'+payload.loginUser.id+'/incomes?start='+payload.start+'&end='+payload.end+'&size=5')
    .then(response => {
      commit("UPDATE_MYTODAYINCOME",response.data);
    })
  },

  getMyMonthlyIncome({ commit },payload) {
      
  
    axios.get('/users/'+payload.loginUser.id+'/incomes/_simple?start='+payload.start+'&end='+payload.end+'&size=1000')
    .then(response => {
      commit("UPDATE_MYMONTHLYINCOME",response.data);
    })
  },

  getMonthlyExpense({ commit },payload) {
    axios.get('/users/'+payload.loginUser.id+'/expenses/_simple?start='+payload.start+'&end='+payload.end+'&size=1000')
    .then(response => {
      commit("UPDATE_MYMONTHLYEXPENSE",response.data);
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
