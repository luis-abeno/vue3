# Projeto real com Vue 3

## Tabela de conteúdo

- [Introdução](#introdução)
- [Por que "Projeto Real?"](#por-que-projeto-real)
- [O que vamos construir?](#o-que-vamos-construir)
- [create-vue](#create-vue)
- [Estrutura do projeto](#estrutura-do-projeto)

## Introdução

Este projeto é um exemplo de um projeto real com Vue 3.

## Por que "Projeto Real?"

A ideia de um projeto real é mostrar como podemos utilizar o Vue 3 em um projeto real, com todas as suas funcionalidades e boas práticas.

## O que vamos construir?

Vamos construir um projeto de uma loja virtual, onde teremos uma listagem de produtos, uma página de detalhes e uma página principal.

Esse projeto será dividido em várias partes, onde cada parte será um exemplo de um tópico abordado no curso.

## Criando um novo projeto Vue 3

Para criar um novo projeto Vue 3, podemos utilizar o comando `create-vue` do NPM.

Se trata de um CLI (Command Line Interface), que é usado para iniciar um projeto Vue 3 com Vite. É a forma recomendada atualmente, anteriormente até a versão 2 se usava o Vue CLI

[create-vue](https://github.com/vuejs/create-vue)

```bash
npm create vue@latest
```

Esse comando irá criar um novo projeto Vue 3 com todas as configurações necessárias para começar a desenvolver.

Ao executar o comando, serão feitas uma série de perguntas para configurar o projeto.

```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes
```

Após isso o projeto será criado e podemos iniciar o desenvolvimento.

```bash
npm run dev
```

E pronto, temos um novo projeto Vue 3 criado e pronto para ser desenvolvido.

## Estrutura do projeto

A estrutura do projeto inicial é a seguinte:

```bash
├── node_modules
├── public
├── src
│   ├── assets
│   ├── components
│   ├── router
│   ├── stores
│   ├── views
│   ├── App.vue
│   ├── main.ts
├── .eslintrc.csj
├── .gitignore
├── prettier.json
├── package.json
├── vite.config.ts
├── tsconfig.json
├── vitest.config.ts
├── README.md
```

- `node_modules`: Contém todas as dependências do projeto.
- `public`: Contém os arquivos públicos do projeto e que não serão processados pelo Vite (webpack ou rollout), arquivos como por exemplo ícones de mídias sociais, favicon, etc.
- `src`: Contém os arquivos do projeto.
  - `assets`: Contém os arquivos de assets do projeto, como imagens, fontes, etc.
  - `components`: Contém os componentes reútilizaveis do projeto.
  - `router`: Contém os arquivos de configuração do Vue Router.
  - `stores`: Contém as stores criadas com o Pinia e nos ajudará com o gerenciamento de estado.
  - `views`: Contém as views do projeto.
  - `App.vue`: Arquivo inicial e será o primeiro a ser lido pelo Vue.
  - `main.ts`: Arquivo principal do projeto ao ser iniciado.
- `.eslintrc.csj`: Configuração do ESLint para code quality.
- `.gitignore`: Arquivos e pastas que não serão versionados pelo Git.
- `prettier.json`: Configuração do Prettier para code formatting.
- `package.json`: Arquivo de configuração do projeto, contém as dependências, scripts, etc.
- `vite.config.ts`: Configuração do Vite, como build, plugins, etc.
- `tsconfig.json`: Configurações do TypeScript.
- `vitest.config.ts`: Configuração do Vitest para testes unitários.
- `README.md`: Documentação do projeto.
