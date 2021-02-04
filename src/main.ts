import { createApp } from 'vue'
import App from './App.vue'
import { firebaseInit } from './plugins/firebase'
import { storeInit } from './plugins/store'

createApp(App)
  .use(firebaseInit)
  .use(storeInit)
  .mount('#app')
