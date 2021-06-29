import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { login, register, logout } from '../redux/slices/authJwt';

// ----------------------------------------------------------------------

useAuth.propTypes = {
  method: PropTypes.oneOf(['jwt', 'firebase'])
};

export default function useAuth() {
  // JWT Auth
  const dispatch = useDispatch();

  const { user, isLoading, isAuthenticated } = useSelector(
    (state) => state.authJwt
  );

  // JWT Auth
  return {
    method: 'jwt',
    user,
    isLoading,
    isAuthenticated,

    login: ({ email, password }) =>
      dispatch(
        login({
          email,
          password
        })
      ),

    register: ({ email, password, firstname, lastname, roles }) =>
      dispatch(
        register({
          email,
          password,
          firstname,
          lastname,
          roles
        })
      ),

    logout: () => dispatch(logout()),

    resetPassword: () => {},

    updateProfile: () => {}
  };
}
