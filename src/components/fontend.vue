<template>
  <div id="fontend" class="bm">
    <div  id="fz1">
     <div id="fq1">
    <span>"前后端开发（Front&Back)"</span><br>
    <span>游走于寂静的黑夜中，我们隐匿在编
码逻辑中。程序猿在团队中负责程序开发
、测试等，是讲产品点子实现的重要角色。</span>
     </div>
    <p >“Stay Hungry,Stay Foolish”</p>
      <p>不断进步,锐意创新</p>
      <div  id="fz2">
      <span >我们这里有各种各样的程序猿</span>
      <span >前端:前端开发是创建Web或app视觉界面呈现给用户的过程
通过HTML，CSS及JavaScript以及衍生出来的各种
技术、框架、解决方案，实现互联网产品的用户界面交互。
后端:通常也称服务器端开发。不对用户显示
,负责处理前端的请求，进行逻辑处理和数据交互。
移动端:移动应用开发是为了小型、无线计算设备编写
软件的流程和程序的集合，像智能手机或者平板电脑。</span>
      </div>
    </div>
    <img id="monkey" src="http://img.nt-geek.club/houzi.png">
  </div>
</template>

<script>
    export default {
      el:"#前后端开发",
    }
</script>

<style>
  #monkey{
    position: absolute;
    top:0%;
    right: 1%;
    width: 45vw;
    height: 50vw;
  }
  #fontend{
     position: absolute;
     top:130%;
     left: 1%;
     right:0%;
     height: 70%;
   }
  #fz1{
    position: absolute;
      top:7vw;
      left:5%;
    font-family: FZYaoti;
  }
  #fz2{
    font-size: 1.5vw;
  }
  #fq1{
    font-size: 2vw;
    font-weight: bolder;
  }
  span{
    word-break:normal;
    width:auto;
    display:block;
    white-space:pre-wrap;
    word-wrap : break-word ;
    overflow: hidden ;
  }
  p{
    color: aqua;
    font-size: 1.8vw;
  }
</style>
