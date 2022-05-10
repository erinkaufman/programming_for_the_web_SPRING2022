<script setup>
    import { RouterLink } from 'vue-router'

const props = defineProps(['entry']);
console.log('the entry', props.entry);

</script>

<template>
<div class="project-container">
    <RouterLink :to="'/portfolio/' + entry.id">
        <div class="project-item">
          <div><img :src="'images/' + entry.photo"></div>
          <div class="project-name">{{ entry.name }}</div>
        </div>
    </RouterLink>
</div>
</template>

<style scoped>
img {
    max-width: 400px;
    margin: 25px;
}
.project-container {
    font-family: 'Courier New', Courier, monospace;
    width: 450px;
    display: inline-block;
    margin: 50px 0px;
}

a {
    text-decoration: none;
    text-align: center;
}
.project-name {
    font-size: 25px;
    color: black;
}

h1 {
    padding-top: 10px;
}
</style>