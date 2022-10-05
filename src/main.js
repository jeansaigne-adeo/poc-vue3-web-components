import {defineCustomElement} from "vue";
//import App from "./App.vue";
//import MozaicVue from "@mozaic-ds/vue-3";
import "@mozaic-ds/vue-3/dist/mozaic-vue.css";
import ConfiguratorOption from "./components/ConfiguratorOption/ConfiguratorOption.ce.vue";

// import './assets/main.css'
customElements.define("pc-option", defineCustomElement(ConfiguratorOption));

//createApp(App).use(MozaicVue).mount("#app");
