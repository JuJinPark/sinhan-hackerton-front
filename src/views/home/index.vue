<template>
  <div>
    <el-row :gutter="23" class="container">
      <el-col :span="10">
        <div style="padding-left: 25px;">
         <!-- <img width="130px" style="padding-top: 15px;padding-bottom: 15px;" src='@/assets/img/member.png'> -->
       </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <img src="@/assets/img/ico_home_title.png">
          <el-button @click="open2"  type="text" icon="el-icon-plus" 
          style="float: right; background-color: #5b7fde;color: aliceblue;">invite Family</el-button>
                
        </div>
        <div style=" padding-left: 16%;"  v-for="o in familyBudget" :key="o.userId" class="text item">
          <div style="display: inline-flex; background-color: #4f4d4d12;  padding-left: 8%;" class="profile" >
            <div style="padding-top: 10%;    width: 100px;" v-if="o.age>=20">
              <img width="52.14px" :src="require('@/assets/img/'+o.gender+'2.png')">
              <h3>{{o.userName}}</h3>
            </div>
            <div style="padding-top: 12%; width: 100px;" v-else>
              <img width="52.14px" :src="require('@/assets/img/'+o.gender+'.png')">
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
            <div  style="display: flex; padding-top:30px">
            <el-input placeholder="Please send Message" v-model="input"></el-input>
            <el-button style="background-color: #5b7fde" type="info" >send</el-button>
            </div>
          </el-card>

 <!----------------------채팅 내용부분------------------------------------------------------------------------------------>            
          <el-card style="background-color: #f3f2f2;" class="box-card">
            <div v-for="o in chatMessage"  class="text item"> 
             
              <div style="    display: flex;" v-if="o.age>=20">
                <span style="    display: contents;">                
                  <img width="52.14px" :src="require('@/assets/img/'+o.gender+'2.png')">
                  <h5>{{o.userName}}</h5>
                </span>  
                  <span style="padding-left: 11%;padding-top: 3%;">{{o.content}}</span>
              </div>
              <div style="    display: flex;"  v-else>
                <span style="    display: contents;">
                  <img width="52.14px" :src="require('@/assets/img/'+o.gender+'.png')">  
                  <h5>{{o.userName}}</h5>
                </span>
                 <span  style="padding-left: 11%;padding-top: 3%;"> {{o.content}}</span>  
              </div>
            </div>
          </el-card>
          <img style="width: 100%;;padding-top: 50px;" src="@/assets/img/banner_home.png">  
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
      'userID'
    ])
  },
  methods: {
      open2() {
          this.$prompt('Please input your Family ID', 'Tip', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            inputErrorMessage: 'Invalid userID'
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: "초대 성공"
            });
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
        const value = (totalExpense/totalBudget)*100
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
    this.$store.dispatch('homeTab/getFamilyBuget',1);
    this.$store.dispatch('homeTab/getFamilyChat',1);

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
