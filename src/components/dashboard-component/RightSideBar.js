import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import { Box, Drawer, Hidden, Typography } from '@material-ui/core';
// components
import Scrollbar from '../Scrollbar';
//
import SelfSettingButton from './SelftSettingButton';
import UserScheduleStatus from './UserScheduleStatus';

// ----------------------------------------------------------------------
const Schedule = [
  {
    value: 0,
    label: 'Working remotely',
    icon: '🏡'
  },
  {
    value: 1,
    label: 'On the go',
    icon: '🚶‍♂️'
  },
  {
    value: 2,
    label: 'Not working',
    icon: '🏝'
  },
  {
    value: 3,
    label: 'At the office',
    icon: '💼'
  },
  {
    value: 4,
    label: 'Sick',
    icon: '🤒'
  },
  {
    value: 5,
    label: 'With family',
    icon: '👨‍👨‍👦‍👦'
  },
  {
    value: 6,
    label: 'lol',
    icon: '😫'
  }
];

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
  }, [isOpenSidebar, onCloseSidebar, pathname]);

  const renderContent = (
    <Scrollbar>
      <Box sx={{ px: 2.5, py: 3, mt: 10 }}>
        <Typography
          variant="h4"
          sx={{ color: 'text.primary', textAlign: 'center' }}
        >
          Monday 21st Jun. 2021
        </Typography>
        <SelfSettingButton schedule={Schedule} />
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
