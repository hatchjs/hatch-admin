<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <navbar :show="true"></navbar>
    <sidebar :show="sidebar.opened && !sidebar.hidden"></sidebar>
    <app-main></app-main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import router from '@/router'
import store from '@/store'
import VueAuth from '@websanova/vue-auth'
import * as filters from '@/filters'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'
import { Navbar, Sidebar, AppMain, FooterBar } from 'components/layout'
import { mapGetters, mapActions } from 'vuex'

Vue.router = router
// sync vue-route to store
sync(store, router)
Vue.use(VueAxios, axios)
Vue.use(NProgress)
console.log(store.state)
Vue.use(VueAuth, store.state.auth)
// Enable devtools
Vue.config.devtools = true

const nprogress = new NProgress({ parent: '.nprogress-container' })
const { state } = store

router.beforeEach((route, redirect, next) => {
  if (state.app.device.isMobile && state.app.sidebar.opened) {
    store.commit(TOGGLE_SIDEBAR, false)
  }
  next()
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default {
  store,
  nprogress,
  router,
  components: {
    Navbar,
    Sidebar,
    AppMain,
    FooterBar,
    NprogressContainer
  },

  beforeMount () {
    const { body } = document
    const WIDTH = 768
    const RATIO = 3

    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        let isMobile = rect.width - RATIO < WIDTH
        this.toggleDevice(isMobile ? 'mobile' : 'other')
        this.toggleSidebar({
          opened: !isMobile
        })
      }
    }

    // 兼容不同端
    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  },

  // 共享数据
  computed: mapGetters({
    sidebar: 'sidebar'
  }),

  // 通用的方法
  methods: mapActions([
    'toggleDevice',
    'toggleSidebar'
  ])
}
</script>

<style lang="scss">
@import '~animate.css';
.animated {
  animation-duration: .377s;
}

@import '~bulma';

@import '~wysiwyg.css/wysiwyg.sass';

$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';

html {
  background-color: whitesmoke;
}

.nprogress-container {
  position: fixed !important;
  width: 100%;
  height: 50px;
  z-index: 2048;
  pointer-events: none;

  #nprogress {
    $color: #48e79a;

    .bar {
      background: $color;
    }
    .peg {
      box-shadow: 0 0 10px $color, 0 0 5px $color;
    }

    .spinner-icon {
      border-top-color: $color;
      border-left-color: $color;
    }
  }
}

</style>

