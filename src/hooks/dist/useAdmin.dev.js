"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useUserManage;

var _reactRedux = require("react-redux");

var _adminSetting = require("../redux/slices/adminSetting");

var _user = require("../redux/slices/user");

// redux
// ----------------------------------------------------------------------
function useUserManage() {
  // JWT Auth
  var dispatch = (0, _reactRedux.useDispatch)();
  return {
    updateProfile: function updateProfile(_ref) {
      var email = _ref.email,
          firstname = _ref.firstname,
          lastname = _ref.lastname,
          photoURL = _ref.photoURL,
          roles = _ref.roles,
          officeId = _ref.officeId,
          teamId = _ref.teamId;
      return dispatch((0, _user.updateProfile)({
        email: email,
        firstname: firstname,
        lastname: lastname,
        photoURL: photoURL,
        roles: roles,
        officeId: officeId,
        teamId: teamId
      }));
    },
    // -------------- Update list ---------------------
    updateOfficeList: function updateOfficeList(_ref2) {
      var updatedOfficeList = _ref2.updatedOfficeList;
      return dispatch((0, _adminSetting.updateOfficeList)({
        updatedOfficeList: updatedOfficeList
      }));
    },
    updateTeamList: function updateTeamList(_ref3) {
      var updatedTeamList = _ref3.updatedTeamList;
      return dispatch((0, _adminSetting.updateTeamList)({
        updatedTeamList: updatedTeamList
      }));
    },
    // -------------- Deleting the data---------------------
    deleteOffice: function deleteOffice(_ref4) {
      var officeId = _ref4.officeId;
      return dispatch((0, _adminSetting.deleteOffice)({
        officeId: officeId
      }));
    },
    deleteTeam: function deleteTeam(_ref5) {
      var teamId = _ref5.teamId;
      return dispatch((0, _adminSetting.deleteTeam)({
        teamId: teamId
      }));
    },
    // -------------- Adding the data ---------------------
    addOffice: function addOffice() {
      return dispatch((0, _adminSetting.addOffice)());
    },
    addTeam: function addTeam() {
      return dispatch((0, _adminSetting.addTeam)());
    }
  };
}