import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/flow-editor-bpmn',
    name: 'FlowEditorBpmn',
    component: () => import(/* webpackChunkName: "FlowEditorBpmn" */ '../views/flow-editor-bpmn/index.vue')
  },
  {
    path: '/flow-editor',
    name: 'FlowEditor',
    component: () => import(/* webpackChunkName: "FlowEditor" */ '../views/flow-editor/index.vue')
  },
  {
    path: '/x6-editor',
    name: 'X6Editor',
    component: () => import(/* webpackChunkName: "X6Editor" */ '../views/x6-editor/index.vue')
  },
  {
    path: '/swiper-demo',
    name: 'SwiperDemo',
    component: () => import(/* webpackChunkName: "SwiperDemo" */ '../views/swiper-demo/index.vue')
  },
  {
    path: '/form-create',
    name: 'FormCreate',
    component: () => import(/* webpackChunkName: "FormCreate" */ '../views/form-create/index.vue')
  },
  {
    path: '/custom-form-create',
    name: 'CustomFormCreate',
    component: () => import(/* webpackChunkName: "FormCreate" */ '../views/custom-form-create/index.vue')
  },
  {
    path: '/wang-editor',
    name: 'WangEditor',
    component: () => import(/* webpackChunkName: "WangEditor" */ '../views/wang-editor/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
