import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
console.log("routed");
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    console.log(name);
    return import(
      /* webpackIgnore: true */
      name);
  },
});
console.log("constructed");
const layoutEngine = constructLayoutEngine({ routes, applications });
console.log("layouted");
applications.forEach(registerApplication);
console.log("registered"); 

/* registerApplication({
  name: "@NTTData/sidebar",
  //app: () => System.import("@NTTData/sidebar"),
  app: () => import(
    /* webpackIgnore: true 
    "@NTTData/sidebar"),
    //"//localhost:3010/src/main.js"),
  activeWhen: ["/sidebar"],
}); */

//console.log(import(
  /* webpackIgnore: true */
//  "//localhost:3010/src/main.js")
//);

//console.log(import(
  /* webpackIgnore: true */
//  "@NTTData/sidebar"));

//  console.log(System.import("@NTTData/sidebar"));

layoutEngine.activate();
//console.log("activated");
start();
