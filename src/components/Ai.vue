<template>
  <div id="rengong">



    <div id="wen2">
        <span id="a1">AI/算法(AI/AIGO)</span><br>
        <p id="we2">"路漫漫其修远兮，非大毅力者不能"</p><br>
        <span id="a2">人工智能站在了风口，机器学习和深度学习是它的分支，是团队仍在探索的方向。</span><br>
        <li>当下AI技术的应用涉及到图像处理、自然语言处理、推荐系统和无人驾驶等领域。</li><br>
        <li>AI的核心就是算法和性能。充满科技感的背后，是大量的数学统计理论和计算机知识。</li>
        <li>AI领域的研究包括机器人、语言识别、图像识别、自然语言处理和专家系统等。</li>   
    </div>


        <img id="ai" src="http://img.nt-geek.club/ai.png">
        <img id="ai2" src="http://img.nt-geek.club/yizi12.png">
        <img id="ai3" src="http://img.nt-geek.club/jiqiren.png">
        <img id="aix" src="http://img.nt-geek.club/ai背景.png">

  </div>



</template>
<style scoped>
@media (min-width: 501px) {
#ai{position:absolute;top:-2%;left: 42%;height: 44vw;width: 45vw;}
#ai2{display: none}
#aix{display:none}
#ai3{display: none;}
#rengong{position: relative;top:128vw;left:15%;}
#a1{font-size: 3vw}
#we2{font-size: 2.5vw;position: relative;top: 0.5vw;}
#wen2{position: relative;top: 3vw;width: 40vw;}
span{font-size: 2vw;font-family: FZYaoti}
p{color:#7BD3FF;font-size: 2.7vw;font-family: FZYaoti;line-height: 2}
li{font-size: 2vw;font-family: FZYaoti;position: relative;top:1.5vw;}
}
@media (max-width: 500px){
#rengong{
  position: relative;
  top: 688vw;
  width: 9.5%; 
  height: 170vw;
  left: 0%;
  }
  #ai{display: none}

  #ai2{ 
     height:40%;
     width: 60%;
     position: absolute;
     top: 119vw;
     left: 40%;
     z-index: 2
     }

  #ai3{
    width: 20%;
    top: 10%;
    right: 3%;
    position: absolute;
    z-index: 2
    }

  #a1{
    font-size: 7vw;
    }

  #a2{
    position: relative;
  top: 1.5vw;
  z-index: 2
  }

  #wen2{
    position: absolute;
    top: 30vw;
    left: 11%;
    z-index: 2;
    width: 80vw;
    }

  #we2{
    font-size: 5vw;
    position: relative;
    top: 1.5vw;
    z-index: 2
    }

  #aix{
    width: 104%;
    height: 170vw;
    position: absolute;
    top: 0vw;
    left: 0%;
    }

  span{
    font-size: 4.5vw;
    font-family: FZYaoti
    }

  p{
    color:#7BD3FF;
    font-size: 6vw;
    font-family: FZYaoti;
    }

  li{
    font-size: 4.5vw;
  font-family: FZYaoti;
  position: relative;
  top:4vw;
  }

}
</style>
