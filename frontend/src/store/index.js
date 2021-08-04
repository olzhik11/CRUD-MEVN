import {createStore} from 'vuex'
import {miscellaneous} from './miscellaneous'
export default createStore({
    modules: {
        miscellaneous: miscellaneous
    }
})