import { ViteSSG } from 'vite-ssg'
import {} from 'vite'
import App from './App.vue'
import autoRoutes from '~pages'

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
})

export const createApp = ViteSSG(
  App,
  {
    routes,
  },
)
