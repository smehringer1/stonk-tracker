import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/actions'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import { loginUser, registerUser } from '../auth/authActions'

export default function LoginRegisterPage() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginPage, setLoginPage] = useState(true)
    const [fail, setFail] = useState(false)
    const history = useHistory()

    const handleSubmit = async (email, password, login) => {
        var res = {}
        if (login) {
            res = await loginUser(email, password)
        } else {
            res = await registerUser(email, password)
        }
        if (res.valid === true){
            console.log('Success')
            dispatch(setUser(res.data))
            history.push('/dashboard')
        } else {
            console.log('Fail')
            console.log(res.msg)
            setFail(true)
        }
    }

    return (
        <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
        <Grid container justify="center" direction="column" spacing={10} style={{justifyContent : "center", minHeight : "90vh"}}>
            <Grid item >
            <Paper elevation={2} style={{minHeight : "30vh", justifyContent : "center", padding: 50}}>
                    <Grid item>
                        <h2 style={{marginBottom : 10}}>{loginPage ? 'Login' : 'Register'}</h2>
                    </Grid> 
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit(email,password, loginPage)}}>
                    <Grid item>
                        <TextField id="email" label="email" onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField id="password" type="password" label="password" onChange={(e) => setPassword(e.target.value)}/>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary"  style={{marginTop : 30}}>Submit</Button>
                        {/* <Button onClick={() => history.push('/')} style={{marginTop : 30, marginLeft : 20}}>Back</Button> */}
                    </Grid>
                    {loginPage ? 
                    <Grid item>
                        <Button variant="contained" onClick={()=> setLoginPage(false)} style={{marginTop : 20}}>Register</Button>
                    </Grid> : 
                    <Grid item>
                        <Button onClick={()=> setLoginPage(true)} style={{marginTop : 20}}>Login</Button>
                    </Grid>
                    }
                    {fail ? <h3>Error</h3> : ''}   
                    </form>
            </Paper>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
    )     
}
