# Slots

## Tabela de conteúdo

- [Introdução](#introdução)
- [Slots](#slots)
- [Slots nomeados](#slots-nomeados)

## Introdução

Até agora, aprendemos que os componentes podem aceitar props, que podem ser valores JavaScript de qualquer tipo. Mas e quanto ao conteúdo do template? Em alguns casos, podemos querer passar um fragmento de template para um componente filho e permitir que o componente filho renderize o fragmento em seu próprio template.

Ai entra os slots, que é outra maneira de passar conteúdo de um componente pai para um componente filho.

## Slots

Slots são uma maneira de passar conteúdo de um componente pai para um componente filho. Eles são úteis quando queremos que um componente filho aceite e renderize um fragmento de template fornecido pelo componente pai.

ComponenteFilho.vue

```vue
<template>
  <div>
    <h1>Slots</h1>
    <slot></slot>
  </div>
</template>
```

ComponentePai.vue

```vue
<template>
  <div>
    <componente-filho>
      <p>Este é um slot</p>
    </componente-filho>
  </div>
</template>
```

Neste exemplo, o componente filho renderiza o conteúdo fornecido pelo componente pai. O conteúdo fornecido pelo componente pai é renderizado no lugar do slot.

Nesse caso passamos um parágrafo para o componente filho, mas você pode passar qualquer coisa, como texto, elementos HTML, outros componentes, etc.

Slots também podem ter um nome, o que é útil quando queremos passar vários fragmentos de template para um componente filho.

## Slots nomeados

Slots nomeados são úteis quando queremos passar vários fragmentos de template para um componente filho.

Exemplo de um dialog:

AppDialog.vue

```vue
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
```

ComponentePai.vue

```vue
<template>
  <div>
    <AppDialog>
      <template v-slot:header>
        <h1>Este é o cabeçalho</h1>
      </template>
      <p>Este é o conteúdo</p>
      <template v-slot:footer>
        <button>Fechar</button>
      </template>
    </AppDialog>
  </div>
</template>
```

Neste exemplo, o componente pai passa um cabeçalho, conteúdo e rodapé para o componente filho. O cabeçalho e o rodapé são passados como slots nomeados, enquanto o conteúdo é passado como um slot padrão.

Slots nomeados são úteis quando queremos passar vários fragmentos de template para um componente filho e queremos que o componente filho saiba qual fragmento de template renderizar em qual slot.

Além disso, você pode usar a sintaxe de atalho `#` para slots nomeados, então ao invés de escrever `v-slot:header`, você pode escrever `#header` ou `#footer`.

```vue
<template>
  <div>
    <AppDialog>
      <template #header>
        <h1>Este é o cabeçalho</h1>
      </template>
      <p>Este é o conteúdo</p>
      <template #footer>
        <button>Fechar</button>
      </template>
    </AppDialog>
  </div>
</template>
```

Existem muitas outras coisas que você pode fazer com slots, como passar props para slots, fornecer fallback content, etc. Para saber mais, consulte a [documentação oficial](https://vuejs.org/v2/guide/components-slots.html).
