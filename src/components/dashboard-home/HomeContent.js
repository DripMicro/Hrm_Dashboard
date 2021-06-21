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

const SpaceStyle = styled('div')(({ theme }) => ({
  height: theme.spacing(4)
}));

export default function HomeContent() {
  const theme = useTheme();
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
          daystatus={ThisWeekSchedule}
        />
        <SpaceStyle />
        <WeekList daystatus={ThisWeekList} />
        <SpaceStyle />
        <WeekScheduleCard
          title="Next Week "
          period="Jun 28 - July 2"
          daystatus={NextWeekSchedule}
        />
        <SpaceStyle />
        <WeekList daystatus={NextWeekList} />
      </Container>
    </Container>
  );
}
