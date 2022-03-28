<script setup>

const props = defineProps(['entry']);
console.log('the entry', props.entry);

</script>

<template>

        <tr>
          <td><img :src="entry.photo"></td>
          <td>{{ entry.name }}</td>
          <td>{{ entry.weight }}</td>
          <td>{{ entry.lifespan }}</td>
          <td>{{ entry.personality }}</td>
          <td>{{ entry.quote }}</td>
          <td><button type="button" v-on:click="handleDelete(entry)">x</button></td>
        </tr>

</template>