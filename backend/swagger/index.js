const { header, components } = require("./basicInfo");
const {
  getVehicles,
  addVehicle,
  updateVehicle,
  getOperators,
  addOperator,
  updateOperator,
} = require("./docsFleet");

const {
  getSaccos,
  getSacco,
  addSacco,
  updateSacco,
  updateSaccoStatus,

  SaccoBalance,
  getSaccoCharges,
  getSaccoCharge,
  addSaccoCharge,
  updateSaccoCharge,
  updateSaccoChargeStatus,
} = require("./docsSacco");

const {
  getSaccoStations,
  getSaccoStation,
  addSaccoStation,
  updateSaccoStation,
  updateSaccoStationStatus,
} = require("./docsSaccoStation");

const {
  getSaccosOfficials,
  getSaccosOfficial,
  addSaccosOfficial,
  updateSaccosOfficial,
  updateSaccosOfficialStatus,
} = require("./docsSaccosOfficial");

const {
  register,
  login,
  logout,
  changePassword,
  resetPassword,
  addWebProfile,
} = require("./docsAuth");

module.exports = {
  ...header,
  ...components,

  paths: {
    //* Auth Docs
    "/api/v1/auth/register": {
      ...register,
    },
    "/api/v1/auth/login": {
      ...login,
    },
    "/api/v1/auth/logout": {
      ...logout,
    },
    "/api/v1/auth/changePassword": {
      ...changePassword,
    },
    "/api/v1/auth/resetPassword": {
      ...resetPassword,
    },
    "/api/v1/auth/addWebProfile": {
      ...addWebProfile,
    },

    //* Fleet Docs
    "/api/v1/fleet/getVehicles": {
      ...getVehicles,
    },
    "/api/v1/fleet/addVehicle": {
      ...addVehicle,
    },
    "/api/v1/fleet/updateVehicle": {
      ...updateVehicle,
    },
    "/api/v1/fleet/getOperators": {
      ...getOperators,
    },
    "/api/v1/fleet/addOperator": {
      ...addOperator,
    },
    "/api/v1/fleet/updateOperator": {
      ...updateOperator,
    },

    //* Sacco Docs
    "/api/v1/sacco/getSaccos": {
      ...getSaccos,
    },
    "/api/v1/sacco/getSacco/{id}": {
      ...getSacco,
    },
    "/api/v1/sacco/addSacco": {
      ...addSacco,
    },
    "/api/v1/sacco/updateSacco": {
      ...updateSacco,
    },
    "/api/v1/sacco/updateSaccoStatus": {
      ...updateSaccoStatus,
    },

    //* Sacco Charge Docs
    "/api/v1/sacco/getSaccoCharges": {
      ...getSaccoCharges,
    },
    "/api/v1/sacco/getSaccoCharge/{id}": {
      ...getSaccoCharge,
    },
    "/api/v1/sacco/addSaccoCharge": {
      ...addSaccoCharge,
    },
    "/api/v1/sacco/updateSaccoCharge": {
      ...updateSaccoCharge,
    },
    "/api/v1/sacco/updateSaccoChargeStatus": {
      ...updateSaccoChargeStatus,
    },
    "/api/v1/sacco/SaccoBalance": {
      ...SaccoBalance,
    },

    //* Sacco Station Docs
    "/api/v1/sacco/getSaccoStations": {
      ...getSaccoStations,
    },
    "/api/v1/sacco/getSaccoStation/{id}": {
      ...getSaccoStation,
    },
    "/api/v1/sacco/addSaccoStation": {
      ...addSaccoStation,
    },
    "/api/v1/sacco/updateSaccoStation": {
      ...updateSaccoStation,
    },
    "/api/v1/sacco/updateSaccoStationStatus": {
      ...updateSaccoStationStatus,
    },

    //* Sacco Official Docs
    "/api/v1/sacco/getSaccosOfficials": {
      ...getSaccosOfficials,
    },
    "/api/v1/sacco/getSaccosOfficial/{id}": {
      ...getSaccosOfficial,
    },
    "/api/v1/sacco/addSaccosOfficial": {
      ...addSaccosOfficial,
    },
    "/api/v1/sacco/updateSaccosOfficial": {
      ...updateSaccosOfficial,
    },
    "/api/v1/sacco/updateSaccosOfficialStatus": {
      ...updateSaccosOfficialStatus,
    },
  },
};
