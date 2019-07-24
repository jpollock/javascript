/* @flow */

import { AddChannelParams, ModulesInject } from '../../flow_interfaces';
import operationConstants from '../../constants/operations';
import utils from '../../utils';

export function useDelete() {
  return true;
}


export function getOperation(): string {
  return operationConstants.PNUuidMetadataCreate;
}

export function validateParams(modules: ModulesInject, incomingParams: CreateUuidMetadataParams) {
  let { channels, channelGroup } = incomingParams;
  let { config } = modules;

  if (!channelGroup) return 'Missing Channel Group';
  if (!channels || channels.length === 0) return 'Missing Channels';
  if (!config.subscribeKey) return 'Missing Subscribe Key';
}

export function deleteURL(modules: ModulesInject, incomingParams: CreateUuidMetadataParams): string {
  let { uuid } = incomingParams;
  let { config } = modules;

  return `/v1/objects/${config.subscribeKey}/uuid/{$uuid}`;
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
export function handleResponse(): Object {
  return {};
}
