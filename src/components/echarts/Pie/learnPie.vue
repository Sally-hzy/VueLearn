<template>
    <div id="content">
      <el-row>
        <pie_one> </pie_one>
      </el-row>    
      <el-row>  
        <pie_two> </pie_two>
      </el-row>
    </div>
</template>

<script>
  import pie_one from './pieOne.vue'
  import pie_two from './pieTwo.vue'
    export default {
      data (){
          return{


          }
      },
      components: {
          pie_one,
          pie_two
      }
    }
</script>

<style >
#content{
  width: 100%;
  margin: 15px;
}
</style>
