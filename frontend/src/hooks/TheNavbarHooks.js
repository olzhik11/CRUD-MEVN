import {onMounted} from 'vue'
import store from '@/store'
import {useRouter} from 'vue-router'
export default function TheNavbarHooks() {
    const router = useRouter()
    const logOut = () => {
        store.dispatch("updateUsers", { isAuth: false , username: '', token: '',expiresIn: ''})
            .then(() => {router.go()})

    }
   const statusCheck = () => {
        if (store.state.users.isAuth){
            store.state.users.logInfo.status = 'Logged In'
            store.state.users.logInfo.color = '#a3fab4'
        } else{
            store.state.users.logInfo.status = 'Logged out'
            store.state.users.logInfo.color = store.state.miscellaneous.style.BSweet
        }
    }
    onMounted(statusCheck)
    return {
        logOut,
    }
}