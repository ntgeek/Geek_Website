<template>
    <div id="dh">


          <button id="geek">
          <img id="GEEK" src="http://img.nt-geek.club/GK.png" >
          </button>
          <button id="sayings">Keep Curiosity<br>The Power Of Change</button>





    </div>
    
</template>

<script>
    export default {
        name: "dhl"
    }
</script>

<style scoped>
  @media(min-width: 551px) {

    #anniu{display: none}
    button{
      position: absolute;
      top: 6%;
      left: 25vw;
      outline: none;
      background: none;
      border: none;
      transition-duration: 0.5s;
    }

    button:hover{
    transform: scale(1.1);
    }

    #sayings{
      position: absolute;
      font-family:HWHupo;
      font-size: 1.8vw;
      font-weight: 900 ;
      color: rgb(146, 146, 146);
      left: 40%;
      top:21vw;
      cursor: pointer;
    }

    #geek{
      position: relative;
      width: 40vw;
      top: 3vw;
      cursor: pointer;
    }

       #GEEK{
      position: relative;
      width: 41vw;
      top: 1vw;
      left: 2vw;
      cursor: pointer;

    }


    #fontz1{
      position:absolute; left: 3vw;
      top:1.5%;
      cursor: pointer;
    }
    #fontz2{position:absolute;right: 12vw;top:1.5%;}
    #fontz3{
      position: absolute; right: 3vw;
      top:1.5%;
    }
    .a{font-size: 1.8vw;
      font-family: STHupo;
    }
    #dh {
      position: absolute;
      background: url("http://img.nt-geek.club/%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%88%E6%9C%AC5.png");
      background-size: 100% 100%;
      width: 96%;
      height: 61vw;
      background-color: white;
      left: 2%;
      right: 2%;
      margin: 0 auto;
      top: 2%;
    }}
  @media (max-width: 550px) {
#geek{
  background: none;
  border: none;
  outline: none;
}

      #GEEK{
        position: absolute;
        top: 18vw;
        left: 15%;
        height: 30vw;
        transition-duration: 4ms;
      }

      #sayings{
      display: none;
      }
      #GEEK:hover{
        transform: scale(1.1);
      }


    #dh{background: url("http://img.nt-geek.club/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E7%AC%ACer.png");
      position: absolute;
      background-size: 100% 100%;
      width: 100%;
      height: 150vw;}
  }
    @font-face {
      font-family: STHupo;
      src: url(font.ttf);
      font-weight: bold;
    }
    @font-face {
      font-family: FZYaoti;
      src: url(fzyaoti.ttf);
      font-weight: bold;
  }
</style>
