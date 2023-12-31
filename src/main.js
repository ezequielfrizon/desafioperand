import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Toasted from "vue-toasted";
import vuetify from "./plugins/vuetify";

Vue.use(Toasted);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
