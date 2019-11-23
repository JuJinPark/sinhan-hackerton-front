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
  
   
         <el-checkbox label="지출" v-model="expenseCheck" :change="getAttributes()"></el-checkbox>
         <el-checkbox label="소비" v-model="incomeCheck" :change="getAttributes()"></el-checkbox>
             
        <v-calendar is-expanded  :attributes="getAttributes()"/>
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
  name: 'Family',
  computed: {
    ...mapGetters([
      'familyMonthlyExpense',
      'familyMonthlyIncome',
      'loginUser',
      'wallerUsers',
      'familyDailyExpense'

    ]), 
  },
  
  
  familyDailyExpense(){
    let data=[];

   this.wallerUsers.forEach(member => {
     let json={}
     
     json.id=member.id
     json.name=member.name;
     json.gender=member.gender;
     json.age=member.age;
     json.amount=0
     data.push(json)

   }
   );

  if(this.familyDailyExpense.amount!=0){

    this.familyDailyExpense.list.forEach(member => {
     data[member.userId]

   }
   );

  }


  }
  ,
  data() {
      return {
        incomeCheck:true,
       expenseCheck:true
      }
    },
  methods:{
      getAttributes() {
        var attributes=[];
   

    if(this.expenseCheck&&this.familyMonthlyExpense!=undefined){
      for(var value of this.familyMonthlyExpense) {
          
          var dots={
            dates:new Date(value.date),
            dot:{
              color:'red',
            },
            popover: {
            label: '-'+value.amount,
          },

          }
          attributes.push(dots)
      }

    }

    if(this.incomeCheck&&this.familyMonthlyIncome!=undefined){
     for(var value of this.familyMonthlyIncome) {
             var dots={
            dates:new Date(value.date),
            dot:{
              color:'blue',
            },
            popover: {
            label: '+'+value.amount,
          },

          }
          attributes.push(dots)
      }
    }
    // console.log(this.expenseCheck+","+this.incomeCheck)
    // console.log(attributes)
      return attributes;
      },
  },
  mounted() {
    //액션을 실행시키는 것이다. 디스패치가 액션을 발생시킨다. 
console.log("mounted")
    this.$store.dispatch('familyTab/getMyTodayExpense',{'loginUser': this.loginUser,'start':this.today,'end':'2019-11-24'});
    this.$store.dispatch('familyTab/getMyTodayIncome', {'loginUser': this.loginUser,'start':this.today,'end':'2019-11-24'});

    this.$store.dispatch('familyTab/getFamilyMonthlyExpense',{'loginUser': this.loginUser,'start':'2019-01-01','end':'2019-11-24'});
    this.$store.dispatch('familyTab/getFamilyMonthlyIncome',{'loginUser': this.loginUser,'start':'2019-01-01','end':'2019-11-24'});

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
