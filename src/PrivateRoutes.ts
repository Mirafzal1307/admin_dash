import React from 'react';
const Home = React.lazy(() => import('./pages/Home'));
const Users = React.lazy(() => import('./pages/Users'));
type TRoute = {
  component: React.FC;
  path: string;
}[];
export const privateRoutes: TRoute = [
  { component: Home, path: '/' },
  { component: Users, path: '/users' },
];
