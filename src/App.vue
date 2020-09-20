<script>
  import fontend from './components/fontend';
  import ai from "./components/Ai";
  import pm from "./components/PM"
  import formore from "./components/formore";
  import pro from "./components/pro";
  import Aboutus from "./components/aboutus";
  import contactus from "./components/contactus";


  "use strict";

  export default {
    name: 'first',
    components: {
      "v-fontend":fontend,
      "v-pro":pro,
      "v-ai":ai,
      "v-pm":pm,
      "v-foremore":formore,
      "v-Aboutus":Aboutus,
      "v-contactus":contactus
    }
}
</script>
<template>
  <div id="first" class="bw">
    <v-fontend></v-fontend>
    <div id="second">
    <v-pro></v-pro>
    <v-ai></v-ai>
    <v-pm></v-pm>
    <v-Aboutus></v-Aboutus>
    <v-contactus></v-contactus>
    <v-foremore></v-foremore>
    <router-view/>
  </div>
  </div>
</template>
<style scoped>
  @media(min-width: 768px) {
    .bw{background-color: white}
    #first {
      background: url("http://img.nt-geek.club/首页背景.png");
      position: relative;
      background-size: 100% 100%;
      width: 90%;
      height: 65vw;
      background-color: white;
      margin: 0 auto;
    }
    #second{
      background-color: white;
    }
  }
    @media (max-width: 768px) and (min-width:480px ) {
      #first {
        background: url("http://img.nt-geek.club/shouye.png");
        position: relative;
        background-size: 100% 100%;
        height: 60vw;
      }
    }
      @media (max-width:479px) {
        #first {
          background: url("http://img.nt-geek.club/shouye.png");
          position: absolute;
          background-size: 100% 100%;
          width: 100%;
          height: 150vw;
        }
      }
</style>
