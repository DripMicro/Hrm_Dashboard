import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
//
import { PATH_DASHBOARD } from './paths';

// ----------------------------------------------------------------------

const DashboardRoutes = {
  path: PATH_DASHBOARD.root,
  layout: DashboardLayout,
  routes: [
    // GENERAL
    // ----------------------------------------------------------------------
    {
      exact: true,
      path: PATH_DASHBOARD.general.home,
      component: lazy(() => import('../views/DashboardHomePage'))
    },
    {
      exact: true,
      path: PATH_DASHBOARD.general.calendar,
      component: lazy(() => import('../views/DashboardCalendarPage'))
    },
    {
      exact: true,
      path: PATH_DASHBOARD.general.directory,
      component: lazy(() => import('../views/DashboardDirectoryPage'))
    },
    {
      exact: true,
      path: PATH_DASHBOARD.general.user,
      component: lazy(() => import('../views/DashboardUserPage'))
    },
    // admin
    // ----------------------------------------------------------------------
    {
      exact: true,
      path: PATH_DASHBOARD.admin.offices,
      component: lazy(() => import('../views/DashboardOfficesPage'))
    },
    {
      exact: true,
      path: PATH_DASHBOARD.admin.teams,
      component: lazy(() => import('../views/DashboardTeamsPage'))
    },
    {
      exact: true,
      path: PATH_DASHBOARD.admin.organization,
      component: lazy(() => import('../views/DashboardOrganizationPage'))
    },
    {
      exact: true,
      path: PATH_DASHBOARD.admin.dashboard,
      component: lazy(() => import('../views/DashboardPage'))
    },

    // other
    // ----------------------------------------------------------------------
    {
      exact: true,
      path: 'slack',
      component: lazy(() => import('../views/DashboardOfficesPage'))
    },
    {
      exact: true,
      path: PATH_DASHBOARD.other.invite,
      component: lazy(() => import('../views/DashboardInvitePage'))
    },
    {
      exact: true,
      path: '/download',
      component: lazy(() => import('../views/DashboardOrganizationPage'))
    },
    {
      exact: true,
      path: '/contact',
      component: lazy(() => import('../views/DashboardPage'))
    },
    // ----------------------------------------------------------------------

    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default DashboardRoutes;
