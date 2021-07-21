import React, { useState, useEffect } from 'react';
// material
import { useTheme } from '@material-ui/core/styles';

import { Container, Box } from '@material-ui/core';
// ----------------------------------------------------------------------
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getCalendar } from '../../redux/slices/general';

import CalendarCard from './CalendarCard';
import DayStatusButtonGroup from '../dashboard-component/DayStatusButtonGroup';
import TeamCategoryGroup from '../dashboard-component/TeamCategoryGroup';

import RightSideBar from './RightSideBar';

export default function CalendarContent() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { calendar } = useSelector((state) => state.general);

  const [offices, setOffices] = useState(initialStatus);
  const [calendarProps, setCalendarProps] = useState([]);

  const [todayTitle, setTodayTitle] = useState('');

  useEffect(() => {
    dispatch(getCalendar());
  }, [dispatch]);

  useEffect(() => {
    setCalendarProps(calendar);
    console.log('this is calendar:', calendar);
  }, [calendar]);

  const setStatusProps = (selectedIds) => {
    setOffices(selectedIds);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Container maxWidth="xl">
        <Container
          maxWidth="md"
          sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
        >
          <DayStatusButtonGroup
            officePropos={offices}
            statusProps={setStatusProps}
            officeGroups={OfficeStatus}
            isMulti
          />
          <TeamCategoryGroup daygroups={TeamCategories} />
          <CalendarCard daystatus={calendarProps} />
        </Container>
      </Container>
      {/* <RightSideBar
        todayTitle={todayTitle}
        daystatus={thisWeekSchedule}
        schedule={schedule}
        iconProps={changeIcon}
        dayIndex={dayofweek}
        statusTitle={statusTitle}
        scheduleUsers={scheduleUsers}
        notStatusUsers={notStatusUsers}
      /> */}
    </Box>
  );
}

const OfficeStatus = [
  {
    id: 0,
    label: 'swiss-office',
    icon: '💼'
  },
  {
    id: 1,
    label: 'At Home',
    icon: '🏡'
  },
  {
    id: 2,
    label: 'With Family',
    icon: '👨‍👨‍👦‍👦'
  },
  {
    id: 3,
    label: 'On the go',
    icon: '🚶‍♂️'
  },
  {
    id: 4,
    label: 'Not working',
    icon: '🏝'
  }
];

const TeamCategories = [
  {
    id: 0,
    label: 'Web Team',
    selected: false
  },
  {
    id: 1,
    label: 'Design Team',
    selected: true
  },
  {
    id: 2,
    label: 'Backend Team',
    selected: false
  }
];

const initialStatus = [0, 2];
