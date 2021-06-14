import PropTypes from 'prop-types';
// material
import { Box } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
//
// hooks
import HomeNavbar from './HomeNavbar';
import HomeTopBar from './HomeTopbar';

// material
// ----------------------------------------------------------------------

HomeLayout.propTypes = {
  children: PropTypes.node
};

export default function HomeLayout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isAuth =
    pathname === '/auth/register' ||
    pathname === '/auth/login' ||
    pathname === '/auth/reset-password';
  return (
    <Box sx={{ height: '100%' }}>
      {isHome && <HomeTopBar />}
      {!isAuth && <HomeNavbar />}
      <Box sx={{ height: '100%' }}>{children}</Box>
    </Box>
  );
}
