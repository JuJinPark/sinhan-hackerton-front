<template>
  <!-- <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div> -->

        <div style="text-align: center ; height: 143px; "> 
      <!-- <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="80"></el-avatar> -->
      <el-avatar shape="square" :size="80" :src="squareUrl" ></el-avatar>
      <span>dsssl</span>
    

      <el-button>Default</el-button>
  
    </div>

    
  <!-- </div> -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'My',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
   data() {
    return {
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"  
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
</style>
