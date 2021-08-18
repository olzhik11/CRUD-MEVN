export const users = {
    state:() => ({
        isAuth: Boolean,
        username: '',
        token: '',
        expiresIn: '',
        logInfo: {
            status: String,
            color: String
        }
    }),
    mutations: {
        stateUsers(state, {expiresIn, token, isAuth, username}){
            state.isAuth = isAuth
            state.username = username
            state.token = token
            state.expiresIn = expiresIn
        }
    },
    actions: {
        updateUsers({commit}, payload){
            commit('stateUsers', payload)
        }
    },
}