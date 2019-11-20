
//글로벌 변수 
const state = {
    chatMessage:[],
    
    }
    //<!--위에있는 데이터를 글로벌변수 -->
    const mutations = {
    
        UPDATE_FAMILYCHAT: (state, chatMessage) => {
        state.chatMessage = chatMessage;
      }
    
    }
    //액션을 통해 커밋으로 뮤테이션에 하는것에 의해서 값을 변경시킨다. 
    const actions = {
      getFamilyChat({ commit },roomId,userId,content) {
      
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
          content :"안녕하세요 가족재무채팅창입니다.",
          gender : "man"
        },
        {
            userId: 2,
            userName: "아빠",
            content :"오늘 돈 좀 쓸게요.",
            gender : "man"
        },
        {
          userId: 3,
          userName: "엄마",
          content :"엥? 무슨일 있어요?.",
          gender : "woman"
        },
        {
          userId: 4,
          userName: "누나",
          content :"저도 오늘 교재사야돼요.",
          gender : "woman"
        },
    
        ]
      
        commit("UPDATE_FAMILYCHAT",response.data);
    
      },
    
    }
    
    export default {
      namespaced: true,
      state,
      mutations,
      actions
    }
    