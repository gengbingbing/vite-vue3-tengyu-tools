import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// 加载jsx插件
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return defineConfig({
    base: env.BASE_URL,
    server:{
      open: true,
      hot: true,
      port:9094,
      proxy: {
        '/tengyu/': {
          target: 'http://xxxxxxxxxxxxx/',
        },
      },
    },
    publicDir: 'public',
    resolve:{
      extensions:[".js",'.vue','.json','jsx'],
      alias:{
        "@":resolve('src')
      }
    },
    plugins: [
      vue(),
      vueJsx()
    ],
    build: {
      manifest: false,
      outDir: 'dist/tengyu',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        }
      }
    },
  })
} 
