import {ref} from 'vue'

export default function windowMain() {
    const show = ref(false)
    const showWindow = () => {
        show.value = true
    }

    return {show, showWindow}
}