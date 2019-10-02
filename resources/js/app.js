require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);
// import Vuetify from 'vuetify/lib'
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

const opts = {};

export default new Vuetify(opts)

import swal from 'sweetalert2';
window.swal = swal;
window.Fire = new Vue();

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);
Vue.use(Vuetify, VueRouter, axios, VueAxios);


import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import AllUsers from "./components/AllUsers";
const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    {
        name: 'posts',
        path: '/posts',
        component: IndexComponent
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditComponent
    },
    {
        name: 'users',
        path: '/datatable',
        component: AllUsers
    },
];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
