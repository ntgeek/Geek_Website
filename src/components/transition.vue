
<template>
  <div id="方向介绍" class="bp">
    <span id="过渡">~方向介绍~</span>
  </div>
</template>

<script>

    export default {
        name: "transition.vue",
    }
</script>

<style scoped>
  #过渡{
    position: absolute;
    top: 60%;
    right: 38%;
    font-family: sans-serif;
    font-size: 30vm;
    font-weight: bolder;
  }
  #方向介绍{position: absolute;
    top: 100%;
    left: 1%;
    right:1%;
    height: 20%;
    z-index:2;
  }
  .bp{
    background-image: url(http://img.nt-geek.club/过渡花纹.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
