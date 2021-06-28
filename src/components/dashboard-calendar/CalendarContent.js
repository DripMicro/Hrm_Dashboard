// material
import { useTheme } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';
// ----------------------------------------------------------------------

import CalendarCard from './CalendarCard';
import DayStatusButtonGroup from '../dashboard-component/DayStatusButtonGroup';
import TeamCategoryGroup from '../dashboard-component/TeamCategoryGroup';

const DaySchedules = [
  {
    id: 0,
    icon: '💼🚶‍♂️',
    halfday: true
  },
  {
    id: 1,
    icon: '🚶‍♂️🏝',
    halfday: true
  },
  {
    id: 2,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 3,
    icon: '🤒🏡',
    halfday: true
  },
  {
    id: 4,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 5,
    icon: '💼🚶‍♂️',
    halfday: true
  },
  {
    id: 6,
    icon: '🚶‍♂️🏝',
    halfday: true
  },
  {
    id: 7,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 8,
    icon: '🤒🏡',
    halfday: true
  },
  {
    id: 9,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 10,
    icon: '💼🚶‍♂️',
    halfday: true
  },
  {
    id: 11,
    icon: '🚶‍♂️🏝',
    halfday: true
  },
  {
    id: 12,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 13,
    icon: '🤒🏡',
    halfday: true
  },
  {
    id: 14,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 15,
    icon: '💼🚶‍♂️',
    halfday: true
  },
  {
    id: 16,
    icon: '🚶‍♂️🏝',
    halfday: true
  },
  {
    id: 17,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 18,
    icon: '🤒🏡',
    halfday: true
  },
  {
    id: 19,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 20,
    icon: '🤒🏡',
    halfday: true
  },
  {
    id: 21,
    icon: '🤒',
    halfday: false
  },
  {
    id: 22,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 23,
    icon: '🏡',
    halfday: false
  },
  {
    id: 24,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 25,
    icon: '🏡',
    halfday: false
  },
  {
    id: 26,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 27,
    icon: '🚶‍♂️🏝',
    halfday: true
  },
  {
    id: 28,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 29,
    icon: '🚶‍♂️',
    halfday: false
  },
  {
    id: 30,
    icon: '👨‍👨‍👦‍👦',
    halfday: false
  },
  {
    id: 31,
    icon: '🏡',
    halfday: false
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
        <CalendarCard daystatus={DaySchedules} />
      </Container>
    </Container>
  );
}
