<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Camiseta' },
  { id: 2, name: 'Calça' },
  { id: 3, name: 'Par de Luvas' }
])
</script>
