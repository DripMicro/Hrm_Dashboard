"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCalendar = getCalendar;
exports.getAllStatusById = getAllStatusById;
exports.getUsersByCompany = getUsersByCompany;
exports.updateSchedule = updateSchedule;
exports.onToggleFollow = exports["default"] = void 0;

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
  // get all user status by companyId
  allStatus: [],
  allUsers: [],
  // calendar
  calendar: []
};
var slice = (0, _toolkit.createSlice)({
  name: 'general',
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
    // GET CALENDAR
    getCalendarSuccess: function getCalendarSuccess(state, action) {
      state.isLoading = false;
      state.calendar = action.payload;
    },
    // GET ALL USER STATUS BY COMPANY ID
    getAllStatusByIdSuccess: function getAllStatusByIdSuccess(state, action) {
      state.isLoading = false;
      state.allStatus = action.payload;
    },
    // GET ALL USER STATUS BY COMPANY ID
    getUsersByCompanySuccess: function getUsersByCompanySuccess(state, action) {
      state.isLoading = false;
      state.allUsers = action.payload;
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
    }
  }
}); // Reducer

var _default = slice.reducer; // Actions

exports["default"] = _default;
var onToggleFollow = slice.actions.onToggleFollow; // ----------------------------------------------------------------------
// Getting the Data
// ----------------------------------------------------------------------

exports.onToggleFollow = onToggleFollow;

function getCalendar() {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/general/calendars'));

          case 4:
            response = _context.sent;
            dispatch(slice.actions.getCalendarSuccess(response.data));
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
}

function getAllStatusById() {
  return function _callee2(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/general/allstatus'));

          case 4:
            response = _context2.sent;
            dispatch(slice.actions.getAllStatusByIdSuccess(response.data));
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
}

function getUsersByCompany() {
  return function _callee3(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/general/allusers'));

          case 4:
            response = _context3.sent;
            dispatch(slice.actions.getUsersByCompanySuccess(response.data));
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
// Update
// ----------------------------------------------------------------------


function updateSchedule(_ref) {
  var updatedSchedule = _ref.updatedSchedule;
  var data = updatedSchedule;
  return function _callee4() {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/general/updateSchedule', data));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    });
  };
}