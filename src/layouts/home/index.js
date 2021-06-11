import PropTypes from 'prop-types';
// material
import { Box } from '@material-ui/core';
//
import HomeTopbar from './HomeTopbar';
import HomeNavbar from './HomeNavbar';

// ----------------------------------------------------------------------

HomeLayout.propTypes = {
  children: PropTypes.node
};

export default function HomeLayout({ children }) {
  return (
    <Box sx={{ height: '100%' }}>
      {/* <HomeTopbar /> */}
      <HomeNavbar />
      <Box sx={{ height: '100%' }}>{children}</Box>
    </Box>
  );
}
