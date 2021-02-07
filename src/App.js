import './App.css';
import React,{useRef,useEffect} from 'react'
import requests from './request'
import Row from './Row';
import Banner from './Banner'
import Navbar from './Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Home"
import Login from './Login';
import { auth,db } from "./firebase";
import {useDispatch,useSelector} from 'react-redux'
import { login, logout, selectUser } from './UserSlice';
import Profile from './Profile'

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
          
        }))


      }
      else{
        dispatch(logout())

      }
    });
   
   
    return unsubscribe;
  }, [dispatch])


  return (
    <div className="app">
    <Router>
      {!user ? ( 
        <Login/>
      ):( 
    <Switch>
      <Route   path exact="/">
    <Home/>
    </Route>
    <Route path="/profile">
       <Profile />
    </Route>
    </Switch>
    )}
    </Router>
      
    </div> 
    
  )
}

export default App;
