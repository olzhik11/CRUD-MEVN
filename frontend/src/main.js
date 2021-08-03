import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import store from '@/store'
import components from './components/index'
const app = createApp(App)
app.component(components.Navbar.name, components.Navbar)
    .component(components.inputWindow.name, components.inputWindow)
    .component(components.justInput.name, components.justInput)
    .component(components.justButton.name, components.justButton)
    .component(components.Post.name, components.Post)
    .component(components.PostInput.name, components.PostInput)
    .component(components.PostList.name, components.PostList)
    .component(components.Footer.name, components.Footer)
    .component(components.workButton.name, components.workButton)

app.use(router)
    .use(store)
    .mount('#app')

