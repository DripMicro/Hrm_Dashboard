/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
  todayTitle: PropTypes.string,
  daystatus: PropTypes.array,
  schedule: PropTypes.array,
  iconProps: PropTypes.func,
  dayIndex: PropTypes.number,
  statusTitle: PropTypes.string,
  notStatusUsers: PropTypes.array,
  scheduleUsers: PropTypes.array,
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function RightSideBar({
  todayTitle,
  daystatus,
  schedule,
  iconProps,
  dayIndex,
  statusTitle,
  notStatusUsers,
  scheduleUsers,
  isOpenSidebar,
  onCloseSidebar
}) {
  const { pathname } = useLocation();
  const theme = useTheme();

  const [icon, setIcon] = useState('');
  const [isHalf, setIsHalf] = useState(false);
  const [isWork, setIsWork] = useState(false);
  const [morningId, setMorningId] = useState(0);
  const [morningType, setMorningType] = useState('');
  const [afternoonId, setAfternoonId] = useState(0);
  const [afternoonType, setAfternoonType] = useState('');
  const [sTitle, setTitle] = useState('');

  useEffect(() => {
    if (isOpenSidebar && onCloseSidebar) {
      onCloseSidebar();
    }
  }, [isOpenSidebar, onCloseSidebar, pathname]);

  useEffect(() => {
    if (daystatus.length > 0 && schedule.length > 0) {
      daystatus.map((day, dIndex) => {
        if (dayIndex === dIndex) {
          setIcon(day.icon);
          setIsHalf(day.halfday);
          setIsWork(day.work);
          setMorningId(day.morningId);
          setMorningType(day.morningType);
          setAfternoonId(day.afternoonId);
          setAfternoonType(day.afternoonType);
          schedule.map((sche) => {
            if (sche.id === day.morningId && sche.type === day.morningType) {
              setTitle(sche.title);
            }
          });
        }
      });
    }
  }, [daystatus, schedule, dayIndex]);

  const changeIcon = (icon1, icon2, detail1, detail2, status) => {
    iconProps(icon1, icon2, detail1, detail2, status, dayIndex);
  };

  const renderContent = (
    <Scrollbar>
      <Box sx={{ px: 2.5, py: 3, mt: 10 }}>
        <Typography
          variant="h4"
          sx={{ color: 'text.primary', textAlign: 'center' }}
        >
          {todayTitle}
        </Typography>
        <SelfSettingButton
          schedule={schedule}
          icon={icon}
          halfday={isHalf}
          work={isWork}
          morningId={morningId}
          morningType={morningType}
          afternoonId={afternoonId}
          afternoonType={afternoonType}
          iconProps={changeIcon}
          statusTitle={statusTitle === '' ? sTitle : statusTitle}
        />
        <Box m={5} />
        <UserScheduleStatus
          notStatusUsers={notStatusUsers}
          scheduleUsers={scheduleUsers}
        />
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
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
