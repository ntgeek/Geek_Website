<template>
  <div id="rengong">
    <div id="fz2">
      <div id="pro2">
        <span  id="a2">AI/算法(AI/AIGO)</span><br>
        <p id="a3">"路漫漫其修远兮，非大毅力者不能"</p><br>
        <span>人工智能站在了风口，机器学习和深度学习是它的分支，是团队仍在探索的方向</span><br>
        <span>• AI是研究、开发用于模拟、延伸和扩展人工
智能的理论、方法、技术及应用系统的一
门新的技术科学
• AI的核心就是算法和性能。充满科技感的
背后，是大量的数学统计理论和计算机知识。
• AI领域的研究包括机器人、语言识别、
图像识别、自然语言处理和专家系统等</span>

      </div>
      <span></span>
      <p ></p>
    </div>
    <img id="ai" src="http://img.nt-geek.club/ai.png">
    <img id="ai2" src="http://img.nt-geek.club/yizi12.png">
    <img id="ai3" src="http://img.nt-geek.club/jiqiren.png">
  </div>

</template>

<script>
  export default {
    name: "Ai"
  }
</script>

<style scoped>
  @media screen and (min-width:769px) {
    #a2{
      font-size: 3.5vw;
    }
    #ai2{
      display: none;
    }
    #ai3{
      display: none;
    }
    #ai {
      position: absolute;
      top: 297%;
      right: 7%;
      height: 44vw;
      width: 45vw;
      z-index: -1;
    }

    #fz2 {
      font-family: FZYaoti;
      position: absolute;
      top: 300%;
      right: 50%;
      left: 5%;
    }

    #pro2 {
      top: 3vw;
      font-weight: bolder;
      font-size: 2.5vw;

    }  }
  @media (max-width: 768px) and (min-width:480px ) {
    #ai3 {
      position: absolute;
      width: 20%;
      right: 0%;
    }

    #ai {
      display: none
    }

    #ai2 {
      position: absolute;
      top: 60%;
      height: 50%;
      width: 57%;
      right: 5%;
    }

    #fz2 {
      top: 5%;
      font-family: FZYaoti;
      position: absolute;
      left: 7%;
    }

    #pro2 {
      top: 5%;
      font-weight: bolder;
      font-size: 3vw;
      left: 7%;
    }

    #rengong {
      width: 80%;
      height: 80%;
      left: 10%;
      top: 293%;
      position: absolute;
      border: 1vw solid lightseagreen;
      border-radius: 5vw;

    }
  }
  @media (max-width: 479px) {
    #ai3{
      position: absolute;
      width: 20%;
      right: 0%;
    }
    #ai{display: none}
    #ai2{
      position: absolute;
      top: 67%;
      height:43% ;
      width: 57%;
      right: 5%;
    }
    #fz2 {
      top: 5%;
      font-family: FZYaoti;
      position: absolute;
      left:7%;      right: 5%;
    }
    #pro2 {
      top: 5%;
      font-weight: bolder;
      font-size: 3vw;
      left:7%;
    }
    #rengong{
      width: 80%;
      height: 80%;
      left: 10%;
      top: 292%;
      position: absolute;
      border: 1vw solid lightseagreen;
      border-radius: 5vw;
      z-index: 10;
    }
    #a3{
      font-size: 5vw;
      color: lightgreen;
    }
    #a2{
      font-size: 5vw;
    }
  }
</style>
