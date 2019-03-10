/* @flow */

import { AddChannelParams, ModulesInject } from '../../flow_interfaces';
import operationConstants from '../../constants/operations';
import utils from '../../utils';


export function getOperation(): string {
  return operationConstants.PNUuidMetadataCreate;
}

export function validateParams(modules: ModulesInject, incomingParams: CreateUuidMetadataParams) {
  let { channels, channelTimeTokens } = incomingParams;
  let { config } = modules;

  if (!channelTimeTokens) return 'Missing ChannelTimeTokens';
  if (!channels || channels.length === 0) return 'Missing Channels';
  if (!config.subscribeKey) return 'Missing Subscribe Key';
}

export function getURL(modules: ModulesInject, incomingParams: CreateUuidMetadataParams): string {
  let { channels, channelTimeTokens } = incomingParams;
  let { config } = modules;
  return `/v3/history/sub-key/${config.subscribeKey}/message-counts/${channels}?channelsTimetoken=${channelTimeTokens}`
}

export function getRequestTimeout({ config }: ModulesInject): number {
  return config.getTransactionTimeout();
}

export function isAuthSupported(): boolean {
  return true;
}

export function prepareParams(modules: ModulesInject, incomingParams: CreateUuidMetadataParams): Object {
  let { name, description} = incomingParams;
  const params = {};

  //params.state = JSON.stringify(state);

  return params;
}
export function handleResponse(modules: ModulesInject, serverResponse: Object): Object {
  return serverResponse;
}
