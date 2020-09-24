<template>
  <div id="fontend">
    <div id="wen1">
      <span id="fq1">"前后端开发(Front&Back)"</span><br>
      <p  id="we1" >“Stay Hungry,Stay Foolish” </p><br>
      <span id="fq2">我们这有各式各样的程序员</span>
      <li>前端:前端开发是创建Web或app视觉界面呈<br>现给用户的过程通过HTML，CSS及JavaScript以<br>及衍生出来的各种技术、框架、解决方案，实<br>现互联网产品的用户界面交互。</li>
      <li>后端:通常也称服务器端开发。不对用户显<br>示,负责处理前端的请求，进行逻辑处理和数据<br>交互。</li>
      <li>移动端:  移动应用开发是为了小型、无线计算<br>设备编写软件的流程和程序的集合，像智能手<br>机或者平板电脑。</li>
    </div>
    <img id="monkey" src="http://img.nt-geek.club/houzi.png">
    <img id="houzi" src="http://img.nt-geek.club/shangbanshen.png">
    <img id="xiangjiao" src="http://img.nt-geek.club/香蕉.png">
  </div>
</template>
<style scoped>
  @media screen and (min-width:501px){
  #fontend{
    position: relative;
    top:53%;
    height: 60vw;
    left: -7%;
  }
  #xiangjiao{display: none;}
  #houzi{display: none;}
  #monkey{
    width: 34vw;
    height: 43vw;
    position: absolute;
    top: 18%;left: 75%;
  }
#wen1{position: relative;
  top:19%;
  left: 20%;
  font-family: FZYaoti;
}
#fq1{font-size: 3.5vw;
}
#fq2{font-size: 2.5vw;position: relative;top: -1vw;}
    span{font-size: 2vw;font-family: FZYaoti}
    p{color:#7BD3FF;font-size: 3vw;font-family: FZYaoti;line-height: 2}
    li{font-size: 2vw;font-family: FZYaoti}
   #we1{position: relative;top:-0.3vw}
}
  @media (max-width: 500px) {
    #fq1{font-size: 3.5vw}
    #we1{position: relative;top: 1vw;}
    #monkey{display: none}
    #fontend{
      position: relative;
      top: 162vw;
      width: 100%;
      height: 170vw;
      background-image:url("http://img.nt-geek.club/pc端前端背景.png");
    }
    #xiangjiao{width: 20%;position: relative;left: 15%;top:-86vw;}
    #houzi{ width: 60%;
      height:30%;
      top: 27vw;
      position:relative;
      left: 25%;
    }
    #fq1{font-size: 6vw}
    #wen1{position: relative;left: 11%;top: 24vw;}
    span{font-size: 4.5vw;font-family: FZYaoti}
    p{color:#7BD3FF;font-size: 6vw;font-family: FZYaoti;}
    li{font-size: 3.8vw;font-family: FZYaoti}
  }
</style>
