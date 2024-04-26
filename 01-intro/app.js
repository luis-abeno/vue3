// App é o nome do componente
const App = {
  // ES6 shorthand para data: function() { ... }
  data() {
    return {
      produto: "Camiseta",
    };
  },
};

// Monta o componente na div com id app
Vue.createApp(App).mount("#app");
