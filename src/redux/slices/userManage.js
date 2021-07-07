import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {}
};

const slice = createSlice({
  name: 'authJwts',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // INITIALISE
    getInitialize(state, action) {
      state.isLoading = false;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },

    // LOGIN
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },

    // REGISTER
    registerSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },

    // LOGOUT
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function updateProfile({
  email,
  firstname,
  lastname,
  photoURL,
  roles,
  officeIds
}) {
  const data = {
    firstname,
    lastname,
    email,
    photoURL,
    roles,
    officeIds
  };
  return async (dispatch) => {
    console.log('here is redux', data);
    const response = await axios.post('/api/user/updateProfile', data);
    console.log(response);
    // dispatch(slice.actions.getInitialize({ user }));
  };
}
