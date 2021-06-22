/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';

import { Button, Card, CardContent, TextField } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

import ColorButton from '../dashboard-component/ColorButton';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(no, color, teamName) {
  return { no, color, teamName };
}

const rows = [
  createData(0, '#00D084', 'Maxime quidem provident'),
  createData(1, '#0693E3', 'Atque pariatur'),
  createData(2, '#EB144C', 'Quia iste')
];

export default function TeamLists() {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [teamName, setTeamName] = useState('');

  const [teams, setTeams] = useState(rows);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <Table
              className={classes.table}
              aria-label="simple table"
              sx={{ marginBottom: '10px' }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Color</TableCell>
                  <TableCell align="right">Team Name</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {teams.map((row) => (
                  <TableRow key={row.no}>
                    <TableCell component="th" scope="row">
                      {row.no + 1}
                    </TableCell>
                    <TableCell align="right">
                      <ColorButton
                        color={row.color}
                        index={row.no}
                        changeColorProps={changeColor}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        id="outlined-basic"
                        label="Team Name"
                        variant="outlined"
                        value={row.teamName}
                        onChange={handleChangeTeamName}
                        sx={{ width: '100%' }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={handleClick}
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
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            onClick={handleAddTeam}
            variant="contained"
            sx={{ width: '100%', mt: 2 }}
          >
            <AddIcon />
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

const Users = [
  { name: 'Alexander Ryndin' },
  { name: 'Zlenko Sofia' },
  { name: 'Oleg Pablo' }
];
