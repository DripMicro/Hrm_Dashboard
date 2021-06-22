/* eslint-disable array-callback-return */
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddIcon from '@material-ui/icons/Add';

import { Button, Card, CardContent, TextField } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EmojiButton from '../dashboard-component/EmojiButton';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(no, emoji, officeName, capacity) {
  return { no, emoji, officeName, capacity };
}

const rows = [
  createData(0, '👨‍👨‍👦‍👦', 'Maxime quidem provident', 15),
  createData(1, '🏡', 'Atque pariatur', 7),
  createData(2, '💼', 'Quia iste', 28)
];

export default function OfficeLists() {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [officeName, setOfficeName] = React.useState('');
  const [capacity, setCapacity] = React.useState('');

  const [offices, setOffices] = React.useState(rows);

  React.useEffect(() => {
    console.log('No problem');
  }, [offices]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddOffice = () => {
    rows.push(createData(rows.length, '🙂', '', ''));
    setOffices([...rows]);
  };

  const handleChangeOfficeName = (event) => {
    setOfficeName(event.target.value);
    console.log(officeName);
  };

  const handleChangeCapacity = (event) => {
    setCapacity(event.target.value);
    console.log(capacity);
  };
  const changeIcon = (icon, index) => {
    offices.map((office, offIndex) => {
      console.log('M:', index, offIndex);
      if (index === offIndex) {
        console.log('U:', index);
        rows[offIndex].emoji = icon;
      }
    });
    setOffices([...rows]);
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
                  <TableCell align="right">Emoji</TableCell>
                  <TableCell align="right">Office Name</TableCell>
                  <TableCell align="right">Capacity</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {offices.map((row) => (
                  <>
                    <TableRow key={row.no}>
                      <TableCell component="th" scope="row" rowSpan={2}>
                        {row.no + 1}
                      </TableCell>
                      <TableCell align="right">
                        <EmojiButton
                          icon={row.emoji}
                          index={row.no}
                          changeIconProps={changeIcon}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <TextField
                          id="outlined-basic"
                          label="Office Name"
                          variant="outlined"
                          value={row.officeName}
                          onChange={handleChangeOfficeName}
                          sx={{ width: '100%' }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <TextField
                          id="outlined-basic"
                          label="Capacity"
                          variant="outlined"
                          type="number"
                          value={row.capacity}
                          onChange={handleChangeCapacity}
                          sx={{
                            width: '50px',
                            [theme.breakpoints.up('md')]: { width: '100%' }
                          }}
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
                    <TableRow
                      sx={{
                        boxShadow:
                          '1px 2px 4px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 4%)',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px'
                      }}
                    >
                      <TableCell colSpan={5}>
                        <Autocomplete
                          multiple
                          id="tags-outlined"
                          options={Users}
                          getOptionLabel={(option) => option.name}
                          defaultValue={[Users[0]]}
                          filterSelectedOptions
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              label="Office Manger"
                              placeholder="Select office manager..."
                            />
                          )}
                        />
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            onClick={handleAddOffice}
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
