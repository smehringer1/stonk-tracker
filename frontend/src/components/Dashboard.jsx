import React from 'react'
import { Grid, Paper } from '@material-ui/core'
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
            <Navbar handleLogout={handleLogout}/>
            <Grid container style={{justifyContent : 'center'}}>
                <Grid item xs={6}>
                    <Paper style={{height:200, margin : 20}}>Hello</Paper>
                </Grid>
            </Grid>
        </>
    )
}
