# Hooks

## Tabela de conteúdo

- [Introdução](#introdução)
- [beforeCreate](#beforecreate)
- [created](#created)
- [beforeMount](#beforemount)
- [mounted](#mounted)
- [beforeUpdate](#beforeupdate)
- [updated](#updated)
- [beforeUmount](#beforeunmount)
- [unmounted](#unmounted)
- [Exemplo](#exemplo)

## Introdução

Hooks são métodos que são executados em determinados momentos do ciclo de vida do componente. Eles são úteis para realizar ações específicas em determinados momentos.

Daremos uma breve introdução sobre os principais hooks do ciclo de vida de um componente e como utilizá-los.

## beforeCreate

O hook `beforeCreate` é executado antes do componente ser criado. Neste momento, o componente ainda não foi instanciado e as propriedades ainda não foram inicializadas.

```javascript
  beforeCreate() {
    console.log('beforeCreate')
  }
```

## created

O hook `created` é executado após o componente ser criado. Neste momento o mesmo já foi instanciado e as propriedades já foram inicializadas, porém ainda não foi montado no DOM.

```javascript
  created() {
    console.log('created')
  }
```

Em muitos casos é comumente utilizado para se obter algum dado ou consumir um endpoint de uma API, por exemplo.

```javascript
  created() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        this.data = data
      })
  }
```

A principal diferença entre ele o `beforeCreate` é que o `created` é executado após o componente ser criado, ou seja, as propriedades já foram inicializadas e o componente já foi instanciado.

## beforeMount

O hook `beforeMount` é executado antes da renderização inicial no DOM. Neste momento, o componente já foi criado e as propriedades já foram inicializadas.

```javascript
  beforeMount() {
    console.log('beforeMount')
  }
```

## mounted

O hook `mounted` é executado após o componente ser montado no DOM. Neste momento, o componente já foi criado, montado e as propriedades já foram inicializadas.

```javascript
  mounted() {
    console.log('mounted')
  }
```

## beforeUpdate

O hook `beforeUpdate` é executado antes do componente ser atualizado. Neste momento, o componente já foi criado, montado e as propriedades já foram inicializadas.

```javascript
  beforeUpdate() {
    console.log('beforeUpdate')
  }
```

## updated

O hook `updated` é executado após o componente ser atualizado. Neste momento, o componente já foi criado, montado e as propriedades já foram inicializadas.

```javascript
  updated() {
    console.log('updated')
  }
```

Nós podemos acessar o DOM antigo antes de qualquer atualização no hook `beforeUpdate` e mostrar as alterações finais no hook `updated`.

```javascript
  beforeUpdate() {
    console.log('beforeUpdate')
  }

  updated() {
    console.log('updated')
  }
```

## beforeUmount

O hook `beforeUmount` é executado antes do componente ser desmontado do DOM. Neste momento, o componente ainda está montado e as propriedades ainda estão inicializadas.

```javascript
  beforeUmount() {
    console.log('beforeUmount')
  }
```

## unmounted

O hook `unmounted` é executado após o componente ser desmontado do DOM. Neste momento, o componente já foi desmontado e as propriedades já foram destruídas.

Muito útil para limpar recursos, como por exemplo, remover event listeners, cancelar requisições, timers, etc.

```javascript
  unmounted() {
    // Limpando um timer
    clearInterval(this.timer)

    // Removendo um event listener
    window.removeEventListener('resize', this.handleResize)

    // Cancelando uma requisição
    this.controller.abort()
  }
```

## Exemplo

```vue
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
```

Neste exemplo, utilizamos os hooks `onBeforeMount`, `onMounted` e `onBeforeUnmount` para logar mensagens no console em determinados momentos do ciclo de vida do componente.

Resultado:

![hooks](./public/hooks-example.gif)

![diagrama](./public/hooks-diagram.png)
