<script>
import index from "./components/index";
import fontend from "./components/fontend";
import ai from "./components/Ai";
import pm from "./components/PM";
import formore from "./components/formore";
import pro from "./components/pro";
import Aboutus from "./components/aboutus";
import contactus from "./components/contactus";

("use strict");

export default {
  name: "first",
  components: {
    "v-index": index,
    "v-fontend": fontend,
    "v-pro": pro,
    "v-ai": ai,
    "v-pm": pm,
    "v-foremore": formore,
    "v-Aboutus": Aboutus,
    "v-contactus": contactus,
  },
};
</script>
<template>
  <div class="scroll_container">
    <v-index></v-index>
    <v-fontend></v-fontend>
    <v-pro></v-pro>
    <v-ai></v-ai>
    <v-pm></v-pm>
    <v-Aboutus></v-Aboutus>
    <v-contactus></v-contactus>
    <v-foremore></v-foremore>
  </div>
</template>
<style scoped>
.scroll_container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: auto;
}
@media (min-width: 768px) {
  .bw {
    background-color: white;
  }
  #first {
    background: url("http://img.nt-geek.club/首页背景.png");
    position: absolute;
    background-size: 100% 100%;
    left: 5%;
    width: 90%;
    height: 70vw;
    background-color: white;
    margin: 0 auto;
  }
  #second {
    background-color: white;
  }
}
@media (max-width: 768px) and (min-width: 480px) {
  #first {
    background: url("http://img.nt-geek.club/shouye.png");
    position: absolute;
    background-size: 100% 100%;
    height: 60vw;
  }
}
@media (max-width: 479px) {
  #first {
    background: url("http://img.nt-geek.club/shouye.png");
    position: absolute;
    background-size: 100% 100%;
    width: 100%;
    height: 150vw;
  }
}
</style>
