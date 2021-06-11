// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_HOME = {
  components: '/components',
  cloud: 'https://www.sketch.com/s/0fa4699d-a3ff-4cd5-a3a7-d851eb7e17f0',
  purchase: 'https://material-ui.com/store/items/minimal-dashboard/',
  dashboard: ROOTS_DASHBOARD
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    pageOne: path(ROOTS_DASHBOARD, '/one'),
    pageTwo: path(ROOTS_DASHBOARD, '/two'),
    pageThree: path(ROOTS_DASHBOARD, '/three')
  },
  app: {
    root: path(ROOTS_DASHBOARD, '/drop'),
    pageFour: path(ROOTS_DASHBOARD, '/drop/four'),
    pageFive: path(ROOTS_DASHBOARD, '/drop/five'),
    pageSix: path(ROOTS_DASHBOARD, '/drop/six')
  }
};
