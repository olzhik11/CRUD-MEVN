import {createStore} from 'vuex'
import {miscellaneous} from './miscellaneous'
import {users} from './users'
import createPersistedState from "vuex-persistedstate";

export default createStore({
    modules: {
        miscellaneous: miscellaneous,
        users: users
    },
    plugins: [createPersistedState()]
})

