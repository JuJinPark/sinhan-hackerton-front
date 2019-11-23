import axios from 'axios'
//글로벌 변수 
const state = {
  familyMonthlyExpense:[],
  familyMonthlyIncome:[],
  walletUsers:[],
  familyDailyExpense:{},
  familyDailyIncome:{}

    }
    //<!--위에있는 데이터를 글로벌변수 -->
const mutations = {
    
      UPDATE_FAMILYMONTHLYEXPENSE: (state, familyMonthlyExpense) => {
        state.familyMonthlyExpense = familyMonthlyExpense
      },
    
      UPDATE_FAMILYMONTHLYINCOME: (state, familyMonthlyIncome) => {
        state.familyMonthlyIncome = familyMonthlyIncome
      },

      UPDATE_WALLETUSERS:(state, walletUsers) => {
        state.walletUsers=walletUsers
      },

      UPDATE_FAMILYDAILYEXPENSE:(state, familyDailyExpense)=> {
        state.familyDailyExpense=familyDailyExpense

      },

      UPDATE_FAMILYDAILYINCOME:(state,familyDailyIncome) => {
        state.familyDailyIncome=familyDailyIncome
      },



    }
    //액션을 통해 커밋으로 뮤테이션에 하는것에 의해서 값을 변경시킨다. 
    const actions = {
      getFamilyMonthlyExpense({ commit },payload) {
        
        axios.get('/wallets/'+payload.loginUser.walletId+'/expenses/_simple?start='+payload.start+'&end='+payload.end+'&size=1000')
        .then(response => {
          commit("UPDATE_FAMILYMONTHLYEXPENSE",response.data);
        })
    
    
      },

      getFamilyMonthlyIncome({ commit },payload) {
        
        axios.get('/wallets/'+payload.loginUser.walletId+'/incomes/_simple?start='+payload.start+'&end='+payload.end+'&size=1000')
        .then(response => {
          commit("UPDATE_FAMILYMONTHLYINCOME",response.data);
        })
    
    
      },

      getWalletUsers({commit},loginUser){
        axios.get('/wallets/'+loginUser.walletId+'/users')
        .then(response => {
          commit("UPDATE_WALLETUSERS",response.data);
        })


      },

      getDailyFamilyExpense({commit},payload){
        axios.get('/wallets/'+payload.loginUser.walletId+'/expenses/?start='+payload.start+'&end='+payload.end+'&size=1000')
        .then(response => {
          commit("UPDATE_FAMILYDAILYEXPENSE",response.data);
        })

      },

      getDailyFamilyIncome({commit},payload){
        axios.get('/wallets/'+payload.loginUser.walletId+'/incomes/?start='+payload.start+'&end='+payload.end+'&size=1000')
        .then(response => {
          commit("UPDATE_FAMILYDAILYINCOME",response.data);
        })
      }


      }
    


    export default {
      namespaced: true,
      state,
      mutations,
      actions
    }
    