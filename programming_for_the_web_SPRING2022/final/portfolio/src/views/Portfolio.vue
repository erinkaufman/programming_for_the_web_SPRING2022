<script setup>
    import ProjectList from "/data/projects.json"
    import ItemRow from "../components/ItemRow.vue"
</script>

<template>
<div>
    <h1>Masters of Graphic &amp; Web Design Portfolio</h1>  
    <ItemRow v-for="(entry, index) in ProjectList" :key="index" :entry="entry" />
</div>
</template>

<style>
body {
    font-family:'Courier New', Courier, monospace;
    font-size: 18px;
}
h1 {
    text-align: center;
    text-decoration: none;
    font-size: 55px;
    text-transform: lowercase;
    color: #e1e1e1;
    font-weight: 200;
}
</style>
