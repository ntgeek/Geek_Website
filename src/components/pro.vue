<template>
  <div id="cat">
    <div id="wen2">
      <span id="p1">产品经理/UI设计(PM/UI)</span><br>
      <p>"好的软件的特征是,明明没用过，<br>但总觉得用过似的。"</p>
      <li class="a"> PM是针对某一项或是某一类的产品进行<br>规划和管理的人员，主要负责产品的研发、制<br>造、营销、渠道等工作。</li>
      <li class="a">PM需要拥有缜密的产品逻辑思维，研究用<br>户心理，准确把握互联网市场风向，负责产<br>品的整个生命周期。</li>
      <li class="a">PM参与产品的UI和交互设计，为设计和开<br>发确定产品原型，能够将产品变得有个性有<br>品位，操作变得舒适简单、自由。</li>
      <li class="a">PM需要一定的文档能力和沟通能力，能够<br>在团队合作的过程中跟各个角色进行有效沟<br>通。</li>
    </div>
    <img id="chanpin" src="http://img.nt-geek.club/chanpin.png">
    <img id="chanpin2" src="http://img.nt-geek.club/俩个.png">
    <img id="heiban"  src="http://img.nt-geek.club/黑板.png">
  </div>
</template>

<style scoped>
  @media screen and (min-width:501px) {
    #chanpin2{display: none}
    #heiban{display: none}
    #cat{position:relative;top: 82vw;left: -8%;}
    #chanpin{width: 35vw;height: 43vw;position: absolute;top: 0%;left: 18%;}
    span{font-size: 2vw;font-family: FZYaoti}
    p{color:#7BD3FF;font-size: 2.7vw;font-family: FZYaoti;color:rgb(192, 115, 255);position: relative;top:1.5vw;}
    li{font-size: 2vw;font-family: FZYaoti}
    #wen2{position: absolute;
      font-family: FZYaoti;
      top: 1.5vw;
      left: 66%;
      width: 100%;}
    #p1{font-size: 3vw}
    .a{position: relative;top:3vw;}
  }
  @media(max-width: 500px){
    #cat{position: relative;top: 162vw;height:170vw;width: 100%;  background-image:url("http://img.nt-geek.club/产品背景.png"); }
    #chanpin{display: none}
    #chanpin2{height:38% ;width: 76%;position: absolute;top: 100vw;left: 14%;}
    #heiban{width: 20%; width: 20%;position: absolute;top: 10%;right: 3%;}
    #wen2{position: absolute;top: 14%;left: 12%;}
    #p1{font-size: 6vw;}
    span{font-size: 4.5vw;font-family: FZYaoti}
    p{color:rgb(192, 115, 255);;font-size: 4vw;font-family: FZYaoti;position: relative;top: 1.5vw;}
    li{font-size: 3.8vw;font-family: FZYaoti;position: relative;top: 5vw;}
  }

</style>

