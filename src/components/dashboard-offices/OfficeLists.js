/* eslint-disable array-callback-return */
import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddIcon from '@material-ui/icons/Add';

import { Button, Card, CardContent, TextField, Box } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EmojiButton from '../dashboard-component/EmojiButton';

function createData(no, emoji, officeName, capacity) {
  return { no, emoji, officeName, capacity };
}

const rows = [
  createData(0, '📙', 'Maxime quidem provident', 15),
  createData(1, '🏡', 'Atque pariatur', 7),
  createData(2, '💼', 'Quia iste', 28)
];

const TableCellStyles = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 0.1),
      '&:first-of-type': {
        paddingLeft: 1
      },
      '&:last-of-type': {
        paddingRight: '1px !important',
        boxShadow: 'inset 0px 0 0 #fff'
      }
    }
  }
}))(TableCell);

export default function OfficeLists() {
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
            <Table aria-label="simple table" sx={{ marginBottom: '10px' }}>
              <TableHead>
                <TableRow>
                  <TableCellStyles
                    sx={{ [theme.breakpoints.down('md')]: { display: 'none' } }}
                  >
                    No
                  </TableCellStyles>
                  <TableCellStyles align="center">Emoji</TableCellStyles>
                  <TableCellStyles align="center">Office Name</TableCellStyles>
                  <TableCellStyles align="right">Capacity</TableCellStyles>
                  <TableCellStyles align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {offices.map((row) => [
                  <TableRow key={row.no}>
                    <TableCellStyles
                      component="th"
                      scope="row"
                      rowSpan={2}
                      sx={{
                        [theme.breakpoints.down('md')]: { display: 'none' }
                      }}
                    >
                      {row.no + 1}
                    </TableCellStyles>
                    <TableCellStyles align="right" sx={{ textAlign: 'center' }}>
                      <EmojiButton
                        icon={row.emoji}
                        index={row.no}
                        changeIconProps={changeIcon}
                      />
                    </TableCellStyles>
                    <TableCellStyles align="right">
                      <TextField
                        id="outlined-basic"
                        label="Office Name"
                        variant="outlined"
                        value={row.officeName}
                        onChange={handleChangeOfficeName}
                        sx={{ width: '100%' }}
                      />
                    </TableCellStyles>
                    <TableCellStyles align="right">
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
                    </TableCellStyles>
                    <TableCellStyles align="right">
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
                    </TableCellStyles>
                  </TableRow>,
                  <TableRow
                    // sx={{
                    //   boxShadow:
                    //     '1px 4px 4px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 4%)',
                    //   borderBottomLeftRadius: '15px',
                    //   borderBottomRightRadius: '15px'
                    // }}
                    key={`sub${row.no}`}
                  >
                    <TableCellStyles colSpan={5}>
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
                    </TableCellStyles>
                  </TableRow>
                ])}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ width: '100%', px: 3 }}>
            <Button
              onClick={handleAddOffice}
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

const Users = [
  { name: 'Alexander Ryndin' },
  { name: 'Zlenko Sofia' },
  { name: 'Oleg Pablo' }
];
