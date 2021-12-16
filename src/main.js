import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router' //index.jsの名前以外の時は省略できない
import store from './store'

createApp(App).use(store).use(router).mount('#app')
