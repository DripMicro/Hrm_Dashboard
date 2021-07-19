/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Container, Typography, Box } from '@material-ui/core';
// ----------------------------------------------------------------------

import WeekScheduleCard from './WeekScheduleCard';
import WeekList from './WeekList';
import RightSideBar from './RightSideBar';

// hooks
import useGeneral from '../../hooks/useGeneral';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getCalendar } from '../../redux/slices/general';
import {
  getOfficeList,
  getOrganizations
} from '../../redux/slices/adminSetting';

const SpaceStyle = styled('div')(({ theme }) => ({
  height: theme.spacing(4)
}));

const Weeks = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const WeekListTitles = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];
const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Set',
  'Oct',
  'Nov',
  'Dec'
];

const reverseMonths = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Set: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
};

export default function HomeContent() {
  const theme = useTheme();
  const { updateSchedule } = useGeneral();
  const dispatch = useDispatch();
  const { calendar } = useSelector((state) => state.general);
  const { officeList, organizations } = useSelector(
    (state) => state.adminSetting
  );

  const [thisWeekSchedule, setThisWeekSchedule] = useState([]);
  const [thisWeekTitle, setThisWeekTitle] = useState('');
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    dispatch(getCalendar());
    dispatch(getOrganizations());
    dispatch(getOfficeList());
  }, [dispatch]);

  useEffect(() => {
    if (calendar.length > 0) {
      const curr = new Date();
      const thisMonth = calendar[curr.getMonth()];
      const beforeMonth = calendar[curr.getMonth() - 1];
      const nextMonth = calendar[curr.getMonth() + 1];

      const today = curr.getDate();

      const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
      const last = first + 6; // last day is the first day + 6

      const firstday = new Date(curr.setDate(first)).getDate();
      const lastday = new Date(curr.setDate(last)).getDate();
      const thisWeekSchedules = [];
      // const NextWeekSchedules = [];

      if (firstday < lastday) {
        let weekCount = 0;
        const title = `${Months[curr.getMonth()]} ${firstday + 1} ~ ${
          Months[curr.getMonth()]
        } ${lastday - 1}`;
        setThisWeekTitle(title);
        thisMonth.map((mDay, mIndex) => {
          if (firstday < mIndex && mIndex < lastday) {
            const dayObj = {
              id: mIndex,
              weekday: `${Weeks[weekCount]} ${mIndex}`,
              weekTitle: `${WeekListTitles[weekCount]} ${
                Months[curr.getMonth()]
              } ${mIndex}`,
              icon: mDay.icon,
              halfday: mDay.isHalf,
              work: mDay.isWork
            };
            thisWeekSchedules.push(dayObj);
            weekCount += 1;
          }
        });
      } else {
        let weekCount = 0;
        if (today > 25) {
          const title = `${Months[curr.getMonth()]} ${firstday + 1} ~ ${
            Months[curr.getMonth() + 1]
          } ${lastday - 1}`;
          setThisWeekTitle(title);
          thisMonth.map((mDay, mIndex) => {
            if (firstday < mIndex + 1) {
              const dayObj = {
                id: mIndex + 1,
                weekday: `${Weeks[weekCount]} ${mIndex + 1}`,
                weekTitle: `${WeekListTitles[weekCount]} ${
                  Months[curr.getMonth()]
                } ${mIndex}`,
                icon: mDay.icon,
                halfday: mDay.isHalf,
                work: mDay.isWork
              };
              thisWeekSchedules.push(dayObj);
              weekCount += 1;
            }
          });
          nextMonth.map((mDay, mIndex) => {
            if (lastday - 1 > mIndex) {
              const dayObj = {
                id: mIndex + 1,
                weekday: `${Weeks[weekCount]} ${mIndex + 1}`,
                weekTitle: `${WeekListTitles[weekCount]} ${
                  Months[curr.getMonth() + 1]
                } ${mIndex}`,
                icon: mDay.icon,
                halfday: mDay.isHalf,
                work: mDay.isWork
              };
              thisWeekSchedules.push(dayObj);
              weekCount += 1;
            }
          });
        } else if (today < 5) {
          const title = `${Months[curr.getMonth() - 1]} ${firstday + 1} ~ ${
            Months[curr.getMonth()]
          } ${lastday - 1}`;
          setThisWeekTitle(title);
          beforeMonth.map((mDay, mIndex) => {
            if (firstday < mIndex + 1) {
              const dayObj = {
                id: mIndex + 1,
                weekday: `${Weeks[weekCount]} ${mIndex + 1}`,
                weekTitle: `${WeekListTitles[weekCount]} ${
                  Months[curr.getMonth() - 1]
                } ${mIndex}`,
                icon: mDay.icon,
                halfday: mDay.isHalf,
                work: mDay.isWork
              };
              thisWeekSchedules.push(dayObj);
              weekCount += 1;
            }
          });
          thisMonth.map((mDay, mIndex) => {
            if (lastday - 1 > mIndex) {
              const dayObj = {
                id: mIndex + 1,
                weekday: `${Weeks[weekCount]} ${mIndex + 1}`,
                weekTitle: `${WeekListTitles[weekCount]} ${
                  Months[curr.getMonth()]
                } ${mIndex}`,
                icon: mDay.icon,
                halfday: mDay.isHalf,
                work: mDay.isWork
              };
              thisWeekSchedules.push(dayObj);
              weekCount += 1;
            }
          });
        }
      }
      setThisWeekSchedule(thisWeekSchedules);
    }
  }, [calendar]);

  useEffect(() => {
    if (organizations.result !== undefined) {
      const { statuses } = organizations.result;

      const schedules = [];
      const { basicList, customList } = statuses;
      officeList.map((office) => {
        const rowObj = {
          id: office.id,
          type: 'office',
          emoji: office.emoji,
          title: office.name,
          capacity: office.capacity
        };
        schedules.push(rowObj);
      });

      basicList.map((basic) => {
        if (basic.isActive > 0) {
          const rowObj = {
            id: basic.id,
            type: 'basic',
            emoji: basic.emoji,
            title: basic.title
          };
          schedules.push(rowObj);
        }
      });

      customList.map((custom) => {
        if (custom.isActive > 0) {
          const rowObj = {
            id: custom.id,
            type: 'custom',
            emoji: custom.emoji,
            title: custom.title
          };
          schedules.push(rowObj);
        }
      });
      setSchedule(schedules);
    }
  }, [organizations, officeList]);

  // change icon when set icon in schedule card
  const changeIcon = async (icon1, icon2, detail1, detail2, status, index) => {
    let emoji1 = '';
    let emoji2 = '';
    let resIcon = '';
    schedule.map((item, index) => {
      if (index === icon1) emoji1 = item.emoji;
      if (index === icon2) emoji2 = item.emoji;
    });
    let dayStatus = status;
    if (icon1 === icon2) dayStatus = false;
    resIcon = dayStatus ? `${emoji1}${emoji2}` : emoji1;
    const ThisWeekSchedule = thisWeekSchedule;
    let settingDay = 0;
    let weekTitle = '';
    thisWeekSchedule.map((schedule, sIndex) => {
      if (sIndex === index) {
        ThisWeekSchedule[sIndex].icon = resIcon;
        ThisWeekSchedule[sIndex].halfday = dayStatus;
        ThisWeekSchedule[sIndex].work = true;
        settingDay = ThisWeekSchedule[sIndex].id;
        weekTitle = ThisWeekSchedule[sIndex].weekTitle;
      }
    });

    // {"id":0,"type":"undefined","icon":"?","halfday":false,"work":false}

    console.log(thisWeekSchedule);
    const monthText = weekTitle.split(' ')[1];
    const month = reverseMonths[monthText];

    const updatedSchedule = {
      month,
      day: settingDay,
      emoji: resIcon,
      morning: detail1,
      afternoon: detail2,
      isHalf: dayStatus,
      isWork: true
    };

    await updateSchedule({ updatedSchedule });

    setThisWeekSchedule([...ThisWeekSchedule]);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          paragraph
          sx={{ textAlign: 'center' }}
        >
          Welcome to Thimble
        </Typography>
        <Container
          maxWidth="md"
          sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
        >
          <WeekScheduleCard
            title="This Week "
            period={thisWeekTitle}
            daystatus={thisWeekSchedule}
            schedule={schedule}
            iconProps={changeIcon}
          />
          <SpaceStyle />
          <WeekList daystatus={thisWeekSchedule} />
          <SpaceStyle />
          <WeekScheduleCard
            title="Next Week "
            period="Jun 28 - July 2"
            daystatus={NextWeekSchedule}
            schedule={schedule}
            iconProps={changeIcon}
          />
          <SpaceStyle />
          <WeekList daystatus={NextWeekList} />
        </Container>
      </Container>
      <RightSideBar />
    </Box>
  );
}

const NextWeekSchedule = [
  {
    id: 0,
    weekday: 'Mon 28',
    icon: '💼🚶‍♂️',
    halfday: true,
    work: true
  },
  {
    id: 1,
    weekday: 'Tue 29',
    icon: '🚶‍♂️🏝',
    halfday: true,
    work: true
  },
  {
    id: 2,
    weekday: 'Wed 30',
    icon: '👨‍👨‍👦‍👦',
    halfday: false,
    work: true
  },
  {
    id: 3,
    weekday: 'Thu 1',
    icon: '🤒🏡',
    halfday: true,
    work: true
  },
  {
    id: 4,
    weekday: 'Fri 2',
    icon: '?',
    halfday: false,
    work: false
  }
];

const NextWeekList = [
  {
    id: 0,
    weekday: 'Monday Jun 28',
    icon: '👨‍👨‍👦‍👦',
    halfday: false,
    work: true
  },
  {
    id: 1,
    weekday: 'Tuesday Jun 29',
    icon: '🚶‍♂️🏝',
    halfday: true,
    work: true
  },
  {
    id: 2,
    weekday: 'Wednesday Jun 30',
    icon: '🤒🏡',
    halfday: true,
    work: true
  },
  {
    id: 3,
    weekday: 'Thuesday July 1',
    icon: '💼🚶‍♂️',
    halfday: true,
    work: true
  },
  {
    id: 4,
    weekday: 'Friday July 2',
    icon: '?',
    halfday: false,
    work: false
  }
];
