<template>
  <div  id="fm">
    <img id="about" src="http://img.nt-geek.club/关于.png">
    <div  id="f2">
      <img id="speech" src="http://img.nt-geek.club/演讲.png">
      <span id="fm2">技术汇报。每周我们会举行一次技术例会，用来汇报我们的学习内容，供成员之间交流学习。</span>
    </div>

    <div id="f1">
      <img id="time" src="http://img.nt-geek.club/shijian.png">
      <span id="fm1">耐心、毅力是我们必备的品质，每周我们会至少花30小时在实验室中。以保证技术的精进。</span>
    </div>

    <div  id="f3">
      <img id="douyan" src="http://img.nt-geek.club/duoyuan.png">
      <span id="fm3">多元化是我们的特色。在这里，你可以拥有多种方向选择，前后端、安全、AI、算法产品等。</span>
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
      top:9.7vw;
      position: absolute;
      width: 20vw;
      left:35.5%;

    }
    #fm{
      position: absolute;
      top: 440%;
      left: 4%;
      right: 4%;
    }
    #speech{
      top:4.5%;
      left: 18%;
      position:absolute;
      width: 9.5vw;
      height:13vw;
    }

    #time{
      top:4.5%;
      left: 17%;
      right: 15%;
      position:absolute;
      width: 9.5vw;
      height:13vw;
    }

    #douyan{
      top:4.5%;
      left: 20%;
      right: 15%;
      position:absolute;
      width: 10vw;
      height:13vw;
    }

    #lefts{
      position: absolute;
      top:12vw;
      width: 12%;
      left: 2vw;
    }
    #rights{
      position: absolute;
      top:12vw;
      width: 12%;
      right: 2vw;
    }
    #leftx{position: absolute;
      top:50vw;
      width: 12%;
      left: 2vw;}
    #ringtx{position: absolute;
      top:50vw;
      width: 12%;
      right: 2vw;}


    #chongzi{
      position: absolute;
      top: 30vw;
      width: 9vw;
      left: 0%;
    }
    #hudie{
      position: absolute;
      top:40vw;
      width: 9.5vw;
      right: 2vw;
    }
    #f1{
      height: 27vw;
      top: 18vw;
      position: absolute;
      left: 11%;
      width: 16vw;
      border: 0.8vw solid #8B88B7;
      border-radius: 3vw;
      font-size: 1.1vw;
    }
    #f2{
      height: 27vw;
      top: 18vw;
      position: absolute;
      left: 37%;
      width: 16vw;
      border: 3px;
      border: 0.8vw solid #8B88B7;
      border-radius: 3vw;
      font-size: 1.1vw;
    }
    #f3{
      height: 27vw;
      top: 18vw;
      position: absolute;
      width: 16vw;
      left: 63%;
      border: 3px;
      color: black;
      border: 0.8vw solid #8B88B7;
      border-radius: 3vw;
      font-size: 1.1vw;
    }
    #fm1{
      left: 12%;
      right:8%;
      font-size: 110%;
      position: absolute;
      top: 57%;
    }
    #fm2{
      left: 12%;
      right:8%;
      font-size: 110%;
      position: absolute;
      top: 57%;
    }
    #fm3{
      left: 12%;
      right:8%;
      font-size: 110%;
      position: absolute;
      top: 57%;
    }
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
      width: 26%;
      height:80%;
    }
    #time{
      top:10%;
      left: 4vw;
      position: absolute;
      width: 24%;
      height:80%;}
    #douyan{
      top:8%;
      left: 4vw;
      position: absolute;
      width: 26%;
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
      top: 11%;
      left: 40%;
      font-size: 4.5vw;
      position: absolute;
    }
    #fm2{
      top: 11%;
      left: 40%;
      font-size: 4.5vw;
      position: absolute;
    }
    #fm3{
      top: 11%;
      left: 40%;
      font-size: 4.5vw;
      position: absolute;
    }
  }
</style>
