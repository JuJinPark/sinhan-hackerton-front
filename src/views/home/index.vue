<template>
  <div>
    <el-row :gutter="23" class="container">
    <el-col :span="10">
      <div>
         <img width="120px" src='@/assets/img/member.png'>
      </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-button style="float: right; padding: 3px 0" type="text">가족초대하기</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          <div v-if="gender==='man'">
            <img width="50px" src='@/assets/img/boy.png'>
          </div>
          <div v-else>
            <img width="50px" src='@/assets/img/girl.png'>
          </div>
          <el-card class="box-toadyMoney">
            <h3>하루 예산 50,000</h3>
            <h3>오늘 쓴 돈 35,000</h3>
            <el-progress :percentage="45" :format="format"></el-progress>
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
      'name'
    ])
  },
  methods: {
      format(percentage) {
        return percentage === 100 ? '예산초과ㅠㅠ' : '${percentage}%';
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

</style>
