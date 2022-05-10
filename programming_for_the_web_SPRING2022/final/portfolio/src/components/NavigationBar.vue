<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
<div class="header-container">
    <div class="nav-item">
    <RouterLink to="/">Home</RouterLink>
    </div>
    <div class="nav-item">
    <RouterLink to="/portfolio">Portfolio</RouterLink>
    </div>
</div>
</template>

<style scoped>
.header-container {
    width: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}
.nav-item {
    padding-right: 25px;
    padding-left: 25px;
    padding-top: 25px;
    padding-bottom: 50px;
}

a {
    color: black;
    font-size: 25px;
    text-decoration: none;
    text-transform: lowercase;
}

</style>
