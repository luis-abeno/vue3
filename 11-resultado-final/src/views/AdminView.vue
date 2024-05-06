<template>
  <div>
    <h1>Área administrativa</h1>
    <AdminNavbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import AdminNavbar from '@/components/AdminNavbar.vue'
</script>
