<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">
     <div>
       <div >
       <h3>맴버 구성원</h3>
       <i class="el-icon-circle-plus" ></i>
       </div>
     </div> 
    
  </div> -->

   <el-row :gutter="23" class="container">
   <el-col :span="10">
    <div>
      <h1>맴버구성원</h1>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>우리가족구성원</span>
        <el-button style="float: right; padding: 3px 0" type="text">가족초대하기</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'가족' + o }}

        <img width="50px" src='https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png'>
        <el-card class="box-toadyMoney">
          <h3>하루예산 50000</h3>
          <h3>오늘 쓴 돈 35000</h3>
        </el-card>
      </div>
    </el-card>
    </el-col>
    
    <el-col :span="13">
      <div>
        <h2>채팅창들어갈 곳</h2>
      </div>
      <basic-vue-chat
  :new-message="message"
  @newOwnMessage="onNewOwnMessage"/>
    
    </el-col>
   </el-row>
  </div>


</template>

<script>
import { mapGetters } from 'vuex'
import { Chat } from 'vue-quick-chat'
export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  components: {
    Chat
  },
  data(){
    return {
      participants: [
        {
          name: 'Arnaldo',
          id: 1
        },
        {
          name: 'José',
          id: 2
        }
      ],
      myself: {
        name: 'Matheus S.',
        id: 3
      },
      messages: [
        {
          content: 'received messages', 
          myself: false,
          participantId: 1,
          timestamp: { year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 }
        },
        {
          content: 'sent messages', 
          myself: true,
          participantId: 3,
          timestamp: { year: 2019, month: 4, day: 5, hour: 19, minute: 10, second: 3, millisecond:123 }
        },
        {
          content: 'other received messages', 
          myself: false,
          participantId: 2,
          timestamp: { year: 2019, month: 5, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123 }
        }
      ],
      chatTitle: '우리가족 채팅방',
      placeholder: 'send your message',
      colors:{
        header:{
          bg: '#d30303',
          text: '#fff'
        },
        message:{
          myself: {
            bg: '#fff',
            text: '#bdb8b8'
          },
          others: {
            bg: '#fb4141',
            text: '#fff'
          }
        },
        submitIcon: '#b91010'
      },
      borderStyle: {
        topLeft: "10px",
        topRight: "10px",
        bottomLeft: "10px",
        bottomRight: "10px",
      },
      hideCloseButton: false,
      submitIconSize: "20px",
      closeButtonIconSize: "20px"
    }
  },
  methods: {
    onType: function (event){
      //here you can set any behavior
    },
    onMessageSubmit: function(message){
      //here you can set any behavior
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }


}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
