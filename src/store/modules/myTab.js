
//글로벌 변수 
const state = {
  myTodayExpense:{},
  myTodayIncome:{},
  myMonthlyExpense:{},
  myMonthlyIncome:{},

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
   

}
//액션을 통해 커밋으로 뮤테이션에 하는것에 의해서 값을 변경시킨다. 
const actions = {
  getMyTodayExpense({ commit },roomId) {
  
    // axios.post('/seats',roomId)
    // .then(response => {
    //   commit("UPDATE_FAMILYBUDGET",response.data);
    // })
     var response={};
     response.data=[];
     console.log(response.data)
    response.data={
      totalExpense :110 ,
      expensePerDay : 
      [
        { 
        date:'2019-11-14',
        amount:'1340',
        detail:[ { 
          time:'2019-11-14:09:00:00',
          vendor:'보험료',
          amount:'400'
        },
         { 
          time:'2019-11-14:10:00:00',
          vendor:'청국장집',
          amount:'300'
        },
         { 
          time:'2019-11-14:11:00:00',
          vendor:'라면집',
          amount:'340'
        },
         { 
          time:'2019-11-14:19:00:00',
          vendor:'청국장집',
          amount:'300'
          } 
        ]
      }
      ]
      } 
  
    commit("UPDATE_MYTODAYEXPENSE",response.data);

  },

  getMyTodayIncome({ commit },roomId) {
      
    // axios.post('/seats',roomId)
    // .then(response => {
    //   commit("UPDATE_FAMILYBUDGET",response.data);
    // })
     var response={};
     response.data=[];
     console.log(response.data)
    response.data={
      totalIncome:104120,
      incomePerDay:
      [
      { 
        date:'2019-11-14',
       amount: 10400,
       detail:[{ 
          time:'2019-11-14:09:00:00',
          vendor:'월급',
          amount:'5000'
        },
         { 
          time:'2019-11-14:10:00:00',
          vendor:'엄마',
          amount:'2000'
        },
         { 
          time:'2019-11-14:11:00:00',
          vendor:'친구점심더치페이',
          amount:'3400'
        }]
      }
      ]
    }
  
    commit("UPDATE_MYTODAYINCOME",response.data);

  },

  getMyMonthlyIncome({ commit },roomId) {
      
    // axios.post('/seats',roomId)
    // .then(response => {
    //   commit("UPDATE_FAMILYBUDGET",response.data);
    // })
     var response={};
     response.data=[];
   
    response.data={
      totalIncome:10400,
      incomePerDay:
      [       
         { 
        date:'2019-10-01',
       amount: 500,
       detail:[]
      },
        { 
          date:'2019-10-04',
         amount: 500,
         detail:[]
        },
      { 
        date:'2019-11-04',
       amount: 200,
       detail:[]
      },
      { 
        date:'2019-11-10',
       amount: 400,
       detail:[]
      },
      { 
        date:'2019-11-15',
       amount: 500,
       detail:[]
      }
      ]
    }
  
    commit("UPDATE_MYMONTHLYINCOME",response.data);

  },

  getMonthlyExpense({ commit },roomId) {
      
    // axios.post('/seats',roomId)
    // .then(response => {
    //   commit("UPDATE_FAMILYBUDGET",response.data);
    // })
     var response={};
     response.data=[];
     console.log(response.data)
    response.data={
      totalExpense:10400,
      expensePerDay:
      [       
         { 
        date:'2019-10-01',
       amount: 500,
       detail:[]
      },
        { 
          date:'2019-10-10',
         amount: 500,
         detail:[]
        },
      { 
        date:'2019-10-22',
       amount: 200,
       detail:[]
      },
      { 
        date:'2019-11-1',
       amount: 400,
       detail:[]
      },
      { 
        date:'2019-11-10',
       amount: 500,
       detail:[]
      }
      ]
    }
  
    commit("UPDATE_MYMONTHLYEXPENSE",response.data);

  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
