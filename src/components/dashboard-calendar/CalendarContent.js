// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Container } from '@material-ui/core';
// ----------------------------------------------------------------------

import WeekScheduleCard from './WeekScheduleCard';
import DayStatusButtonGroup from '../dashboard-component/DayStatusButtonGroup';
import TeamCategoryGroup from '../dashboard-component/TeamCategoryGroup';

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

const DayCategories = [
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
    label: 'Web Team'
  },
  {
    id: 1,
    label: 'Design Team'
  },
  {
    id: 2,
    label: 'Backend Team'
  }
];

const SpaceStyle = styled('div')(({ theme }) => ({
  height: theme.spacing(4)
}));

export default function CalendarContent() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Container
        maxWidth="md"
        sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
      >
        <DayStatusButtonGroup daygroups={DayCategories} isMulti={false} />
        <TeamCategoryGroup daygroups={TeamCategories} />
        <WeekScheduleCard
          title="This Week "
          period="Jun 21 - Jun 25"
          daystatus={ThisWeekSchedule}
        />
      </Container>
    </Container>
  );
}
