<template>
  <div id="app">
    <vHead></vHead>
    <router-view/>
    <vFoot></vFoot>
  </div>
</template>

<script>
import vHead from "./components/common/header.vue";
import vFoot from "./components/common/footer.vue";

export default {
  name: "App",
  components: {
    vHead,
    vFoot
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  background-color: #222222;
}
a{
  text-decoration: none;
  color: white;
}
</style>
