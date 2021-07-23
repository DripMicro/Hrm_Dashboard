/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

// hooks
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getOfficeList, getTeamList } from '../../redux/slices/adminSetting';
// ----------------------------------------------------------------------

import DayStatusButtonGroup from '../dashboard-component/DayStatusButtonGroup';
import TeamCategoryGroup from '../dashboard-component/TeamCategoryGroup';
import UserLists from './UserList';

const SpaceStyle = styled('div')(({ theme }) => ({
  height: theme.spacing(4)
}));

export default function DirectoryContent() {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { officeList, teamList } = useSelector((state) => state.adminSetting);

  const [teams, setTeams] = useState([]);
  const [teamIds, setTeamIds] = useState([]);

  const [offices, setOffices] = useState([]);
  const [officeIds, setOfficeIds] = useState([]);

  useEffect(() => {
    dispatch(getOfficeList());
    dispatch(getTeamList());
  }, [dispatch]);

  useEffect(() => {
    const OfficeStatus = [];
    officeList.map((office) => {
      const data = {
        id: office.id,
        label: office.name,
        icon: office.emoji
      };

      OfficeStatus.push(data);
    });

    const TeamStatus = [];
    teamList.map((team) => {
      const data = {
        id: team.id,
        label: team.name,
        color: team.color
      };

      TeamStatus.push(data);
    });

    setOffices([...OfficeStatus]);
    setTeams([...TeamStatus]);
  }, [officeList, teamList]);

  const setStatusProps = (selectedIds) => {
    setOfficeIds(selectedIds);
  };

  const handleTeamSelected = (teamStatus) => {
    setTeamIds(teamStatus);
  };

  return (
    <Container maxWidth="xl">
      <Container
        maxWidth="lg"
        sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
      >
        <DayStatusButtonGroup
          officeInitProps={officeIds}
          statusProps={setStatusProps}
          officeGroups={offices}
          isMulti
        />
        <TeamCategoryGroup
          teamInitProps={teamIds}
          daygroups={teams}
          teamStatusProps={handleTeamSelected}
        />
        <SpaceStyle />
        <UserLists />
      </Container>
    </Container>
  );
}
