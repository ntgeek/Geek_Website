<template>
    <div  id="fm">
      <img id="about" src="http://img.nt-geek.club/关于.png">
      <div  id="f2">
      <img id="speech"src="http://img.nt-geek.club/演讲.png">
        <span id="fm2">技术汇报。每周我们
会举行一次技术例会
，用来汇报我们的学
习内容，供成员之间
交流学习。</span>
      </div>
      <div id="f1">
      <img id="time" src="http://img.nt-geek.club/shijian.png">
        <span id="fm1">耐心、毅力是我们必
不可少的品质，每周
我们会至少花30小时
在实验室中。以保证
技术的精进。</span>
      </div>
      <div  id="f3">
      <img id="douyan" src="http://img.nt-geek.club/duoyuan.png">
        <span id="fm3">多元化是我们的特色。
在这里，你可以拥有
多种方向选择，前后
端、安全、AI、算法
产品、设计等。</span>
      </div>
      <img id="lefts" src="http://img.nt-geek.club/左上.png">
      <img id="rights" src="http://img.nt-geek.club/youshang.png">
      <img id="leftx" src="http://img.nt-geek.club/左下.png">
      <img id="ringtx" src="http://img.nt-geek.club/youxia.png">
      <img id="chongzi" src="http://img.nt-geek.club/七星虫子.png">
      <img id="hudie" src="http://img.nt-geek.club/hudie.png">
      </div>
</template>

<script>
    export default {
        name: "About us"
    }
</script>

<style scoped>
  @media (min-width:769px) {
    #about{
      top:7vw;
      position: absolute;
      width: 24vw;
      left: 38vw;
    }
    #fm{
      position: absolute;
      width: 100%;
      top: 470%;
    }
    #speech{
      top:2vw;
      left: 2vw;
      position: absolute;
      width: 14vw;
      height: 20vw;
    }
    #time{
      top:2vw;
      left: 2vw;
      position: absolute;
      width: 14vw;
      height:20vw;}
    #douyan{
      top:2vw;
      left: 2vw;
      position: absolute;
      width: 14vw;
      height: 19vw;}
    #lefts{
      position: absolute;
      top:14vw;
      width: 25%;
      left: 2vw;
    }
    #rights{
      position: absolute;
      top:14vw;
      width: 25%;
      right: 2vw;
    }
    #leftx{position: absolute;
      top:65vw;
      width: 25%;
      left: 2vw;}
    #ringtx{position: absolute;
      top:65vw;
      width: 25%;
      right: 2vw;}
    #chongzi{
      position: absolute;
      top: 30vw;
      width: 9vw;
      left: 2vw;
    }
    #hudie{
      position: absolute;
      top:51vw;
      width: 12vw;
      right: 1vw;
    }
    #f1{
      height: 37vw;
      top: 21.8vw;
      position: absolute;
      left: 14vw;
      width: 19vw;
      border: 3px;
      solid-color: black;
      border: 1vw solid #8B88B7;
      border-radius: 5vw;
      font-size: 1.5vw;
    }
    #f2{
      height: 37vw;
      top: 21.8vw;
      position: absolute;
      left: 40vw;
      width: 19vw;
      border: 3px;
      border: 1vw solid #8B88B7;
      border-radius: 5vw;
      font-size: 1.5vw;
    }
    #f3{
      height: 37vw;
      top: 21.8vw;
      position: absolute;
      width: 18vw;
      right:13.2vw;
      border: 3px;
      solid-color: black;
      border: 1vw solid #8B88B7;
      border-radius: 5vw;
      font-size: 1.48vw;
    }
    #fm1{
      left: 3.1vw;
      position: absolute;
      top: 22.7vw;
    }
    #fm2{
      left: 3.1vw;
      position: absolute;
      top: 22.7vw;
    }
    #fm3{
      left: 3.1vw;
      position: absolute;
      top: 22.7vw;}
  }
  @media (max-width: 768px) and (min-width:480px ) {
    #fm {
      position: absolute;
      top: 475%;
      width: 100%;
    }

    #about {
      top: 0%;
      position: absolute;
      width: 40%;
      left: 30%;
    }

    #speech {
      top: 8%;
      left: 4vw;
      position: absolute;
      width: 24%;
      height: 80%;
    }

    #time {
      top: 8%;
      left: 4vw;
      position: absolute;
      width: 24%;
      height: 80%;
    }

    #douyan {
      top: 8%;
      left: 4vw;
      position: absolute;
      width: 24%;
      height: 80%;
    }

    #lefts {
      position: absolute;
      top: 14vw;
      width: 14vw;
      left: 2vw;
    }

    #rights {
      position: absolute;
      top: 14vw;
      width: 14vw;
      right: 2vw;
    }

    #leftx {
      position: absolute;
      top: 160vw;
      width: 14vw;
      left: 2vw;
    }

    #ringtx {
      position: absolute;
      top: 160vw;
      width: 14vw;
      right: 2vw;
    }

    #chongzi {
      position: absolute;
      width: 9vw;
      left: 2vw;
    }

    #hudie {
      position: absolute;
      width: 12vw;
      right: 1vw;
    }

    #f1 {
      height: 35vw;
      top: 24vw;
      position: absolute;
      width: 80%;
      left: 10%;
      border: 1.5vw solid #8B88B7;
      border-radius: 4vw;
      font-size: 1.5vw;
    }

    #f2 {
      height: 35vw;
      top: 70vw;
      position: absolute;
      width: 80%;
      left: 10%;
      border: 1.5vw solid #8B88B7;
      border-radius: 4vw;
      font-size: 1.5vw;
    }

    #f3 {
      height: 35vw;
      top: 115vw;
      position: absolute;
      width: 80%;
      left: 10%;
      border: 1.5vw solid #8B88B7;
      border-radius: 4vw;
      font-size: 1.5vw;
    }

    #fm1 {
      top: 10%;
      left: 40%;
      font-size: 4.8vw;
      position: absolute;
    }

    #fm2 {
      top: 10%;
      left: 40%;
      font-size: 4.8vw;
      position: absolute;
    }

    #fm3 {
      top: 10%;
      left: 40%;
      font-size: 4.8vw;
      position: absolute;
    }
  }
    @media(max-width: 479px) {
      #fm{
        position: absolute;
        top: 475%;
        width: 100%;
      }
      #about{
        top:0%;
        position: absolute;
        width: 40%;
        left: 30%;
      }
      #speech{
        top:8%;
        left: 4vw;
        position: absolute;
        width: 24%;
        height:80%;
      }
      #time{
        top:8%;
        left: 4vw;
        position: absolute;
        width: 24%;
        height:80%;}
      #douyan{
        top:8%;
        left: 4vw;
        position: absolute;
        width: 24%;
        height:80%;}
      #lefts{
        position: absolute;
        top:14vw;
        width: 14vw;
        left: 2vw;
      }
      #rights{
        position: absolute;
        top:14vw;
        width: 14vw;
        right: 2vw;
      }
      #leftx{
        position: absolute;
        top:160vw;
        width: 14vw;
        left: 2vw;}
      #ringtx{
        position: absolute;
        top:160vw;
        width: 14vw;
        right: 2vw;}
      #chongzi{
        position: absolute;
        width: 9vw;
        left: 2vw;
      }
      #hudie{
        position: absolute;
        width: 12vw;
        right: 1vw;
      }
      #f1{
        height: 35vw;
        top: 24vw;
        position: absolute;
        width:80%;
        left: 10%;
        border: 1.5vw solid #8B88B7;
        border-radius: 4vw;
        font-size: 1.5vw;
      }
      #f2{
        height: 35vw;
        top: 70vw;
        position: absolute;
        width:80%;
        left: 10%;
        border: 1.5vw solid #8B88B7;
        border-radius: 4vw;
        font-size: 1.5vw;
      }
      #f3{
        height: 35vw;
        top: 115vw;
        position: absolute;
        width:80%;
        left: 10%;
        border: 1.5vw solid #8B88B7;
        border-radius: 4vw;
        font-size: 1.5vw;
      }
      #fm1{
        top: 10%;
        left: 40%;
        font-size: 4.8vw;
        position: absolute;
      }
      #fm2{
        top: 10%;
        left: 40%;
        font-size: 4.8vw;
        position: absolute;
      }
      #fm3{
        top: 10%;
        left: 40%;
        font-size: 4.8vw;
        position: absolute;
      }
  }
</style>
