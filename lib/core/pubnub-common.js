'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./components/config');

var _config2 = _interopRequireDefault(_config);

var _index = require('./components/cryptography/index');

var _index2 = _interopRequireDefault(_index);

var _subscription_manager = require('./components/subscription_manager');

var _subscription_manager2 = _interopRequireDefault(_subscription_manager);

var _listener_manager = require('./components/listener_manager');

var _listener_manager2 = _interopRequireDefault(_listener_manager);

var _endpoint = require('./components/endpoint');

var _endpoint2 = _interopRequireDefault(_endpoint);

var _message_counts = require('./endpoints/uuid_metadata/message_counts');

var messageCountsConfig = _interopRequireWildcard(_message_counts);

var _set_message_metadata = require('./endpoints/uuid_metadata/set_message_metadata');

var addMessageMetadataConfig = _interopRequireWildcard(_set_message_metadata);

var _get_message_metadata = require('./endpoints/uuid_metadata/get_message_metadata');

var getMessageReactions = _interopRequireWildcard(_get_message_metadata);

var _delete_message_metadata = require('./endpoints/uuid_metadata/delete_message_metadata');

var deleteMessageMetadataConfig = _interopRequireWildcard(_delete_message_metadata);

var _set_user_metadata = require('./endpoints/uuid_metadata/set_user_metadata');

var setUserDataConfig = _interopRequireWildcard(_set_user_metadata);

var _get_user_metadata = require('./endpoints/uuid_metadata/get_user_metadata');

var getUserDataConfig = _interopRequireWildcard(_get_user_metadata);

var _get_users_metadata = require('./endpoints/uuid_metadata/get_users_metadata');

var getUsersDataConfig = _interopRequireWildcard(_get_users_metadata);

var _set_device_metadata = require('./endpoints/uuid_metadata/set_device_metadata');

var setDeviceDataConfig = _interopRequireWildcard(_set_device_metadata);

var _get_device_metadata = require('./endpoints/uuid_metadata/get_device_metadata');

var getDeviceDataConfig = _interopRequireWildcard(_get_device_metadata);

var _delete_user_metadata = require('./endpoints/uuid_metadata/delete_user_metadata');

var deleteUserDataConfig = _interopRequireWildcard(_delete_user_metadata);

var _delete_device_metadata = require('./endpoints/uuid_metadata/delete_device_metadata');

var deleteDeviceDataConfig = _interopRequireWildcard(_delete_device_metadata);

var _add_device_to_user = require('./endpoints/uuid_metadata/add_device_to_user');

var addDeviceToUserConfig = _interopRequireWildcard(_add_device_to_user);

var _remove_device_from_user = require('./endpoints/uuid_metadata/remove_device_from_user');

var removeDeviceFromUserConfig = _interopRequireWildcard(_remove_device_from_user);

var _list_devices_for_user = require('./endpoints/uuid_metadata/list_devices_for_user');

var listDevicesForUserConfig = _interopRequireWildcard(_list_devices_for_user);

var _get_channels_metadata = require('./endpoints/uuid_metadata/get_channels_metadata');

var getChannelsDataConfig = _interopRequireWildcard(_get_channels_metadata);

var _add_channel_metadata = require('./endpoints/uuid_metadata/add_channel_metadata');

var addChannelDataConfig = _interopRequireWildcard(_add_channel_metadata);

var _update_channel_metadata = require('./endpoints/uuid_metadata/update_channel_metadata');

var updateChannelDataConfig = _interopRequireWildcard(_update_channel_metadata);

var _get_channel_metadata = require('./endpoints/uuid_metadata/get_channel_metadata');

var getChannelDataConfig = _interopRequireWildcard(_get_channel_metadata);

var _delete_channel_metadata = require('./endpoints/uuid_metadata/delete_channel_metadata');

var deleteChannelDataConfig = _interopRequireWildcard(_delete_channel_metadata);

var _add_user_to_channel = require('./endpoints/uuid_metadata/add_user_to_channel');

var addUserToChannelConfig = _interopRequireWildcard(_add_user_to_channel);

var _remove_user_from_channel = require('./endpoints/uuid_metadata/remove_user_from_channel');

var removeUserFromChannelConfig = _interopRequireWildcard(_remove_user_from_channel);

var _list_users_in_channel = require('./endpoints/uuid_metadata/list_users_in_channel');

var listUsersInChannelConfig = _interopRequireWildcard(_list_users_in_channel);

var _list_channels_for_user = require('./endpoints/uuid_metadata/list_channels_for_user');

var listChannelsForUserConfig = _interopRequireWildcard(_list_channels_for_user);

var _add_device_to_channel = require('./endpoints/uuid_metadata/add_device_to_channel');

var addDeviceToChannelConfig = _interopRequireWildcard(_add_device_to_channel);

var _remove_device_from_channel = require('./endpoints/uuid_metadata/remove_device_from_channel');

var removeDeviceFromChannelConfig = _interopRequireWildcard(_remove_device_from_channel);

var _list_devices_in_channel = require('./endpoints/uuid_metadata/list_devices_in_channel');

var listDevicesInChannelConfig = _interopRequireWildcard(_list_devices_in_channel);

var _list_channels_for_device = require('./endpoints/uuid_metadata/list_channels_for_device');

var listChannelsForDeviceConfig = _interopRequireWildcard(_list_channels_for_device);

var _add_channels = require('./endpoints/channel_groups/add_channels');

var addChannelsChannelGroupConfig = _interopRequireWildcard(_add_channels);

var _remove_channels = require('./endpoints/channel_groups/remove_channels');

var removeChannelsChannelGroupConfig = _interopRequireWildcard(_remove_channels);

var _delete_group = require('./endpoints/channel_groups/delete_group');

var deleteChannelGroupConfig = _interopRequireWildcard(_delete_group);

var _list_groups = require('./endpoints/channel_groups/list_groups');

var listChannelGroupsConfig = _interopRequireWildcard(_list_groups);

var _list_channels = require('./endpoints/channel_groups/list_channels');

var listChannelsInChannelGroupConfig = _interopRequireWildcard(_list_channels);

var _add_push_channels = require('./endpoints/push/add_push_channels');

var addPushChannelsConfig = _interopRequireWildcard(_add_push_channels);

var _remove_push_channels = require('./endpoints/push/remove_push_channels');

var removePushChannelsConfig = _interopRequireWildcard(_remove_push_channels);

var _list_push_channels = require('./endpoints/push/list_push_channels');

var listPushChannelsConfig = _interopRequireWildcard(_list_push_channels);

var _remove_device = require('./endpoints/push/remove_device');

var removeDevicePushConfig = _interopRequireWildcard(_remove_device);

var _leave = require('./endpoints/presence/leave');

var presenceLeaveEndpointConfig = _interopRequireWildcard(_leave);

var _where_now = require('./endpoints/presence/where_now');

var presenceWhereNowEndpointConfig = _interopRequireWildcard(_where_now);

var _heartbeat = require('./endpoints/presence/heartbeat');

var presenceHeartbeatEndpointConfig = _interopRequireWildcard(_heartbeat);

var _get_state = require('./endpoints/presence/get_state');

var presenceGetStateConfig = _interopRequireWildcard(_get_state);

var _set_state = require('./endpoints/presence/set_state');

var presenceSetStateConfig = _interopRequireWildcard(_set_state);

var _here_now = require('./endpoints/presence/here_now');

var presenceHereNowConfig = _interopRequireWildcard(_here_now);

var _audit = require('./endpoints/access_manager/audit');

var auditEndpointConfig = _interopRequireWildcard(_audit);

var _grant = require('./endpoints/access_manager/grant');

var grantEndpointConfig = _interopRequireWildcard(_grant);

var _publish = require('./endpoints/publish');

var publishEndpointConfig = _interopRequireWildcard(_publish);

var _get_history = require('./endpoints/history/get_history');

var historyEndpointConfig = _interopRequireWildcard(_get_history);

var _delete_messages = require('./endpoints/history/delete_messages');

var deleteMessagesEndpointConfig = _interopRequireWildcard(_delete_messages);

var _fetch_messages = require('./endpoints/fetch_messages');

var fetchMessagesEndpointConfig = _interopRequireWildcard(_fetch_messages);

var _time = require('./endpoints/time');

var timeEndpointConfig = _interopRequireWildcard(_time);

var _subscribe = require('./endpoints/subscribe');

var subscribeEndpointConfig = _interopRequireWildcard(_subscribe);

var _operations = require('./constants/operations');

var _operations2 = _interopRequireDefault(_operations);

var _categories = require('./constants/categories');

var _categories2 = _interopRequireDefault(_categories);

var _flow_interfaces = require('./flow_interfaces');

var _uuid = require('./components/uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(setup) {
    var _this = this;

    _classCallCheck(this, _class);

    var db = setup.db,
        networking = setup.networking;


    var config = this._config = new _config2.default({ setup: setup, db: db });
    var crypto = new _index2.default({ config: config });
    networking.init(config);

    var modules = { config: config, networking: networking, crypto: crypto };
    var timeEndpoint = _endpoint2.default.bind(this, modules, timeEndpointConfig);
    var leaveEndpoint = _endpoint2.default.bind(this, modules, presenceLeaveEndpointConfig);
    var heartbeatEndpoint = _endpoint2.default.bind(this, modules, presenceHeartbeatEndpointConfig);
    var setStateEndpoint = _endpoint2.default.bind(this, modules, presenceSetStateConfig);
    var subscribeEndpoint = _endpoint2.default.bind(this, modules, subscribeEndpointConfig);

    var listenerManager = this._listenerManager = new _listener_manager2.default();

    var subscriptionManager = new _subscription_manager2.default({
      timeEndpoint: timeEndpoint,
      leaveEndpoint: leaveEndpoint,
      heartbeatEndpoint: heartbeatEndpoint,
      setStateEndpoint: setStateEndpoint,
      subscribeEndpoint: subscribeEndpoint,
      crypto: modules.crypto,
      config: modules.config,
      listenerManager: listenerManager
    });

    this.addListener = listenerManager.addListener.bind(listenerManager);
    this.removeListener = listenerManager.removeListener.bind(listenerManager);
    this.removeAllListeners = listenerManager.removeAllListeners.bind(listenerManager);

    this.channelGroups = {
      listGroups: _endpoint2.default.bind(this, modules, listChannelGroupsConfig),
      listChannels: _endpoint2.default.bind(this, modules, listChannelsInChannelGroupConfig),
      addChannels: _endpoint2.default.bind(this, modules, addChannelsChannelGroupConfig),
      removeChannels: _endpoint2.default.bind(this, modules, removeChannelsChannelGroupConfig),
      deleteGroup: _endpoint2.default.bind(this, modules, deleteChannelGroupConfig)
    };

    this.push = {
      addChannels: _endpoint2.default.bind(this, modules, addPushChannelsConfig),
      removeChannels: _endpoint2.default.bind(this, modules, removePushChannelsConfig),
      deleteDevice: _endpoint2.default.bind(this, modules, removeDevicePushConfig),
      listChannels: _endpoint2.default.bind(this, modules, listPushChannelsConfig)
    };

    this.hereNow = _endpoint2.default.bind(this, modules, presenceHereNowConfig);
    this.whereNow = _endpoint2.default.bind(this, modules, presenceWhereNowEndpointConfig);
    this.getState = _endpoint2.default.bind(this, modules, presenceGetStateConfig);
    this.setState = subscriptionManager.adaptStateChange.bind(subscriptionManager);

    this.grant = _endpoint2.default.bind(this, modules, grantEndpointConfig);
    this.audit = _endpoint2.default.bind(this, modules, auditEndpointConfig);

    this.publish = _endpoint2.default.bind(this, modules, publishEndpointConfig);

    this.messageCounts = _endpoint2.default.bind(this, modules, messageCountsConfig);
    this.addMessageReaction = _endpoint2.default.bind(this, modules, addMessageMetadataConfig);
    this.getMessageReactions = _endpoint2.default.bind(this, modules, getMessageReactions);
    this.deleteMessageMetadata = _endpoint2.default.bind(this, modules, deleteMessageMetadataConfig);
    this.setUserData = _endpoint2.default.bind(this, modules, setUserDataConfig);
    this.getUserData = _endpoint2.default.bind(this, modules, getUserDataConfig);
    this.getUsersData = _endpoint2.default.bind(this, modules, getUsersDataConfig);
    this.deleteUserData = _endpoint2.default.bind(this, modules, deleteUserDataConfig);
    this.setDeviceData = _endpoint2.default.bind(this, modules, setDeviceDataConfig);
    this.getDeviceData = _endpoint2.default.bind(this, modules, getDeviceDataConfig);
    this.deleteDeviceData = _endpoint2.default.bind(this, modules, deleteDeviceDataConfig);
    this.addDeviceToUser = _endpoint2.default.bind(this, modules, addDeviceToUserConfig);
    this.removeDeviceFromUser = _endpoint2.default.bind(this, modules, removeDeviceFromUserConfig);
    this.listDevicesForUser = _endpoint2.default.bind(this, modules, listDevicesForUserConfig);

    this.addUserToVirtualSpace = _endpoint2.default.bind(this, modules, addUserToChannelConfig);
    this.removeUserFromVirtualSpace = _endpoint2.default.bind(this, modules, removeUserFromChannelConfig);
    this.listUsersInVirtualSpace = _endpoint2.default.bind(this, modules, listUsersInChannelConfig);
    this.listVirtualSpacesForUser = _endpoint2.default.bind(this, modules, listChannelsForUserConfig);
    this.addDeviceToVirtualSpace = _endpoint2.default.bind(this, modules, addDeviceToChannelConfig);
    this.removeDeviceFromVirtualSpace = _endpoint2.default.bind(this, modules, removeDeviceFromChannelConfig);
    this.listDeviceInVirtualSpace = _endpoint2.default.bind(this, modules, listDevicesInChannelConfig);
    this.listDevicesForUser = _endpoint2.default.bind(this, modules, listChannelsForDeviceConfig);
    this.getVirtualSpaces = _endpoint2.default.bind(this, modules, getChannelsDataConfig);
    this.addVirtualSpace = _endpoint2.default.bind(this, modules, addChannelDataConfig);
    this.updateVirtualSpace = _endpoint2.default.bind(this, modules, updateChannelDataConfig);
    this.getVirtualSpace = _endpoint2.default.bind(this, modules, getChannelDataConfig);
    this.deleteVirtualSpace = _endpoint2.default.bind(this, modules, deleteChannelDataConfig);

    this.fire = function (args, callback) {
      args.replicate = false;
      args.storeInHistory = false;
      return _this.publish(args, callback);
    };

    this.history = _endpoint2.default.bind(this, modules, historyEndpointConfig);
    this.deleteMessages = _endpoint2.default.bind(this, modules, deleteMessagesEndpointConfig);
    this.fetchMessages = _endpoint2.default.bind(this, modules, fetchMessagesEndpointConfig);

    this.time = timeEndpoint;

    this.subscribe = subscriptionManager.adaptSubscribeChange.bind(subscriptionManager);
    this.presence = subscriptionManager.adaptPresenceChange.bind(subscriptionManager);
    this.unsubscribe = subscriptionManager.adaptUnsubscribeChange.bind(subscriptionManager);
    this.disconnect = subscriptionManager.disconnect.bind(subscriptionManager);
    this.reconnect = subscriptionManager.reconnect.bind(subscriptionManager);

    this.destroy = function (isOffline) {
      subscriptionManager.unsubscribeAll(isOffline);
      subscriptionManager.disconnect();
    };

    this.stop = this.destroy;

    this.unsubscribeAll = subscriptionManager.unsubscribeAll.bind(subscriptionManager);

    this.getSubscribedChannels = subscriptionManager.getSubscribedChannels.bind(subscriptionManager);
    this.getSubscribedChannelGroups = subscriptionManager.getSubscribedChannelGroups.bind(subscriptionManager);

    this.encrypt = crypto.encrypt.bind(crypto);
    this.decrypt = crypto.decrypt.bind(crypto);

    this.getAuthKey = modules.config.getAuthKey.bind(modules.config);
    this.setAuthKey = modules.config.setAuthKey.bind(modules.config);
    this.setCipherKey = modules.config.setCipherKey.bind(modules.config);
    this.getUUID = modules.config.getUUID.bind(modules.config);
    this.setUUID = modules.config.setUUID.bind(modules.config);
    this.getFilterExpression = modules.config.getFilterExpression.bind(modules.config);
    this.setFilterExpression = modules.config.setFilterExpression.bind(modules.config);

    this.setHeartbeatInterval = modules.config.setHeartbeatInterval.bind(modules.config);

    if (networking.hasModule('proxy')) {
      this.setProxy = function (proxy) {
        modules.config.setProxy(proxy);
        _this.reconnect();
      };
    }
  }

  _createClass(_class, [{
    key: 'getVersion',
    value: function getVersion() {
      return this._config.getVersion();
    }
  }, {
    key: 'networkDownDetected',
    value: function networkDownDetected() {
      this._listenerManager.announceNetworkDown();

      if (this._config.restore) {
        this.disconnect();
      } else {
        this.destroy(true);
      }
    }
  }, {
    key: 'networkUpDetected',
    value: function networkUpDetected() {
      this._listenerManager.announceNetworkUp();
      this.reconnect();
    }
  }], [{
    key: 'generateUUID',
    value: function generateUUID() {
      return _uuid2.default.createUUID();
    }
  }]);

  return _class;
}();

_class.OPERATIONS = _operations2.default;
_class.CATEGORIES = _categories2.default;
exports.default = _class;
module.exports = exports['default'];
//# sourceMappingURL=pubnub-common.js.map
