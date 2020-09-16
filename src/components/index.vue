<template>
  <div class="firstpage_img firstpage">
    <Header></Header>
  </div>
</template>

<script>
import header from "./header";
export default {
  name: "index",
  components: {
    Header: header,
  },
};
</script>

<style scoped>
.firstpage_img {
  position: relative;
  background-size: 100% 100%;
  width: 100%;
  margin: 0 auto;
}
@media (min-width: 410px) {
  /** mobile*/
  .firstpage {
    background-image: url("http://img.nt-geek.club/shouye.png");
    height: 150vw;
  }
}

@media (min-width: 640px) {
  /** pad*/
  .firstpage {
    background-image: url("http://img.nt-geek.club/shouye.png");
    height: 60vw;
  }
}
@media (min-width: 1024px) {
  /**computer*/
  .firstpage {
    background-image: url("http://img.nt-geek.club/首页背景.png");
    height: 70vw;
    background-color: white;
    margin: 0 auto;
  }
}
</style>