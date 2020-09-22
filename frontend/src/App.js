import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginRegisterPage from './components/LoginRegisterPage'
import Dashboard from './components/Dashboard'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './App.css'

function App() {
  
  const [ user, setUser ] = useState({})
  const [check, setCheck] = useState(false)
  const [ isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/api/users/user')
      console.log(res.data)
      try {
        if (res.data.valid){
          setIsAuthenticated(true)
          setUser({email : res.data.email})
        } else {
          setIsAuthenticated(false)
        }
      } catch {}
    }
    fetchData()
  },[check])

  return (
      <Switch>
        <Route path="/dashboard">
          {isAuthenticated ? <Dashboard update={()=> setCheck(!check)}/> : history.push('/login') }
        </Route>
        <Route path="/login">
          {isAuthenticated ? history.push('/dashboard') : <LoginRegisterPage update={()=> setCheck(!check)}/>}
        </Route>
      </Switch>
  );
}

export default App;
