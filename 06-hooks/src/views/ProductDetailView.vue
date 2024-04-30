<template>
  <div>
    <ProductDetail :id="productId" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, onBeforeUnmount } from 'vue'
import ProductDetail from '@/components/ProductDetail.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = Number(route.params.id)

// #1 Hook beforeMount
onBeforeMount(() => {
  console.log('Component is about to be mounted to the DOM.')
})

// #2 Hook mounted
onMounted(() => {
  console.log('Component has been mounted to the DOM.')
})

// #3 Hook beforeUnmount
onBeforeUnmount(() => {
  console.log('Component is about to be unmounted from the DOM.')
})
</script>
