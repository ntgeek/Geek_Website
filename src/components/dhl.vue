<template>
    <div id="dh">
    <button>
      <img src="http://m.qpic.cn/psc?/V131WDHd0IXFUC/ruAMsa53pVQWN7FLK88i5ue6ifDF36bVxaI0mlL36pIr0rMIvwocJ1RuJN8*s4kDdAw4jByc6yWv6Ei.URDP.ssn1Aiie6d1utWNzBwgyGY!/mnull&bo=ZAhsAwAAAAADByE!&rf=photolist&t=5" id="geek">
      </button>
      <button id="sayings">Keep Curiosity<br>The Power Of Change</button>
      <img src="http://img.nt-geek.club/Geek1.png"  id="geek1">
      <img src="http://img.nt-geek.club/anniu.png"  id="anniu">
      <div id="dh1">
      <span id="fontz1" title="新思路官网" onclick="location.href='https://new-thread.com/'"  class="a">Newthread</span>
      <span id="fontz2" class="a">About us</span>
      <span id="fontz3" class="a">Contact</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "dhl"
    }
</script>

<style scoped>
  @media(min-width: 768px) {
    #geek1{display: none}
    #anniu{display: none}
    button{
      position: absolute;
      top: 6%;
      left: 25vw;
      outline: none;
      background: none;
      border: none;
      transition-duration: 0.5s;
    }

    button:hover{
    transform: scale(1.1);
    }

    #sayings{
      position: absolute;
      font-family:HWHupo;
      font-size: 2vw;
      font-weight: 900 ;
      color: rgb(107, 107, 107);
      left: 38%;
      top:20vw;
      
    }

    #geek{
      position: relative;
      width: 40vw;

    }
    #fontz1{
      position:absolute; left: 3vw;
      top:1.5%;
    }
    #fontz2{position:absolute;right: 12vw;top:1.5%;}
    #fontz3{
      position: absolute; right: 3vw;
      top:1.5%;
    }
    .a{font-size: 1.8vw;
      font-family: STHupo;
    }
    #dh {
      position: absolute;
      background: url("http://img.nt-geek.club/首页背景.png");
      background-size: 100% 100%;
      width: 90%;
      height: 65vw;
      background-color: white;
      left: 5%;
      margin: 0 auto;
    }}
  @media (max-width: 550px) {
    .a{
      display: none;
    }
    #geek{display: none}
    #geek1{
      position: relative;
      top: 22vw;
      left: 21%;
      width: 60%;
    }
    #anniu{
      position: relative;
      width: 70%;
      top: 35vw;
      right: -4%;
    }
    #dh{background: url("http://img.nt-geek.club/shouye.png");
      position: absolute;
      background-size: 100% 100%;
      width: 100%;
      height: 150vw;}
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
