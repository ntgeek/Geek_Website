<template>
<div id="contact">
  <img  id="lefts" src="http://img.nt-geek.club/左边的树.png">
  <img id="rights"  SRC="http://img.nt-geek.club/右边的树.png">
  <img id="uscontact" src="http://img.nt-geek.club/联系我们.png">
  <img id="yezi"  src="http://img.nt-geek.club/yezi1.png">
  <div id="contact1">
  <span class="b">-热爱计算机，具有geek精神，喜欢DIY，动手能力较强</span>
  <span class="b">-有编程/算法/硬件基础为佳(有作品可附上)</span>
  <span class="b">-有足够的空余时间</span>
  <span class="b">-热爱思考，对事物有自己的见解</span><br>
  <span class="b">ps:非新思路统招只有通过发送邮件自我介绍后，收到邮件回执后才会被允许进群<br>
    在读学生,都可邮件到newthread_geek@outlook.com报名加入.<br>
    (信中需备注个人基本信息以及意向方向.)
    注:此招新活动为长期招新
  </span>
  </div>
  <div id="wayofcontact">
    <a id="cf4" target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=JcPNggGSJ2EVnQdBjpCyEoVCgePRJI-q&jump_from=webapi" alt="Geek组迎新群" title="群号:315507378">加入QQ群</a>
    <a id="cf5" href="https://github.com/ntgeek" TITLE="Geek组Github">Github</a>
    <button v-on:click="bn1()" title="newthread-geek@outlook.com" id="yx">发送email</button>
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
        alert("复制成功")
      }
    }
  }
</script>

<style scoped>
  @media (min-width:769px) {
    .b{
      position: relative;
      left: 32%;
      font-size: 1.5vw;
    }

    #contact1{
      position: absolute;
      top:13vw;
    }
    #contact {
      position: absolute;
      width: 100%;
      top: 525%;
    }

    #lefts {
      top: 8vw;
      position: absolute;
      left: 3vw;
      height: 38vw;
    }

    #rights {
      position: absolute;
      top: 2.5vw;
      right: 5vw;
      height: 43vw;
    }

    #uscontact {
      position: absolute;
      top: 3vw;
      width: 24vw;
      left: 32vw;
    }

    #yezi {
      position: absolute;
      width: 10vw;
      top: 2vw;
      left: 22vw;
    }

    #wayofcontact {
      width: 100%;
      font-family: FZYaoti;
      top: 17vw;
      font-size: 50%;
      position: absolute;
      left: -4vw;
      color: rgb(60, 116, 97);
    }
    #cf4 {
      position: absolute;
      top: 14vw;
      left: 25%;
      color: mediumpurple;
    }

    #cf5 {
      position: absolute;
      top: 14vw;
      left: 55%;
      color: mediumpurple;
    }
    #yx{
      margin: 30px 3px;
      font-size: 2vw;
      letter-spacing: 2px;
      border-radius: 40px;
      outline: none;
      text-decoration: none;
      background: transparent;
      position: absolute;
      top: 14vw;
      left: 38%;
      font-family: FZYaoti;
      color: mediumpurple;
    }

a{
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

  @media (max-width: 768px) and (min-width: 480px ) {
    #lefts {
      display: none;
    }

    #yezi {
      display: none;
    }

    #uscontact {
      position: absolute;
      width: 50%;
      top: 610%;
      left: 25%;
    }

    #rights {
      position: absolute;
      right: 0%;
      top: 620%;
      width: 75%;
      height: 90%;
    }


    #cf4 {
      position: absolute;
      top: 16.5vw;
      font-size: 4vw;
    }

    #cf5 {
      position: absolute;
      top: 22vw;
      font-size: 4vw;
    }

    #wayofcontact {
      left: 13%;
      width: 100%;
      font-family: FZYaoti;
      top: 653%;
      position: absolute;
      color: aquamarine;
    }
  }
  @media (max-width: 479px){
    #contact1{
      position: absolute;
      top:13vw;
    }
    #cf4 {
      position: absolute;
      top: 14vw;
      left: 25%;
      color: mediumpurple;
    }

    #cf5 {
      position: absolute;
      top: 14vw;
      left: 55%;
      color: mediumpurple;
    }
    #yx{
      margin: 30px 3px;
      font-size: 2vw;
      letter-spacing: 2px;
      border-radius: 40px;
      outline: none;
      text-decoration: none;
      background: transparent;
      position: absolute;
      top: 14vw;
      left: 38%;
      font-family: FZYaoti;
      color: mediumpurple;
    }
    #lefts {
      display: none;
    }

    #yezi {
      display: none;
    }

    #uscontact {
      position: absolute;
      width: 40%;
      top: 590%;
      left: 30%;
    }

    #rights {
      position: absolute;
      right: 0%;
      top: 594%;
      width: 75%;
      height: 72%;
    }

    #cf4 {
      position: absolute;
      top: 16.5vw;
      font-size: 6vw;
    }

    #cf5 {
      position: absolute;
      top: 22vw;
      font-size: 6vw;
    }

    #wayofcontact {
      left: 13%;
      width: 100%;
      font-family: FZYaoti;
      top: 621%;
      position: absolute;
      color: aquamarine;
    }
    .b{
      position: relative;
      left: 32%;
      font-size: 1.5vw;
    }

    #contact1{
      position: absolute;
      top:13vw;
    }
    a{
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
</style>
