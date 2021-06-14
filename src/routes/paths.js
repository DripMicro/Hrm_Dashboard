// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_AUTH = '/auth';
// ----------------------------------------------------------------------
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
};

export const PATH_HOME = {
  components: '/components',
  cloud: 'https://www.sketch.com/s/0fa4699d-a3ff-4cd5-a3a7-d851eb7e17f0',
  purchase: 'https://material-ui.com/store/items/minimal-dashboard/',
  dashboard: ROOTS_DASHBOARD,
  how_it_works: '/how-it-works',
  pricing: '/pricing'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    home: path(ROOTS_DASHBOARD, '/home'),
    calendar: path(ROOTS_DASHBOARD, '/calendar'),
    directory: path(ROOTS_DASHBOARD, '/directory'),
    user: path(ROOTS_DASHBOARD, '/user')
  },
  admin: {
    offices: path(ROOTS_DASHBOARD, '/offices'),
    teams: path(ROOTS_DASHBOARD, '/teams'),
    organization: path(ROOTS_DASHBOARD, '/organization'),
    dashboard: path(ROOTS_DASHBOARD, '/dashboard')
  },
  other: {
    slack: path(ROOTS_DASHBOARD, '/aa'),
    invite: path(ROOTS_DASHBOARD, '/invite'),
    mobile: path(ROOTS_DASHBOARD, '/bb'),
    contact: path(ROOTS_DASHBOARD, '/cc')
  },
  app: {
    root: path(ROOTS_DASHBOARD, '/drop'),
    pageFour: path(ROOTS_DASHBOARD, '/drop/four'),
    pageFive: path(ROOTS_DASHBOARD, '/drop/five'),
    pageSix: path(ROOTS_DASHBOARD, '/drop/six')
  }
};
