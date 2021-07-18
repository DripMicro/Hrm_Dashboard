/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core';
// ----------------------------------------------------------------------

import WeekScheduleCard from './WeekScheduleCard';
import WeekList from './WeekList';

// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getCalendar } from '../../redux/slices/general';

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

export default function HomeContent() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { calendar } = useSelector((state) => state.general);
  const [thisWeekSchedule, setThisWeekSchedule] = useState([]);
  const [thisWeekTitle, setThisWeekTitle] = useState('');

  useEffect(() => {
    dispatch(getCalendar());
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
      const NextWeekSchedules = [];

      if (firstday < lastday) {
        let weekCount = 0;
        const title = `${Months[curr.getMonth()]} ${firstday} ~ ${
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
              halfday: mDay.halfday,
              work: mDay.work
            };
            thisWeekSchedules.push(dayObj);
            weekCount += 1;
          }
        });
      } else {
        let weekCount = 0;
        if (today > 25) {
          const title = `${Months[curr.getMonth()]} ${firstday} ~ ${
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
                halfday: mDay.halfday,
                work: mDay.work
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
                halfday: mDay.halfday,
                work: mDay.work
              };
              thisWeekSchedules.push(dayObj);
              weekCount += 1;
            }
          });
        } else if (today < 5) {
          const title = `${Months[curr.getMonth() - 1]} ${firstday} ~ ${
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
                halfday: mDay.halfday,
                work: mDay.work
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
                halfday: mDay.halfday,
                work: mDay.work
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

  // change icon when set icon in schedule card
  const changeIcon = (icon1, icon2, status, index) => {
    console.log('this is props icon:', icon1, icon2, status, index);
    let emoji1 = '';
    let emoji2 = '';
    let resIcon = '';
    Schedule.map((item) => {
      console.log(item.value);
      if (item.value === icon1) emoji1 = item.icon;
      if (item.value === icon2) emoji2 = item.icon;
    });
    let dayStatus = status;
    if (icon1 === icon2) dayStatus = false;
    resIcon = dayStatus ? `${emoji1}${emoji2}` : emoji1;
    const ThisWeekSchedule = thisWeekSchedule;
    thisWeekSchedule.map((schedule, sIndex) => {
      if (sIndex === index) {
        ThisWeekSchedule[sIndex].icon = resIcon;
        ThisWeekSchedule[sIndex].halfday = dayStatus;
        ThisWeekSchedule[sIndex].work = true;
      }
    });
    setThisWeekSchedule([...ThisWeekSchedule]);
  };

  return (
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
          schedule={Schedule}
          iconProps={changeIcon}
        />
        <SpaceStyle />
        <WeekList daystatus={thisWeekSchedule} />
        <SpaceStyle />
        <WeekScheduleCard
          title="Next Week "
          period="Jun 28 - July 2"
          daystatus={NextWeekSchedule}
          schedule={Schedule}
          iconProps={changeIcon}
        />
        <SpaceStyle />
        <WeekList daystatus={NextWeekList} />
      </Container>
    </Container>
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
