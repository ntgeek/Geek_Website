<template>
  <div id="first1" class="inner">
  <img src="http://img.nt-geek.club/geek.png" id="geek">
  <img src="http://img.nt-geek.club/Geek1.png"  id="geek1">
  <img src="http://img.nt-geek.club/anniu.png"  id="anniu">
    <template>
      <span id="fontz1" title="新思路官网" onclick="location.href='https://new-thread.com/'" >New thread</span>
    </template>
    <template>
      <span id="fontz2">About us</span>
    </template>
    <template>
      <span id="fontz3">Contact</span>
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

  @media screen and (min-width:769px) {
    #geek{
      position: absolute;
      top: 13%;
      left: 35%;
      width: 30%;
    }
    #anniu{
      display: none;
    }

    #fontz1 {
      top:1.5%;
      position: absolute;
      font-family: STHupo;
      left: 3vw;
      font-size: 1.8vw;
      color: black;
      font-weight: bolder;
      transition: all 0.6s;
    }
    #fontz2 {
      top:1.5%;
      color: black;
      position: absolute;
      font-family: STHupo;
      right: 12vw;
      font-size: 1.8vw;
      font-weight: bolder;
      transition: all 0.6s;
    }

    #fontz3 {
      top:1.5%;
      color: black;
      font-family: STHupo;
      font-size: 1.8vw;
      position: absolute;
      right: 3vw;
      font-weight: bolder;
      transition: all 0.6s;
    }

    button {
      font-size: 1.7vw;
      top: 1.5%;
      outline: none;
      background-color: #FFF9E6;
      border: none;
      padding: 0;
      margin: 0;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }

    button:hover {
      cursor: pointer;
      transform: scale(1.1);}
    img:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.5s;}
     #geek1{display: none;}
  }
  @media (max-width: 768px) and (min-width:480px){

    #fontz1{display: none;}
    #fontz2{display:none;}
    #fontz3{display: none;}
    #geek{
      display: none;
    }
    #geek1{
      position: absolute;
      top: 16vw;
      left: 23vw;
      width: 60vw;
    }
  #anniu{
    position: absolute;
      top:40%;
      right: 24%;
      width: 70%;
  }}
  @media (max-width:479px) {
    #fontz1{display: none;}
    #fontz2{display:none;}
    #fontz3{display: none;}
    #geek{
      display: none;
    }
    #geek1{
      position: absolute;
      top: 16vw;
      left: 23vw;
      width: 60vw;
    }
    #anniu{
      position: absolute;
      top:40%;
      right: 24%;
      width: 70%;
    }
  }
    @font-face {
      font-family: STHupo;
      src: url(font.ttf);
      font-weight: bold;
    }

    @font-face {
      font-family: FZYaoti;
      src: url(fzyaoti.ttf);
      font-weight: bold;
    }
</style>
