<template>
  <div>
    <el-row :gutter="23" class="container">
    <el-col :span="10">
      <div>
         <img width="120px" src='@/assets/img/member.png'>
      </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-button type="text" @click="open">가족초대하기</el-button>
        </div>
        <div v-for="o in familyBudget" :key="o.userId" class="text item">
          <div v-if="o.gender==='man'">
            <img width="50px" src='@/assets/img/boy.png'>
          </div>
          <div v-else>
            <img width="50px" src='@/assets/img/girl.png'>
          </div>
          <el-card class="box-toadyMoney">
            <h3>하루 예산 {{o.budget}}</h3>
            <h3>오늘 쓴 돈 {{o.totalExpense}}</h3>
            <el-progress :percentage="calucatePercentage(o.budget,o.totalExpense)" :format="format"></el-progress>

          </el-card>
        </div>
      </el-card>
      </el-col>
      
      <el-col :span="13">
        <div>
          <h2>채팅창들어갈 곳</h2>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
      ...mapGetters([
      'familyBudget',
     
    ])
  },
  methods: {
      format(percentage) {
        return percentage === 100 ? '예산초과ㅠㅠ' : '${percentage}%';
      },
<<<<<<< HEAD
      calucatePercentage(totalBudget,totalExpense){
        return (totalExpense/totalBudget)*100;
      }
    },
  mounted() {

 this.$store.dispatch('homeTab/getFamilyBuget')
  }
=======
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
    data:{
      num : 1000
    }
>>>>>>> 382bf770cb086328a06d821d7ffcb2f4ed389c7d
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

</style>
