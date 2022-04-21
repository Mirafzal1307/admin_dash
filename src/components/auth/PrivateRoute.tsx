import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Template from '../../pages/Template';

type props = {
  component: React.FC;
  path: string;
};

const PrivateRoute: React.FC<props> = (props) => {
  if (localStorage.getItem('token')) {
    return (
      <Route path={props.path}>
        <Template />
      </Route>
    );
  }

  return <Redirect to="/login" />;
};

// PrivateRoute.propTypes = {
//   component: React.FC,
//   path: String,
//   exact: Boolean,
// };
export default PrivateRoute;
