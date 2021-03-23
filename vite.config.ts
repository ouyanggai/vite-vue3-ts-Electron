/*
 * @Autor: 欧阳改
 * @Date: 2021-03-23 11:58:03
 * @LastEditors: 欧阳改
 * @LastEditTime: 2021-03-23 17:16:15
 * @Description: 唧唧复唧唧
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./'
})
