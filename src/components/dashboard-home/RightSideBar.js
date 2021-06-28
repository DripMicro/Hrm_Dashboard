import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { Link as RouterLink, useLocation, matchPath } from 'react-router-dom';
// import { Icon } from '@iconify/react';
// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import { Box, Drawer, Hidden, Typography } from '@material-ui/core';
// components
// import Logo from '../Logo';
import Scrollbar from '../Scrollbar';
//
import SelfSettingButton from '../dashboard-component/SelftSettingButton';
import UserScheduleStatus from '../dashboard-component/UserScheduleStatus';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 480;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up(1400)]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

// ----------------------------------------------------------------------

RightSideBar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function RightSideBar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const theme = useTheme();

  useEffect(() => {
    if (isOpenSidebar && onCloseSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar>
      <Box sx={{ px: 2.5, py: 3 }}>
        <Typography
          variant="h4"
          sx={{ color: 'text.primary', textAlign: 'center' }}
        >
          Monday 21st Jun. 2021
        </Typography>
        <SelfSettingButton />
        <Box m={5} />
        <UserScheduleStatus />
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <Hidden lgUp>
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
      <Box sx={{ [theme.breakpoints.down(1400)]: { display: 'none' } }}>
        <Drawer
          open
          anchor="right"
          variant="persistent"
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </Box>
    </RootStyle>
  );
}
