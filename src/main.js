import { createApp } from "vue";
import App from "./App.vue";
import { setupAntd } from "./antdv";

const app = createApp(App);
setupAntd(app);
app.mount("#app");
