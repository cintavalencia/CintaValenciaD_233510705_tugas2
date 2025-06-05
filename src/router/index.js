import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/declarative-rendering' // 👈 Default halaman awal
  },
  {
    path: '/declarative-rendering',
    name: 'declarative-rendering',
    component: () => import('../views/DeclarativeRenderingView.vue'),
    meta: { title: 'Declarative Rendering' }
  },
  {
    path: '/attribute-bindings',
    name: 'attribute-bindings',
    component: () => import('../views/AttributeBindingsView.vue'),
    meta: { title: 'Attribute Bindings' }
  },
  {
    path: '/event-listeners',
    name: 'event-listeners',
    component: () => import('../views/EventListenersView.vue'),
    meta: { title: 'Event Listeners' }
  },
  {
    path: '/form-bindings',
    name: 'form-bindings',
    component: () => import('../views/FormBindingsView.vue'),
    meta: { title: 'Form Bindings' }
  },
  {
    path: '/conditional-rendering',
    name: 'conditional-rendering',
    component: () => import('../views/ConditionalRenderingView.vue'),
    meta: { title: 'Conditional Rendering' }
  },
  {
    path: '/list-rendering',
    name: 'list-rendering',
    component: () => import('../views/ListRenderingView.vue'),
    meta: { title: 'List Rendering' }
  },
  {
    path: '/computed-properties',
    name: 'computed-properties',
    component: () => import('../views/ComputedPropertiesView.vue'),
    meta: { title: 'Computed Properties' }
  },
  {
    path: '/lifecycle-template-refs',
    name: 'lifecycle-template-refs',
    component: () => import('../views/LifecycleTemplateRefsView.vue'),
    meta: { title: 'Lifecycle & Template Refs' }
  },
  {
    path: '/watchers',
    name: 'watchers',
    component: () => import('../views/WatchersView.vue'),
    meta: { title: 'Watchers' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Learn Vue 3`
  next()
})

export default router
