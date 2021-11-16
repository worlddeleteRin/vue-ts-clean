import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueLazyLoad from "vue3-lazyload";
// import main styles file
import "./main.css";

import { api_url } from "./settings";

//import ElementPlus from 'element-plus';

const app = createApp(App);

// add app global properties
app.config.globalProperties.api_url = api_url;

// element plus components

// eof app global properties
// global components
// app.component('ComponentName', ComponentName)

// add vue observer directive

app.use(store);
app.use(router);
app.use(VueLazyLoad);

app.mount("#app");
