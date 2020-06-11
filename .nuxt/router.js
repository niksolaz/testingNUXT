import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16b7c7ff = () => interopDefault(import('../pages/link/index.vue' /* webpackChunkName: "pages/link/index" */))
const _5c5ecb6a = () => interopDefault(import('../pages/link/_id/index.vue' /* webpackChunkName: "pages/link/_id/index" */))
const _9ceff280 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _16b7c7ff,
    name: "link"
  }, {
    path: "/link/:id",
    component: _5c5ecb6a,
    name: "link-id"
  }, {
    path: "/",
    component: _9ceff280,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
