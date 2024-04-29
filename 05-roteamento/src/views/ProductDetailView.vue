<template>
  <div>
    <h1>Product Details</h1>
    <p>{{ product.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const product = ref({
  id: 1,
  name: 'Camiseta'
})

const route = useRoute()

const productId = Number(route.params.id)

if (productId === 2) {
  product.value = { id: 2, name: 'Calça' }
} else if (productId === 3) {
  product.value = { id: 3, name: 'Par de Luvas' }
}
</script>
