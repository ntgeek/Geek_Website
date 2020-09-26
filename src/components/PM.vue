<template>
  <div  id="se">

        <DIV id="wen3">

            <span id="d1">安全攻城狮(Safety)</span><br>
            <p  id="we3">我们需要的不是脚本小子，而是对底层原理了如指掌。</p><br>
            <span id="d2">主要涉及网络攻防、漏洞挖掘，能够代表团队参加CTF安全赛事</span><br><br>
            <li class="c">互联网安全从其本质上来讲其实就是互联网上的信息安全/li>
            <li class="c">网络安全攻城狮是拥有扎实基础的SuperHacker,同时具有强大的自学能力。</li><br><br>
            <li class="c" id="dingwei">网络安全攻城狮能够识别IT系统的优缺点。并且了解黑客以及网络犯罪手段,且精通网络安全技术:包括服务漏洞扫描、程序漏洞分析检测、病毒木马防范等。</li>
        </DIV>

            <img id="lion" src="http://img.nt-geek.club/anquan.png">
            <img id="shizi2"  src="http://img.nt-geek.club/shizi2.png">
            <img id="chap"  src="http://img.nt-geek.club/王冠.png">
            <img id="beijp" src="http://img.nt-geek.club/安全移动端背景.png">

  </div>


</template>
<style scoped>
  @media (min-width: 501px) {
    #shizi2{display: none}
    #chap{display: none}
    #se{position: relative;left:5%;top:150vw}
    #lion{position:absolute;width:38vw;height: 42vw; top:-2%;left: 5%;}
    #wen3{position: absolute;top:3vw;left: 58%;width: 40vw;}
    #d1{font-size: 3vw}
    span{font-size: 2vw;font-family: FZYaoti}
    p{color:#7BD3FF;font-size: 2.3vw;font-family: FZYaoti;color: cornflowerblue;position: relative;top:1.5vw;}
    li{font-size: 2vw;font-family: FZYaoti}
    #d2{position: relative;top: 2vw;}
    .c{position: relative;top: 3vw;}
    #beijp{display: none}
  }
  @media (max-width: 500px) {
    #se{
      position: relative;
      top: 348vw;
      height:170vw;
      }

    #lion{
      display: none;
      }

    #shizi2 
    {height: 45vw;
      width: 65vw;
      z-index: 200;
      position: absolute;
      top: 120vw;
      left: 34vw;
    }

    #chap{ 
      width: 20%;
      z-index: 2;
      width: 20%;
      top: 5vw;
      right: 3%;
      position: absolute;
      }

    #wen3{
      position: absolute;
      top:20vw;
      left: 10vw;
      z-index:2;
      width: 80vw;
      }

    #beijp{
      width: 10%;
      height: 170vw;
      position: absolute;
      top: 0vw;
      left: 0%;
    }

    #d2{
      position: relative;
      top:4vw;
      }

    span{
      font-size: 4.5vw;
      font-family: FZYaoti
      }

    p{
      color:cornflowerblue;
      font-family: FZYaoti;
      }

    li{
      font-size: 4.5vw;
      font-family: FZYaoti;
      position: relative;
      top:6vw;
      }

    #we3{
      font-size: 5vw;
      position: relative;
      top: 2.5vw;
      }

    #d1{
      font-size: 7vw;
      }
  }
</style>
