<template>
  <div class="flex justify-center flex-col items-center mt-4">
    <h1 class="my-2 text-xl">Gerenciar produtos</h1>

    <div class="flex flex-col">
      <input v-model="product" />
      <button @click="addProduct" class="my-4">Adicionar produto</button>
    </div>

    <div class="flex justify-center flex-col items-center mt-4">
      <ul v-if="storeProduct.products.length > 0">
        <li v-for="product in storeProduct.products" :key="product.id" class="underline">
          <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
        </li>
      </ul>

      <p v-else>Nenhum produto cadastrado</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product.store'
import { ref } from 'vue'

const storeProduct = useProductStore()
const product = ref('')

const addProduct = () => {
  storeProduct.addProduct({ id: storeProduct.products.length + 1, name: product.value })
  product.value = ''
}
</script>

<style scoped>
input {
  color: black;
  padding: 5px;
}
</style>
