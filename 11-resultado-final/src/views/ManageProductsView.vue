<template>
  <div class="flex justify-center flex-col items-center mt-4">
    <h1 class="my-2 text-xl">Gerenciar produtos</h1>

    <div class="flex flex-col">
      <input v-model="product" />
      <button @click="addProduct" class="my-4">Adicionar produto</button>
    </div>

    <div class="flex justify-center flex-col items-center mt-4">
      <ProductList v-if="storeProduct.products.length > 0" type="list" />

      <p v-else>Nenhum produto cadastrado</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product.store'
import { ref } from 'vue'
import ProductList from '@/components/ProductList.vue'

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
