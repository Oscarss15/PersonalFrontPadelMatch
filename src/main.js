import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

router.beforeEach((to, from, next) => {
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    loadingElement.classList.remove("hide");
  }
  next();
});

router.afterEach(() => {
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    setTimeout(() => {
      loadingElement.classList.add("hide");
    }, 1500);
  }
});

app.use(createPinia());
app.use(router);

app.mount("#app");
