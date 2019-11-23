import axios from 'axios'
//글로벌 변수 
const state = {
  familyMonthlyExpense:[],
  familyMonthlyIncome:[]
    }
    //<!--위에있는 데이터를 글로벌변수 -->
const mutations = {
    
      UPDATE_FAMILYMONTHLYEXPENSE: (state, familyMonthlyExpense) => {
        state.familyMonthlyExpense = familyMonthlyExpense
      },
    
      UPDATE_FAMILYMONTHLYINCOME: (state, familyMonthlyIncome) => {
        state.familyMonthlyIncome = familyMonthlyIncome
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


      }
    


    export default {
      namespaced: true,
      state,
      mutations,
      actions
    }
    