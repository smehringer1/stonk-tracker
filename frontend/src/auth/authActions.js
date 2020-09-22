import axios from 'axios'

const loginUser = async (email, password) => {
    console.log('Checking login...')
    try {
        const response = await axios.post('/api/users/login', {email : email, password : password})
        return response.data
    } catch {
        return {valid : false}
    }
}

const registerUser = async (email, password) => {
    console.log('Checking register...')
    try {
        const response = await axios.post('/api/users/register', {email : email, password : password})
        return response.data
    } catch {
        return {valid : false}
    }
}

export {loginUser, registerUser}