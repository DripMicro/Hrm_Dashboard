import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
// slices
import settingsReducer from './slices/settings';
import authJwtReducer from './slices/authJwt';
import userReducer from './slices/user';
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['settings']
};

const authPersistConfig = {
  key: 'authJwt',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['isAuthenticated']
};

const rootReducer = combineReducers({
  settings: settingsReducer,
  authJwt: persistReducer(authPersistConfig, authJwtReducer),
  user: userReducer
});

export { rootPersistConfig, rootReducer };
