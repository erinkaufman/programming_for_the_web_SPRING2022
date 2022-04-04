<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="nav-bar">
    <RouterLink to="/">Home</RouterLink><span class="spacer"> |</span>
    <RouterLink to="/collection">Collection</RouterLink>
</div>
</template>
<style scoped>

html a {
    font-family: 'Courier New', Courier, monospace;
    color: black;
    text-decoration: none;
}
.nav-bar {
    background: pink;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0px;
    text-align: center;
}
.spacer {
    letter-spacing: 25px;
}
</style>