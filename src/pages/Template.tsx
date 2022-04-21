import React, { Suspense } from 'react';
import Sidebar from '../components/ui/Sidebar';
import User from '../components/ui/User';
import { Row } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { privateRoutes } from '../PrivateRoutes';
import { Spin } from 'antd';
import CheckToken from '../components/auth/CheckToken';

const Template = (): JSX.Element => {
  return (
    <>
      <CheckToken />

      <User />

      <Row>
        <Sidebar />

        <Suspense fallback={<Spin className="loader-svg" />}>
          <Switch>
            {privateRoutes.map((privateRoute, idx) => {
              return (
                privateRoute.component && (
                  <Route
                    key={idx}
                    path={privateRoute.path}
                    exact
                    render={(props: any) => <privateRoute.component {...props} />}
                  />
                )
              );
            })}
          </Switch>
        </Suspense>
      </Row>
    </>
  );
};

export default Template;
