import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bad9544e = () => interopDefault(import('..\\pages\\addHelp.vue' /* webpackChunkName: "pages/addHelp" */))
const _a021e2ae = () => interopDefault(import('..\\pages\\addHelp2.vue' /* webpackChunkName: "pages/addHelp2" */))
const _58c89d8d = () => interopDefault(import('..\\pages\\final.vue' /* webpackChunkName: "pages/final" */))
const _17d9ce0c = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages/help" */))
const _e330a0b0 = () => interopDefault(import('..\\pages\\help2.vue' /* webpackChunkName: "pages/help2" */))
const _6f7693ec = () => interopDefault(import('..\\pages\\helpFInal.vue' /* webpackChunkName: "pages/helpFInal" */))
const _8b35b22e = () => interopDefault(import('..\\pages\\helpNoReg.vue' /* webpackChunkName: "pages/helpNoReg" */))
const _22a55372 = () => interopDefault(import('..\\pages\\main.vue' /* webpackChunkName: "pages/main" */))
const _63b02d2a = () => interopDefault(import('..\\pages\\reg.vue' /* webpackChunkName: "pages/reg" */))
const _eb70f51c = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages/registration" */))
const _1379f6e9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addHelp",
    component: _bad9544e,
    name: "addHelp"
  }, {
    path: "/addHelp2",
    component: _a021e2ae,
    name: "addHelp2"
  }, {
    path: "/final",
    component: _58c89d8d,
    name: "final"
  }, {
    path: "/help",
    component: _17d9ce0c,
    name: "help"
  }, {
    path: "/help2",
    component: _e330a0b0,
    name: "help2"
  }, {
    path: "/helpFInal",
    component: _6f7693ec,
    name: "helpFInal"
  }, {
    path: "/helpNoReg",
    component: _8b35b22e,
    name: "helpNoReg"
  }, {
    path: "/main",
    component: _22a55372,
    name: "main"
  }, {
    path: "/reg",
    component: _63b02d2a,
    name: "reg"
  }, {
    path: "/registration",
    component: _eb70f51c,
    name: "registration"
  }, {
    path: "/",
    component: _1379f6e9,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
