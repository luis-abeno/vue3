<script setup>
import { ref, computed } from 'vue'

const count = ref(0)

const double = computed(() => count.value * 2)

console.log(double.value) // 0

count.value = 2

console.log(double.value) // 4
</script>

<template>
  <h1>{{ double }}</h1>
  <!--4-->
</template>
