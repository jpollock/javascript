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
  var channels = incomingParams.channels,
      channelGroup = incomingParams.channelGroup;
  var config = modules.config;


  if (!channelGroup) return 'Missing Channel Group';
  if (!channels || channels.length === 0) return 'Missing Channels';
  if (!config.subscribeKey) return 'Missing Subscribe Key';
}

function putURL(modules, incomingParams) {
  var uuid = incomingParams.uuid;
  var config = modules.config;


  return '/v1/data/sub-key/${config.subscribeKey}/uuid/{$uuid}';
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
function handleResponse() {
  return {};
}
//# sourceMappingURL=set_channelgroup_metadata.js.map
