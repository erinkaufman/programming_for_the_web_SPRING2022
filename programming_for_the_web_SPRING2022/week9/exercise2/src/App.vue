<script setup>
import CamelidRow from "../src/components/CamelidRow.vue";
const camelids = [
      {
        commonName: "Llama",
        binomialName: "Llama glama",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Llama",
        species: "L. glama",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg"
        },
      {
        commonName: "Alpaca",
        binomialName: "Vicugna pacos",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Vicugna",
        species: "V. pacos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg"
      },
    ]
</script>

<template>
<div>
<h1>This will be my Camelids page</h1>
  <div class="camelid-container">
    <CamelidRow v-for="critter in camelids" v-bind:key="critter.commonName" v-bind:animal="critter" />
  </div>
</div>
</template>

<style>

body {
  font-family: 'Courier New', Courier, monospace;
}

.camelid-container {
  display: flex;
  flex-direction: row;
}

</style>
