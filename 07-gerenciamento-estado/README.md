# Gerenciamento de estado

## Tabela de conteúdo

- [Introdução](#introdução)
- [Pinia](#pinia)
- [Store](#store)

## Introdução

O gerenciamento de estado é uma técnica que permite que os componentes de um sistema possam compartilhar informações entre si. Em aplicações web, o gerenciamento de estado é uma técnica muito utilizada para manter o estado da aplicação sincronizado entre os componentes.

Neste conteúdo, vamos falar sobre o Pinia, uma biblioteca de gerenciamento de estado para Vue.js.

## Pinia

O Pinia é uma biblioteca de gerenciamento de estado para Vue.js, ele é o sucessor do Vuex e é recomendado à partir da versão 3 do Vue.js.

Para instalar o Pinia, execute o seguinte comando:

```bash
npm install pinia
```

Após isso basta importar o Pinia e utilizá-lo em sua aplicação.

main.ts

```ts
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' // Importamos o método createPinia

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) // Aqui dizemos para o Vue utilizar o Pinia
app.use(router)

app.mount('#app')
```

## Store

Para utilizar o Pinia, você deve criar uma store. Uma store é um objeto que contém o estado da aplicação e métodos para manipular esse estado.

Para criar uma store, basta criar um arquivo com o nome da store e exportar uma função que retorna um objeto com o estado e os métodos.

store.ts

```ts
import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as string[]
  }),
  actions: {
    addProduct(product: string) {
      this.products.push(product)
    }
  }
})
```

Para utilizar a store em um componente, basta importar a store e utilizar a função `useStore`.

ProductList.vue

```vue
<template>
  <div class="flex justify-center flex-col items-center mt-4">
    <div class="flex flex-col">
      <input v-model="product" />
      <button @click="addProduct" class="my-4">Adicionar produto</button>
    </div>
    <ul v-if="storeProduct.products.length > 0">
      <li v-for="product in storeProduct.products" :key="product.id" class="underline">
        <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
      </li>
    </ul>

    <p v-else>Nenhum produto cadastrado</p>
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
}
</style>
```

Agora no arquivo `ProductDetailView.vue`, podemos remover a prop `product` e utilizar a store para acessar o produto.

ProductDetailView.vue

```vue
<template>
  <div>
    <ProductDetail />
  </div>
</template>

<script setup lang="ts">
import ProductDetail from '@/components/ProductDetail.vue'
</script>
```

ProductDetail.vue

```vue
<template>
  <div class="container flex justify-center flex-col items-center" v-if="storeProduct.product">
    <button @click="$router.back()" class="underline">Voltar</button>

    <h2 class="mt-4 text-3xl">{{ storeProduct.product.name }}</h2>
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
```

Perceba que não precisamos mais das props, pois agora estamos utilizando a store para acessar o estado da aplicação de forma global.

Este é um exemplo simples de como utilizar o Pinia para gerenciar o estado de uma aplicação Vue.js. Para mais informações sobre o Pinia, consulte a [documentação oficial](https://pinia.esm.dev/).

![Exemplo](./assets/exemplo.gif)
