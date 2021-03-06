import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// process.env.NODE_ENV == "development" && import("@/mock/index.js");
import vuetify from "@/plugins/vuetify"; // path to vuetify export

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
