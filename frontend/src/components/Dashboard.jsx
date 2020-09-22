import React from 'react'
import { Button } from '@material-ui/core'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar'

export default function Dashboard({update}) {

    const handleLogout = async () => {
        await axios.post('/api/users/logout')
        history.push('/login')
        update()
    }
    const history = useHistory()

    return (
        <>
            <Navbar>
            <Button onClick={(e)=> {
                e.preventDefault()
                handleLogout()
            }}>Logout</Button>
            </Navbar>
            
        </>
    )
}
