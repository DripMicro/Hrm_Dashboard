import { useEffect, useState } from 'react';
// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core';
// ----------------------------------------------------------------------

import WeekScheduleCard from './WeekScheduleCard';
import WeekList from './WeekList';

const ThisWeekSchedule = [
  {
    id: 0,
    weekday: 'Mon 21',
    icon: '💼🚶‍♂️',
    halfday: true,
    work: true
  },
  {
    id: 1,
    weekday: 'Tue 22',
    icon: '🚶‍♂️🏝',
    halfday: true,
    work: true
  },
  {
    id: 2,
    weekday: 'Wed 23',
    icon: '👨‍👨‍👦‍👦',
    halfday: false,
    work: true
  },
  {
    id: 3,
    weekday: 'Thu 24',
    icon: '🤒🏡',
    halfday: true,
    work: true
  },
  {
    id: 4,
    weekday: 'Fri 25',
    icon: '?',
    halfday: false,
    work: false
  }
];

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

const ThisWeekList = [
  {
    id: 0,
    weekday: 'Monday Jun 21',
    icon: '💼🚶‍♂️',
    halfday: true,
    work: true
  },
  {
    id: 1,
    weekday: 'Tuesday Jun 22',
    icon: '🚶‍♂️🏝',
    halfday: true,
    work: true
  },
  {
    id: 2,
    weekday: 'Wednesday Jun 23',
    icon: '👨‍👨‍👦‍👦',
    halfday: false,
    work: true
  },
  {
    id: 3,
    weekday: 'Thuesday Jun 24',
    icon: '🤒🏡',
    halfday: true,
    work: true
  },
  {
    id: 4,
    weekday: 'Friday Jun 25',
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

const SpaceStyle = styled('div')(({ theme }) => ({
  height: theme.spacing(4)
}));

export default function HomeContent() {
  const theme = useTheme();
  const [thisWeekSchedule, setThisWeekSchedule] = useState(ThisWeekSchedule);
  const changeIcon = (icon1, icon2, status, index) => {
    console.log('this is props icon:', icon1, icon2, status, index);
    let emoji1 = '';
    let emoji2 = '';
    let resIcon = '';
    // eslint-disable-next-line array-callback-return
    Schedule.map((item) => {
      console.log(item.value);
      if (item.value === icon1) emoji1 = item.icon;
      if (item.value === icon2) emoji2 = item.icon;
    });
    console.log('M:', emoji1, emoji2, icon1, icon2);
    let dayStatus = status;
    if (icon1 === icon2) dayStatus = false;
    resIcon = dayStatus ? `${emoji1}${emoji2}` : emoji1;
    // eslint-disable-next-line array-callback-return
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
          period="Jun 21 - Jun 25"
          daystatus={thisWeekSchedule}
          schedule={Schedule}
          iconProps={changeIcon}
        />
        <SpaceStyle />
        <WeekList daystatus={ThisWeekList} />
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
