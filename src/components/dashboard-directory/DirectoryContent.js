import React, { useState } from 'react';
// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Container } from '@material-ui/core';
// ----------------------------------------------------------------------

import DayStatusButtonGroup from '../dashboard-component/DayStatusButtonGroup';
import TeamCategoryGroup from '../dashboard-component/TeamCategoryGroup';
import UserLists from './UserList';

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
    selected: false
  },
  {
    id: 2,
    label: 'Backend Team',
    selected: false
  }
];

const initialStatus = [1, 2];

const SpaceStyle = styled('div')(({ theme }) => ({
  height: theme.spacing(4)
}));

export default function DirectoryContent() {
  const theme = useTheme();
  const [offices, setOffices] = useState(initialStatus);

  const setStatusProps = (selectedIds) => {
    setOffices(selectedIds);
    console.log('G:', selectedIds);
  };

  return (
    <Container maxWidth="xl">
      <Container
        maxWidth="lg"
        sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
      >
        <DayStatusButtonGroup
          officePropos={offices}
          statusProps={setStatusProps}
          officeGroups={OfficeStatus}
          isMulti
        />
        <TeamCategoryGroup daygroups={TeamCategories} />
        <SpaceStyle />
        <UserLists />
      </Container>
    </Container>
  );
}
