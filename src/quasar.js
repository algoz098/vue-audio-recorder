import Vue from 'vue'

import 'quasar/dist/quasar.css'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import lang from 'quasar/lang/pt-br.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Quasar, 
  QBtn,
  QCard,
  QCardSection
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QBtn,
    QCard,
    QCardSection
  },
  directives: {
  },
  plugins: {
  },
  lang: lang,
  iconSet: iconSet
 })