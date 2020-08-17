
<template>
  <div>
  <img src="http://img.nt-geek.club/geek.png" id="图标">
    <template>
      <button id="fontz1" title="新思路官网" onclick="location.href='https://new-thread.com/'" >New thread</button>
    </template>
    <template>
      <button id="fontz2">About us</button>
    </template>
    <template>
      <button id="fontz3">Contact</button>
    </template>
    <router-view></router-view>
  </div>
</template>
<script>
    export default {
        name: "FirstPage.vue"
    }
</script>
<style scoped>
  #图标{
    position: absolute;
    top: 13%;
    left: 35%;
    width: 30%;
  }
  #fontz1{
    position: absolute;
    font-family: STHupo;
    left: 4.5%;
    color:black;
    font-weight: bolder;
    transition: all 0.6s;
  }
  #fontz2{
    position: absolute;
    font-family: STHupo;
    right: 12%;
    font-weight: bolder;
    transition: all 0.6s;
  }
  #fontz3{
    font-family: STHupo;
    position: absolute;
    right: 3%;
    font-weight: bolder;
    transition: all 0.6s;
  }
  button{
    top: 1.5%;
    outline: none;
    background-color: #FFF9E6;
    border: none;
    padding: 0;
    margin: 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2.1em;
  }
  button:hover{cursor: pointer;
    transform: scale(1.4);}
  @font-face {
    font-family: STHupo;
    src: url(font.ttf);
    font-weight:bold;
  }
  img:hover{cursor: pointer;
    transform: scale(1.4);
    transition: all 2s;
  }
</style>
