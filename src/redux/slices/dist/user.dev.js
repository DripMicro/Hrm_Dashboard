"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfile = getProfile;
exports.getFollowers = getFollowers;
exports.getFriends = getFriends;
exports.getGallery = getGallery;
exports.getUserList = getUserList;
exports.getCards = getCards;
exports.getAddressBook = getAddressBook;
exports.getInvoices = getInvoices;
exports.getNotifications = getNotifications;
exports.getUsers = getUsers;
exports.updateProfile = updateProfile;
exports.deleteUser = exports.onToggleFollow = exports["default"] = void 0;

var _lodash = require("lodash");

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("../../utils/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var initialState = {
  isLoading: false,
  error: false,
  myProfile: null,
  officeList: [],
  users: [],
  userList: [],
  managerList: [],
  followers: [],
  friends: [],
  gallery: [],
  cards: null,
  addressBook: [],
  invoices: [],
  notifications: null
};
var slice = (0, _toolkit.createSlice)({
  name: 'user',
  initialState: initialState,
  reducers: {
    // START LOADING
    startLoading: function startLoading(state) {
      state.isLoading = true;
    },
    // HAS ERROR
    hasError: function hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // GET PROFILE
    getProfileSuccess: function getProfileSuccess(state, action) {
      state.isLoading = false;
      state.myProfile = action.payload;
    },
    // GET USERS
    getUsersSuccess: function getUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },
    // DELETE USERS
    deleteUser: function deleteUser(state, action) {
      var deleteUser = (0, _lodash.filter)(state.userList, function (user) {
        return user.id !== action.payload;
      });
      state.userList = deleteUser;
    },
    // GET FOLLOWERS
    getFollowersSuccess: function getFollowersSuccess(state, action) {
      state.isLoading = false;
      state.followers = action.payload;
    },
    // ON TOGGLE FOLLOW
    onToggleFollow: function onToggleFollow(state, action) {
      var followerId = action.payload;
      var handleToggle = (0, _lodash.map)(state.followers, function (follower) {
        if (follower.id === followerId) {
          return _objectSpread({}, follower, {
            isFollowed: !follower.isFollowed
          });
        }

        return follower;
      });
      state.followers = handleToggle;
    },
    // GET FRIENDS
    getFriendsSuccess: function getFriendsSuccess(state, action) {
      state.isLoading = false;
      state.friends = action.payload;
    },
    // GET GALLERY
    getGallerySuccess: function getGallerySuccess(state, action) {
      state.isLoading = false;
      state.gallery = action.payload;
    },
    // GET MANAGE USERS
    getUserListSuccess: function getUserListSuccess(state, action) {
      state.isLoading = false;
      state.userList = action.payload;
    },
    // GET CARDS
    getCardsSuccess: function getCardsSuccess(state, action) {
      state.isLoading = false;
      state.cards = action.payload;
    },
    // GET ADDRESS BOOK
    getAddressBookSuccess: function getAddressBookSuccess(state, action) {
      state.isLoading = false;
      state.addressBook = action.payload;
    },
    // GET INVOICES
    getInvoicesSuccess: function getInvoicesSuccess(state, action) {
      state.isLoading = false;
      state.invoices = action.payload;
    },
    // GET NOTIFICATIONS
    getNotificationsSuccess: function getNotificationsSuccess(state, action) {
      state.isLoading = false;
      state.notifications = action.payload;
    }
  }
}); // Reducer

var _default = slice.reducer; // Actions

exports["default"] = _default;
var _slice$actions = slice.actions,
    onToggleFollow = _slice$actions.onToggleFollow,
    deleteUser = _slice$actions.deleteUser; // ----------------------------------------------------------------------

exports.deleteUser = deleteUser;
exports.onToggleFollow = onToggleFollow;

function getProfile() {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/user/profile'));

          case 4:
            response = _context.sent;
            dispatch(slice.actions.getProfileSuccess(response.data.user));
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch(slice.actions.hasError(_context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
} // ----------------------------------------------------------------------


function getFollowers() {
  return function _callee2(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/user/social/followers'));

          case 4:
            response = _context2.sent;
            dispatch(slice.actions.getFollowersSuccess(response.data.followers));
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            dispatch(slice.actions.hasError(_context2.t0));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
} // ----------------------------------------------------------------------


function getFriends() {
  return function _callee3(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/user/social/friends'));

          case 4:
            response = _context3.sent;
            dispatch(slice.actions.getFriendsSuccess(response.data.friends));
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            dispatch(slice.actions.hasError(_context3.t0));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
} // ----------------------------------------------------------------------


function getGallery() {
  return function _callee4(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/user/social/gallery'));

          case 4:
            response = _context4.sent;
            dispatch(slice.actions.getGallerySuccess(response.data.gallery));
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            dispatch(slice.actions.hasError(_context4.t0));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
} // ----------------------------------------------------------------------


function getUserList() {
  return function _callee5(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/user/manage-users'));

          case 4:
            response = _context5.sent;
            dispatch(slice.actions.getUserListSuccess(response.data));
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            dispatch(slice.actions.hasError(_context5.t0));

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
} // ----------------------------------------------------------------------


function getCards() {
  return function _callee6(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context6.prev = 1;
            _context6.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/user/account/cards'));

          case 4:
            response = _context6.sent;
            dispatch(slice.actions.getCardsSuccess(response.data.cards));
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            dispatch(slice.actions.hasError(_context6.t0));

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
} // ----------------------------------------------------------------------


function getAddressBook() {
  return function _callee7(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context7.prev = 1;
            _context7.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/user/account/address-book'));

          case 4:
            response = _context7.sent;
            dispatch(slice.actions.getAddressBookSuccess(response.data.addressBook));
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            dispatch(slice.actions.hasError(_context7.t0));

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
} // ----------------------------------------------------------------------


function getInvoices() {
  return function _callee8(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context8.prev = 1;
            _context8.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/user/account/invoices'));

          case 4:
            response = _context8.sent;
            dispatch(slice.actions.getInvoicesSuccess(response.data.invoices));
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            dispatch(slice.actions.hasError(_context8.t0));

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
} // ----------------------------------------------------------------------


function getNotifications() {
  return function _callee9(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context9.prev = 1;
            _context9.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/user/account/notifications-settings'));

          case 4:
            response = _context9.sent;
            dispatch(slice.actions.getNotificationsSuccess(response.data.notifications));
            _context9.next = 11;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](1);
            dispatch(slice.actions.hasError(_context9.t0));

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
} // ----------------------------------------------------------------------


function getUsers() {
  return function _callee10(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context10.prev = 1;
            _context10.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/user/all'));

          case 4:
            response = _context10.sent;
            dispatch(slice.actions.getUsersSuccess(response.data.users));
            _context10.next = 11;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10["catch"](1);
            dispatch(slice.actions.hasError(_context10.t0));

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
} // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------


function updateProfile(_ref) {
  var email = _ref.email,
      firstname = _ref.firstname,
      lastname = _ref.lastname,
      photoURL = _ref.photoURL,
      roles = _ref.roles,
      officeId = _ref.officeId,
      teamId = _ref.teamId;
  var data = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    photoURL: photoURL,
    roles: roles,
    officeId: officeId,
    teamId: teamId
  };
  return function _callee11() {
    var response;
    return regeneratorRuntime.async(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/user/updateProfile', data));

          case 2:
            response = _context11.sent;
            console.log(response);

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    });
  };
}