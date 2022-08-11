<template>
  <v-app>
    <v-main class="main">
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },
};
</script>

<style>
.main {
  background: rgb(34, 67, 195);
  background: -moz-linear-gradient(
    0deg,
    rgba(34, 67, 195, 1) 0%,
    rgba(63, 164, 245, 1) 24%,
    rgba(58, 149, 237, 1) 75%,
    rgba(34, 67, 195, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(34, 67, 195, 1) 0%,
    rgba(63, 164, 245, 1) 24%,
    rgba(58, 149, 237, 1) 75%,
    rgba(34, 67, 195, 1) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(34, 67, 195, 1) 0%,
    rgba(63, 164, 245, 1) 24%,
    rgba(58, 149, 237, 1) 75%,
    rgba(34, 67, 195, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2243c3",endColorstr="#2243c3",GradientType=1);
}
</style>
