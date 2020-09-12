<template>
  <div id="方向介绍" class="bp">
    <img id="it" SRC="http://img.nt-geek.club/介绍.png">
  </div>
</template>
<script>
    export default {
        name: "transition.vue",
    }
</script>
<style scoped>
  @media screen and (min-width:769px) {
    #it {
      position: absolute;
      top: 60%;
      right: 30%;
      width: 33vw;
    }
    #方向介绍 {
      position: absolute;
      top: 100%;
      left: 1%;
      right: 1%;
      height: 20%;
      z-index: 2;
    }
    .bp {
      background-image: url(http://img.nt-geek.club/过渡花纹.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  @media (max-width: 768px) and (min-width:480px){
    #it{
      display: none;
    }}
  @media (max-width: 479px){
    #it{
      display: none;
    }
  }
</style>
