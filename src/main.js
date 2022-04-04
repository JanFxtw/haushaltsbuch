import Vue from 'vue';
import VueEllipseProgress from 'vue-ellipse-progress';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import '@/components/global';

Vue.use(VueEllipseProgress);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
