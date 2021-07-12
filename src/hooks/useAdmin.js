import { useDispatch } from 'react-redux';
// redux
import {
  addOffice,
  deleteOffice,
  updateOfficeList,
  // team
  addTeam,
  deleteTeam,
  updateTeamList
} from '../redux/slices/adminSetting';
import { updateProfile } from '../redux/slices/user';

// ----------------------------------------------------------------------

export default function useUserManage() {
  // JWT Auth
  const dispatch = useDispatch();

  return {
    updateProfile: ({
      email,
      firstname,
      lastname,
      photoURL,
      roles,
      officeId,
      teamId
    }) =>
      dispatch(
        updateProfile({
          email,
          firstname,
          lastname,
          photoURL,
          roles,
          officeId,
          teamId
        })
      ),

    // -------------- Update list ---------------------
    updateOfficeList: ({ updatedOfficeList }) =>
      dispatch(updateOfficeList({ updatedOfficeList })),

    updateTeamList: ({ updatedTeamList }) =>
      dispatch(updateTeamList({ updatedTeamList })),
    // -------------- Deleting the data---------------------

    deleteOffice: ({ officeId }) => dispatch(deleteOffice({ officeId })),
    deleteTeam: ({ teamId }) => dispatch(deleteTeam({ teamId })),

    // -------------- Adding the data ---------------------

    addOffice: () => dispatch(addOffice()),
    addTeam: () => dispatch(addTeam())
  };
}
