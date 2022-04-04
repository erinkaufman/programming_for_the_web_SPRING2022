<script setup>
import DogList from '../data/dogs.json';
import ItemRow from '../components/ItemRow.vue';
console.log(DogList);
</script>
<template>
    <h1>My Future Collection of Dogs</h1>
    <ItemRow v-for="(entry, index) in DogList" :key="index" :entry="entry" />
</template>
<style scoped>
h1 {
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    padding-top: 25px;
}
</style>