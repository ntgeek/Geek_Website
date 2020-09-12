<template>
  <div id="introuduce" class="bp">
    <span id="pas">方向介绍</span>
  </div>
</template>
<script>
    export default {
        name: "SecondPage.vue"
    }
</script>

<style scoped>
  #pas{
    position: absolute;
    top: 60%;
    right: 45%;
    font-family: sans-serif;
    font-size: 68px;
    font-weight: bolder;
  }
  #introuduce{position: absolute;
     top: 135%;
     left: 1%;
     right:1%;
     height: 250px;
     z-index:2;
   }
</style>
