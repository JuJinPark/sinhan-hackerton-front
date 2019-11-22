<template>
  <div>
    <el-row :gutter="23" class="container">
    <el-col :span="9">
      <div>
         <img width="120px" src='@/assets/img/member.png'>
      </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          
          <el-button type="primary" icon="el-icon-plus" style="float: right; background-color: #5b7fde;border-color: #5b7fde;">Invite home</el-button>

        </div>
        <div   v-for="o in familyBudget" :key="o.userId" class="text item">
          <div style="display: inline-flex;  background-color: #4f4d4d12;  padding-left: 12%;" class="profile" >
            <div style="padding-top: 12%;" v-if="o.gender==='man'">
              <img width="50px" src='@/assets/img/man.png'>
              <h3>{{o.userName}}</h3>
            </div>
            <div style="padding-top: 12%;" v-else>
              <img width="50px" src='@/assets/img/woman.png'>
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
      <el-col :span="12">
          <div class="components-container board"></div>
          <div  style="display:flex;padding-top:30px">
            <el-input placeholder="Please send Message" v-model="input"></el-input>
            <el-button type="info" >send</el-button>
          </div>
          <el-card class="box-card">
            <div v-for="o in chatMessage"  :key='o.userid' class="text item">
               <div style="display: flex;">
               <div style="display: flex;" ><img size="40px" :src="require('@/assets/img/'+o.gender+'.png')">
               <h5>{{o.userName}}</h5></div>
                <div style="padding-top: 21px; padding-left: 61px;" id="comment">{{o.content}}</div>
               </div>
            </div>   
          </el-card>
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
      'chatMessage'
    ])
  },
  methods: {
      format(percentage) {
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
    this.$store.dispatch('homeTab/getFamilyBuget');
    this.$store.dispatch('homeTab/getFamilyChat');

  },
   data() {
    return {
      input: ''
     }
   }
};
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
  .board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.kanban {
  &.todo {
    .board-column-header {
      background: #4A9FF9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}

</style>
