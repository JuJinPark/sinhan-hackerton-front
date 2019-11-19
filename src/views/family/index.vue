<template>
  <div class="dashboard-container">
    <div>
     <el-row :gutter="23" class="container">
      <el-col :span="10">
        <div class="grid-content bg-purple"> 
    <div>
    <div style="display:inline-block;">
      <img  src="@/assets/img/today.png">
    </div>    
      <i class="el-icon-refresh" style="float:right; font-size: 2rem;"/>   
    </div>
    <div> 
      <img style="width: 100px;" src="@/assets/img/sobi.png">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div style="text-align: end"><span >70,000</span> </div>   
        </div>
    <div v-for="o in 4" :key="o" class="text item">
          {{'List item ' + o }}
    </div>
    </el-card>
      <img style="width: 100px;" src="@/assets/img/jasan.png">
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
        <img src="@/assets/img/calendar.png">
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
