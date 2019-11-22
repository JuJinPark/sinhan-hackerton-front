<template>
  <!-- <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div> -->

  <div > 
    <el-row :gutter="23" class="container">
       <el-col :span="10">
         <div style="padding-top: 10px;" class="grid-content bg-purple">
          
         <div>
          <div style="display:inline-block;"> 
          <img src="@/assets/img/today.png">
          </div>    

          <i class="el-icon-refresh" style="float:right; font-size: 2rem;"/>   
          </div>

          <div>
          <img style="width: 100px;" src="@/assets/img/sobi.png">

          <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span> {{myTodayExpense.totalExpense}}</span>
            </div>
          <div v-for="o in myTodayExpense.expensePerDay[0].detail" :key=o.time class="text item">
            <div style='display: flex;'><h5>{{o.vendor}}</h5><h4 style='color: #e31c1c;'>{{'-'+o.amount}}</h4></div>
          </div>
          </el-card>
            <img style="width: 100px;" src="@/assets/img/jasan.png">
            </div>
                <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{myTodayIncome.totalIncome}}</span>
            </div>
          <div v-for="o in myTodayIncome.incomePerDay[0].detail"  :key=o.time  class="text item">
            <span style='display: flex;'><h5> {{o.vendor}}</h5><h4 style='color: #1c21c0;'>{{'+'+o.amount}}</h4></span>
          </div>
          </el-card>
          </div>
      </el-col>
          
      <el-col :span="14">
          <div style="padding-top: 19px;" class="grid-content bg-purple">
        
            <img src="@/assets/img/calendar.png"> 
            
              <el-checkbox label="지출" v-model="expenseCheck" :change="getAttributes()"></el-checkbox>
              <el-checkbox label="소비" v-model="incomeCheck" :change="getAttributes()"></el-checkbox>
             
              <v-calendar is-expanded :attributes="getAttributes()"/>
            </div>
          </el-col>
      </el-row>
    </div>

</template>

<script>

import { mapGetters } from 'vuex'
import PopoverRow from 'v-calendar/lib/components/popover-row.umd.min'

export default {
  name: 'My',
  components: {
    PopoverRow,
  },
  methods:{
      getAttributes() {
        var attributes=[];
      //console.log(this.myMonthlyExpense.totalExpense)

    if(this.expenseCheck){
      for(var value of this.myMonthlyExpense.expensePerDay) {
          
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

    if(this.incomeCheck){
     for(var value of this.myMonthlyIncome.incomePerDay) {
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
      'myMonthlyIncome'
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
   data() {
    return {
     
       checkList: ['소비','지출'],
       incomeCheck:true,
       expenseCheck:true
  

    };
   },
    mounted() {
    //액션을 실행시키는 것이다. 디스패치가 액션을 발생시킨다. 
    this.$store.dispatch('myTab/getMyTodayExpense');
    this.$store.dispatch('myTab/getMyTodayIncome');
    this.$store.dispatch('myTab/getMyMonthlyIncome');
    this.$store.dispatch('myTab/getMonthlyExpense');

  },
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
    padding-top: 96px;
    // min-height: 36px;
  }
  //   .bg-purple {
  //   background: #d3dce6;
  // }

  .container {
    // position: relative;
    height: 100vh;
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
