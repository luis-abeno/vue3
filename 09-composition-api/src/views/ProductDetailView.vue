<template>
  <div>
    <ProductDetail>
      <template #actions>
        <button @click="console.log('Edit')">Editar</button>
        <button @click="console.log('Delete')">Deletar</button>
      </template>
    </ProductDetail>
  </div>
</template>

<script setup lang="ts">
import ProductDetail from '@/components/ProductDetail.vue'
</script>
