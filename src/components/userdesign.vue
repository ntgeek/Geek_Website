<template>
  <div id="userdesign" class="bm">
    <span>{{dierction}}</span><br>
    <span>{{bt1}}</span>
    <p >{{bt2}}</p>
    <li>{{bt3}}</li>
    <img id="sheep" src="http://img.nt-geek.club/设计羊.png">
  </div>
</template>

<script>
    export default {
        name: "userdesign",
      data:{
          bt1:"",
          bt2:"",
          bt3:""
      }
    }
</script>

<style >
  #userdesign{
    position: absolute;
    top:485%;
    right:0%;
    height: 70%;
  }
  #sheep{
    position: absolute;
    top:0%;
    right: 0%;
    height: 120%;
  }

</style>
