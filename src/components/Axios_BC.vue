<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        
        </div>
         <div id="chart">
            <PSIIndex></PSIIndex>
        
        </div>
        <div id="chart">
            <covidIndex></covidIndex>
        
        </div>
        <div id="chart">
            <govdataIndex></govdataIndex>
        
        </div>
        
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import PSIIndex from '../PSIIndex.js'
import covidIndex from '../covidIndex.js'
import govdataIndex from '../govdataIndex.js'

export default {
    components:{
        axiosExample,PSIIndex,covidIndex,govdataIndex
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>