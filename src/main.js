import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import vuetify from "./plugins/vuetify";
import routes from "./config/routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(vuetify).use(router).mount("#app");
