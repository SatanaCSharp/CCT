import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainComponent'
import GraphicComponent from '@/components/GraphicComponent'
Vue.use(Router);

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainComponent',
      component: MainComponent,
    },
      {
          path:'/historical/:currency',
          name: "GraphicComponent",
          component: GraphicComponent
      }

  ]
})
