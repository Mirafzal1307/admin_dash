// import jwtDecode, { JwtPayload } from 'jwt-decode';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { logout } from '../../app/slices/Auth';

const CheckToken: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(pathname);

    // if (localStorage.getItem('token')) {
    //   token = localStorage.getItem('token');
    // } else {
    //   dispatch(logout(0));
    // }
    if (!token) {
      dispatch(logout(0));
      history.push('/login');
    }
    // const currentDate = new Date();
    // if (token) {
    //   try {
    //     const { exp } = jwtDecode<JwtPayload>(token);
    //     const expirationTime = exp ? exp * 1000 - 15000 : 0;

    //     if (exp !== undefined && expirationTime !== 0 && currentDate.getTime() >= expirationTime) {
    //       dispatch(logout(0));
    //     }
    //   } catch (e) {
    //     dispatch(logout(0));
    //   }
    // }
  }, [pathname]);

  return null;
};

export default CheckToken;
