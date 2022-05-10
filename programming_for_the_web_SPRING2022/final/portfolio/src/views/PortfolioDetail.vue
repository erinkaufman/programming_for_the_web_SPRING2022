<script setup>
import ProjectList from "/data/projects.json"
import { useRoute } from "vue-router"

const route = useRoute();
const paramId = route.params.id * 1;
const item = ProjectList.find((item) => {
    return item.id === paramId;
});
</script>

<template>
<div>
<div class="container">
    <div class="container-text">
        <h1>{{item.name}}</h1>
        <p>{{item.course}}, {{item.completed}}</p>
        <h3>Technical Skills:</h3>
            <p>{{item.skills}}</p>
        <h3>Description:</h3>
            <p> {{item.description}}</p>
    </div>
    <div>
        <img :src="'images/' + item.photo" :alt="item.name" />
    </div>
</div>

<div>
    <div class="small-photo-group">
        <div class="small-photo">
            <img :src="'images/' + item.photo2" :alt="item.name" />
        </div>
        <div class="small-photo">
            <img :src="'images/' + item.photo3" :alt="item.name" />
        </div>
        <div class="small-photo">
            <img :src="'images/' + item.photo4" :alt="item.name" />
        </div>
    </div>   
</div>
</div>
</template>

<style scoped>
.container {
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: row;
}
.small-photo-group {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}
.small-photo img {
    width: 400px;
    padding: 15px;
}
.container-text {
    padding: 35px 100px;
}
img {
    max-width: 800px;
}
h3 {
    text-transform: uppercase;
    font-size: 25px;
    margin-top: 30px;
}
p {
    font-size: 20px;
}
</style>