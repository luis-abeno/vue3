# Testes Unitários

## Tabela de conteúdo

- [Introdução](#introdução)
- [Quando usar](#quando-usar)
- [TDD](#tdd)
- [Vitest](#vitest)
  - [Configuração](#configuração)
  - [Escrevendo testes](#escrevendo-testes)
  - [Executando testes](#executando-testes)
- [Code Coverage](#code-coverage)
  - [V8 e Istanbul](#v8-e-istanbul)
- [JsDOM e HappyDOM](#jsdom-e-happydom)

## Introdução

Testes unitários são testes que verificam o comportamento de uma unidade de código, como uma função ou um componente, de forma isolada. Eles são importantes para garantir que o código funcione corretamente e para evitar regressões.

No Vue, os testes unitários são escritos com o auxílio de ferramentas como Jest, Mocha, Chai e Sinon. Neste guia, vamos utilizar o Vitest, uma ferramenta de testes unitários para Vue 3.

## Quando usar

Testes unitários são recomendados para:

- Verificar o comportamento de funções e componentes de forma isolada;
- Facilitar a manutenção do código, pois permitem identificar problemas rapidamente;
- Garantir a qualidade do código e evitar regressões;
- Documentar o comportamento do código;
- Dar ao desenvolvedor confiança para fazer refatorações no código.

## TDD

O TDD (Test-Driven Development) é uma prática de desenvolvimento de software que consiste em escrever os testes antes de implementar o código. O ciclo do TDD é composto por três etapas:

1. **Red**: escrever um teste que falhe;
2. **Green**: implementar o código (mais simples possível), que faça o teste passar;
3. **Refactor**: refatorar o código para melhorar a qualidade, aqui aplicamos as boas práticas

O TDD é uma prática que ajuda a manter o foco no problema a ser resolvido e a garantir que o código seja testado desde o início. Ele nos ajuda a escrever código mais limpo e com menos bugs devido a sua natureza do SRP (Single Responsibility Principle).

## Vitest

O Vitest é uma ferramenta de testes unitários para Vue 3. Ele é baseado no Jest e oferece uma API simples e intuitiva para escrever testes de componentes Vue.

Utilizamos o Vitest para escrever testes unitários para componentes Vue. Ele nos permite testar a renderização, os eventos e o estado dos componentes de forma fácil e eficiente.

### Configuração

Para configurar o Vitest em um projeto Vue, basta instalar o pacote `@vitest/vue` e adicionar um script no `package.json` para executar os testes:

```json
{
  "scripts": {
    "test": "vitest"
  },
  "devDependencies": {
    "@vitest/vue": "^1.0.0"
  }
}
```

Em seguida, crie um arquivo de configuração `vitest.config.js` na raiz do projeto para definir as opções de configuração do Vitest:

```js
module.exports = {
  testMatch: ['**/*.test.js']
}
```

Neste exemplo, estamos configurando o Vitest para buscar arquivos de teste com a extensão `.test.js`. Você pode personalizar a configuração de acordo com as necessidades do seu projeto.

### Escrevendo testes

Para escrever testes com o Vitest, basta criar um arquivo com a extensão `.test.js` ou `.spec.js` e utilizar a API do Vitest para definir os testes:

```js
import { render } from '@vitest/vue'

test('renders a button', async () => {
  const { getByText } = render('<button>Clique aqui</button>')

  const button = getByText('Clique aqui')

  expect(button).toBeInTheDocument()
})
```

Neste exemplo, estamos testando se um botão é renderizado corretamente. Utilizamos a função `render` do Vitest para renderizar o componente e a função `getByText` para buscar o botão no DOM. Em seguida, utilizamos a função `expect` para verificar se o botão está presente no DOM.

Obs: O Vitest utiliza o JsDOM para simular o DOM em um ambiente Node.js. Isso permite testar componentes Vue sem a necessidade de um navegador.
Obs2: Ao invés de `test` você pode usar `it` ou `describe` para criar testes, não há diferença entre eles além da semântica, mas para manter a consistência é recomendado usar apenas um.

### Executando testes

Para executar os testes com o Vitest, basta rodar o comando `npm test` no terminal. O Vitest irá buscar os arquivos de teste de acordo com a configuração e executar os testes.

```bash
npm test
```

O Vitest irá mostrar o resultado dos testes no terminal, indicando quais testes passaram e quais falharam. Ele também oferece uma interface gráfica para visualizar os testes no navegador.

Além disso você pode criar um script no `package.json` para rodar os testes em modo watch, assim toda vez que você salvar um arquivo de teste ele irá rodar os testes novamente.

```json
{
  "scripts": {
    "test:watch": "vitest --watch"
  }
}
```

## Code Coverage

O Code Coverage é uma métrica que indica a porcentagem de código que foi testada por um conjunto de testes. Ele é uma ferramenta importante para avaliar a qualidade dos testes e identificar partes do código que não estão sendo testadas.

O Vitest oferece suporte ao Code Coverage, permitindo que você visualize a cobertura de código dos seus testes e identifique áreas que precisam de mais testes.

### V8 e Istanbul

Para esse trabalho utilizamos o V8 ou Istanbul para gerar o relatório de cobertura de código.

Eles nada mais são do que ferramentas que analisam o código e geram um relatório indicando a porcentagem de código coberta pelos testes.

## JsDOM e HappyDOM

O JsDOM é uma implementação em JavaScript do DOM que permite executar testes de componentes Vue em um ambiente Node.js. Ele simula o comportamento do navegador e permite testar a renderização e os eventos dos componentes.

O HappyDOM é uma extensão do JsDOM que oferece uma API mais amigável para escrever testes de componentes Vue. Ele simplifica a criação de elementos HTML e a interação com o DOM, tornando os testes mais fáceis de escrever e manter.
