<template>
  <div id="fontend" class="bm">
    <span>{{dierction}}</span><br>
    <span>{{bt1}}</span>
    <p >{{bt2}}</p>
    <li>{{bt3}}</li>
    <img id="monkey" src="http://img.nt-geek.club/猴子.png">
  </div>
</template>

<script>
    export default {
      el:"#前后端开发",
        data:{
            dierction: "前后端开发（Front&Back)",
            bt1:"简称SE。在团队中主要负责统筹和规划整个组的产品项目和活动",
            bt2:"“好的软件的特征是，明明没用过，但总觉得用过似的”",
            bt3:"巴拉巴拉"
        }
    }
</script>

<style>
  #monkey{
    position: absolute;
    top:0%;
    right: 0%;
    height: 120%;
  }
  #fontend{
     position: absolute;
     top:130%;
     left: 0%;
     right:0%;
     height: 70%;
   }
</style>
