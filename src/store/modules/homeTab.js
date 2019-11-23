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
    //  var response={};
    //  response.data=[];
    //  console.log(response.data)
    // response.data=[
    //  { userId: 1,
    //   userName: "나",
    //   budget: 5000,
    //   totalExpense:2000,
    //   gender: "man",
    //     age : 16
    // },
    // {
    //   userId: 2,
    //   userName: "아빠",
    //   budget: 5000,
    //   totalExpense:1000,
    //   gender: "man",
    //   age:40
    // },
    // {
    //   userId: 3,
    //   userName: "엄마",
    //   budget: 5000,
    //   totalExpense:1500,
    //   gender: "woman",
    //   age:45
    // },
    // {
    //   userId: 4,
    //   userName: "누나",
    //   budget: 5000,
    //   totalExpense:1550,
    //   gender: "woman",
    //   age:17
    // },

    // ]
  
    // commit("UPDATE_FAMILYBUDGET",response.data);

  },

  getFamilyChat({ commit },walletId) {
      
    axios.get('/wallets/'+walletId+'/chats?size=5')
    .then(response => {
      commit("UPDATE_FAMILYCHAT",response.data);
    })

    
    //  var response={};
    //  response.data=[];
    //  console.log(response.data)
    // response.data=[
    //  { userId: 1,
    //   userName: "나",
    //   content :"안녕하세요 가족재무채팅창입니다.",
    //   gender : "man",
    //   age : 16
    // },
    // {
    //     userId: 2,
    //     userName: "아빠",
    //     content :"오늘 돈 좀 쓸게요.",
    //     gender : "man",
    //     age : 45
    // },
    // {
    //   userId: 3,
    //   userName: "엄마",
    //   content :"엥? 무슨일 있어요?.",
    //   gender : "woman",
    //   age : 46
    // },
    // {
    //   userId: 4,
    //   userName: "누나",
    //   content :"저도 오늘 교재사야돼요.",
    //   gender : "woman",
    //   age : 17
    // },

    // ]
  
    // commit("UPDATE_FAMILYCHAT",response.data);

  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
