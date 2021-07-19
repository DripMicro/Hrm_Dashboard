/* eslint-disable no-continue */
/* eslint-disable array-callback-return */
// import { useSelector } from 'react-redux';
import { map, filter } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  // calendar
  calendar: []
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET OFFICES
    getCalendarSuccess(state, action) {
      state.isLoading = false;
      state.calendar = action.payload;
    },

    // ON TOGGLE FOLLOW
    onToggleFollow(state, action) {
      const followerId = action.payload;

      const handleToggle = map(state.followers, (follower) => {
        if (follower.id === followerId) {
          return {
            ...follower,
            isFollowed: !follower.isFollowed
          };
        }
        return follower;
      });

      state.followers = handleToggle;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { onToggleFollow } = slice.actions;

// ----------------------------------------------------------------------
// Getting the Data
// ----------------------------------------------------------------------

export function getCalendar() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/general/calendars');
      dispatch(slice.actions.getCalendarSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------

export function updateSchedule({ updatedSchedule }) {
  const data = updatedSchedule;
  return async () => {
    console.log('here is redux updatedSchedule', data);
    await axios.post('/api/general/updateSchedule', data);
  };
}

// ----------------------------------------------------------------------
// Delete
// ----------------------------------------------------------------------

export function deleteOffice({ officeId }) {
  const data = {
    officeId
  };
  return async (dispatch) => {
    await axios.post('/api/office/deleteOffice', data);
    dispatch(slice.actions.getDeletedOfficeList(data));
  };
}

export function deleteTeam({ teamId }) {
  const data = {
    teamId
  };
  return async (dispatch) => {
    await axios.post('/api/team/deleteTeam', data);
    dispatch(slice.actions.getDeletedTeamList(data));
  };
}

// ----------------------------------------------------------------------
// Add
// ----------------------------------------------------------------------

export function addOffice() {
  return async () => {
    const response = await axios.post('/api/office/addOffice');
    const { id } = response.data;
    return id;
  };
}

export function addTeam() {
  return async () => {
    const response = await axios.post('/api/team/addTeam');
    const { id } = response.data;
    return id;
  };
}

export function addStatus() {
  return async () => {
    const response = await axios.post('/api/organization/addCustomStatus');
    const { id } = response.data;
    return id;
  };
}
