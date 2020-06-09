import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LetItSnow from "vue-let-it-snow";
process.env.NODE_ENV == "development" && import("@/mock/index.js");
import vuetify from "@/plugins/vuetify"; // path to vuetify export

Vue.config.productionTip = false;
Vue.use(LetItSnow);
new Vue({
  LetItSnow,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
