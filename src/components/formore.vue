<template>
  <div  id="foremore">
    <img  id="bi" src="http://img.nt-geek.club/More.png">
    <img  id="bi2" src="http://img.nt-geek.club/tiane.png">
    <div id="question">
     <button v-on:click="btn1()">
    <li>1.什么是Geek(极客)？Geek精神又是什么？(暂定)</li>
     </button> <br>
      <div id="yinshen1"  class="a" style="display: none">拥有好奇之心，改变之力，爱转眼，能折腾。</div>
      <button v-on:click="btn2"><li>2.招新时间是什么时候</li></button><br>
      <div id="yinshen2" class="a" style="display: none">按照惯例，正式招新时间是在9月下旬~10月上旬，不过今年可能会有一些改动，地点一般<br>
在9号教学楼。 如果想要了解加入我们，可以加入Q群，招新具体的安排/变动会在招新群
        通知的。</div>
      <BUTTON v-on:click="btn3()"><li>3.我们有考核吗？考核的流程是怎样的呀？</li></BUTTON><br>
      <div id="yinshen3" class="a" style="display: none">
        emmmm...考核还是比较严格的, 不过别紧张hhh, 开玩笑啦~<br>
        我们一共有一轮笔试和两轮面试。<br>
        第一轮笔试，考虑到有技术和经验尚缺但学习能力很强的新生，第一轮多是一些视野<br>性的题目（这一轮选拔淘汰率并不高）。
        第二轮单独面试，话题包括根据你的笔试<br>提出技术相关的问题、你的兴趣爱好、个人看法。<br>
        最后一轮群面。首先问及时间分配上的问题（请避免时间冲突的情况），其次我们会<br>向你提出各种稀奇古怪的问题。这一轮中许多题目其实并不难，也无标准答案，重在<br>考察同学们在压力下的逻辑思维。
        全部通过就可以进入考核期成为预备成员啦。
      </div>
      <BUTTON v-on:click="btn4()"><LI>4.那考核期又是怎么的？</LI></BUTTON><br>
      <DIV id="yinshen4"class="a" style="display: none">在考核期间每人会拥有一位'长者'带你入门，学习技术与知识，交流经验与想法。完<br>成每周的新人任务后再进行一次考核筛选后就可以成为Geek组正式成员啦！
        在考核<br>期必须满足每周30个小时在实验室哦,所以考核期也不可以懈怠哦！
      </DIV>
      <BUTTON v-on:click="btn5()"> <LI>5.加入Geek组的要求比较严格，进来之后都有什么福利呢？</LI></BUTTON><br>
      <DIV id="yinshen5" class="a" style="display: none">
        1对1的新人指引，每一个成员都有会一个mentor, 带你初入门槛，与你一同成长
        张扬个性，组内管理比较宽松,在尊重其他人的前提下可以尽情发挥自己的个性。
        打破平淡，与同样疯狂的人把你疯狂的idea实现出来，磨砺耐性、培养互联网思维、成就自己的梦想。
        丰富资源，Lab设备/网络资源充足（可能是学校实验室最好的条件之一），闲暇之余也有组织活动与聚餐。
        我们组的指导老师是整个团队的创始人, 非常nice且有趣, 有许多的故事等你来听~
      </DIV>
      <BUTTON v-on:click="btn6()"> <li>6.进入团队会影响我的日常学习吗？</li></BUTTON><br>
      <DIV ID="yinshen6" class="a" style="display: none">你要知道大学是一个可以自由安排自己学习生活的地方。如果你想在上课之余充实自
        己、激励自己，最好的方法就是和比自己更优秀的人在一起。团队不缺优秀的人，而我们也期待同样优秀的你，让我们一起前进！
        总有比你优秀的人比你更努力！
        小组里也有不少保研, 考研的前辈们, 大部分都能很好的找到一个平衡点, 而且团队的经历对你日后读研, 工作都大有裨益, 导师/面试官更倾向选择有过团队文化和实践的人
      </DIV>
      <BUTTON v-on:click="btn7()"><li>7.大哥哥大姐姐们的期望是什么?</li></BUTTON><br>
      <div id="yinshen7"class="a" style="display: none">我们希望你有很强的自学能力，同时关注新事物、新技术，喜欢挑战，乐观开朗，逻辑性强，善于和各种文化的人合作。
        “每个人都可以做自己想做的事情，每个人的方向不一样。如果你想做某个产品，或者你有一个不错的 idea，那么就可以找志同道合的人一起合作。”
      </div>
    </div>
    <div></div>
    <span id="mf4"></span>
  </div>
</template>

<script>
  export default {
    el:"#foremore",
    data:{},
    methods:{
      btn1(){
        var value=document.getElementById("yinshen1").style.display;
        if(value=="none"){document.getElementById("yinshen1").style.display="block";}
        else if(value=="block"){document.getElementById("yinshen1").style.display="none";}
      },
      btn2(){
        var value=document.getElementById("yinshen2").style.display;
        if(value=="none"){document.getElementById("yinshen2").style.display="block";}
        else if(value=="block"){document.getElementById("yinshen2").style.display="none";}
      },
      btn3(){
        var value=document.getElementById("yinshen3").style.display;
        if(value=="none"){document.getElementById("yinshen3").style.display="block";}
        else if(value=="block"){document.getElementById("yinshen3").style.display="none";}
      },
      btn4(){
        var value=document.getElementById("yinshen4").style.display;
        if(value=="none"){document.getElementById("yinshen4").style.display="block";}
        else if(value=="block"){document.getElementById("yinshen4").style.display="none";}
      },
      btn5() {var value=document.getElementById("yinshen5").style.display;
      if(value=="none"){document.getElementById("yinshen5").style.display="block";}
  else if(value=="block"){document.getElementById("yinshen5").style.display="none";}
  },
      btn6(){
        var value=document.getElementById("yinshen6").style.display;
        if(value=="none"){document.getElementById("yinshen6").style.display="block";}
        else if(value=="block"){document.getElementById("yinshen6").style.display="none";}
      },
      btn7(){
        var value=document.getElementById("yinshen7").style.display;
        if(value=="none"){document.getElementById("yinshen7").style.display="block";}
        else if(value=="block"){document.getElementById("yinshen7").style.display="none";}
      },
      change(){

      }
    }
  }
</script>

<style scoped>
  @media (min-width:769px){
    .a{
      text-align: center;
      font-size: 1.4vw;
      font-family: FZYaoti;
    }
    button{
      font-family: FZYaoti;
      background: transparent;
      border: 0;
      border-radius: 30px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 2vw;
      padding: 1vw 2vw;
      position: relative;
    }
    button:before {
      transition: all 0.6s cubic-bezier(0.7, -0.2, 0.2, 1);
      content: '';
      width: 0%;
      height: 100%;
      background-repeat: no-repeat;
      background-color: #5993ff;
      position: absolute;
      top: 0;
      left: -0%;
    }

    button span {
      mix-blend-mode:normal;
    }

    button:hover:before {
      background: #5993ff;
      width: 100%;
    }
    #question{
      position: absolute;
      left: 18%;
      top: 13vw;
      font-size: 2vw;
    }
    #bi2{display: none}
    #foremore{
      position: absolute;
      width: 100%;
      top: 610%;
    }
    #bi{
      position: absolute;
      width: 91.5%;
      left: 3%;
      right: 3%;
    }
  }
  @media (max-width: 768px) and (min-width: 480px){
    #bi{
      display: none;
    }
    #bi2{
      position: absolute;
      top: 710%;
      width: 100%;
      right: 0%;
    }
  }
  @media(max-width: 479px){
    .a{
      text-align: center;
      font-size: 1.4vw;
      font-family: FZYaoti;
    }
    button{
      background: transparent;
      border: 0;
      border-radius: 0;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 2.4vw;
      padding: 1vw 5vw;
      position: relative;
      line-height: 5vw;
    }
    button:before {
      transition: all 0.6s cubic-bezier(0.7, -0.2, 0.2, 1);
      content: '';
      width: 0%;
      height: 100%;
      background-repeat: no-repeat;
      background-color: #5993ff;
      position: absolute;
      top: 0;
      left: -0%;
    }

    button span {
      mix-blend-mode:normal;
    }

    button:hover:before {
      background: #5993ff;
      width: 100%;
    }
    #bi{
      display: none;
    }
    #bi2{
      position: absolute;
      top: 675%;
      width: 100%;
      right: 0%;
    }
    #question{
      position: absolute;
      left: 13%;
      top: 1030vw;
      font-size: 2vw;
    }
  }
</style>
