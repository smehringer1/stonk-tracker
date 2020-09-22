import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'

export default function Navbar(props) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    {props.children}
                </Toolbar>
            </AppBar>
        </div>
    )
}
