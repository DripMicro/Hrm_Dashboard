import jwtDecode from 'jwt-decode';
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
      console.log('here is initial', state.user);
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

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

// ----------------------------------------------------------------------

export function login({ email, password }) {
  return async (dispatch) => {
    const response = await axios.post('/api/auth/signin', {
      email,
      password
    });
    const { accessToken, user } = response.data;
    console.log('here is login:', user);
    setSession(accessToken);
    dispatch(slice.actions.loginSuccess({ user }));
  };
}

// ----------------------------------------------------------------------

export function register({ email, password, firstname, lastname }) {
  const data = {
    firstname,
    lastname,
    email,
    password
  };
  return async (dispatch) => {
    const response = await axios.post('/api/auth/signup', data);
    console.log(response);
    const { accessToken, user } = response.data;

    window.localStorage.setItem('accessToken', accessToken);
    dispatch(slice.actions.registerSuccess({ user }));
  };
}

export function updateProfile({ email, firstname, lastname, photoURL, roles }) {
  const data = {
    firstname,
    lastname,
    email,
    photoURL,
    roles
  };
  return async (dispatch) => {
    const response = await axios.post('/api/auth/updateProfile', data);
    console.log(response);
    // dispatch(slice.actions.registerSuccess({ user }));
  };
}

// ----------------------------------------------------------------------

export function logout() {
  return async (dispatch) => {
    setSession(null);
    dispatch(slice.actions.logoutSuccess());
  };
}

// ----------------------------------------------------------------------

export function getInitialize() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const accessToken = window.localStorage.getItem('accessToken');
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const response = await axios.get('/api/user/profile');
        console.log('here is initial:', response);
        dispatch(
          slice.actions.getInitialize({
            isAuthenticated: true,
            user: response.data.user
          })
        );
      } else {
        dispatch(
          slice.actions.getInitialize({
            isAuthenticated: false,
            user: null
          })
        );
      }
    } catch (error) {
      console.error(error);
      dispatch(
        slice.actions.getInitialize({
          isAuthenticated: false,
          user: null
        })
      );
    }
  };
}
