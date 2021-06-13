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
  const location = useLocation();
  return (
    <Box sx={{ height: '100%' }}>
      {location.pathname === '/' && <HomeTopBar />}
      <HomeNavbar />
      <Box sx={{ height: '100%' }}>{children}</Box>
    </Box>
  );
}
