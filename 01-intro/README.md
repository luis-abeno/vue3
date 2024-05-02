# Intro

## Tabela de conteúdo

- [Introdução](#introdução)
- [O que é Vue?](#o-que-é-vue)
- [Primeiro projeto Vue 3](#primeiro-projeto-vue-3)

## Introdução

Neste projeto vamos criar um projeto Vue 3 do zero, veremos diferentes formas de se instanciar o Vue e como renderizar algo na tela.

## O que é Vue?

O Vue é um framework progressivo para a construção de interfaces de usuário.

Significa que você pode adicionar o Vue a um projeto existente, mesmo que seja apenas para adicionar um pequeno componente a uma página, sem a necessidade de reescrever o código existente. Como também pode ser utilizado para criar projetos inteiros e complexos, desde o início.

## Primeiro projeto Vue 3

Nesse primeiro exemplo iremos adicionar o Vue a um projeto existente, para isso iremos utilizar o CDN (Content Delivery Network) do Vue.

No nosso html adicionamos o script Vue que está hospedado em um CDN.

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

Ao alterar o valor da propriedade `produto` no nosso componente Vue, o valor exibido no nosso template também é alterado, isso acontece pois o Vue é reativo, ou seja, ele monitora as dependências do nosso componente e atualiza o template sempre que uma dependência é alterada.

No nosso exemplo a dependência é a propriedade `produto`, então sempre que essa propriedade é alterada o template é atualizado.

Abaixo outros exemplos de como podem ser criadas instâncias do Vue:

```javascript
// 01 (recomendado para Vue 3)
Vue.createApp({
  // Dados
  data() {
    return {
      produto: "Camiseta",
    };
  },
});

// 02 (usado no Vue 2)
new Vue({
  el: "#app",
  data: {
    produto: "Camiseta",
  },
});

// 03 (registra um componente globalmente)
Vue.component("produto", {
  data() {
    return {
      produto: "Camiseta",
    };
  },
});

// 04 (Este método cria uma "subclasse" do construtor de Vue base)
Vue.extend({
  data() {
    return {
      produto: "Camiseta",
    };
  },
});
```
