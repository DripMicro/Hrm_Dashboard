// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name, type) => (
  <SvgIconStyle
    src={`/static/icons/navbar/new/${name}.svg`}
    sx={{ width: 22, height: 22 }}
    type={type}
  />
);

const ICONS = {
  page: getIcon('ic_page', 'general'),
  dashboard: getIcon('ic_dashboard', 'admin'),
  ndashboard: getIcon('dashboard', 'admin'),
  organization: getIcon('organization-line', 'admin'),
  home: getIcon('home-line', 'general'),
  calendar: getIcon('calendar-date', 'general'),
  directory: getIcon('directory-line', 'general'),
  user: getIcon('user-avatar', 'general'),
  offices: getIcon('office', 'admin'),
  teams: getIcon('team-outlined', 'admin'),
  slack: getIcon('slack', 'app'),
  invite: getIcon('invite', 'app'),
  mobile: getIcon('mobile-phone-with-arrow', 'app'),
  contact: getIcon('online-support', 'app')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      {
        title: 'Home',
        href: PATH_DASHBOARD.general.home,
        icon: ICONS.home
      },
      {
        title: 'Calendar',
        href: PATH_DASHBOARD.general.calendar,
        icon: ICONS.calendar
      },
      {
        title: 'Directory',
        href: PATH_DASHBOARD.general.directory,
        icon: ICONS.directory
      },
      {
        title: 'My Info',
        href: PATH_DASHBOARD.general.user,
        icon: ICONS.user
      }
    ]
  },

  // admin setting
  {
    subheader: 'admin settings',
    items: [
      {
        title: 'Offices',
        href: PATH_DASHBOARD.admin.offices,
        icon: ICONS.offices
      },
      {
        title: 'Teams',
        href: PATH_DASHBOARD.admin.teams,
        icon: ICONS.teams
      },
      {
        title: 'Organization',
        href: PATH_DASHBOARD.admin.organization,
        icon: ICONS.organization
      },
      {
        title: 'Dashboard',
        href: PATH_DASHBOARD.admin.analytics,
        icon: ICONS.ndashboard
      }
    ]
  },

  // integration & contact us
  {
    subheader: '',
    items: [
      {
        title: 'Sync with Slack',
        href: PATH_DASHBOARD.other.slack,
        icon: ICONS.slack
      },
      {
        title: 'Invite',
        href: PATH_DASHBOARD.other.invite,
        icon: ICONS.invite
      },
      {
        title: 'Get Mobile App',
        href: PATH_DASHBOARD.other.mobile,
        icon: ICONS.mobile
      },
      {
        title: 'Contact Support',
        href: PATH_DASHBOARD.other.contact,
        icon: ICONS.contact
      }
    ]
  }

  // APP
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'app',
  //   items: [
  //     {
  //       title: 'Drop',
  //       href: PATH_DASHBOARD.app.root,
  //       icon: ICONS.dashboard,
  //       items: [
  //         {
  //           title: 'page Four',
  //           href: PATH_DASHBOARD.app.pageFour
  //         },
  //         {
  //           title: 'Page Five',
  //           href: PATH_DASHBOARD.app.pageFive
  //         },
  //         {
  //           title: 'Page Six',
  //           href: PATH_DASHBOARD.app.pageSix
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export default sidebarConfig;
