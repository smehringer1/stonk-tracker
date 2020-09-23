
const initialState = {
    user : {},
    isAuthenticated : false
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER':
            state.user = action.payload
            state.isAuthenticated = true
            break
        case 'REMOVE_USER':
            state.user = {}
            state.isAuthenticated = false
            break
        default:
            break
    }
    return state
}
