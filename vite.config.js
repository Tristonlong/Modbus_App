import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// import {LoadingPlugin} from 'vue-loading-overlay';
import pxtovw from 'postcss-px-to-viewport'
import vue from '@vitejs/plugin-vue'

const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  viewportWidth: 1280,
  viewportUnit: 'vw',
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  manifest: true, //配置后才能让编译后的vue路径被正确识别
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [loder_pxtovw],
    },
  },
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://192.168.2.130:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  optimizeDeps: {
    exclude: ['electron'], // 告诉 Vite 排除预构建 electron，不然会出现 __diranme is not defined
  },
})
