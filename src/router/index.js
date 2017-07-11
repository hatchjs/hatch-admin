import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import menuModule from 'vuex-store/modules/menu'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home // 首页没有权限限制
    },
    {
      name: 'Login',
      path: '/login', // 登录页面没有权限限制， 所以也不进行延后读取
      component: require('@/components/views/auth/Login')
    },
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (item.children) {
      console.warning(`menu item ${item.name} don't have no children.`)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}