<template>
  <div>
    <ProductDetail :id="productId" />
  </div>
</template>

<script setup lang="ts">
import ProductDetail from '@/components/ProductDetail.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

const productId = Number(route.params.id)
</script>
