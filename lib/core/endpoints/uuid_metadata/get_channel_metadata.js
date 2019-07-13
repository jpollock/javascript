'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperation = getOperation;
exports.validateParams = validateParams;
exports.getURL = getURL;
exports.getRequestTimeout = getRequestTimeout;
exports.isAuthSupported = isAuthSupported;
exports.prepareParams = prepareParams;
exports.handleResponse = handleResponse;

var _flow_interfaces = require('../../flow_interfaces');

var _operations = require('../../constants/operations');

var _operations2 = _interopRequireDefault(_operations);

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOperation() {
  return _operations2.default.PNUuidMetadataCreate;
}

function validateParams(modules, incomingParams) {
  var channel = incomingParams.channel;
  var config = modules.config;


  if (!channel) return 'Missing Channel';
  if (!config.subscribeKey) return 'Missing Subscribe Key';
}

function getURL(modules, incomingParams) {
  var channel = incomingParams.channel;
  var config = modules.config;

  console.log('/v1/objects/' + config.subscribeKey + '/spaces/' + channel);
  return '/v1/objects/' + config.subscribeKey + '/spaces/' + channel;
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

function handleResponse(modules, serverResponse) {
  return serverResponse;
}
//# sourceMappingURL=get_channel_metadata.js.map
