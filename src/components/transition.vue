<template>
  <div id="introuduce1" class="bp" >
    <img id="it" SRC="http://img.nt-geek.club/介绍.png">
    <img id="gd" src="http://img.nt-geek.club/过渡花纹.png">
  </div>
</template>
<script>
    export default {
        name: "transition.vue",
    }
</script>
<style scoped>
  @media screen and (min-width:501px) {
    #introuduce1{position: relative;top: 65vw;width: 51%;left: 0.5%;}
    #it {position: absolute;width: 33vw;left:80%;top:7vw;}
    #gd{position:absolute;width: 210%;left: 14%;}
  }
  @media (max-width: 500px){
    #it{
      position: relative;
      width: 5%;
      left: 23vw;
      top: 156vw;
    }
  #gd{display: none;}
  }
</style>
