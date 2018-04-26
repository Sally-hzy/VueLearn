<template>
      <div class="myPie" style="width:150px, height:150px">

      </div>

</template>

<script>
    export default {
      data (){
        return {
          authour :'Sally',
          data: '2018-4-26'
        }
      },
      mounted (){
        let myChart = this.$echarts.init(document.getElementsByClassName('myPie'))
        myChart.setOption(options)
      }
    }
</script>

<style >

</style>
