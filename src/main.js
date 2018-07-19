// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
require('../css/style.css')
require('../vendors/iconfonts/mdi/css/materialdesignicons.min.css')
require('../vendors/css/vendor.bundle.base.css')
require('../css/style.css')
require('../images/favicon.png')
Vue.config.productionTip = false

/* eslint-disable no-new */

/* Configuration for firebase*/
// Initialize Firebase
let app;
let config = {
  apiKey: "AIzaSyAMJ9fT_-19X7uanUthvY6VpbGg2hIQx1s",
  authDomain: "centrooftalmologicosanangel.firebaseapp.com",
  databaseURL: "https://centrooftalmologicosanangel.firebaseio.com",
  projectId: "centrooftalmologicosanangel",
  storageBucket: "centrooftalmologicosanangel.appspot.com",
  messagingSenderId: "429491198279"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
