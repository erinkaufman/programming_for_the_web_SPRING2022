<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps(['entry']);
console.log('the entry', props.entry);

</script>

<template>
<RouterLink :to="'/collection/' + entry.id">
        <div class="entry-container">
          <div class="image-container">
            <div class="entry-container-item"><img :src="'images/' + entry.photo"></div>
          </div>
          <div class="text-container">
            <div class="entry-container-item_name">{{ entry.name }}</div>
            <div class="entry-container-item">Weight: {{ entry.weight }}</div>
            <div class="entry-container-item">Lifespan: {{ entry.lifespan }}</div>
            <div class="entry-container-item">Personality: {{ entry.personality }}</div>
            <div class="entry-container-item">Notes: {{ entry.quote }}</div>
          </div>
        </div>
</RouterLink>
</template>
<style scoped>

a {
  text-decoration: none;
  color: black;
}
.entry-container {
  font-family: 'Courier New', Courier, monospace;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.image-container {
  padding: 25px;
}

.text-container {
  padding: 25px 0px;
}

.entry-container-item_name {
  font-weight: 800;
}
</style>