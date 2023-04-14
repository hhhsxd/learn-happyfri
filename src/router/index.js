import Vue from 'vue'
import Router from 'vue-router'
import APP from '../App.vue'
import HOME from '../page/home/index.vue'
import ITEM from '../page/item/index.vue'
import SCORE from '../page/score/index.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: APP,
    children: [{
      path: '',
      component: HOME
    },
    {path: 'item',
      component: ITEM
    },
    {path: 'score',
      component: SCORE
    }
    ]
  }
]
export default new Router({
  routes
})
