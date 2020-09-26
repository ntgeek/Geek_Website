
<template>
  <div id="foremo">
<img  id="b" src="http://img.nt-geek.club/question.png">
<img  id="decoration" src="http://img.nt-geek.club/s.png" alt="">

<img  id="decoration1" src="http://img.nt-geek.club/e.png" alt="">
<img  id="decoration2" src="http://img.nt-geek.club/g.png" alt="">
<img  id="decoration3" src="http://img.nt-geek.club/1.png" alt="">
<img  id="decoration4" src="http://img.nt-geek.club/%E7%99%BD.png" alt="">

<img  id="decoration5" src="http://img.nt-geek.club/%E7%99%BD.png" alt="">

    

    <div id="allquestion">

      <br><br><br><br>
        <div id="question1">
            <button v-on:click="btn1()">
                <li>1.什么是Geek(极客)？Geek精神又是什么？</li>
            </button> <br>

            <span id="yinshen1"  class="a" style="display: none"><li>答：拥有好奇之心，改变之力，爱钻研，能折腾。</li></span><br><br>
        </div>


        <div id="question2">
            <button v-on:click="btn2">
              <li>2.招新是安排在什么时间？</li>
            </button><br>

            <span id="yinshen2" class="a" style="display: none"><li>答：按照惯例，正式招新时间是在9月下旬~10月上旬，不过今年可能会有一些改动，地点一般在9号教学楼。 如果想要了解加入我们，可以加入Q群，招新具体的安排/变动会在招新群通知的。</li></span><br><br>
        </div>


        <div id="question3">
            <BUTTON v-on:click="btn3()">
              <li>3.我们有考核吗？考核的流程是怎样的呀？</li>
            </BUTTON><br>

            <span id="yinshen3" class="a" style="display: none"><li>答：嗯...考核还是比较严格的, 不过别紧张hhh, 开玩笑啦~我们一共有一轮笔试和两轮面试。第一轮笔试，考虑到有技术和经验尚缺但学习能力很强的新生，第一轮多是一些视野性的题目（这一轮选拔淘汰率并不高）。第二轮单独面试，话题包括根据你的笔试提出技术相关的问题、你的兴趣爱好、个人看法。最后一轮群面。首先问及时间分配上的问题（请避免时间冲突的情况），其次我们会向你提出各种稀奇古怪的问题。这一轮中许多题目其实并不难，也无标准答案，重在考察同学们在压力下的逻辑思维。全部通过就可以进入考核期成为预备成员啦。
            </li></span><br><br>
        </div>


        <div id="question4">
            <BUTTON v-on:click="btn4()">
              <LI>4.考核是怎样的形式？</LI>
            </BUTTON><br>

            <span id="yinshen4" class="a" style="display: none"><li>答：在考核期间每人会拥有一位'长者'带你入门，学习技术与知识，交流经验与想法。完成每周的新人任务后再进行一次考核筛选后就可以成为Geek组正式成员啦！在考核期必须满足每周30个小时在实验室哦,所以考核期也不可以懈怠哦！
            </li></span><br><br>
        </div>


        <div id="question5">
            <BUTTON v-on:click="btn5()"> 
              <LI>5.加入Geek组的要求比较严格，进来之后都有什么福利呢？</LI>
            </BUTTON><br>

            <span id="yinshen5" class="a" style="display: none"><li>答：1对1的新人指引，每一个成员都有会一个mentor, 带你初入门槛，与你一同成长张扬个性，组内管理比较宽松,在尊重其他人的前提下可以尽情发挥自己的个性。打破平淡，与同样疯狂的人把你疯狂的idea实现出来，磨砺耐性、培养互联网思维、成就自己的梦想。丰富资源，Lab设备/网络资源充足（可能是学校实验室最好的条件之一），闲暇之余也有组织活动与聚餐。我们组的指导老师是整个团队的创始人, 非常nice且有趣, 有许多的故事等你来听~
            </li></span><br>
        </div>


        <div id="question6">
            <BUTTON v-on:click="btn6()">
              <li>6.进入团队会影响我的日常学习吗？</li>
              </BUTTON><br>

            <span ID="yinshen6" class="a" style="display: none"><li>答：你要知道大学是一个可以自由安排自己学习生活的地方。如果你想在上课之余充实自己、激励自己，最好的方法就是和比自己更优秀的人在一起。团队不缺优秀的人，而我们也期待同样优秀的你，让我们一起前进！总有比你优秀的人比你更努力！小组里也有不少保研, 考研的前辈们, 大部分都能很好的找到一个平衡点, 而且团队的经历对你日后读研, 工作都大有裨益, 导师/面试官更倾向选择有过团队文化和实践的人
            </li></span><br>
        </div>


        <div id="question7">

            <BUTTON v-on:click="btn7()">
              <li>7.老师以及学长学姐们的期望是什么?</li>
            </BUTTON>

            <span id="yinshen7" class="a" style="display: none"><li>答：我们希望你有很强的自学能力，同时关注新事物、新技术，喜欢挑战，乐观开朗，逻辑性强，善于和各种文化的人合作.“每个人都可以做自己想做的事情，每个人的方向不一样。如果你想做某个产品，或者你有一个不错的 idea，那么就可以找志同道合的人一起合作。”
            </li></span><br><br><br><br><br>
        </div>

    </div>

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
    }
  }
</script>

<style scoped>
  @media(min-width: 501px) {
      #foremo{
        position: absolute;
        top: 394vw;
        left: 0%;
        width: 100%;
      }

      #b{
        z-index: 10;
        position: absolute;
        top: 2vw;
        right: 22%;
        width: 80%;
      }

      #bi2{
        display: none;
      }
#decoration{
  z-index: 10;
  position: absolute;
  top: 12vw;
  width: 23vw;
  left: -7%;
}

#decoration1{
  z-index: 10;
  position: absolute;
  top: 20vw;
  width: 20vw;
  left: 81%;
}

#decoration2{
  z-index: 10;
  position: absolute;
  top: 43vw;
  width: 12vw;
  left: 90%;
}

#decoration3{
  z-index: 10;
  position: absolute;
  top: 40vw;
  width: 15vw;
  left: -8%;
}

#decoration4{
  z-index: 10;
  position: absolute;
  top: 30vw;
  width: 10vw;
  left: 6%;
}

#decoration5{
  z-index: 10;
  position: absolute;
  top: 60vw;
  width: 14vw;
  left: 4%;
}

#decoration5{
  z-index: 10;
  position: absolute;
  top: 38vw;
  width: 8vw;
  left: 84%;
}






    span{
      line-height: 4vw;
      position: relative;
      overflow: hidden;
      left: 22%;
      width: 60vw;
      font-size: 1.8vw;
       font-family: FZYaoti;
       text-align: left;
       display: block;
       top: 2vw;
    }


      button{
        position: relative;
        background: #8dc6ff;
        height:5vw;
        color: white;
        border: none;
        left: 20%;
        position: relative;
        font-family:FZYaoti;
        transition-duration: 0.4s;
        outline: none;
        text-align: left;
        top: 2vw;
        width: 60%;
        cursor: pointer;
      }

      button:hover::before{
        transition-duration: 2s;
        font-size: 1.4vw;
        transform: scale(1.3);
      }

      button:hover{
        color: #3e7af6;
        transform: scale(1.07);
        background-color: #9acdff;
      }

      li{
        font-size: 1.8vw;
        position: relative;
        left: 3%;
        width: 58vw;
        right: 10%;
        line-height: 4vw;
        }
    
    #allquestion{
      position: absolute;
      left: 0%;
      right: 0%;
      top: 7vw;
      background-color: #8dc6ff;
    }



  }

  @media (max-width: 500px) {
    #b{width: 80vw;position:absolute;top: 0%;left: -3%;}
    #foremo {
      position: relative;
      top: 350vw;
      background-color: #8dc6ff;
      width: 100vw;
    }
    .a {
      text-align: center;
      font-size: 1.4vw;
      font-family: FZYaoti;
    }
    span{
      line-height: 4vw;
      position: relative;
      overflow: hidden;
      left: 4%;
      width: 87vw;
      font-size: 2vw;
      overflow: auto;
      font-family: FZYaoti;
      text-align: left;
      display: block;
      top: 2vw;
      
    }
    button{
      position: relative;
      background: #8dc6ff;
      height:8vw;
      color: white;
      border: none;
      position: relative;
      font-family:FZYaoti;
      transition-duration: 0.4s;
      outline: none;
      text-align: left;
      top: 1vw;
      width: 100vw;
    }
    button:hover::before{
      transition-duration: 2s;
      font-size: 1.4vw;
      transform: scale(1.3);
    }
    button:hover{
      color: #3e7af6;
      font-size: 1.8vw;
      transform: scale(1.07);
      background-color: #9acdff;
    }
    li{
      font-size: 2.6vw;
      position: relative;
      left: 20vw;
      width: 58vw;
      line-height: 4vw;
    }
    li{position: relative;top: 3vw;line-height: 1.5;font-size:2.8vw;right:20 vw;}
    #question1{position: relative;top:-10vw;}
    #question2{position: relative;top:-15vw;}
    #question3{position: relative;top:-18vw;}
    #question4{position: relative;top:-22vw;}
    #question5{position: relative;top:-26vw;}
    #question6{position: relative;top:-25vw;}
    #question7{position: relative;top:-25vw;}
  #decoration{
  z-index: 10;
  position: absolute;
  top: 12vw;
  width: 23vw;
  left: -7%;
}

#decoration1{
  z-index: 10;
  position: absolute;
  top: 20vw;
  width: 20vw;
  left: 81%;
}

#decoration2{
  z-index: 10;
  position: absolute;
  top: 43vw;
  width: 12vw;
  left: 90%;
}

#decoration3{
  z-index: 10;
  position: absolute;
  top: 40vw;
  width: 15vw;
  left: -8%;
}

#decoration4{
  z-index: 10;
  position: absolute;
  top: 30vw;
  width: 10vw;
  left: 6%;
}

#decoration5{
  z-index: 10;
  position: absolute;
  top: 60vw;
  width: 14vw;
  left: 4%;
}

#decoration5{
  z-index: 10;
  position: absolute;
  top: 38vw;
  width: 8vw;
  left: 84%;
}
    }
  
</style>
