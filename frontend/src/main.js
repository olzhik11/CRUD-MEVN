import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import store from '@/store'
import components from './components/index'
const app = createApp(App)

app.component(components.BaseInputWindow.name, components.BaseInputWindow)
    .component(components.BaseInput.name, components.BaseInput)
    .component(components.BaseNavButton.name, components.BaseNavButton)
    .component(components.BaseWorkButton.name, components.BaseWorkButton)

app.use(router)
    .use(store)
    .mount('#app')

