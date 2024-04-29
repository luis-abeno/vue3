<template>
  <div>
    <h1>{{ produto }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produto: 'Camiseta'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
