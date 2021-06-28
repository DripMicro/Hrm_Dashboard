/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';

import { Button, Card, CardContent, TextField, Box } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

import ColorButton from '../dashboard-component/ColorButton';

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

function createData(no, color, teamName, capacity) {
  return { no, color, teamName, capacity };
}

const rows = [
  createData(0, '#00D084', 'Maxime quidem provident', 12),
  createData(1, '#0693E3', 'Atque pariatur', 3),
  createData(2, '#EB144C', 'Quia iste', 5)
];

export default function TeamLists() {
  const theme = useTheme();

  // const [anchorEl, setAnchorEl] = useState(null);
  const [teamName, setTeamName] = useState('');

  const [teams, setTeams] = useState(rows);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleAddTeam = () => {
    rows.push(createData(rows.length, '🙂', '', ''));
    setTeams([...rows]);
  };

  const handleChangeTeamName = (event) => {
    setTeamName(event.target.value);
    console.log(teamName);
  };

  const changeColor = (color, index) => {
    teams.map((team, teamIndex) => {
      if (index === teamIndex) {
        rows[teamIndex].color = color;
      }
    });
    setTeams([...rows]);
  };
  return (
    <>
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
                {teams.map((row) => (
                  <TableRow key={row.no}>
                    <TableCellStyles
                      component="th"
                      scope="row"
                      sx={{
                        [theme.breakpoints.down('md')]: { display: 'none' }
                      }}
                    >
                      {row.no + 1}
                    </TableCellStyles>
                    <TableCellStyles
                      align="right"
                      sx={{ [theme.breakpoints.down('md')]: { width: '80px' } }}
                    >
                      <ColorButton
                        color={row.color}
                        index={row.no}
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
                        value={row.teamName}
                        onChange={handleChangeTeamName}
                        sx={{ width: '100%' }}
                      />
                    </TableCellStyles>
                    <TableCellStyles align="right">
                      <TextField
                        id="outlined-basic"
                        label="Team Name"
                        variant="outlined"
                        value={row.capacity}
                        onChange={handleChangeTeamName}
                        sx={{
                          width: '50px',
                          [theme.breakpoints.up('md')]: { width: '100%' }
                        }}
                      />
                    </TableCellStyles>
                    <TableCellStyles align="right">
                      <Button
                        // onClick={handleClick}
                        color="error"
                        sx={{
                          borderRadius: '50%',
                          minWidth: '0px',
                          width: 50,
                          height: 50
                        }}
                      >
                        <DeleteIcon />
                      </Button>
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
