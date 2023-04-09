import { ViteSSG } from 'vite-ssg'
import {} from 'vite'
import App from './App.vue'

export const createApp = ViteSSG(
  App,
  {
    routes: [],
  },
)
