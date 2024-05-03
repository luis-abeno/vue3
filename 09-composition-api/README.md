# Composition API

## Tabela de conteúdo

- [Introdução](#introdução)
- [Quando usar](#quando-usar)
- [Setup](#setup)
- [Ref](#ref)
- [Reactive](#reactive)
- [Computed](#computed)
- [Watch](#watch)

## Introdução

A composition API é uma nova forma de escrever componentes no Vue 3. Ela foi criada para resolver problemas de legibilidade e manutenção de código em componentes grandes e complexos.

Ela foi introduzida para resolver alguns problemas da options API, como:

- Dificuldade de reutilização de lógica entre componentes;
- Inferência de tipos e melhorias no suporte a TypeScript;
- Mais flexibilidade para controlar a reatividade da aplicação com o ref e reactive;

Aqui daremos uma breve introdução sobre os principais conceitos da composition API e como utilizá-los.

Para mais informações, acesse a [documentação oficial](https://vuejs.org/api/composition-api-setup.html).

## Quando usar

A composition API é uma alternativa à options API de um componente Vue. Ela é recomendada para:

- Componentes grandes e complexos, pois facilita a organização do código
- Componentes que compartilham lógica, pois permite a reutilização de código
- Componentes que utilizam TypeScript para melhorar a inferência de tipos

## Setup

O hook `setup()` é o ponto de entrada para o uso da composition API em componentes. Ele é responsável por inicializar o estado reativo e expor os valores para o template.

```vue
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    return {
      count
    }
  }
}
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

Se você estiver usando a composition API com Single-File Components (SFC), o uso de `<script setup>` é fortemente recomendado para uma sintaxe mais concisa.

Também poderia ser escrito como:

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

## Ref

A função `ref()` é usada para criar um valor reativo. Ela retorna um objeto com uma propriedade `value`.

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)

console.log(count.value) // 0
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

O objeto `ref` é mutável, ou seja, você pode atribuir novos valores a `.value`. Ele também é reativo, ou seja, qualquer operação de leitura em `.value` é rastreada, e operações de escrita acionarão efeitos associados.

Repare que no template, você não precisa acessar `.value` diretamente, pois o Vue faz isso automaticamente.

Com `ref`, você pode criar variáveis reativas para valores primitivos, como números, strings, booleanos, objetos, etc.

## Reactive

Diferente de `ref`, o `reactive` pode ser inicializado apenas com um objeto. No entanto
cada propriedade do objeto pode ser uma variável reativa diferente. ```vue

<script setup>
import { reactive } from 'vue'

const data = reactive({
  count: 0,
  name: 'Peter Griffin',
  flag: false
})

console.log(data.name) // 'Peter Griffin'

data.name === 'Peter Griffin' // true

data.name.value === 'Peter Griffin' // false
</script>

<template>
  <h1>{{ data.name }}</h1>
  <!--Peter Griffin-->
</template>
````

Uma vantagem de `reactive` é que ela não usa uma propriedade `value`, então pode ser um pouco mais fácil de ler.

Isso também significa que ele se parece da mesma forma no JavaScript e no template.

## Computed

O computed recebe um função getter e retorna um objeto reativo somente leitura que representa o valor retornado pelo getter. Ele também pode receber um objeto com funções get e set para criar um objeto reativo gravável.

O `computed` é reativo, então ele será atualizado automaticamente quando as dependências mudarem.

A vantagem de usar `computed` é que ele é cacheado, ou seja, ele só será recalculado quando suas dependências mudarem.

Por exemplo, criando um ref readonly computado:

```vue
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
```

Criando um ref writable computado:

```vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)

const double = computed({
  get: () => count.value * 2,
  set: (val) => {
    count.value = val / 2
  }
})

console.log(double.value) // 0

double.value = 4

console.log(count.value) // 2

count.value = 4

console.log(double.value) // 8
</script>

<template>
  <h1>{{ double }}</h1>
  <!--8-->
</template>
```

Nesse exemplo, `double` só será recalculado quando `count` mudar, e não a cada renderização.

## Watch

O hook `watch` é usado para observar mudanças em variáveis reativas e executar uma função de callback quando elas mudarem.

```vue
<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log(`count mudou de ${oldValue} para ${newValue}`)
})

count.value = 1

// count mudou de 0 para 1

count.value = 2

// count mudou de 1 para 2
</script>

<template>
  <h1>{{ count }}</h1>
  <!--2-->
</template>
```

O `watch` também pode receber um segundo argumento com opções de configuração, como `deep` para observar mudanças mais profundas em objetos ou `immediate` para executar a função de callback imediatamente.

```vue
<script setup>
import { ref, watch } from 'vue'

const obj = ref({ count: 0 })

watch(
  obj,
  (newValue, oldValue) => {
    console.log(`obj mudou de ${oldValue.count} para ${newValue.count}`)
  },
  { deep: true }
)

obj.value.count = 1

// obj mudou de 0 para 1
</script>

<template>
  <h1>{{ obj.count }}</h1>
  <!--1-->

  <button @click="obj.count++">Increment</button>
</template>
```

Você poderia trocaro `deep` para `immediate` para executar a função de callback imediatamente.

Existe outra opção chamada `once`, que faz com que o watch seja executado apenas uma vez(`{once:true}`).

Obs.: Caso o watch seja criado a partir de um objeto reativo, isso implicará automaticamente em um deep watch, nesse caso não é necessário informar o deep.
