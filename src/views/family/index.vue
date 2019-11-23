<template>
  <div style="background-color:#f7f7f7;" class="dashboard-container">
    <div>
     <el-row :gutter="23" class="container">
      <el-col :span="10">
        <div class="grid-content bg-purple"> 
    <div>
    <div style="display:inline-block;">
      <img  src="@/assets/img/ico_my_title1.png">
    </div>    
      <!-- <i class="el-icon-refresh" style="float:right; font-size: 2rem;"/>    -->
    </div>
    <div> 
      <img style="padding-bottom:20px;" src="@/assets/img/ico_my_sub1.png">
      <el-card style="text-align: end;" class="box-card">
        <div slot="header" class="clearfix" >
          <h3> {{familyDailyExpense.totalExpense}}원</h3>    
        </div>
   <div v-if="familyDailyExpense.totalExpense!=0">
    <div v-for="o in dailyExpense" :key="o.id" class="text item" style=" display: flex;">
          <!-- {{'List item ' + o }} <span style="color: #6479e7;font-size: 13px;float: right;">가족에게 보내기</span> -->
        <div style=" display: flex;padding-bottom: 21px;" ><img :src="require('@/assets/img/'+o.id+'.png')" style="width:54px">
          <div style="padding-top: 18px; padding-left: 20px;">{{o.name}}</div>
        </div>
         <div style=" padding-left: 20px;"><h3>{{o.amount}}원</h3></div>
    </div>
   </div>
    </el-card>
      <img style="padding-bottom:20px;padding-top:40px;" src="@/assets/img/ico_my_sub2.png">
      
      </div>
          <el-card class="box-card">
      <div slot="header" class="clearfix">
           <div style="text-align: end"><h3> {{familyDailyIncome.totalIncome}}원</h3> </div>        
      </div>
      <!-- <div  v-for="o in 4" :key="o" class="text item">
         {{'List item ' + o }}    <span style="color: #6479e7;font-size: 13px;float: right;">가족에게 보내기</span>  
      </div> -->
        <div v-if="familyDailyIncome.totalIncome!=0">
      <div v-for="o in dailyIncome" :key="o.id" class="text item" style=" display: flex;">
          <!-- {{'List item ' + o }} <span style="color: #6479e7;font-size: 13px;float: right;">가족에게 보내기</span> -->
        <div style=" display: flex;padding-bottom: 21px;" ><img :src="require('@/assets/img/'+o.id+'.png')" style="width:54px">
          <div style="padding-top: 18px; padding-left: 20px;">{{o.name}}</div>
        </div>
      <div style=" padding-left: 20px;"><h3>{{o.amount}}원</h3></div>
    </div>
        </div>
    </el-card>
    </div>
    </el-col>
    <el-col :span="14">
      <div class="grid-content bg-purple">  
        <img style="padding-bottom:90px;" src="@/assets/img/ico_my_title2.png">
          <div style="float: right;">
            <img style="width:60px" src="@/assets/img/test1.png">
            <img style="width:60px" src="@/assets/img/test2.png">
            <img style="width:60px" src="@/assets/img/test3.png">
            <img style="width:60px" src="@/assets/img/test4.png">
         </div>
  
   
         <el-checkbox label="소비" v-model="expenseCheck" :change="getAttributes()"></el-checkbox>
         <el-checkbox label="수입" v-model="incomeCheck" :change="getAttributes()"></el-checkbox>
             
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
      'walletUsers',
      'familyDailyExpense',
      'familyDailyIncome'
      // 'dailyExpense'

    ]),   
  dailyExpense() {
    let array=[];
    let amount={}

   this.walletUsers.forEach(member => {    
          
    amount[member.id]=0;  

    });


    this.familyDailyExpense.expensePerDay[0].list.forEach(member => {
     
   

    let current=amount[member.userId]
    amount[member.userId]=current+member.amount

   } ) 



  
   this.walletUsers.forEach(member => {  
     member.amount=amount[member.id]
     array.push(member)     
   
   }
   );

  return array;  


  },
  dailyIncome(){
    let array=[];
    let amount={}

   this.walletUsers.forEach(member => {    
          
    amount[member.id]=0;  

    });

    console.log('income')
    console.log(this.familyDailyIncome.incomesPerDay)
    this.familyDailyIncome.incomesPerDay[0].list.forEach(member => {
     
   

    let current=amount[member.userId]
    amount[member.userId]=current+member.amount

   } ) 



  
   this.walletUsers.forEach(member => {  
     member.amount=amount[member.id]
     array.push(member)     
   
   }
   );

  return array; 
  }
 
  },

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
    this.$store.dispatch('familyTab/getWalletUsers',this.loginUser);
    this.$store.dispatch('familyTab/getDailyFamilyExpense',{'loginUser':this.loginUser,'start':'2019-11-23','end':'2019-11-24'});
    this.$store.dispatch('familyTab/getDailyFamilyIncome',{'loginUser':this.loginUser,'start':'2019-11-23','end':'2019-11-24'});

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
