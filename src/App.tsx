import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Login from './components/auth/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import Template from './pages/Template';
import ForgotPassword from './components/auth/ForgotPassword';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />

          <Route exact path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute component={Template} path={'/'} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
