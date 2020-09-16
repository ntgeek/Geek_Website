<template>
  <div id="fontend" class="bm">
    <div id="bold1">
      <div  id="fz1">
        <span id="fq1">"前后端开发（Front&Back)"</span><br>
        <p  id="we1">“Stay Hungry,Stay Foolish” </p>
        <br>
        <div  id="fz2">
          <span id="we">我们这里有各种各样的程序猿</span> <br>
          <span >• 前端:  前端开发是创建Web或app视觉界面呈现给用户的过程通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，实现互联网产品的用户界面交互。
• 后端:  通常也称服务器端开发。不对用户显示,负责处理前端的请求，进行逻辑处理和数据交互。
• 移动端:  移动应用开发是为了小型、无线计算设备编写软件的流程和程序的集合，像智能手机或者平板电脑。</span>
        </div>

      </div>
      <img id="monkey" src="http://img.nt-geek.club/houzi.png">
      <img id="houzi" src="http://img.nt-geek.club/shangbanshen.png" >
      <img id="xiangjiao" src="http://img.nt-geek.club/香蕉.png">
    </div>
  </div>
</template>

<script>
  function code(text){
    let i =0;
    setInterval(function(){
      i++;
      window.history.pushState(null,null, text.substr(0,i))

    },100)
  }
  code('加入GEEK组，和我们一起做追月亮的人')
</script>

<style>
  @media screen and (min-width:769px){
    #xiangjiao{
      display: none;
    }
    #houzi{
      display: none;
    }
    #monkey{
      position: absolute;
      top:5%;
      right: 8%;
      width: 34vw;
      height: 85%;
      z-index: 0;
    }
    #we{
      font-size: 2.5vw;
    }

    #fontend{
      position: absolute;
      top:130%;
      left: 0%;
      right:0%;
      height: 70%;
    }
    #fz1{
      position: absolute;
      top:3.5vw;
      font-family: FZYaoti;
      z-index: 1;
      left: 6%;
      right: 48%;
    }
    #fz2{
      font-size: 1.5vw;
    }
    #fq1{
      font-size: 3.5vw;

    }

    p{
      color:#7BD3FF;
      font-size: 2vw;
    }
    span{font-size: 2vw}
  }
  @media (max-width: 768px) and (min-width: 480px) {
    #monkey{display: none}
    #bold1 {
      top: 108%;
      width: 80%;
      height: 160%;
      left: 10%;
      position: absolute;
      border: 1vw solid cornflowerblue;
      border-radius: 5vw;
      z-index: 10;
    }
    #fz2 {
      font-size: 2.8vw;
    }
    #fq1 {
      font-size: 2.8vw;
      font-weight: bolder;
    }
    #xiangjiao{
      position: absolute;
      top: 1%;
      width: 20%;
      right: 0%;
    }
    #houzi{
      osition: absolute;
      right: 0%;
      top: 60%;
      width: 60%;
      height:30%;
      z-index: 0;
    }
  }
  @media (max-width: 479px) {
    #bold1{
      top:108%;
      width: 80%;
      height: 80%;
      left: 10%;
      position: absolute;
      border: 1vw solid cornflowerblue;
      border-radius: 5vw;
      z-index: 10;
    }
    #fz2{
      font-size:5vw;
    }
    #fq1{
      font-size: 5vw;
      font-weight: bolder;
    }

    #monkey{display: none}
    #houzi{
      position: absolute;
      right: 7%;
      top: 65%;
      width: 60%;
      height:30%;
      z-index: 0;
    }
    #fz1{
      position: absolute;
      top:3%;
      left:7%;
      font-family: FZYaoti;
      z-index: 10;
      right: 5%;
    }
    #xiangjiao{
      position: absolute;
      width: 20%;
      right: 0%;
    }
    #we1{
      color: dodgerblue;
      font-size: 5vw;
    }
span{
  font-size: 3.8vw;
}
  }

  span{
    word-break:normal;
    width:auto;
    display:block;
    white-space:pre-wrap;
    word-wrap : break-word ;
    overflow: hidden ;
  }

</style>

