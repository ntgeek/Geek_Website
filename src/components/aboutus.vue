<template>
  <div id="bs">

    
      <div class="about_contain1">
          <img id="time" src="http://img.nt-geek.club/shijian.png" class="d">
            <span>
              <br>耐心、毅力是我们必备的品质，每周我们会至少花30小时在实验室中。以保证技术的精进。
            </span>
      </div>


      <div class="about_contain2"> 
          <img id="speech" src="http://img.nt-geek.club/speech.png" class="d">
            <span>
              <br>每周我们会举行一次技术例会，用来汇报我们的学习内容，供成员之间交流学习。
            </span>
      </div>


      <div class="about_contain3">
          <img id="douyan" src="http://img.nt-geek.club/duoyuan.png" class="d">
            <span>
              <br>多元化是我们的特色。在这里，你可以拥有多种方向选择，前后端、安全、AI、算法、产品等。
            </span>
      </div>


            <img id="lefts" class="q" src="http://img.nt-geek.club/左上.png">
            <img id="rights" class="q" src="http://img.nt-geek.club/youshang.png">
            <img id="leftx" class="q" src="http://img.nt-geek.club/左下.png">
            <img id="ringtx" class="q" src="http://img.nt-geek.club/youxia.png">
           <img id="chongzi" src="http://img.nt-geek.club/七星虫子.png">
            <img id="hudie" src="http://img.nt-geek.club/hudie.png">
            <img id="about" src="http://img.nt-geek.club/关于.png">
    
  </div>
</template>

<style scoped>



  @media (min-width: 501px) {
  #about{position: absolute;top: -40%;width: 20vw;left:43%;}/*有效*/

  #bs{position:absolute;left: 10%;top:300vw;}/*有效*/

/*有效*/

          #chongzi{position: absolute;top: 13vw;width: 9vw;left: -5%;}
          #hudie{position: absolute;top:20vw;width: 9.5vw;right: -13vw;}
          #leftx{position: absolute;top:33vw;left: 0vw;}
          #ringtx{position: absolute;top:33vw;right: -13vw;}
          #rights{position: absolute;top:-8vw;right: -13vw;}
          #lefts{position: absolute;top:-8vw;}
/*有效*/



  #douyan{
      width: 10vw;
      height: 13vw;
      position: relative;
      top: 2vw;
      left:17%;
    }/*有效*/

      #speech{
      width: 10vw;
      height: 13vw;
      position: relative;
      top: 2vw;
      left:17%;
    }/*有效*/

      #time{
      width: 10vw;
      height: 13vw;
      position: relative;
      top: 2vw;
      left:17%;
    }/*有效*/
    
  .about_contain1{
      position: relative;
      float: right;
      margin-right: 4.5vw;
      border: 0.8vw solid #8B88B7;
      border-radius: 3vw;
      font-family: FZYaoti;
      height: 29vw;
      width: 16vw;
      top: -1vw;
      left: 12%;
    }

  .about_contain2{
      position: relative;
      float: right;
      margin-right: 4.5vw;
      border: 0.8vw solid #8B88B7;
      border-radius: 3vw;
      font-family: FZYaoti;
      height: 29vw;
      width: 16vw;
      top: -1vw;
      left: 12%;
    }
      .about_contain3{
      position: relative;
      float: right;
      margin-right: 4.5vw;
      border: 0.8vw solid #8B88B7;
      border-radius: 3vw;
      font-family: FZYaoti;
      height: 29vw;
      width: 16vw;
      top: -1vw;
      left: 12%;
    }

  .q{width: 12vw;}/*有效*/

  
  span{
    position: absolute;
    top: 16vw;
    text-align: center;
    font-size: 1.5vw;
    left: 10%;
    right: 10%;
    }


  }


  @media (max-width: 500px) {
    #bs{
      position: relative;
      top: 580vw;
      height: 300vw;
      }
    
    #about{
      position: absolute;
      top:-50vw;
      left: 22vw;
      width: 60vw;
      z-index: 300;
      }
      
    #lefts{
      width: 18vw;
      position: absolute;
      top: -32vw;
      left: 4vw;
      }

    #rights{
      width: 18vw;
      position: absolute;
      top: -32vw;
      left: 78vw;
      }


    #ringtx{
      width: 18vw;
      position: absolute;
      top: 110vw;
      left: 78vw;
      }

    #leftx{
      width: 18vw;
      position: absolute;
      top: 110vw;
      left: 4vw;
      }

    .about_contain1{
      position:absolute;
       width: 80vw;
       top: -22vw;
       left: 10vw;
       border: 1.5vw solid #8B88B7;
      border-radius: 6vw; 
      font-size: 4.4vw;
      width:80vw;
      height: 33vw;
       
       }  

.about_contain2{
      position:absolute;
       width: 80vw;
       top: 23vw;
       left: 10vw;
       border: 1.5vw solid #8B88B7;
      border-radius: 6vw; 
      font-size: 4.4vw;
      width:80vw;
      height: 33vw;
       }  

.about_contain3{
      position:absolute;
       width: 80vw;
       top: 68vw;
       left: 10vw;
       border: 1.5vw solid #8B88B7;
      border-radius: 6vw;  
      font-size: 4.4vw;
      width:80vw;
      height: 33vw;
       }  


    #time{
      position: relative;
      left: 3vw;
      top: 10%;
      width: 24%;
      height:80%;
      }

    #douyan{ 
      position: relative;
      left: 3vw;
      top: 10%;
      width: 24%;
      height:80%;
      }
    #speech{ 
      position: relative;
      left: 3vw;
      top: 10%;
      width: 24%;
      height:80%;
      }




   #chongzi{ 
      width: 13vw;
      position: relative;
      top: 57vw;
      left: 4vw;
      }

    #hudie{
       display: none;
       }

   



    span{
      position: absolute;
      top: 0vw;
      left: 28vw;
      font-family: FZYaoti;
      }



  }
</style>
