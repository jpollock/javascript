'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePost = usePost;
exports.getOperation = getOperation;
exports.validateParams = validateParams;
exports.postURL = postURL;
exports.getRequestTimeout = getRequestTimeout;
exports.isAuthSupported = isAuthSupported;
exports.prepareParams = prepareParams;
exports.postPayload = postPayload;
exports.handleResponse = handleResponse;

var _flow_interfaces = require('../../flow_interfaces');

var _operations = require('../../constants/operations');

var _operations2 = _interopRequireDefault(_operations);

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function usePost() {
  return true;
}

function getOperation() {
  return _operations2.default.PNUuidMetadataCreate;
}

function validateParams(modules, incomingParams) {
  var config = modules.config;


  if (!config.subscribeKey) return 'Missing Subscribe Key';
}

function postURL(modules, incomingParams) {
  var uuid = incomingParams.uuid;
  var config = modules.config;


  return '/v1/objects/' + config.subscribeKey + '/users';
}

function getRequestTimeout(_ref) {
  var config = _ref.config;

  return config.getTransactionTimeout();
}

function isAuthSupported() {
  return true;
}

function prepareParams(modules, incomingParams) {
  var name = incomingParams.name,
      description = incomingParams.description;

  var params = {};

  return params;
}

function prepareMessagePayload(modules, messagePayload) {
  var crypto = modules.crypto,
      config = modules.config;

  var stringifiedPayload = JSON.stringify(messagePayload);

  if (config.cipherKey) {
    stringifiedPayload = crypto.encrypt(stringifiedPayload);
    stringifiedPayload = JSON.stringify(stringifiedPayload);
  }

  return stringifiedPayload;
}

function postPayload(modules, incomingParams) {
  return prepareMessagePayload(modules, incomingParams);
}

function handleResponse(modules, serverResponse) {
  return serverResponse;
}
//# sourceMappingURL=set_user_metadata.js.map
