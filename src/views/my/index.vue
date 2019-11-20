<template>
  <!-- <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div> -->

  <div> 
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
                <div v-bind="MyTab"> {{MyTab.otalExpense}}</div>
            </div>
          <div v-for="o in 4" :key="o" class="text item">
                {{'List item ' + o }}
          </div>
          </el-card>
            <img style="width: 100px;" src="@/assets/img/jasan.png">
            </div>
                <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Card name</span>
            </div>
          <div v-for="o in MyTab.detail" :key="o.userid" class="text item">
                {{'List item ' + o }}
          </div>
          </el-card>

          </div>
      </el-col>
          
      <el-col :span="14">
          <div style="padding-top: 19px;" class="grid-content bg-purple">
            <img src="@/assets/img/calendar.png">
          </div>
          </el-col>
      </el-row>
    </div>

</template>

<script>

// var MyTab ={
//     totalExpense : '10000' ,
//         expensePerDay : 
//         { 
//           date :'12/13',
//           amount :"1000",
//           detail: 
//           { 
//             time :'12/13',
//             vendor :'청국장',
//             amount: '500'
//           }
//         }
// }
import { mapGetters } from 'vuex'
// import VueSplit from 'vue-split-panel'

export default {
  name: 'My',
  // components: { VueSplit },
  computed: {
    ...mapGetters([
      //'MyTab'
    ])
  },
   data() {
    return {
      MyTab : {
        totalExpense :10000 ,
        expensePerDay : 
        { 
          date:'12/14',
          amount:'100',
          detail:
          { 
            time:'12/13',
            vendor:'청국장집',
            amoun:'500'
          }
        }
      }  
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
