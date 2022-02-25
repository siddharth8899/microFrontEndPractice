import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el); // this mount is of vue, not our function 
};

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if(devRoot){
        mount(devRoot);
    }
}

export { mount }