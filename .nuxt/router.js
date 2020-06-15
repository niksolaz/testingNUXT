import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e039976 = () => interopDefault(import('../pages/link/index.vue' /* webpackChunkName: "pages/link/index" */))
const _a431ed3e = () => interopDefault(import('../pages/link/_id/index.vue' /* webpackChunkName: "pages/link/_id/index" */))
const _177ee6e9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/link",
    component: _7e039976,
    name: "link"
  }, {
    path: "/link/:id",
    component: _a431ed3e,
    name: "link-id"
  }, {
    path: "/",
    component: _177ee6e9,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
