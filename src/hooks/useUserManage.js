import { useDispatch } from 'react-redux';
// redux
import { updateProfile } from '../redux/slices/userManage';

// ----------------------------------------------------------------------

export default function useUserManage() {
  // JWT Auth
  const dispatch = useDispatch();

  // JWT Auth
  return {
    updateProfile: ({
      email,
      firstname,
      lastname,
      photoURL,
      roles,
      officeIds
    }) =>
      dispatch(
        updateProfile({
          email,
          firstname,
          lastname,
          photoURL,
          roles,
          officeIds
        })
      )
  };
}
