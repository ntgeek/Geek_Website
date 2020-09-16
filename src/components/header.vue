<template>
  <div class="header_container">
    <button
      class="header_item header_item_text_one"
      title="新思路官网"
      onclick="location.href='https://new-thread.com/'"
    >New thread</button>
    <button class="header_item header_item_text_two">About us</button>
    <button class="header_item header_item_text_three">Contact</button>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header_container {
  position: relative;
}
.header_item {
  position: absolute;
  font-family: STHupo;
  color: black;
  font-weight: bolder;
  transition: all 0.6s;
}

button {
  font-size: 1.7vw;
  top: 1.5%;
  outline: none;
  background-color: #fff9e6;
  border: none;
  padding: 0;
  margin: 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

button:hover {
  cursor: pointer;
  transform: scale(1.1);
}
@media (min-width: 410px) {
  /** mobile*/
}

@media (min-width: 640px) {
  /** pad*/
}
@media (min-width: 1024px) {
  /**computer*/
  .header_item_text_one {
    left: 3vw;
  }
  .header_item_text_two {
    right: 12vw;
  }
  .header_item_text_three {
    right: 3vw;
  }
}
</style>