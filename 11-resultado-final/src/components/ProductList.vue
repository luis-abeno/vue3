<template>
  <div class="flex justify-center flex-col items-center mt-4">
    <ul v-if="storeProduct.products.length > 0">
      <li v-for="product in storeProduct.products" :key="product.id" class="underline">
        <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
      </li>
    </ul>

    <p v-else>Nenhum produto cadastrado</p>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product.store'
const storeProduct = useProductStore()
</script>
