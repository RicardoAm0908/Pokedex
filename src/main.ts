import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'

const app = createApp(App)
// .use(router)
// .use(store)

// store.app=app;

//route.isReady().then(() => {
    createApp(App).mount('#app')
// })
