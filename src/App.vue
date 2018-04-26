<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!--<router-view/>-->
    <!-- <pies></pies> -->
    <menu_left></menu_left>
  </div>
</template>

<script>
  import pies from './components/echarts/Pie/learnPie'
  import menu_left from './components/menu_left.vue'
export default {
  name: 'App',
  data (){
    return {

    }
  },
  components:{
    pies,
    menu_left
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
