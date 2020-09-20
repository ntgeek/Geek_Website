<template>
  <div id="cat">
    <div id="fp">

      <span id="p1">产品经理/UI设计(PM/UI)</span><br>
      <br>
      <span id="mingyan2">"好的软件的特征是,明明没用过，但总觉得用过似的。"</span>
      <span id="pm_introudce">
• PM是针对某一项或是某一类的产品进行规划和管理的人员，主要负责产品的研发、制造、营销、渠道等工作。
• PM需要拥有缜密的产品逻辑思维，研究用户心理，准确把握互联网市场风向，负责产品的整个生命周期。
• PM参与产品的UI和交互设计，为设计和开发确定产品原型，能够将产品变得有个性有品位，操作变得舒适简单、自由。
• PM需要一定的文档能力和沟通能力，能够在团队合作的过程中跟各个角色进行有效沟通。
      </span>
    </div>
    <img id="chanpin" src="http://img.nt-geek.club/chanpin.png">
    <img id="chanpin2" src="http://img.nt-geek.club/俩个.png">
    <img id="heiban"  src="http://img.nt-geek.club/黑板.png">
  </div>
</template>

<script>
  export default {
    name: "SafetyEngineer"
  }
</script>

<style >
  @media screen and (min-width:769px) {
    #heiban{display: none}
    #chanpin2{display: none}
    #chanpin {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 5%;
      left: 0%;
      height: 43vw;
      width: 35vw;
    }

    #cat {
      position: absolute;
      top: 210%;
      left: 2%;
      right: 0%;
      height: 70%;
    }


    #fp {
      top: 3vw;
      position: absolute;
      left: 46%;
      font-family: FZYaoti;
      right: 9%;

    }

    #p1 {
      font-size: 3vw;
      font-weight: bolder;
      color: black;
    }
    #pm_introudce{
      color: black;
    }
    #mingyan2{
      color: rgb(192, 115, 255);
      top: 10vw;
      font-size: 2.5vw;
    }
  }
  @media (max-width: 768px) and (min-width:480px ){
    #ai3{
    }
    #chanpin{
      display: none;
    }
    #chanpin2{
      position: absolute;
      top: 60%;
      height:40% ;
      width: 68%;
      right: 5%;
    }
    #fp {
      top: 4%;
      position: absolute;
      font-size: 3vw;
      left:7%;
    }
    #p1 {
      top: 4%;
      font-size: 3vw;
      font-weight: bolder;
    }
    #cat{
      top:200%;
      width: 80%;
      height: 80%;
      left: 10%;
      position: absolute;
      border: 1vw solid mediumpurple;
      border-radius: 5vw;
      z-index: 10;
    }
    #heiban{position: absolute;
      width: 20%;
      right: 0%;}
  }
  @media (max-width: 479px) {
    #ai3{
    }
    #chanpin{
      display: none;
    }
    #chanpin2{
      position: absolute;
      top: 70%;
      height:38% ;
      width: 76%;
      right: 5%;
    }
    #fp {
      top: 4%;
      position: absolute;
      font-size: 3vw;
      left:7%;
      right: 5%;
    }
    #p1 {
      top: 4%;
      font-size: 5vw;
      font-weight: bolder;
    }
    #cat{
      top:200%;
      width: 80%;
      height: 80%;
      left: 10%;
      position: absolute;
      border: 1vw solid mediumpurple;
      border-radius: 5vw;
      z-index: 10;
    }
    #heiban{
      position: absolute;
      width: 20%;
      right: 0%;}
    #mingyan2{
      color: mediumpurple;
      font-size: 4vw;
    }
  }
  li{
    font-family: FZYaoti;
  }
  span{
    font-family: FZYaoti;
  }
  </style>



