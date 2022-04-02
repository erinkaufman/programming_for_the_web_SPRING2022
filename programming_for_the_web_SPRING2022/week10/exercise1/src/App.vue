<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/alpaca">Alpaca</RouterLink> |
    <RouterLink to="/llama">Llama</RouterLink>
  </nav>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style>
html {
  font-size: 16px;
  font-family:'Courier New', Courier, monospace;
}
nav {
  width: 100%;
  height: 45px;
  background: lightcoral;
  text-align: center;
}
nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
  color: whitesmoke;
  font-size: 25px;
  text-transform: lowercase;
  text-decoration: none;
  line-height: 1.75;
}
nav a.router-link-active {
  color: black;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
.container h1 {
  text-align: center;
  font-size: 50px;
}
.container p {
  width: 1200px;
  font-size: 18px;
}
.container img {
  display: block;
  max-width: 300px;
  width: 100%;
  margin: 50px auto 50px;
}
</style>
