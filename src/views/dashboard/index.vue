<template>
     <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <el-row :gutter="20">
      <el-col :span='10'>
        <div style="padding-left: 103px;padding-top: 23px;">
          <img src="@/assets/img/categoryTitle.png" style="width: 150px;"></div>
        <div    style="padding-left: 32px;   padding-top: 35px;" class="chart-wrapper">
         <pie-chart />
        </div>
      </el-col>
      <el-col :span='14'>
        <div style="padding-left: 222px;padding-top: 23px;">
          <img src="@/assets/img/monthly_family.png" style="width: 150px;"></div>
        <div style="padding-left: 75px;"  class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span='15' style="padding-right:8px;margin-bottom:30px;">
          <div style="padding-left: 103px;padding-top: 23px;">
          <img src="@/assets/img/income_fam.png" style="width: 150px;"></div>
        <transaction-table />
      </el-col>
      <el-col :span='5'  style="padding-right:8px;margin-bottom:30px;">
         <div style="padding-left: 53px;padding-top: 23px;">
          <img src="@/assets/img/lend_money.png" style="width: 150px;"></div>
         <div style="padding-top:30px;">
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70" style="width: 300px;"></el-progress>
        </div>
      </el-col>
    </el-row>
  </div>


</template>

<script>
import { mapGetters } from 'vuex'
import PieChart from './components/PieChart'
import TransactionTable from './components/TransactionTable'
import BarChart from './components/BarChart'


export default {
  name: 'Dashboard',
  components: {
    PieChart,
    BarChart,
    TransactionTable
  },
  computed: {
    ...mapGetters([
      'name'
    ])
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
  .dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
}
</style>
