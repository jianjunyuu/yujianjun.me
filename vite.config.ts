import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'

export default defineConfig({
  plugins: [
    Vue(
      { include: [/\.vue$/, /\.md$/] }),
    Pages({
      dirs: 'pages',
      extensions: ['vue', 'md'],
    }),
    Markdown(),
  ],
})
