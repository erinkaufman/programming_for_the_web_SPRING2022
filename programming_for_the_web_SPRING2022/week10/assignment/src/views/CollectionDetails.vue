<script setup>
import DogList from '../data/dogs.json';
import { useRoute } from 'vue-router';
const route = useRoute();
const paramId = route.params.id * 1;
console.log('the id is', paramId);
const item = DogList.find((item) => {
    return item.id === paramId;
});
</script>
<template>
<div class="container">
    <h1>{{item.name}}</h1>
    <p>{{item.quote}}</p>
    <img :src="'images/' + item.photo" :alt="item.name" />
    <p>Weight: {{item.weight}}</p>
    <p>Lifespan: {{item.lifespan}}</p>
    <p>Personality: {{item.personality}}</p>
</div>
</template>
<style scoped>
.container {
    font-family: 'Courier New', Courier, monospace;
    width: 800px;
    margin: 0 auto;
    text-align: center;
}
h1 {
    padding-top: 25px;
}
</style>