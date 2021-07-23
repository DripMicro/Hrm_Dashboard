/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import { LoadingButton } from '@material-ui/lab';

import { Button, Card, CardContent, TextField, Box } from '@material-ui/core';

import DeleteButton from '../dashboard-component/ConfirmDialog';

import ColorButton from '../dashboard-component/ColorButton';

// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getTeamList } from '../../redux/slices/adminSetting';
import useAdmin from '../../hooks/useAdmin';

const TableCellStyles = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 0),
      '&:first-of-type': {
        paddingLeft: 0
      },
      '&:last-of-type': {
        paddingRight: '1px !important',
        boxShadow: 'inset 0px 0 0 #fff'
      }
    }
  }
}))(TableCell);

function createData(id, color, name, capacity) {
  return { id, color, name, capacity };
}

let rows = [
  createData(0, '#00D084', 'Maxime quidem provident', 12),
  createData(1, '#0693E3', 'Atque pariatur', 3),
  createData(2, '#EB144C', 'Quia iste', 5)
];

export default function TeamLists() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { addTeam, deleteTeam, updateTeamList } = useAdmin();
  const { teamList } = useSelector((state) => state.adminSetting);

  const [teams, setTeams] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChanged, setIsChanged] = useState(true);

  useEffect(() => {
    dispatch(getTeamList());
  }, [dispatch]);

  useEffect(() => {
    rows = [];
    teamList.map((team) => {
      rows.push(createData(team.id, team.color, team.name, team.capacity));
    });
    setTeams([...rows]);
  }, [teamList]);

  const handleSaveChanges = async () => {
    setIsSubmitting(true);
    const updatedTeamList = teams;
    await updateTeamList({ updatedTeamList });
    setIsChanged(true);
    setIsSubmitting(false);
    enqueueSnackbar('Update success', { variant: 'success' });
  };

  const handleAddTeam = async () => {
    console.log('this is add team button');
    const id = await addTeam();
    const data = createData(id, '#9900EF', '', '');
    rows.push(data);
    setTeams([...rows]);
  };

  const handleDeleteTeam = (teamId) => {
    deleteTeam({ teamId });
  };

  const changeColor = (color, index) => {
    setIsChanged(false);
    teams.map((team, teamIndex) => {
      if (index === teamIndex) {
        rows[teamIndex].color = color;
      }
    });
    setTeams([...rows]);
  };
  return (
    <>
      <Box sx={{ textAlign: 'right', mb: 1, mr: 1 }}>
        <LoadingButton
          disabled={isChanged}
          variant="contained"
          pending={isSubmitting}
          onClick={handleSaveChanges}
        >
          Save Changes
        </LoadingButton>
      </Box>
      <Card>
        <CardContent sx={{ padding: theme.spacing(3, 0) }}>
          <TableContainer component={Paper}>
            <Table aria-label="Team Table" sx={{ marginBottom: '10px' }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ [theme.breakpoints.down('md')]: { display: 'none' } }}
                  >
                    No
                  </TableCell>
                  <TableCell>Color</TableCell>
                  <TableCellStyles align="center">Team Name</TableCellStyles>
                  <TableCellStyles align="right">Capacity</TableCellStyles>
                  <TableCellStyles align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {teams.map((row, index) => (
                  <TableRow key={index}>
                    <TableCellStyles
                      component="th"
                      scope="row"
                      sx={{
                        [theme.breakpoints.down('md')]: { display: 'none' }
                      }}
                    >
                      {index + 1}
                    </TableCellStyles>
                    <TableCellStyles
                      align="right"
                      sx={{ [theme.breakpoints.down('md')]: { width: '80px' } }}
                    >
                      <ColorButton
                        color={row.color}
                        index={index}
                        changeColorProps={changeColor}
                      />
                    </TableCellStyles>
                    <TableCellStyles
                      align="right"
                      sx={{
                        [theme.breakpoints.down('md')]: { width: '235px' }
                      }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Team Name"
                        variant="outlined"
                        value={row.name}
                        onChange={(e) => {
                          const team = teams;
                          team[index].name = e.target.value;
                          setTeams([...team]);
                          setIsChanged(false);
                        }}
                        sx={{ width: '100%' }}
                      />
                    </TableCellStyles>
                    <TableCellStyles align="right">
                      <TextField
                        id="outlined-basic"
                        label="Capacity"
                        variant="outlined"
                        value={row.capacity}
                        onChange={(e) => {
                          const team = teams;
                          team[index].capacity = e.target.value;
                          setTeams([...team]);
                          setIsChanged(false);
                        }}
                        sx={{
                          width: '50px',
                          [theme.breakpoints.up('md')]: { width: '100%' }
                        }}
                      />
                    </TableCellStyles>
                    <TableCellStyles align="right">
                      <DeleteButton
                        deleteTitle={row.name}
                        deleteProps={handleDeleteTeam}
                        deleteId={row.id}
                      />
                      {/* <Button
                        onClick={() => handleDeleteTeam(row.id)}
                        color="error"
                        sx={{
                          borderRadius: '50%',
                          minWidth: '0px',
                          width: 50,
                          height: 50
                        }}
                      >
                        <DeleteIcon />
                      </Button> */}
                    </TableCellStyles>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ width: '100%', px: 3 }}>
            <Button
              onClick={handleAddTeam}
              variant="contained"
              sx={{ width: '100%', mt: 2 }}
            >
              <AddIcon />
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

// const Users = [
//   { name: 'Alexander Ryndin' },
//   { name: 'Zlenko Sofia' },
//   { name: 'Oleg Pablo' }
// ];
