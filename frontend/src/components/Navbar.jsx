import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'

export default function Navbar() {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleLogout = async () => {
        await axios.post('/api/users/logout')
        dispatch({type : 'REMOVE_USER'})
        history.push('/login')
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button variant="outlined" onClick={(e) => {
                        e.preventDefault()
                        handleLogout()
                    }}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
