<script>
  import fontend from './components/fontend';
  import SafetyEngineer from "./components/SafetyEngineer";
  import ai from "./components/Ai";
  import pm from "./components/PM"
  import formore from "./components/formore";
  import userdesign from "./components/userdesign";

  export default {
    name: 'first',
    components: {
      "v-fontend":fontend,
      "v-Satety":SafetyEngineer,
      "v-ai":ai,
      "v-pm":pm,
      "v-foremore":formore,
      "v-userdegsign":userdesign
    }
}
</script>
<template>
  <div id="first">
    <v-fontend></v-fontend>
    <v--satety></v--satety>
    <v-ai></v-ai>
    <v-pm></v-pm>
    <v-userdegsign></v-userdegsign>
    <v-foremore></v-foremore>
    <router-view/>
  </div>
</template>
<style>
  body{
    margin:0;
    padding:0;
  }
#first{
  background: url("http://img.nt-geek.club/首页背景.png");
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width:100%;
  height: 125%;
}
</style>
