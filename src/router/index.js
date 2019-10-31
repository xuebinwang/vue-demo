import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Insert from '@/components/insert'
import Edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/insert',
      name: 'Insert',
      component: Insert
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
