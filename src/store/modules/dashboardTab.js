import axios from 'axios'

const state = {
  categorizedExpenses: [],
  incomeList: [],
  monthlyExpenses: []
}

const mutations = {
  UPDATE_CATEGORIZED_EXPENSES: (state, categorizedExpenses) => {
    state.categorizedExpenses = categorizedExpenses
  },
  UPDATE_INCOME_LISTS: (state, incomeList) => {
    state.incomeList = incomeList
  },
  UPDATE_MONTHLY_EXPENSES: (state, monthlyExpenses) => {
    state.monthlyExpenses = monthlyExpenses
  }
}

const actions = {
  getCategorizedExpenses({ commit }, walletId) {
    var date = new Date()
    axios.get('wallets/' + walletId + '/expenses/_categorize', {
      params: {
        size: 1000,
        start: new Date(date.getFullYear(), date.getMonth(), 1),
        end: new Date(date.getFullYear(), date.getMonth() + 1, 0)
      }
    })
      .then(response => {
        commit('UPDATE_CATEGORIZED_EXPENSES', response.data.list)
      })
  },
  getIncomeList({ commit }, walletId) {
    var date = new Date()
    axios.get('wallets/' + walletId + '/incomes/_list', {
      params: {
        size: 1000,
        start: new Date(date.getFullYear(), date.getMonth(), 1),
        end: new Date(date.getFullYear(), date.getMonth() + 1, 0)
      }
    })
      .then(response => {
        commit('UPDATE_INCOME_LISTS', response.data.list)
      })
  },
  getMonthlyExpenses({ commit }, walletId) {
    axios.get('wallets/' + walletId + '/expenses/_bymonth', {})
      .then(response => {
        commit('UPDATE_MONTHLY_EXPENSES', response.data)
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
