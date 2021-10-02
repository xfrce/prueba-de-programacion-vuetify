import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import diccionario from './diccionario'

Vue.config.productionTip = false

Vue.use(vuetify);

Vue.prototype.$spn = diccionario;

new Vue({
    vuetify,
    router,
  render: h => h(App)
}).$mount('#app')
