import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MyContext } from './Pages/Context';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import AdminPage from './Pages/AdminPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';

import './main.css';

function App() {

  const ctx = useContext(MyContext);

  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          {
            ctx ? (
              <>
                {ctx.isAdmin ? <Route path='/admin' component={AdminPage} /> : null}
                <Route path='/profile' component={Profile} />
              </>
            ) : (
              <>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
              </>
            )
          }
        </Switch>
    </BrowserRouter>
  );
}

export default App;
