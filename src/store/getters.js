const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  familyBudget: state => state.homeTab.familyBudget,
  chatMessage: state => state.homeTab.chatMessage,
  myTodayExpense: state => state.myTab.myTodayExpense,
  myTodayIncome: state => state.myTab.myTodayIncome,
  myMonthlyExpense: state => state.myTab.myMonthlyExpense,
  myMonthlyIncome: state => state.myTab.myMonthlyIncome,
  categorizedExpenses: state => state.dashboadTab.categorizedExpenses,
  incomeList: state => state.dashboadTab.incomeList,
  monthlyExpenses: state => state.dashboadTab.monthlyExpenses,
  loginUser: state => state.user.loginUser,
  today: state => state.user.today
}
export default getters
