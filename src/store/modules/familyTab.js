
//글로벌 변수 
const state = {
    familySobi:[]
    }
    //<!--위에있는 데이터를 글로벌변수 -->
const mutations = {
    
      UPDATE_FAMILYSOBI: (state, familySobi) => {
        state.familySobi = familySobi
      }
    }
    //액션을 통해 커밋으로 뮤테이션에 하는것에 의해서 값을 변경시킨다. 
    const actions = {
      getFamilySobi({ commit },roomId,startDate,endDate) {
      
        // axios.post('/seats',roomId)
        // .then(response => {
        //   commit("UPDATE_FAMILYBUDGET",response.data);
        // })
         var response={};
         response.data=[];
         console.log(response.data)
         response.data=[
         {
          "totalExpense":100000,
          "expensePerDay":[ 
             { 
             "date":"2019-12-12",
              "amount":50000,
              "list":[ 
                 { 
                     "userId":1,
                    "userName":'엄마',
                    "transactionTime":'2019-12-12,12:00', 
                    "amount": 30000,
                    "vender" : '우리순대국밥집'
                 },
                 {
                    "userId":2,
                    "userName":'아빠',
                    "transactionTime":'2019-12-12,12:00', 
                    "amount": 10000,
                    "vender" : 'GS편의점'
                 },
                 {
                    "userId":1,
                    "userName":'엄마',
                    "transactionTime":'2019-12-12,12:00', 
                    "amount": 5000,
                    "vender" : '보험료'
                 },
                 {
                    "userId":4,
                    "userName":'누나',
                    "transactionTime":'2019-12-12,12:00', 
                    "amount": 5000,
                    "vender" : '책값'
                 },
                ]
             }
          ]
        },
        ]
        commit("UPDATE_FAMILYSOBI",response.data);
      },
    }


    export default {
      namespaced: true,
      state,
      mutations,
      actions
    }
    