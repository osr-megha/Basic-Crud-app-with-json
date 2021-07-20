//import logo from './logo.svg';
import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AllUser from './Components/AllUser';
import AddUser from './Components/AddUser';
import NotFound from './Components/NotFound';


import {BrowserRouter, Switch, Route} from 'react-router-dom';
import EditUser from './Components/EditUser';


function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
    
    <Navbar/>

    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/all" component={AllUser} />
    <Route exact path="/add" component={AddUser} />
    <Route exact path="/edit/:id" component={EditUser} />
    <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
    </React.Fragment>
   
  );
}

export default App;
