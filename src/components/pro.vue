<template>
  <div id="cat">


      <div id="wen2">
          <span id="p1">产品经理/UI设计(PM/UI)</span><br>
          <p>"好的软件的特征是,明明没用过，但总觉得用过似的。"</p>
          <li class="a"> PM是针对某一项或是某一类的产品进行规划和管理的人员，主要负责产品的研发、制造、营销、渠道等工作。</li>
          <li class="a">PM需要拥有缜密的产品逻辑思维，研究用户心理，准确把握互联网市场风向，负责产品的整个生命周期。</li><br><br>
          <li class="a">PM参与产品的UI和交互设计，为设计和开发确定产品原型，能够将产品变得有个性有品位，操作变得舒适简单、自由。</li>
          <li class="a">PM需要一定的文档能力和沟通能力，能够在团队合作的过程中跟各个角色进行有效沟通。</li>
      </div>

      
      <img id="chanpin" src="http://img.nt-geek.club/chanpin.png">
      <img id="chanpin2" src="http://img.nt-geek.club/俩个.png">
      <img id="heiban"  src="http://img.nt-geek.club/黑板.png">
      <img id="prx" src="http://img.nt-geek.club/产品背景.png">


  </div>
</template>

<style scoped>
  @media screen and (min-width:501px) {
    #chanpin2{display: none}
    #prx{
      display: none;
    }
    #heiban{display: none}
    #cat{position:relative;top: 76vw;left: -8%;}
    #chanpin{width: 35vw;height: 43vw;position: absolute;top: 0%;left: 18%;}
    span{font-size: 2vw;font-family: FZYaoti}
    p{color:#7BD3FF;font-size: 2.7vw;font-family: FZYaoti;color:rgb(192, 115, 255);position: relative;top:1.5vw;}
    li{font-size: 2vw;font-family: FZYaoti}
    #wen2{position: absolute;
      font-family: FZYaoti;
      top: 1.5vw;
      left: 66%;
      width: 40vw;}
    #p1{font-size: 3vw}
    .a{position: relative;top:3vw;}
  }
  @media(max-width: 500px){
 
    #chanpin{
      display: none;
      }
   #cat{
    position: relative;
    top: 348vw;
    width: 10%; 
    }



    #chanpin2{
      height: 55vw;
      position: absolute;
      top: 127vw;
      left: 18vw;
      z-index: 200;
      }
    #heiban{
      width: 20%;
       width: 20%;
       position: absolute;
       top: 10vw;
       right: 9%;
       z-index: 2;
       }
    #wen2{
      position: absolute;

      left: 10vw;
      z-index: 2;
      }
    #p1{      
      position: absolute;
      top: 26vw;
      font-size: 7vw;
      }
    span{
      font-size: 4.5vw;
      font-family: FZYaoti;
      }
    p{
      color:rgb(192, 115, 255);
      font-size: 4vw;
      font-family: FZYaoti;
      position: absolute;
      top: 37vw;
      width: 70vw;
      }
    li{
      font-size: 4.5vw;
      font-family: FZYaoti;
      position: relative;
      top: 46vw;
      width: 80vw;
      }
    #prx{
      width: 100%;
      height: 170vw;
      position: absolute;
      top: -0vw;
      left: 0%;
      }
  }

</style>

