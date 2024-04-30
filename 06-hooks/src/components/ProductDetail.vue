<template>
  <div class="container flex justify-center flex-col items-center">
    <button @click="$router.back()" class="underline">Voltar</button>

    <h2 class="mt-4 text-3xl">{{ product.name }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  id: number
}>()

const product = ref({
  id: 1,
  name: 'Camiseta'
})

if (props.id === 2) {
  product.value = { id: 2, name: 'Calça' }
} else if (props.id === 3) {
  product.value = { id: 3, name: 'Par de Luvas' }
}
</script>
