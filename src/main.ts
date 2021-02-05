import { createApp } from 'vue'
import App from './App.vue'
import { createFirebase } from './plugins/firebase'
import { createStore } from './plugins/store'
import { createRouter } from './plugins/router'

import './theme/index.css'

createApp(App)
  .use(createFirebase)
  .use(createStore)
  .use(createRouter)
  .mount('#app')
