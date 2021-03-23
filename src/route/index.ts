/*
 * @Autor: 欧阳改
 * @Date: 2021-03-23 16:09:44
 * @LastEditors: 欧阳改
 * @LastEditTime: 2021-03-23 17:23:54
 * @Description: 唧唧复唧唧
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/HelloWorld.vue'),
  },
  {
    path: '/a',
    component: () => import('../components/about.vue'),
  }
]

export default createRouter({
  routes,
  history: createWebHashHistory(), // 这里使用 hash 模式，确保打包后正常加载
})
