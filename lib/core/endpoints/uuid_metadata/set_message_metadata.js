'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePut = usePut;
exports.getOperation = getOperation;
exports.validateParams = validateParams;
exports.putURL = putURL;
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

function usePut() {
  return true;
}

function getOperation() {
  return _operations2.default.PNUuidMetadataCreate;
}

function validateParams(modules, incomingParams) {
  var channel = incomingParams.channel,
      timetoken = incomingParams.timetoken;
  var config = modules.config;


  if (!channel) return 'Missing Channel';
  if (!timetoken) return 'Missing timetoken';

  if (!config.subscribeKey) return 'Missing Subscribe Key';
}

function putURL(modules, incomingParams) {
  var channel = incomingParams.channel,
      timetoken = incomingParams.timetoken;
  var config = modules.config;

  return '/v1/data/sub-key/' + config.subscribeKey + '/spaces/' + channel + '/message/' + timetoken + '/action';
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
  var message = incomingParams.message;

  return prepareMessagePayload(modules, message);
}

function handleResponse() {
  return {};
}
//# sourceMappingURL=set_message_metadata.js.map
