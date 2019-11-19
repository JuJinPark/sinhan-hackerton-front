<template>
  <div class="dashboard-container">
    <div>
     <el-row :gutter="23" class="container">
      <el-col :span="10">
        <div class="grid-content bg-purple"> 
    <div>
    <div style="display:inline-block;">
      <h2>오늘</h2>
    </div>    
      <i class="el-icon-refresh" style="float:right; font-size: 2rem;"/>   
    </div>
    <div>
      <h2>소비</h2>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div style="text-align: end"><span >70,000</span> </div>   
        </div>
    <div v-for="o in 4" :key="o" class="text item">
          {{'List item ' + o }}
    </div>
    </el-card>
      <h2>자산</h2>
      </div>
          <el-card class="box-card">
      <div slot="header" class="clearfix">
           <div style="text-align: end"><span >3,500,000</span> </div>        
      </div>
      <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
      </div>
    </el-card>
    </div>
    </el-col>
    <el-col :span="14">
      <div class="grid-content bg-purple">
        <h2>달력</h2>
      </div>
    </el-col>
</el-row>
</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
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
}
</style>
