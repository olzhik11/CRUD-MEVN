import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/index'
import axios from "axios";
import Toaster from '@meforma/vue-toaster'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Toaster)
app.use(vuetify)
app.mount('#app')

app.component(components.BaseInputWindow.name, components.BaseInputWindow)
    .component(components.BaseInput.name, components.BaseInput)
    .component(components.BaseWorkButton.name, components.BaseWorkButton)
    .component(components.BaseNavButton.name, components.BaseNavButton)

axios.interceptors.request.use((req) => {
    const token = store.state.users.token
    if (token) {
        req.headers.Authorization =  token
    }
    return req
})
