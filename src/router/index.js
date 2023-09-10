import Vue from 'vue'
import Router from 'vue-router'
import Skills from '@/pages/Skills'
import About from '@/pages/About'
import TodoList from '@/pages/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Skills, name: 'Skills' },
    { path: '/about/:name', component: About, name: 'About' },
    { path: '/todo', component: TodoList, name: 'TodoList' }
  ]
})
