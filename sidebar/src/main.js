//import "./set-public-path";
import "./css/index.css"

import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

//import router from "./router/router.js";

createApp(App).mount('#app');

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
      });
    },
    handleInstance: (app) => {
      //app.use(router);
    }
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
