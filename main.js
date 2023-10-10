import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const app = Vue.createApp({});

const router = VueRouter.createRouter({
    routes: [
        { path: '/', redirect: '#about' }, 
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

app.use(router);

app.component('project-item', {
    props: ['title', 'description'],
    template: `
        <div class="project">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
    `,
});

app.mount('#project-list');
