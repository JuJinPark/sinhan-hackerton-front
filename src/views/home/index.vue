<template>
  <div>
    <el-row :gutter="23" class="container">
      <el-col :span="10">
        <div style="padding-left: 25px;">
         <!-- <img width="130px" style="padding-top: 15px;padding-bottom: 15px;" src='@/assets/img/member.png'> -->
       </div>
      <el-card class="box-card"     style="background-color: #f7f7f7;">
        <div slot="header" class="clearfix">
          <img src="@/assets/img/ico_home_title.png">
          <el-button @click="open2"  type="text" icon="el-icon-plus" 
          style="float: right; background-color: #5b7fde;color: aliceblue;">invite Family</el-button>
                
        </div>
        <div style=" padding-left: 16%;"  v-for="o in familyBudget" :key="o.userId" class="text item">
          <div style="display: inline-flex; background-color: #4f4d4d12;  padding-left: 8%;" class="profile" >
            <div style="padding-top: 10%;    width: 100px;">
              <img width="52.14px" :src="require('@/assets/img/'+o.userId+'.png')">
              <h3>{{o.userName}}</h3>
            </div>
            
            <el-card style="width: 242px;" class="box-toadyMoney">
              <div style="float: right;">
                <h3>하루 예산 {{o.budget}}</h3>
                <h3>오늘 쓴 돈 {{o.totalExpense}}</h3>
              </div>
              <el-progress :percentage=calucatePercentage(o.budget,o.totalExpense) :format="format"></el-progress>
            </el-card>
          </div>
        </div>
      </el-card>
      </el-col>

<!----------------------채팅 부분------------------------------------------------------------------------------------>

      <el-col :span="14">
          <div class="components-container board"></div>

<!----------------------입력부분------------------------------------------------------------------------------------>  

          <el-card style="display: contents;" class="box-card">
            <div  style="display: flex; padding-top:30px" @keyup.enter="trans">
            <el-input placeholder="Please send Message" v-model="input"></el-input>
            <el-button v-on:click="trans" style="background-color: #5b7fde" type="info">send</el-button>
            </div>
          </el-card>

 <!----------------------채팅 내용부분------------------------------------------------------------------------------------>            
          <el-card style="background-color: #f3f2f2;" class="box-card">
            <div v-for="o in chatMessage" class="text item"> 
             
              <div style="    display: flex;" >
                <span style="    display: contents;">                
                  <img width="52.14px" :src="require('@/assets/img/'+o.userId+'.png')">
                  <h5>{{o.userName}}</h5>
                </span>  
                  <span style="padding-left: 11%;padding-top: 3%;">{{o.content}}</span>
              </div>
  
  
            </div>
          </el-card>
          <img style="width: 100%;padding-top: 30px;" src="@/assets/img/home_goal.png">
          <img style="width: 100%;padding-top: 30px;" src="@/assets/img/banner_home.png">  
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
      ...mapGetters([
      'familyBudget',
      'chatMessage',
      'loginUser'
    ])
  },
  methods: {
      trans(){
          if(this.input.length != 0) { 
            this.$store.dispatch('homeTab/postFamilyChat',{loginUser: this.loginUser, input: this.input});
            this.input = "";
          }
      },
      open2() {
          this.$prompt('Please input your Family ID', 'Tip', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            inputErrorMessage: 'Invalid userID'
          }).then(({ value }) => {
            this.$store.dispatch('homeTab/inviteUser',{loginUser: this.loginUser, value: value});
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '초대 실패'
            });       
          });
        },
      popup(){
        alert(ddd);
      }
      ,format(percentage) {
        return percentage === 100 ? '예산초과ㅠㅠ' : '${percentage}%';
      },
      calucatePercentage(totalBudget,totalExpense){
        const value = Math.round((totalExpense/totalBudget)*100)
        return value;
      },

     open() {
        this.$prompt('Please input your family ID', '가족초대하기', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '초대가족 ID' + value

          });
        }).catch(() => {
          this.$message({
            type: 'info'
          });       
        });
      }
    },
  mounted() {
    //액션을 실행시키는 것이다. 디스패치가 액션을 발생시킨다. 
    console.log("--home--")
    console.log(this.loginUser)
    this.$store.dispatch('homeTab/getFamilyBuget',this.loginUser.walletId);
    this.$store.dispatch('homeTab/getFamilyChat',this.loginUser.walletId);
    this.$store.dispatch('homeTab/postFamilyChat',this.loginUser);
  },
   data() {
    return {
      input: ''
     }
   }
};
</script>

<style lang="scss" scoped>
// .dashboard {
//   &-container {
//     margin: 30px;
//   }
//   &-text {
//     font-size: 30px;
//     line-height: 46px;
//   }
// }
 .container {
    // position: relative;
    background-color:#F7F7F7;
    height: 100vh;
  }
  .text {
    font-size: 14px;
  }
  .el-card__header{
    background: #d3dce6;
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
//   .board {
//   width: 1000px;
//   margin-left: 20px;
//   display: flex;
//   justify-content: space-around;
//   flex-direction: row;
//   align-items: flex-start;
// }


</style>
