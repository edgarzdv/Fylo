import React from 'react';
import './styles/global.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';

import BugApp from './pages/BugApp'
import UserPage from './pages/UserPage'
import BugDetails from './pages/BugDetails'
import UserDetails from './pages/UserDetails'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import NavBar from './cmps/NavBar'
import BugEdit from './pages/BugEdit'
import BugAdd from './pages/BugAdd'


function App() {
  return (
    <main>
       <Router>
          <NavBar></NavBar>
          <Switch>
             <Route component={Login} path="/" exact></Route>
             <Route component={SignUp} path="/user/signup" exact></Route>
             <Route component={UserDetails} path="/user/:id" exact></Route>
             <Route component={UserPage} path="/user/" exact></Route>
             <Route component={BugApp} path="/bug" exact></Route>
             <Route component={BugAdd} path="/BugAdd" exact></Route>
             <Route component={BugEdit} path="/bug/:id/edit" exact></Route>
             <Route component={BugDetails} path="/bug/:id" exact></Route>
          </Switch>
       </Router>
    </main>
 )
}

export default App;
