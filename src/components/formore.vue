<template>
  <div  id="foremore">
    <img  id="bi" src="http://img.nt-geek.club/More.png">
    <img  id="bi2" src="http://img.nt-geek.club/tiane.png">
    <div id="mf">
      <div id="mf1">
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
  @media (min-width:769px){
    #bi2{display: none}
    #foremore{
      position: absolute;
      width: 100%;
      top: 610%;
    }
    #bi{
      position: absolute;
      width: 91.5%;
      left: 3%;
      right: 3%;
    }
    #mf{
      position: absolute;
      top:13vw;
    }
    #mf1{
      font-size: 3vw;
      color: white;
    }}
  @media (max-width: 768px) and (min-width: 480px){
    #bi{
      display: none;
    }
    #bi2{
      position: absolute;
      top: 710%;
      width: 100%;
      right: 0%;
    }
  }
  @media(max-width: 479px){
    #bi{
      display: none;
    }
    #bi2{
      position: absolute;
      top: 710%;
      width: 100%;
      right: 0%;
    }
  }
</style>
