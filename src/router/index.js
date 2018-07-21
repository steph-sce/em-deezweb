import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Accueil from '@/views/accueil'
import Album from '@/components/album'
import Artist from '@/components/artist'
import Title from '@/components/title'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/accueil', name: 'accueil', component: Accueil },
    { path: '/album/:id', name: 'album', component: Album },
    { path: '/artiste/:id', name: 'artist', component: Artist },
    { path: '/title/:id', name: 'title', component: Title }
  ]
})