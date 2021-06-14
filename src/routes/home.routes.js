import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
// layouts
import HomeLayout from '../layouts/home';

// ----------------------------------------------------------------------

const HomeRoutes = {
  path: '*',
  layout: HomeLayout,
  routes: [
    {
      exact: true,
      path: '/',
      component: lazy(() => import('../views/LandingPage'))
    },
    {
      exact: true,
      path: '/how-it-works',
      component: lazy(() => import('../views/HowitworksPage'))
    },
    {
      exact: true,
      path: '/pricing',
      component: lazy(() => import('../views/PricingPage'))
    },
    // export const PATH_AUTH = {
    //   root: ROOTS_AUTH,
    //   login: path(ROOTS_AUTH, '/login'),
    //   loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
    //   register: path(ROOTS_AUTH, '/register'),
    //   registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
    //   resetPassword: path(ROOTS_AUTH, '/reset-password'),
    //   verify: path(ROOTS_AUTH, '/verify')
    // };
    {
      exact: true,
      path: '/auth/register',
      component: lazy(() => import('../views/authentication/Register'))
    },
    {
      exact: true,
      path: '/auth/login',
      component: lazy(() => import('../views/authentication/Login'))
    },
    {
      exact: true,
      path: '/auth/verify',
      component: lazy(() => import('../views/authentication/VerifyCode'))
    },
    {
      exact: true,
      path: '/auth/reset-password',
      component: lazy(() => import('../views/authentication/ResetPassword'))
    },
    // ----------------------------------------------------------------------

    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default HomeRoutes;
