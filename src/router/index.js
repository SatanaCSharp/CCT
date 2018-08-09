import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainComponent'
import firstComponent from '@/components/firstComponent'
import secondComponent from '@/components/secondComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainComponent',
      component: MainComponent
    },
      {
          path: '/first',
          name: 'firstComponent',
          component: firstComponent
      },
      {
          path: '/second',
          name: 'secondComponent',
          component: secondComponent
      }
  ]
})
