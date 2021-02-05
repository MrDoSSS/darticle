import { App } from "vue"
import { createWebHistory, createRouter as createVueRouter } from "vue-router"
import { routes } from '@/router'
import { guardPipeline } from "@/router/guard-pipeline"

export const createRouter = (app: App) => {
  const router = createVueRouter({
    history: createWebHistory(),
    routes
  })

  router.beforeEach((to, from, next) => guardPipeline({ to, from, next, store: app._context.provides.store })())

  app.use(router)
}