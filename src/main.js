import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import './index.css'
import './styles.scss'

createApp(App).use(store).mount('#app')

store.subscribe((mutation, state) => {
	localStorage.setItem('items', JSON.stringify(state.items))
})
