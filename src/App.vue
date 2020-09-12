<script>
  import fontend from './components/fontend';
  import ai from "./components/Ai";
  import pm from "./components/PM"
  import formore from "./components/formore";
  import pro from "./components/pro";
  import Aboutus from "./components/Aboutus";
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
  <div id="first">
    <v-fontend></v-fontend>
    <v-pro></v-pro>
    <v-ai></v-ai>
    <v-pm></v-pm>
    <v-Aboutus></v-Aboutus>
    <v-contactus></v-contactus>
    <v-foremore></v-foremore>
    <router-view/>
  </div>
</template>
<style>
  body{
    margin:0;
    padding:0;
  }
  @media(min-width: 768px) {
    #first {
      background: url("http://img.nt-geek.club/首页背景.png");
      position: absolute;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 60vw;
    }
  }
    @media (max-width: 768px) and (min-width:480px ) {
      #first {
        background: url("http://img.nt-geek.club/shouye.png");
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 125vw;
      }
    }
      @media (max-width:479px) {
        #first {
          background: url("http://img.nt-geek.club/shouye.png");
          position: absolute;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: 100%;
          height: 150vw;
        }
      }

</style>
