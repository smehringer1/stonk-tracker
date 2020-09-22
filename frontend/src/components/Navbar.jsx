import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'

export default function Navbar({handleLogout}) {
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
