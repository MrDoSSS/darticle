import { App } from "vue"
import { createUserStore } from '../store/user'

export const storeInit = (app: App) => {
  const store = {
    user: createUserStore()
  }

  app.provide('store', store)
}