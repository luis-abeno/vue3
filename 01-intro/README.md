# Intro

## Tabela de conteúdo

- [Introdução](#introdução)
- [O que é Vue?](#o-que-é-vue)
- [Primeiro projeto Vue 3](#primeiro-projeto-vue-3)

## Introdução

Neste projeto vamos criar um projeto Vue 3 do zero, iremos ver como instalar o Vue CLI e também as diferentes formas de se trabalhar com o Vue.

## O que é Vue?

O Vue é um framework progressivo para a construção de interfaces de usuário.

Significa que você pode adicionar o Vue a um projeto existente, mesmo que seja apenas para adicionar um pequeno componente a uma página, sem a necessidade de reescrever o código existente. Como também pode ser utilizado para criar projetos inteiros e complexos, desde o início.

## Primeiro projeto Vue 3

Nesse primeiro exemplo iremos adicionar o Vue a um projeto existente, para isso iremos utilizar o CDN (Content Delivery Network) do Vue.

No nosso html adicionamos o script onde está hospedado esse script através do CDN.

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

E também criamos um elemento com o id `app` onde iremos adicionar o nosso componente Vue.
Através das chaves duplas (ou mustache syntax) `{{ }}` podemos adicionar o valor da variável `produto` que será criada no nosso componente Vue.

Essa sintaxe nos permite executar expressões JavaScript dentro do nosso template.

```html
<div id="app">{{ produto }}</div>
```

Exemplos de expressões JavaScript que podemos executar dentro do template:

```html
<div id="app">
  <!-- CAMISETA -->
  {{ produto.toUpperCase() }}

  <!-- atesimaC -->
  {{ produto.split('').reverse().join('') }}

  <!-- 9/1/2021, 10:30:15 AM -->
  {{ new Date().toLocaleString() }}
</div>
```

Importamos o nosso script app.js onde iremos criar o nosso componente Vue.

```html
<script src="app.js"></script>
```

E por fim, criamos o nosso componente Vue no nosso script app.js.

```javascript
const App = {
  data() {
    return {
      produto: "Camiseta",
    };
  },
};

Vue.createApp(App).mount("#app");
```

Ao adicionar o Vue através do CDN, o Vue é exposto como propriedades no objeto global **Vue**.

Ao alterar o valor da propriedade `produto` no nosso componente Vue, o valor exibido no nosso template também é alterado.

E isso acontece pois o Vue é reativo, ou seja, ele monitora as dependências do nosso componente e atualiza o template sempre que uma dependência é alterada.

No nosso exemplo a dependência é a propriedade `produto`, então sempre que essa propriedade é alterada o template é atualizado.