import {ref} from 'vue'
import store from '@/store'
export default function mainPageWindowHooks() {
    const show = ref(false)
    const showWindow = () => {
        if (store.state.users.isAuth){
            show.value = true
        } else{
            alert('Please log in.')
        }
    }
    return {show, showWindow}
}