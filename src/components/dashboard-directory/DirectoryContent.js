// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Container } from '@material-ui/core';
// ----------------------------------------------------------------------

import DayStatusButtonGroup from '../dashboard-component/DayStatusButtonGroup';
import TeamCategoryGroup from '../dashboard-component/TeamCategoryGroup';

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

export default function DirectoryContent() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Container
        maxWidth="md"
        sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
      >
        <DayStatusButtonGroup daygroups={DayCategories} isMulti />
        <TeamCategoryGroup daygroups={TeamCategories} />
      </Container>
    </Container>
  );
}
