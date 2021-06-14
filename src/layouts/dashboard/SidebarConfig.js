// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: 22, height: 22 }}
  />
);

const ICONS = {
  page: getIcon('ic_page'),
  dashboard: getIcon('ic_dashboard')
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
        icon: ICONS.page
      },
      {
        title: 'Calendar',
        href: PATH_DASHBOARD.general.calendar,
        icon: ICONS.page
      },
      {
        title: 'Directory',
        href: PATH_DASHBOARD.general.directory,
        icon: ICONS.page
      },
      {
        title: 'Display Name',
        href: PATH_DASHBOARD.general.user,
        icon: ICONS.page
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
        icon: ICONS.page
      },
      {
        title: 'Teams',
        href: PATH_DASHBOARD.admin.teams,
        icon: ICONS.page
      },
      {
        title: 'Organization',
        href: PATH_DASHBOARD.admin.organization,
        icon: ICONS.page
      },
      {
        title: 'Dashboard',
        href: PATH_DASHBOARD.admin.dashboard,
        icon: ICONS.page
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
        icon: ICONS.page
      },
      {
        title: 'Invite',
        href: PATH_DASHBOARD.other.invite,
        icon: ICONS.page
      },
      {
        title: 'Get Mobile App',
        href: PATH_DASHBOARD.other.mobile,
        icon: ICONS.page
      },
      {
        title: 'Contact Support',
        href: PATH_DASHBOARD.other.contact,
        icon: ICONS.page
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
