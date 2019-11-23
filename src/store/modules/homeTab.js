import axios from 'axios'
//글로벌 변수 
const state = {
familyBudget:[],
chatMessage:[],

}
//<!--위에있는 데이터를 글로벌변수 -->
const mutations = {

  UPDATE_FAMILYBUDGET: (state, familyBudget) => {
    state.familyBudget = familyBudget
  },
   
  UPDATE_FAMILYCHAT: (state, chatMessage) => {
    state.chatMessage = chatMessage;
  }
}
//액션을 통해 커밋으로 뮤테이션에 하는것에 의해서 값을 변경시킨다. 
const actions = {
  getFamilyBuget({commit},walletId) {
  
    axios.get('/wallets/'+walletId+'/_budget')
    .then(response => {
      commit("UPDATE_FAMILYBUDGET",response.data);
    })
  },
  // getFamilyChatPlus({commit},walletId,) {
  
  //   axios.get('/wallets/'+walletId+'/_budget')
  //   .then(response => {
  //     commit("UPDATE_FAMILYBUDGET",response.data);
  //   })

  // },
  getFamilyChat({ commit },walletId) {
      
    axios.get('/wallets/'+walletId+'/chats?size=5')
    .then(response => {
      commit("UPDATE_FAMILYCHAT",response.data);
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
