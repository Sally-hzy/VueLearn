<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!--<router-view/>-->
    <pies></pies>
  </div>
</template>

<script>
  import pies from './components/echarts/Pie/learnPie'
export default {
  name: 'App',
  data (){
    return {

    }
  },
  components:{
    pies
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
