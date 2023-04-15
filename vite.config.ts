import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import matter from 'gray-matter'
import fs from 'fs-extra'

export default defineConfig({
  resolve: {
    alias: [
      { find: '~/', replacement: `${resolve(__dirname, 'src')}/` },
    ],
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: 'icon',
        }),
      ],
    }),
    Pages({
      dirs: 'pages',
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })

        return route
      },
    }),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
    }),
    Markdown({
      frontmatterPreprocess(frontmatter, options, id, defaults) {
        const head = defaults(frontmatter, options)
        return { head, frontmatter }
      },
    }),
    Icons({
      autoInstall: true,
    }),
  ],
})
