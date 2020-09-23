export const setUser = (payload) => {
    return { type: 'SET_USER', payload }
}

export const removeUser = () => {
    return { type : 'REMOVE_USER' }
}
