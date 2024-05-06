<template>
  <div class="flex justify-center flex-col items-center mt-4">
    <div v-if="storeProduct.products.length > 0">
      <div class="grid grid-cols-3 gap-4" v-if="props.type === 'card'">
        <div
          v-for="product in storeProduct.products"
          :key="product.id"
          class="border p-4 rounded-lg"
        >
          <router-link :to="`/products/${product.id}`" class="text-blue-500 hover:underline">{{
            product.name
          }}</router-link>
        </div>
      </div>

      <ul v-else>
        <li v-for="product in storeProduct.products" :key="product.id" class="underline">
          <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
        </li>
      </ul>
    </div>

    <p v-else>Nenhum produto cadastrado</p>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product.store'
const storeProduct = useProductStore()

const props = defineProps({
  type: {
    type: String,
    default: 'card'
  }
})
</script>
