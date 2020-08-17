<template>
  <div id="方向介绍" class="bp">
    <span id="过渡">方向介绍</span>
  </div>
</template>
<script>
    export default {
        name: "SecondPage.vue"
    }
</script>

<style scoped>
  #过渡{
    position: absolute;
    top: 60%;
    right: 45%;
    font-family: sans-serif;
    font-size: 68px;
    font-weight: bolder;
  }
  #方向介绍{position: absolute;
     top: 135%;
     left: 1%;
     right:1%;
     height: 250px;
     z-index:2;
   }
</style>
