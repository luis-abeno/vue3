# SFC

## Tabela de conteúdo

- [Introdução](#introdução)
- [O que é SFC?](#o-que-é-sfc)
- [Primeiro SFC](#primeiro-sfc)
- [Criando uma View](#criando-uma-view)

## Introdução

Nessa parte do projeto iremos criar o nosso primeiro SFC (Single File Component), veremos sua estrutura e como podemos trabalhar com ele.

## O que é SFC?

O SFC (Single File Component) é um componente Vue.js que encapsula o HTML, CSS e JavaScript em um único arquivo.

Com ele é possível criar componentes reutilizáveis e independentes, que podem ser facilmente importados e utilizados em qualquer aplicação Vue.js.

## Primeiro SFC

Para criar o nosso primeiro SFC, vamos criar um arquivo chamado `ProductDetail.vue` na pasta `src/components` e adicionar o seguinte código:

```vue
<template>
  <div>
    <h1>{{ produto }}</h1>
  </div>
</template>

<script>
// Options API
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
```

Nesse exemplo, criamos um componente chamado `ProductDetail` que exibe o nome de um produto (`Camiseta`) em um título (`h1`) com a cor vermelha.

Nesse componente temos três seções:

- `<template>`: Contém o HTML do componente.
- `<script>`: Contém o código JavaScript do componente (nesse exemplo utilizamos o options API).
- `<style>`: Contém o CSS do componente.

Além disso, utilizamos o atributo `scoped` no bloco `<style>` para limitar o CSS apenas ao componente e evitar conflitos com outros estilos da aplicação, ou seja, o CSS será aplicado apenas ao componente `ProductDetail` e apenas seu H1 será vermelho.

Para utilizar o componente `ProductDetail` em nossa aplicação, basta importá-lo e adicioná-lo ao template de um componente pai, nesse caso iremos adicionar ao App.vue:

```vue
<script setup lang="ts">
// Composition API
import ProductDetail from '@/components/ProductDetail.vue'
</script>

<template>
  <div>
    <!-- Componente ProductDetail utilizado como tag html -->
    <ProductDetail />
  </div>
</template>
```

O resultado será esse:

![ProductDetail](./public/ProductDetail.jpg)

Nada demais até agora, esse exemplo foi apenas para ilustrar a estrutura de um SFC e como podemos utilizá-lo em nossa aplicação.

## Criando uma View

Agora que já sabemos como criar um SFC, vamos criar uma View chamada `ProductListView.vue` na pasta `src/views` e adicionar o seguinte código:

```vue
<template>
  <div>
    <ProductDetail />
    <ProductDetail />
    <ProductDetail />
  </div>
</template>

<script setup lang="ts">
import ProductDetail from '@/components/ProductDetail.vue'
</script>
```

Nesse exemplo, criamos uma View chamada `ProductListView` que exibe três instâncias do componente `ProductDetail`.

Agora vamos substituir no nosso App.vue o componente `ProductDetail` pelo `ProductListView`:

```vue
<script setup lang="ts">
import ProductListView from '@/views/ProductListView.vue'
</script>

<template>
  <div>
    <ProductListView />
  </div>
</template>
```

O resultado será esse:

![ProductListView](./public/ProductListView.jpg)

Com isso, finalizamos a criação do nosso primeiro SFC, criamos um componente reutilizável (`ProductDetail`) e uma View (`ProductListView`) que utiliza esse componente.
