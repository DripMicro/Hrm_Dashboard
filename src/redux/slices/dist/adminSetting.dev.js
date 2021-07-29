"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOfficeList = getOfficeList;
exports.getTeamList = getTeamList;
exports.getManagerList = getManagerList;
exports.getTManagerList = getTManagerList;
exports.getOrganizations = getOrganizations;
exports.updateOfficeList = updateOfficeList;
exports.updateTeamList = updateTeamList;
exports.updateOrganizations = updateOrganizations;
exports.deleteOffice = deleteOffice;
exports.deleteTeam = deleteTeam;
exports.addOffice = addOffice;
exports.addTeam = addTeam;
exports.addStatus = addStatus;
exports.getDeletedTeamList = exports.getDeletedOfficeList = exports.onToggleFollow = exports["default"] = void 0;

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
  // office
  officeList: [],
  managerList: [],
  // team
  teamList: [],
  tmanagerList: [],
  // organizations
  organizations: []
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
    // GET OFFICES
    getOfficeListSuccess: function getOfficeListSuccess(state, action) {
      state.isLoading = false;
      state.officeList = action.payload;
    },
    // GET MANAGE USERS
    getManagerListSuccess: function getManagerListSuccess(state, action) {
      state.isLoading = false;
      state.managerList = action.payload;
    },
    // GET MANAGE USERS
    getTManagerListSuccess: function getTManagerListSuccess(state, action) {
      state.isLoading = false;
      state.tmanagerList = action.payload;
    },
    // GET TEAMS
    getTeamListSuccess: function getTeamListSuccess(state, action) {
      state.isLoading = false;
      state.teamList = action.payload;
    },
    // GET MANAGE ORGANIZATIONS
    getOrganizationsSuccess: function getOrganizationsSuccess(state, action) {
      state.isLoading = false;
      state.organizations = action.payload;
    },
    // DELETE OFFICE
    getDeletedOfficeList: function getDeletedOfficeList(state, action) {
      var getDeletedOfficeList = (0, _lodash.filter)(state.officeList, function (office) {
        return office.id !== action.payload.officeId;
      });
      state.officeList = getDeletedOfficeList;
    },
    // DELETE TEAM
    getDeletedTeamList: function getDeletedTeamList(state, action) {
      var getDeletedTeamList = (0, _lodash.filter)(state.teamList, function (team) {
        return team.id !== action.payload.teamId;
      });
      state.teamList = getDeletedTeamList;
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
var _slice$actions = slice.actions,
    onToggleFollow = _slice$actions.onToggleFollow,
    getDeletedOfficeList = _slice$actions.getDeletedOfficeList,
    getDeletedTeamList = _slice$actions.getDeletedTeamList; // ----------------------------------------------------------------------
// Getting the Data
// ----------------------------------------------------------------------

exports.getDeletedTeamList = getDeletedTeamList;
exports.getDeletedOfficeList = getDeletedOfficeList;
exports.onToggleFollow = onToggleFollow;

function getOfficeList() {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/office/offices'));

          case 4:
            response = _context.sent;
            dispatch(slice.actions.getOfficeListSuccess(response.data));
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

function getTeamList() {
  return function _callee2(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/team/teams'));

          case 4:
            response = _context2.sent;
            dispatch(slice.actions.getTeamListSuccess(response.data));
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


function getManagerList() {
  return function _callee3(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/office/office-managers'));

          case 4:
            response = _context3.sent;
            dispatch(slice.actions.getManagerListSuccess(response.data));
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


function getTManagerList() {
  return function _callee4(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/team/team-managers'));

          case 4:
            response = _context4.sent;
            dispatch(slice.actions.getTManagerListSuccess(response.data));
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


function getOrganizations() {
  return function _callee5(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            dispatch(slice.actions.startLoading());
            _context5.prev = 1;
            console.log('here is redux, it is working well');
            _context5.next = 5;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/organization/organizations'));

          case 5:
            response = _context5.sent;
            dispatch(slice.actions.getOrganizationsSuccess(response.data));
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            dispatch(slice.actions.hasError(_context5.t0));

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
} // ----------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------


function updateOfficeList(_ref) {
  var updatedOfficeList = _ref.updatedOfficeList;
  var data = updatedOfficeList;
  return function _callee6() {
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/office/updateOfficeList', data));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    });
  };
}

function updateTeamList(_ref2) {
  var updatedTeamList = _ref2.updatedTeamList;
  console.log('Here is redux:', updatedTeamList);
  var data = updatedTeamList;
  return function _callee7() {
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/team/updateTeamList', data));

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    });
  };
}

function updateOrganizations(_ref3) {
  var updatedOrg = _ref3.updatedOrg;
  console.log('Here is redux:', updatedOrg);
  var data = updatedOrg;
  return function _callee8() {
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/organization/updateOrganizations', data));

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    });
  };
} // ----------------------------------------------------------------------
// Delete
// ----------------------------------------------------------------------


function deleteOffice(_ref4) {
  var officeId = _ref4.officeId;
  var data = {
    officeId: officeId
  };
  return function _callee9(dispatch) {
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/office/deleteOffice', data));

          case 2:
            dispatch(slice.actions.getDeletedOfficeList(data));

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    });
  };
}

function deleteTeam(_ref5) {
  var teamId = _ref5.teamId;
  var data = {
    teamId: teamId
  };
  return function _callee10(dispatch) {
    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/team/deleteTeam', data));

          case 2:
            dispatch(slice.actions.getDeletedTeamList(data));

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    });
  };
} // ----------------------------------------------------------------------
// Add
// ----------------------------------------------------------------------


function addOffice() {
  return function _callee11() {
    var response, id;
    return regeneratorRuntime.async(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/office/addOffice'));

          case 2:
            response = _context11.sent;
            id = response.data.id;
            return _context11.abrupt("return", id);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    });
  };
}

function addTeam() {
  return function _callee12() {
    var response, id;
    return regeneratorRuntime.async(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/team/addTeam'));

          case 2:
            response = _context12.sent;
            id = response.data.id;
            return _context12.abrupt("return", id);

          case 5:
          case "end":
            return _context12.stop();
        }
      }
    });
  };
}

function addStatus() {
  return function _callee13() {
    var response, id;
    return regeneratorRuntime.async(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/organization/addCustomStatus'));

          case 2:
            response = _context13.sent;
            id = response.data.id;
            return _context13.abrupt("return", id);

          case 5:
          case "end":
            return _context13.stop();
        }
      }
    });
  };
}