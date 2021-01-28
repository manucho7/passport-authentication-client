import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import AdminPage from './Pages/AdminPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

import './main.css';
import Context from './Pages/Context';

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/admin' component={AdminPage} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Context>
    </BrowserRouter>
  );
}

export default App;
