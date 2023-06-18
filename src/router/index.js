import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Accueil from '@/views/Accueil'
import Album from '@/views/Album'
import Artist from '@/views/Artist'
import Track from '@/views/Track'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/accueil', name: 'accueil', component: Accueil },
    { path: '/album/:id', name: 'album', component: Album },
    { path: '/artiste/:id', name: 'artist', component: Artist },
    { path: '/track/:id', name: 'track', component: Track }
  ]
})