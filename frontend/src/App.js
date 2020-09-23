import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginRegisterPage from './components/LoginRegisterPage'
import Dashboard from './components/Dashboard'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, removeUser } from './redux/actions'

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.isAuthenticated)
  const history = useHistory()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/api/users/user')
      console.log('useEffect run')
      try {
        if (res.data.valid){
          dispatch(setUser(res.data))
        } else {
          dispatch(removeUser())
        }
      } catch {}
    }
    fetchData()
  },[])

  return (
      <Switch>
        <Route path="/dashboard">
          {isAuthenticated ? <Dashboard/> : history.push('/login') }
        </Route>
        <Route path="/login">
          {isAuthenticated ? history.push('/dashboard') : <LoginRegisterPage/>}
        </Route>
      </Switch>
  );
}

export default App;
