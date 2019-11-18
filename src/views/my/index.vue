<template>
  <!-- <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div> -->

        <div> 

          <!-- <div :style="{backgroundImage: 'url(https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png)' }" class="pan-thumb"></div> -->

         <!-- <div class="editor-container">
      <el-tag class="tag-title" effect="plain" size="medium">
       오늘
      </el-tag>
      </div>
      <el-row >
       <el-col :span="6"><div class="grid-content bg-purple"><span>{{expense}}원</span></div></el-col>
    
    </el-row> -->


<el-row :gutter="23" class="container">
  <el-col :span="10">
    <div class="grid-content bg-purple">
    
    <div>
      <div style="display:inline-block;">
        <h2>오늘</h2>
        <!-- <el-tag class="tag-title" effect="plain" size="medium">
       오늘
      </el-tag> -->
      </div>    

       <i class="el-icon-refresh" style="float:right; font-size: 2rem;"/>   
      </div>

      <div>
      <h2>소비</h2>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
          <span>Card name</span>
            
      </div>
    <div v-for="o in 4" :key="o" class="text item">
          {{'List item ' + o }}
    </div>
    </el-card>
      <h2>자산</h2>
      </div>
          <el-card class="box-card">
      <div slot="header" class="clearfix">
          <span>Card name</span>
            
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

    

</template>

<script>
import { mapGetters } from 'vuex'
// import VueSplit from 'vue-split-panel'

export default {
  name: 'My',
  // components: { VueSplit },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
   data() {
    return {
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      expense: 7500  
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
