import { App } from "vue"
import { createUserStore } from '@/store/user'

export const createStore = (app: App) => {
  const store = {
    user: createUserStore()
  }

  app.provide('store', store)

  return store
}