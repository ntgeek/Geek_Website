<template>
  <div id="fontend">


    <div id="wen1">

          <span id="fq1">"开发程序猿"</span><br>
          <p  id="we1" >“Stay Hungry,Stay Foolish” </p><br>
        <div id="wenzi1">
          <li>前端:前端开发是创建Web或app视觉界面呈现给用户的过程通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，实现互联网产品的用户界面交互。</li><br><br>
          <li>后端:通常也称服务器端开发。不对用户显示,负责处理前端的请求，进行逻辑处理和数据交互。</li><br><br>
          <li>移动端:  移动应用开发是为了小型、无线计算设备编写软件的流程和程序的集合，例如智能手机或平板电脑。</li>
        </div>
    </div>

    <img id="monkey" src="http://img.nt-geek.club/houzi.png">
    <img id="houzi" src="http://img.nt-geek.club/shangbanshen.png">
    <img id="houzibeijing" src="http://img.nt-geek.club/pc端前端背景.png">
    <img id="xiangjiao" src="http://img.nt-geek.club/香蕉.png">
  </div>
</template>
<style scoped>


  @media screen and (min-width:501px){
  #fontend{
    position: relative;
    top:75vw;
    height: 60vw;
    left: -7%;
  }
#houzibeijing{
  display: none;
}
  #xiangjiao{
    display: none;
    }

  #houzi{
    display: none;
    }

  #monkey{
    width: 34vw;
    height: 45vw;
    position: absolute;
    top: 15%;left: 75%;
  }

#wen1{position: relative;
  top:19%;
  left: 20%;
  font-family: FZYaoti;
  width: 40vw;
}

#fq1{font-size: 3.5vw;
}

#fq2{
  font-size: 2.5vw;
  position: relative;
  top: -1vw;
  }
  
span{
  font-size: 2vw;
  font-family: FZYaoti
  }

p{
  color:#7BD3FF;
  font-size: 3vw;
  font-family: FZYaoti;
  line-height: 2
  }

li{
  position: relative;
  font-size: 2vw;
  font-family: FZYaoti;
  left: 0%;
  }

#we1{
  position: relative;
  top:-0.3vw;
  }

}


  @media (max-width: 500px) {

    #we1{
      position: absolute;
    
      left: 2vw;
      top: 190vw;
      width: 100vw;
      }

      #wenzi1{
      position: absolute;
      left: 2vw;
      top: 200vw;
      width: 74vw;
      font-size: 2vw;
      }
    #fq1{
      position: absolute;
      left: 2vw;
      top: 180vw;
      width: 100vw;
      }

    #monkey{display: none}


    #xiangjiao{
      position: absolute;
      width: 20vw;
      left: 70vw;
      z-index: 10;
      top: 190vw;
      }

    #houzi{ 
      position: absolute;
      width: 70%;
      left: 25vw;
      top: 307vw;
      z-index: 10;
    }
    #houzibeijing{ 
      position: absolute;
      width: 100%;
      left: 0vw;
      top: 180vw;
      z-index: -10;
    }



    #fq1{
      font-size: 7vw;
      }

    #wen1{
      position: absolute;
      left: 11%;
      top: 32vw;
      z-index: 2;
      }

    span{
      font-size: 4.5vw;
      font-family: FZYaoti;
      }

    p{
      color:#5593f0;
      font-size: 6vw;
      font-family: FZYaoti;
      }

    li{
      font-size: 4.5vw;
      font-family: FZYaoti;
      }

  }
</style>
