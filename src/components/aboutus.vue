<template>
  <div id="bs">
    <div id="fm1" class="c"><div class="w"> <img id="time" src="http://img.nt-geek.club/shijian.png" class="d">
      <span><br>耐心、毅力是我们必备的品质，每周我们会至少花30小时在实验室中。以保证技术的精进。</span></div></div>
    <div id="fm2" class="c"> <div class="w"> <img id="speech" src="http://img.nt-geek.club/演讲.png" class="d">
      <span><br>技术汇报。每周我们会举行一次技术例会，用来汇报我们的学习内容，供成员之间交流学习。</span></div></div>
    <div id="fm3" class="c"><div class="w"> <img id="douyan" src="http://img.nt-geek.club/duoyuan.png" class="d"><span><br>多元化是我们的特色。在这里，你可以拥有多种方向选择，前后端、安全、AI、算法产品等。</span></div></div>
    <img id="lefts" class="q" src="http://img.nt-geek.club/左上.png">
    <img id="rights" class="q" src="http://img.nt-geek.club/youshang.png">
    <img id="leftx" class="q" src="http://img.nt-geek.club/左下.png">
    <img id="ringtx" class="q" src="http://img.nt-geek.club/youxia.png">
    <img id="chongzi" src="http://img.nt-geek.club/七星虫子.png">
    <img id="hudie" src="http://img.nt-geek.club/hudie.png">
    <img id="about" src="http://img.nt-geek.club/关于.png">
    </div>
</template>

<style scoped>
  @media (min-width: 501px) {
  #about{position: absolute;top: -40%;width: 20vw;left:43%;}
  #bs{position:absolute;left: 10%;top:320vw;}
  #chongzi{position: absolute;top: 13vw;width: 9vw;left: -5%;}
  #hudie{position: absolute;top:20vw;width: 9.5vw;right: -13vw;}
    #leftx{position: absolute;top:33vw;left: 0vw;}
    #ringtx{position: absolute;top:33vw;right: -13vw;}
    #rights{position: absolute;top:-8vw;right: -13vw;}
    #lefts{position: absolute;top:-8vw;}
    .d{width: 9.5vw;height: 13vw;position: relative;top: 5vw;left:18%;}
  .c{float: right;margin-right: 4.5vw;border: 0.8vw solid #8B88B7;border-radius: 3vw; font-size: 1.1vw;
  font-family: FZYaoti;height: 27vw;width: 16vw;position: relative;left: 6vw;top: -1vw;
  }
  .q{width: 12vw;}
  span{position: relative;top: 5vw;left: 13%;width: 15vw;}  }
  @media (max-width: 500px) {
    #bs{position: relative;top: 180vw;height: 170vw;}
    #about{width: 40%;}
    #time{width: 24%;height:80%;}
    #douyan{ width: 26%;height:80%;}
    #lefts{width: 14vw;position: absolute;top: 0%;left: 0%;}
    #rights{width: 14vw;position: absolute;top: 0%;right: 0%;}
    #ringtx{width: 14vw;position: absolute;top: 150vw;right: 0%;}
    #leftx{width: 14vw;position: absolute;top: 150vw;left: 0%;}
    #chongzi{ width: 9vw;position: relative;top: 30vw;}
    #hudie{ width: 12vw;position: relative;top: -25vw;left: 87vw;}
    #speech{ width: 26%;}
    #about{position: absolute;top:-5%;left: 32%;}
    #fm2{position: relative;top:22vw;}
    #fm3{position: relative;top: 29vw;}
    .w{position: relative;top: 5vw;left:-2vw;}
    .c{position: relative;float: right; border: 1.5vw solid #8B88B7;border-radius: 4vw; font-size: 4.4vw;width:80%;height: 35vw;
    top: 16vw;right: 5vw;}
    span{position: relative;top: -30vw;left: 28vw;width:10vw;font-family: FZYaoti;}
    .d{position: relative;top: -1.7vw;left:4.5vw;}
  }
</style>
