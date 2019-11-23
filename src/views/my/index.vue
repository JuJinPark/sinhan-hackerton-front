<template>
  <!-- <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div> -->

  <div> 
    <el-row :gutter="23" class="container">
       <el-col :span="10">
         <div style="padding-top: 10px;" class="grid-content bg-purple">
          
         <div>
          <div style="display:inline-block;"> 
           <img src="@/assets/img/ico_my_title1.png">
          </div>    

          <!-- <i class="el-icon-refresh" style="float:right; font-size: 2rem;"/>    -->
           <el-button style="float: right;" @click="shareData()" type="warning">공유하기</el-button>
          </div>

          <div>
          <img style="padding-bottom:20px;" src="@/assets/img/ico_my_sub1.png">

          <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span> {{myTodayExpense.totalExpense}}</span>
                <!-- <span>{{myTodayExpense.expensePerDay[0].list[0].vendor}}</span> -->
            </div>
          <div v-if="myTodayExpense.totalExpense!=0">
          <div v-for="o in myTodayExpense.expensePerDay[0].list" :key=o.time class="text item">
            <div ><span><p>{{o.vendor}} ( {{o.time}} )</p></span><span style='color: #e31c1c;padding-left: 85%;'> {{'-'+o.amount}}</span></div>
          </div>
          </div>

          </el-card>
            <img style="padding-bottom:20px;padding-top:40px;" src="@/assets/img/ico_my_sub2.png">
            </div>
                <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{myTodayIncome.totalIncome}}</span>
            </div>
          <div v-if="myTodayIncome.totalIncome!=0">
          <div v-for="o in myTodayIncome.incomesPerDay[0].list"  :key=o.time  class="text item">
            <span style='display: flex;'><h5>{{o.vender}}</h5><h4 style='color: #1c21c0;'>{{'+'+o.amount}}</h4></span>
          </div>
          </div>
          
          </el-card>
          </div>
      </el-col>
          
      <el-col :span="14" >
          <div class="grid-content bg-purple">
            <img style="padding-bottom:90px;"  src="@/assets/img/ico_my_title2.png"> 
              <el-checkbox label="수입"" v-model="expenseCheck" :change="getAttributes()"></el-checkbox>
              <el-checkbox label="소비" v-model="incomeCheck" :change="getAttributes()"></el-checkbox>
              <v-calendar is-expanded  :attributes="getAttributes()"/>
            </div>
            <img style="width: 100%;;padding-top: 90px;" src="@/assets/img/banner_my.png">
          </el-col>

      </el-row>
    </div>

</template>

<script>

import { mapGetters } from 'vuex'
import Axios from 'axios';


export default {
  name: 'My',
   computed: {
    ...mapGetters([
      'myTodayExpense',
      'myTodayIncome',
      'myMonthlyExpense',
      'myMonthlyIncome',
      'loginUser',
      'today'
    ]),

    inputState() {
      if (!this.selectedValue) {
        return {
          type: 'is-danger',
          message: 'Date required.',
        };
      }
      return {
        type: 'is-primary',
        message: '',
      };
    },

   
  },
  //  data() {
  //   return {
     
  //      checkList: ['소비','수입'],
  //      incomeCheck:true,
  //      expenseCheck:true
  //   };
  //  },
  methods:{
    shareData(){
      console.log("jj")
      this.$store.dispatch('myTab/getShareMoney' ,{'loginUser': this.loginUser});
    },
     getAttributes() {
        var attributes=[];
      // console.log(this.myMonthlyIncome)

    if(this.expenseCheck&&this.myMonthlyExpense!=undefined){
      for(var value of this.myMonthlyExpense) {
          
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

    if(this.incomeCheck&&this.myMonthlyIncome!=undefined){
     for(var value of this.myMonthlyIncome) {
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
  computed: {
    ...mapGetters([
      'myTodayExpense',
      'myTodayIncome',
      'myMonthlyExpense',
      'myMonthlyIncome',
      'loginUser',
      'today'
    ])
    ,
    inputState() {
      if (!this.selectedValue) {
        return {
          type: 'is-danger',
          message: 'Date required.',
        };
      }
      return {
        type: 'is-primary',
        message: '',
      };
    },
   
  },
   data() {
    return {
       checkList: ['소비','수입'],
       incomeCheck:true,
       expenseCheck:true
    };
   },
    mounted() {
    //액션을 실행시키는 것이다. 디스패치가 액션을 발생시킨다. 

    this.$store.dispatch('myTab/getMyTodayExpense',{'loginUser': this.loginUser,'start':this.today,'end':'2019-11-24'});
    this.$store.dispatch('myTab/getMyTodayIncome', {'loginUser': this.loginUser,'start':this.today,'end':'2019-11-24'});
    this.$store.dispatch('myTab/getMyMonthlyIncome',{'loginUser': this.loginUser,'start':'2019-01-01','end':'2019-11-24'});
    this.$store.dispatch('myTab/getMonthlyExpense',{'loginUser': this.loginUser,'start':'2019-01-01','end':'2019-11-24'});

  }
}
</script>

<style lang="scss" scoped>

.editor-container{
  margin-bottom: 30px;
}
.tag-title{
  margin-bottom: 5px;
}
.grid-content {
    padding-left: 49px;
    padding-right: 41px;
    padding-top: 25px;
    // min-height: 36px;
  }
  //   .bg-purple {
  //   background: #d3dce6;
  // }

  .container {
    // position: relative;
    height: 100vh;
        background-color: #f7f7f7;
  }

 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .el-card__header{
    background: #d3dce6;
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
