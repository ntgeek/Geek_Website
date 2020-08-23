<template>
  <div  id="foremore">
    <img  id="bi" src="http://img.nt-geek.club/more.png">
    <div id="mf">
      <div id="mf1"><li></li>
      <li></li>
      <li></li>
      <li></li>
      </div>
      <span ID="mf2"></span>
      <div  id="mf3">

      </div>
      <span id="mf4"></span>
    </div>
  </div>
</template>

<script>
  export default {
    el:"#foremore",
  }
</script>

<style>
  #foremore{
    position: absolute;
    width: 100%;
    top: 710%;
  }
  #bi{
    position: absolute;
    width: 100%;
  }
  #mf{
      position: absolute;
    left: 30vw;
    top:13vw;
  }
  #mf1{
    font-size: 3vw;
    color: white;
  }
</style>
