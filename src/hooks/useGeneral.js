import { useDispatch } from 'react-redux';
// redux
import { updateSchedule } from '../redux/slices/general';

// ----------------------------------------------------------------------

export default function useUserManage() {
  // JWT Auth
  const dispatch = useDispatch();

  return {
    // -------------- Update list ---------------------
    updateSchedule: ({ updatedSchedule }) =>
      dispatch(updateSchedule({ updatedSchedule }))
  };
}
