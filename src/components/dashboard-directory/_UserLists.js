import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
import { useTheme } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Table,
  Avatar,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  IconButton,
  Typography,
  TableContainer,
  TablePagination,
  Menu,
  MenuItem
} from '@material-ui/core';
// redux
// import { getUserList } from '../../redux/slices/user';
// routes
// components
import Label from '../Label';
import Scrollbar from '../Scrollbar';
import SearchNotFound from '../SearchNotFound';
import UserListToolbar from './_UserListToolbar';
import UserListHead from './_UserListHead';

// ----------------------------------------------------------------------

const userList = [
  {
    id: 0,
    name: 'Alexander Ryndin',
    email: 'ryndinalex112@gmail.com',
    linked: '@Alexander Ryndin',
    avatarUrl: '/static/dashboard/home/1.jpg',
    role: 'Admin'
  },
  {
    id: 1,
    name: 'Zlenko Sofia',
    email: 'sofiaurlan@gmail.com',
    linked: 'Not linked',
    avatarUrl: '/static/dashboard/home/3.jpg',
    role: 'Member'
  },
  {
    id: 2,
    name: 'Oleg Pablo',
    email: 'plfreelancer@gmail.com',
    linked: 'Not linked',
    avatarUrl: '/static/dashboard/home/2.jpg',
    role: 'Member'
  },
  {
    id: 3,
    name: 'Test Name',
    email: 'test@gmail.com',
    linked: 'Not linked',
    avatarUrl: '/static/dashboard/home/4.jpg',
    role: 'Member'
  }
];

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'linked', label: 'Slack (1/3 linkeds)', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function UserList() {
  const theme = useTheme();
  // const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  // const { userList } = useSelector((state) => state.user);

  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // useEffect(() => {
  //   dispatch(getUserList());
  // }, [dispatch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = userList.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userList.length) : 0;

  const filteredUsers = applySortFilter(
    userList,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Container>
      <Card>
        <UserListToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={userList.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const { id, name, email, linked, role, avatarUrl } = row;
                    const isItemSelected = selected.indexOf(name) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                        onClick={(event) => handleClick(event, name)}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Box
                            sx={{
                              py: 2,
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <Box
                              component={Avatar}
                              alt={name}
                              src={avatarUrl}
                              sx={{ mx: 2 }}
                            />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="left">{email}</TableCell>
                        <TableCell align="left">{linked}</TableCell>
                        <TableCell align="left">
                          <Label
                            variant={
                              theme.palette.mode === 'light'
                                ? 'ghost'
                                : 'filled'
                            }
                            color={(role === 'Admin' && 'success') || 'warning'}
                          >
                            {/* {sentenceCase(isadmin)} */}
                            {role}
                          </Label>
                        </TableCell>

                        <TableCell align="right">
                          <IconButton
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClickMenu}
                          >
                            <Icon
                              width={20}
                              height={20}
                              icon={moreVerticalFill}
                            />
                          </IconButton>
                          {/* <Button
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
                          </Button> */}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              {isUserNotFound && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6}>
                      <Box sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={userList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
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
    </Container>
  );
}
