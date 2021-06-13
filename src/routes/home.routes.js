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
    // ----------------------------------------------------------------------

    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default HomeRoutes;
