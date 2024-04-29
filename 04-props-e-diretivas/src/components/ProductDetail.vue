<template>
  <div>
    <h1>{{ props.name }}</h1>
  </div>
</template>

<script setup lang="ts">
// Agora mudamos nosso componente de options API para composition API
const props = defineProps({
  name: String
})
</script>

<style scoped>
h1 {
  color: red;
}
</style>
