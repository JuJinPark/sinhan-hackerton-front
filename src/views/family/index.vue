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
          <div style="text-align: end"><span >Total : {{familyTab.totalExpense}}</span> </div>   
        </div>
    <div v-for="o in 4" :key="o" class="text item">
          {{'List item ' + o }} <span style="color: #6479e7;font-size: 13px;float: right;">가족에게 보내기</span>
    </div>
    </el-card>
      <img style="width: 100px;" src="@/assets/img/jasan.png">
      </div>
          <el-card class="box-card">
      <div slot="header" class="clearfix">
           <div style="text-align: end"><span >3,500,000</span> </div>        
      </div>
      <div  v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }} 
            <span style="color: #6479e7;font-size: 13px;float: right;">가족에게 보내기</span>
      </div>
    </el-card>
    </div>
    </el-col>
    <el-col :span="14">
      <div class="grid-content bg-purple">  
        <img src="@/assets/img/calendar.png">
        <el-switch v-model="value1" active-text='Family'
          inactive-text="Only me" style="padding-bottom: 38px;">
        </el-switch>
         <el-checkbox-group v-model="checkList">
              <el-checkbox 	label="지출"></el-checkbox>
              <el-checkbox label="소비"></el-checkbox>
             </el-checkbox-group> 
              <v-calendar :attributes='attributes' />
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
  },
  data() {
      return {
        value1: true,
        checkList: ['소비','지출']
       ,
        familyTab :
        {
          "totalExpense":100000,
          "expensePerDay":[ 
              { 
                "date":'12/34',
                "amount":50000,
                "list":[ 
                    { 
                      "userId":'user',
                      "userName":'엄마',
                      "lastTransactionTime":'444', 
                      "amount":1000
                    },
                    { 
                      "userId":'user',
                      "userName":'엄마',
                      "lastTransactionTime":'444', 
                      "amount":1000
                    },
                    { 
                      "userId":'user',
                      "userName":'엄마',
                      "lastTransactionTime":'444', 
                      "amount":1000
                    }
                ]
              }
            ]
          }
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
</style>
