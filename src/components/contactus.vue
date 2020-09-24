<template>
  <div id="contact">
    <img  id="lefts" src="http://img.nt-geek.club/左边的树.png">
    <img id="rights"  SRC="http://img.nt-geek.club/右边的树.png">
    <img id="uscontact" src="http://img.nt-geek.club/联系我们.png">
    <img id="yezi"  src="http://img.nt-geek.club/yezi1.png">
  <div id="wen4">
  <span class="b">-热爱计算机，具有geek精神，喜欢DIY，动手能力较强<br></span>
  <span class="b">-有编程/算法/硬件基础为佳(有作品可附上)<br></span>
  <span class="b">-有足够的空余时间<br></span>
  <span class="b">-热爱思考，对事物有自己的见解<br></span>
  <span class="b">ps:非新思路统招只有通过发送邮件自我介绍后，收到邮件回执后才会被允许进群<br>
    在读学生,都可邮件到newthread_geek@outlook.com报名加入.<br>
    (信中需备注个人基本信息以及意向方向.)
    注:此招新活动为长期招新</span></div>
    <div id="wayofcontact">


      <button id="cf4" target="_blank" onclick="window.location.href='https://qm.qq.com/cgi-bin/qm/qr?k=_MXIavH-bKiRMl5LvZHVKnIjjhuHDNGC&jump_from=webapi'" alt="Geek组迎新群" title="群号:1050679488" class="q">QQ群</button>

      <button id="cf5" onclick="window.location.href='https://github.com/ntgeek'" TITLE="Geek组Github" class="q">Github</button>

      <button v-on:click="bn1()" title="newthread-geek@outlook.com" id="yx" class="q">email</button>


    </div>
  </div>
</template>
<script>
  import Copy from 'copy-util';
  export default {
    name: "contactus",
    methods: {
      bn1() {
        var value = document.getElementById("yx").title;
        Copy(value);
        alert("复制成功")}}}
</script>
<style scoped>
  @media (min-width: 501px){
  #contact{position: relative;right: 8%;top: 275vw;}
  .b{font-size: 1.5vw;font-family: FZYaoti;position: relative;top: -26vw;}
  #lefts{height: 38vw;position: relative;left:15%;}
  #rights{height: 43vw;position: relative;left: 51%;top: -0vw;}
  #uscontact{width: 24vw;position:relative;top: -38vw;right: 16%;}
  #yezi{width: 10vw;position:absolute;top: -1.5vw;right: 37vw;}
  #wen4{position: relative;left: 32%;top:-5vw;line-height: 2vw;}
  #wayofcontact{position: absolute;top: 52%;font-family: FZYaoti;}
     #cf4 {
      width: 10vw;
      height:3vw;
      color: rgb(69, 100, 90);
      font-size: 2vw;
      border-radius: 1vw;
      border-color: rgb(69, 100, 90);
      -webkit-transition-duration: 0.4s;
      transition-duration: 0.4s;
      outline: none;
      border-width: 0.2vw;
      background-color: white;
      box-shadow: none;
      position: absolute;
      left: 28vw;
      transition-duration: 0.4s;
    }

    #cf4:hover{
      color:white;
      background-color:rgb(69, 100, 90);
      border: none;
      transform: scale(1.1);
    }

    #cf5 {
      width: 10vw;
      height:3vw;
      color: rgb(69, 100, 90);
      font-size: 2vw;
      border-radius: 1vw;
      border-color: rgb(69, 100, 90);
      -webkit-transition-duration: 0.4s;
      transition-duration: 0.4s;
      outline: none;
      border-width: 0.2vw;
      background-color: white;
      box-shadow: none;
      position: absolute;
      left: 62vw;
      transition-duration: 0.4s;
    }

    #cf5:hover{
      color:white;
      background-color:rgb(69, 100, 90);
      border: none;
      transform: scale(1.1);
    }

    #yx {
      width: 10vw;
      height:3vw;
      color: rgb(69, 100, 90);
      font-size: 2vw;
      border-radius: 1vw;
      border-color: rgb(69, 100, 90);
      -webkit-transition-duration: 0.4s;
      transition-duration: 0.4s;
      outline: none;
      border-width: 0.2vw;
      background-color: white;
      box-shadow: none;
      position: absolute;
      left: 45vw;
      transition-duration: 0.4s;
    }

    #yx:hover{
      color:white;
      background-color:rgb(69, 100, 90);
      border: none;
      transform: scale(1.1);
    }

    a{
      position: absolute;
      text-decoration: none;
      display: inline-block;
      text-align: center;
      line-height: 2.5vw;
      margin: 30px 3px;
      background-color: white;
      font-size: 2vw;
      letter-spacing: 2px;
      border-radius: 40px;
    }
    }

@media (max-width: 500px) {
  #contact{position: relative;top: 190vw;width: 100%;height: 190vw;}
  #lefts {display: none;}
  #yezi {display: none;}
  #uscontact { width: 40%;position: absolute;top: -3vw;left: 20%;}
  #rights {
    position: absolute;
    left: 38%;
    width: 75%;
    height: 72%;}
  #wen4{position: relative;top:27%;font-family: FZYaoti;font-size: 1.5vw;}
}
</style>
