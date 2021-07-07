import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// hooks
import useAuth from '../hooks/useAuth';
// routes
import { PATH_DASHBOARD } from '../routes/paths';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

AdminProtect.propTypes = {
  children: PropTypes.node
};

export default function AdminProtect({ children }) {
  const { isLoading, isAuthenticated, user } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  console.log(user.roles, isAuthenticated);
  if (
    !isAuthenticated &&
    (user.roles !== 'SUPER ADMIN' || user.roles !== 'ADMIN')
  ) {
    return <Redirect to={PATH_DASHBOARD.general.home} />;
  }

  return <>{children}</>;
}
