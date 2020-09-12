<template>
  <div id="catpm">
    <div id="lionf">
      <img id="lion" src="http://img.nt-geek.club/anquan.png">
      <img id="shizi2"  src="http://img.nt-geek.club/shizi2.png">
      <img id="chap"  src="http://img.nt-geek.club/王冠.png">
      <div id="lif">
      <span>安全攻城狮(Safety Engineer)</span>
        <span>主要涉及网络攻防、漏洞挖掘，能够代表
团队参加CTF安全赛事。</span>
        <P>我们需要的不是脚本小子，而是对底层
原理了如指掌。</P>
        <SPAN>互联网安全从其本质上来讲其实就是
互联网上的信息安全</SPAN>
        <SPAN>
网络安全攻城狮是拥有扎实基础的
Super Hacker,同时具有强大的自学能力。
网络安全攻城狮能够识别IT系统的优缺点。并且了解黑客以及网络犯罪手段、
且精通网络安全技术:
包括端口、服务漏洞扫、程序漏洞分析检测、权限管理、病毒木马防范等。
        </SPAN>

    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "PM"
    }
</script>

<style scoped>
  @media screen and (min-width:769px) {
    #chap{
      display: none;
    }
    #shizi2{
      display: none;
    }
  #lion{ margin:0;
    padding:0;
    position: absolute;
    top:390%;
    left:2%;
    width: 48vw;
    height: 48vw;
  }
  #lif{
    top: 390%;
    font-size: 2.3vw;
    font-family: FZYaoti;
       position: absolute;
    left: 55%;
     }
  }
  @media (max-width: 768px) and (min-width:480px ) {
    #lion {
      display: none
    }
    #chap{
      position: absolute;
      width: 20%;
      right: 0%;
    }
    #shizi2 {
      top: 58%;
      position: absolute;
      height: 35%;
      width: 58%;
      right: 5%;
    }
    #lif {
      top:5%;
      font-family: FZYaoti;
      position: absolute;
      left: 5%;
    }

    #lionf {
      top:5%;
      font-weight: bolder;
      font-size: 3vw;
    }
  #catpm{
    top:385%;
    width: 80%;
    height: 80%;
    left: 10%;
    position: absolute;
    border: 1vw solid yellowgreen;
    border-radius: 5vw;
    z-index: 10;
  }
  }
  @media (max-width: 479px){
    #lion {
      display: none
    }
    #chap{
      position: absolute;
      width: 20%;
      right: 0%;
    }
    #shizi2 {
      top: 58%;
      position: absolute;
      height: 35%;
      width: 58%;
      right: 5%;
    }
    #lif {
      top:5%;
      font-family: FZYaoti;
      position: absolute;
      left: 5%;
    }

    #lionf {
      top:5%;
      font-weight: bolder;
      font-size: 3vw;
    }
    #catpm{
      top:385%;
      width: 80%;
      height: 80%;
      left: 10%;
      position: absolute;
      border: 1vw solid yellowgreen;
      border-radius: 5vw;
      z-index: 10;
    }
  }

</style>
