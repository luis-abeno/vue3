# Roteamento

## Tabela de conteúdo

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Navegação](#navegação)
  - [Router-link](#router-link)
  - [Programática](#programática)
- [Parâmetros](#parâmetros)
- [Redirecionamento](#redirecionamento)
- [Criando rotas](#criando-rotas)

## Introdução

O roteamento é um recurso essencial em aplicações web modernas. Ele permite a navegação entre diferentes páginas sem a necessidade de recarregar a página.

O Vue Router é a biblioteca oficial de roteamento para o Vue.js. Ele é um plugin que permite adicionar rotas à sua aplicação.

Nesse momento iremos apenas abordar os conceitos básicos do Vue Router. Para informações mais detalhadas, consulte a [documentação oficial](https://next.router.vuejs.org/).

## Instalação

Para instalar o Vue Router, execute o seguinte comando:

```bash
npm install vue-router@next
```

## Configuração

Para configurar o Vue Router, você precisa importá-lo em seu arquivo de entrada principal (geralmente `main.ts`).

```javascript
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
```

No nosso exemplo acima, separaremos a configuração do Vue Router em um arquivo separado chamado `router.ts`.

router/index.ts

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

export default router
```

Aqui, estamos criando uma instância do Vue Router e exportando-a para que possamos usá-la em nosso arquivo de entrada principal.

Nesse exemplo estamos criando um sistema de rotas vazio. Vamos adicionar rotas posteriormente.

Perceba o uso de `import.meta.env.BASE_URL`. Isso é necessário para que o Vue Router funcione corretamente, pois ele usa a URL base da aplicação.

Pontos importantes:

- `createWebHistory` - Cria uma instância de histórico baseada na API de histórico do navegador.
- `import.meta.env` - O Vite fornece um objeto `import.meta.env` que contém variáveis de ambiente e pode ser usado para acessar variáveis de ambiente em tempo de compilação.

## Navegação

### Router-link

O componente `router-link` é usado para navegar entre páginas em um aplicativo Vue. Ele é semelhante ao componente `a` do HTML, mas com algumas diferenças.

```html
<router-link to="/about">About</router-link>
```

Nesse exemplo acima, estamos criando um link para a rota `/about`.

### Programática

Você também pode navegar programaticamente usando o objeto `$router`.

```javascript
this.$router.push('/about')
```

O objeto `$router` é injetado em todos os componentes Vue e pode ser usado para navegar entre rotas.

## Parâmetros

Você pode passar parâmetros para uma rota usando a propriedade `props`.

```javascript
{
  path: '/user/:id',
  component: User,
  props: true
}
```

No exemplo acima, estamos passando um parâmetro chamado `id` para a rota `/user`.

## Redirecionamento

Você pode redirecionar uma rota para outra usando a propriedade `redirect`.

```javascript
{
  path: '/home',
  redirect: '/'
}
```

No exemplo acima, estamos redirecionando a rota `/home` para a raiz do aplicativo.

## Criando rotas

Para criar rotas, você precisa adicionar objetos de rota à propriedade `routes` do Vue Router.

Para nossa aplicação, vamos criar duas rotas: uma para a página inicial e outra para a página `products`.

1. Crie um novo arquivo chamado `HomeView.vue` em `src/views`
2. Crie um novo arquivo chamado `ProductsView.vue` em `src/views`
3. Renomeie o arquivo `src/views/ProductListView` para `ProductsList.vue` e mova para a pasta `src/componentes`
4. Adicione as rotas ao arquivo `router/index.ts`

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/products',
    component: () => import('@/views/ProductsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
```

Perceba que estamos importando os componentes `HomeView` e `ProductsView` e adicionando-os às rotas.

5. Modifique o arquivo `App.vue` para adicionar os links de navegação

```vue
<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    <router-view />
  </div>
</template>
```

Resultado até agora:

![roteamento-01](./public/roteamento-01.gif)

Agora, quando você clicar nos links `Home` e `Products`, você será redirecionado para as páginas correspondentes.

No próximo passo, vamos adicionar uma rota para exibir detalhes de um produto.

6. Crie um novo arquivo chamado `ProductDetailView.vue` em `src/views`
7. Adicione a rota ao arquivo `router/index.ts`

```javascript
{
  path: '/products/:id',
  component: () => import('@/views/ProductDetailView.vue')
}
```

8. Modifique o arquivo `ProductsList.vue` para adicionar links para os detalhes de cada produto

```vue
<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Camiseta' },
  { id: 2, name: 'Calça' },
  { id: 3, name: 'Par de Luvas' }
])
</script>
```

9. No arquivo `ProductsView.vue`, adicione o componente `ProductsList`

```vue
<template>
  <div>
    <ProductsList />
  </div>
</template>

<script setup lang="ts">
import ProductsList from '@/components/ProductsList.vue'
</script>
```

10. Crie um novo arquivo chamado `ProductDetailView.vue` em `src/views`
11. Adicione o seguinte conteúdo ao arquivo `ProductDetailView.vue`

```vue
<template>
  <div>
    <h1>Product Details</h1>
    <p>{{ product.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const product = ref({
  id: 1,
  name: 'Camiseta'
})

const route = useRoute()

const productId = Number(route.params.id)

if (productId === 2) {
  product.value = { id: 2, name: 'Calça' }
} else if (productId === 3) {
  product.value = { id: 3, name: 'Par de Luvas' }
}
</script>
```

Resultado:

![roteamento-02](./public/roteamento-02.gif)

Agora, quando você clicar em um produto, você será redirecionado para a página de detalhes do produto correspondente.

Com isso criamos um sistema básico de roteamento, onde você pode navegar entre diferentes páginas e passar parâmetros para as rotas.
