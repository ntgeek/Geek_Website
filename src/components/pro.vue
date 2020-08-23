<template>
  <div id="cat">
    <div id="fp">
      <div id="p1">
      <span>产品经历/UI设计(Product manager/User Interface)</span>
      <span>简称PM/UI。</span>
      </div>
      <P>"好的软件的特征是,明明没用过，但总觉得用过似的。"</P>
      <li>PM是对产品规划管理的人员,负责产品的研发制造、营销渠道等。</li>
      <li>而UI是负责对产品交互界面和效果进行设计的人员</li>
      <li>PM需要缜密的逻辑思维，研究用户心理，把握市场风向。</li>
      <li>PM和UI参与交互设计，为设计和开发确定产品原型和效果</li>
      <li>PM/UI需要很强的沟通嫩里，能够在团队合作中互相帮助。</li>
      <li>PM是一个有思想和大局观的设计家，一个有全局管的掌舵者。</li>
    </div>
    <img id="chanpin" src="http://img.nt-geek.club/chanpin.png">
  </div>
</template>

<script>
    export default {
        name: "SafetyEngineer"
    }
</script>

<style >
  #chanpin {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0%;
    left: 2%;
    height: 48vw;
    width: 45vw;
  }
  #cat{
    position: absolute;
    top:218%;
    left: 0%;
    right:0%;
    height: 70%;
  }
  #fp{
    top: 10vw;
    position: absolute;
    left: 50vw;
    font-size: 1.5vw;
  }
  #p1{
    font-size: 2.3vw;
    font-weight: bolder;
  }
  li{
    font-family: FZYaoti;
  }
  span{
    font-family: FZYaoti;
  }
</style>
