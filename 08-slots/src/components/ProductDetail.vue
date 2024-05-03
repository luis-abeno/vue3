<template>
  <div class="container flex justify-center flex-col items-center" v-if="storeProduct.product">
    <button @click="$router.back()" class="underline">Voltar</button>

    <h2 class="mt-4 text-3xl">{{ storeProduct.product.name }}</h2>

    <slot name="actions"></slot>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product.store'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const storeProduct = useProductStore()
const route = useRoute()

onMounted(() => storeProduct.getById(Number(route.params.id)))
</script>
