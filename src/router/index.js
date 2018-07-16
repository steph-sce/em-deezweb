import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Accueil from '@/views/accueil'
import Album from '@/components/album'
import Artiste from '@/components/artiste'
import Track from '@/components/track'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/accueil', name: 'accueil', component: Accueil },
    { path: '/album', name: 'album', component: Album },
    { path: '/artiste', name: 'artiste', component: Artiste },
    { path: '/track', name: 'track', component: Track }
  ]
})