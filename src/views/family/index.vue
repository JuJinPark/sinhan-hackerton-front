<template>
  <div class="dashboard-container">
    <div>
     <el-row :gutter="23" class="container">
      <el-col :span="10">
        <div class="grid-content bg-purple"> 
    <div>
    <div style="display:inline-block;">
      <img  src="@/assets/img/ico_my_title1.png">
    </div>    
      <i class="el-icon-refresh" style="float:right; font-size: 2rem;"/>   
    </div>
    <div> 
      <img style="padding-bottom:20px;" src="@/assets/img/ico_my_sub1.png">
      <el-card s class="box-card">
        <div  slot="header" class="clearfix" >
          <div ><h3>Total : 1000000</h3> </div>   
        </div>
    <div v-for="o in 4" :key="o" class="text item" style=" display: flex;">
          <!-- {{'List item ' + o }} <span style="color: #6479e7;font-size: 13px;float: right;">가족에게 보내기</span> -->
        <span style=" display: flex;padding-bottom: 21px;" ><img src="@/assets/img/male.png" style="width:54px"><h4>userName</h4></span>
        <span><h3> 오늘 쓴 돈</h3></span>
    </div>
    </el-card>
      <img style="padding-bottom:20px;padding-top:40px;" src="@/assets/img/ico_my_sub2.png">
      
      </div>
          <el-card class="box-card">
      <div slot="header" class="clearfix">
           <div style="text-align: end"><span >3,500,000</span> </div>        
      </div>
      <!-- <div  v-for="o in 4" :key="o" class="text item">
         {{'List item ' + o }}    <span style="color: #6479e7;font-size: 13px;float: right;">가족에게 보내기</span>  
      </div> -->
    </el-card>
    </div>
    </el-col>
    <el-col :span="14">
      <div class="grid-content bg-purple">  
        <img style="padding-bottom:90px;" src="@/assets/img/ico_my_title2.png">
          <div style="float: right;">
            <img style="width:60px" src="@/assets/img/male.png">
           <img style="width:60px" src="@/assets/img/female.png">
           <img style="width:60px" src="@/assets/img/female2.png">
           <img style="width:60px" src="@/assets/img/male2.png">
         </div>
  
         <!-- <div v-for="o in familyBudget" :key="o.userId" >
           <h3>o.age</h3>
           <span v-if="o.age>19">
              <img :src="require('@/assets/img/'+o.gender+'.png')">
           </span>
           <span v-else>
          <img :src="require('@/assets/img/'+o.gender+'2.png')">
          </span>
        </div> -->
        <!-- <el-switch v-model="value1" active-text='Family'
          inactive-text="Only me" style="padding-bottom: 38px;">
        </el-switch>
         <el-checkbox-group style="padding-bottom: 18px; padding-top: 30px;" v-model="checkList">
              <el-checkbox 	label="지출"></el-checkbox>
              <el-checkbox label="소비"></el-checkbox>
          </el-checkbox-group>  -->
              <v-calendar  is-expanded />
      </div>
      <img src="@/assets/img/rhkdrh.png" style="width:100%; padding-top:70px">
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
      'familyBudget'
    ]), 
  },
  data() {
      return {
        value1: true,
        checkList: ['소비','지출']
      }
    },
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
