

const state = {
familyBudget:[],

}

const mutations = {

  UPDATE_FAMILYBUDGET: (state, familyBudget) => {
    state.familyBudget = familyBudget
  }

}

const actions = {
  getFamilyBuget({ commit },roomId) {
  
    // axios.post('/seats',roomId)
    // .then(response => {
    //   commit("UPDATE_FAMILYBUDGET",response.data);
    // })
     var response={};
     response.data=[];
     console.log(response.data)
    response.data=[
     { userId: 1,
      userName: "나",
      budget: 5000,
      totalExpense:2000,
      gender: "man"
    },
    {
      userId: 2,
      userName: "아빠",
      budget: 5000,
      totalExpense:1000,
      gender: "man"
    },
    {
      userId: 3,
      userName: "엄마",
      budget: 5000,
      totalExpense:1500,
      gender: "woman"
    },
    {
      userId: 4,
      userName: "누나",
      budget: 5000,
      totalExpense:1550,
      gender: "woman"
    },

    ]
  
    commit("UPDATE_FAMILYBUDGET",response.data);

  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
