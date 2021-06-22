import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {
  Button,
  Menu,
  MenuItem,
  Box,
  Card,
  CardContent,
  TextField
} from '@material-ui/core';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(no, name, email, linked) {
  return { no, name, email, linked };
}

const rows = [
  createData(
    1,
    'Alexander Ryndin',
    'ryndinalex112@gmail.com',
    '@Alexander Ryndin'
  ),
  createData(2, 'Zlenko Sofia', 'sofiaurlan@gmail.com', 'Not linked'),
  createData(3, 'Oleg Pablo', 'plfreelancer@gmail.com', 'Not linked')
];

export default function UserLists() {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchText, setSearchText] = React.useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
    console.log(searchText);
  };

  return (
    <>
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={searchText}
          onChange={handleChange}
          sx={{ width: '300px' }}
        />
      </Box>
      <Card>
        <CardContent sx={{ padding: theme.spacing(3, 0) }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Slack (1/3 linked)</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#F4F6F8',
                        cursor: 'pointer',
                        margin: theme.spacing(0, 1)
                      }
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.no}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.linked}</TableCell>
                    <TableCell align="right">
                      <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        sx={{
                          borderRadius: '50%',
                          minWidth: '0px',
                          width: 50,
                          height: 50
                        }}
                      >
                        <MoreHorizIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Make Admin</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </>
  );
}
