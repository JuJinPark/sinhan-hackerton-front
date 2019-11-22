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
                <span> {{todayExpense.totalExpense}}</span>
            </div>
          <div v-for="o in todayExpense.expensePerDay[0].detail" :key=o.time class="text item">
            <div style='display: flex;'><h5>{{o.vendor}}</h5><h4 style='color: #e31c1c;'>{{'-'+o.amount}}</h4></div>
          </div>
          </el-card>
            <img style="width: 100px;" src="@/assets/img/jasan.png">
            </div>
                <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{todayIncome.totalIncome}}</span>
            </div>
          <div v-for="o in todayIncome.incomePerDay[0].detail"  :key=o.time  class="text item">
            <span style='display: flex;'><h5> {{o.vendor}}</h5><h4 style='color: #1c21c0;'>{{'+'+o.amount}}</h4></span>
          </div>
          </el-card>
          </div>
      </el-col>
          
      <el-col :span="14">
          <div style="padding-top: 19px;" class="grid-content bg-purple">
        
            <img src="@/assets/img/calendar.png"> 
             <el-checkbox-group style=" padding-top: 38px; padding-bottom: 10px;" v-model="checkList">
              <el-checkbox 	label="지출"></el-checkbox>
              <el-checkbox label="소비"></el-checkbox>
             </el-checkbox-group> 
              <v-calendar is-expanded/>
          </div>
          </el-col>
      </el-row>
    </div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'My',
  computed: {
    ...mapGetters([
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
      todayExpense : {
        totalExpense :10000 ,
        expensePerDay : 
        [
          { 
          date:'2019-11-14',
          amount:'1340',
          detail:[ { 
            time:'2019-11-14:09:00:00',
            vendor:'보험료',
            amount:'400'
          },
           { 
            time:'2019-11-14:10:00:00',
            vendor:'청국장집',
            amount:'300'
          },
           { 
            time:'2019-11-14:11:00:00',
            vendor:'라면집',
            amount:'340'
          },
           { 
            time:'2019-11-14:19:00:00',
            vendor:'청국장집',
            amount:'300'
            } 
          ]
        }
        ]
        } ,
      todayIncome: {
        totalIncome:10400,
        incomePerDay:
        [
        { 
          date:'2019-11-14',
         amount: 10400,
         detail:[{ 
            time:'2019-11-14:09:00:00',
            vendor:'월급',
            amount:'5000'
          },
           { 
            time:'2019-11-14:10:00:00',
            vendor:'엄마',
            amount:'2000'
          },
           { 
            time:'2019-11-14:11:00:00',
            vendor:'친구점심더치페이',
            amount:'3400'
          }]
        }
        ]
      },
       checkList: ['소비','지출']
       ,
      attributes: [
      // This is a single attribute
      {
        // An optional key can be used for retrieving this attribute later,
        // and will most likely be derived from your data object
        // key: Any,
        // Attribute type definitions
        // highlight: true,  // Boolean, String, Object
        // dot: true,        // Boolean, String, Object
        // bar: true,        // Boolean, String, Object
        content: 'red',   // Boolean, String, Object
        dates: new Date(),
        // You can optionally provide dates to exclude
        excludeDates: null,
        // Think of `order` like `z-index`
        order: 0
      }
    ]
    };
   }
}
</script>

<style lang="scss" scoped>
// .dashboard {
//   &-container {
//     margin: 30px;
//   }
//   &-text {
//     font-size: 30px;
//     line-height: 46px;
//   }
// }

// .pan-thumb {
//   width: 10%;
//   height: 10%;
//   background-position: center center;
//   background-size: cover;
//   border-radius: 50%;
//   overflow: hidden;
//   position: absolute;
//   transform-origin: 95% 40%;
//   transition: all 0.3s ease-in-out;
// }

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
