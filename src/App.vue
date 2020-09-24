<script>
  import fontend from './components/fontend';
  import ai from "./components/Ai";
  import pm from "./components/PM"
  import formore from "./components/formore";
  import pro from "./components/pro";
  import Aboutus from "./components/aboutus";
  import contactus from "./components/contactus";
  import dhl from "./components/dhl";
  import transition from "./components/transition";

  "use strict";

  export default {
    name: 'first',
    components: {
      "v-fontend":fontend,
      "v-transition":transition,
      "v-pro":pro,
      "v-ai":ai,
      "v-pm":pm,
      "v-foremore":formore,
      "v-Aboutus":Aboutus,
      "v-contactus":contactus,
      "v-danghang":dhl,
    }
}
</script>
<template>
  <div id="first" class="bw">
    <v-danghang></v-danghang>
    <v-transition></v-transition>
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

</style>
