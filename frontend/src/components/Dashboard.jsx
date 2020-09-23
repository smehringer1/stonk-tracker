import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'

export default function Dashboard() {
    const currentUser = useSelector(state => state.user)
    
    return (
        <>
            <Navbar/>
            <Grid container style={{justifyContent : 'center'}}>
                <Grid item xs={6}>
                    <Paper style={{height:200, margin : 20}}>{currentUser.email}</Paper>
                </Grid>
            </Grid>
        </>
    )
}
