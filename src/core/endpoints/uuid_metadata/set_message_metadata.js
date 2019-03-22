/* @flow */

import { AddChannelParams, ModulesInject } from '../../flow_interfaces';
import operationConstants from '../../constants/operations';
import utils from '../../utils';

export function usePut(): boolean {
  return true;
}

export function getOperation(): string {
  return operationConstants.PNUuidMetadataCreate;
}

export function validateParams(modules: ModulesInject, incomingParams: CreateUuidMetadataParams) {
  let { channel, timetoken } = incomingParams;
  let { config } = modules;

  if (!channel) return 'Missing Channel';
  if (!timetoken) return 'Missing timetoken';

  if (!config.subscribeKey) return 'Missing Subscribe Key';
}

export function putURL(modules: ModulesInject, incomingParams: CreateUuidMetadataParams): string {
  let { channel, timetoken } = incomingParams;
  let { config } = modules;
  return `/v1/data/sub-key/${config.subscribeKey}/spaces/${channel}/message/${timetoken}/action`;
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

function prepareMessagePayload(modules, messagePayload) {
  const { crypto, config } = modules;
  let stringifiedPayload = JSON.stringify(messagePayload);

  if (config.cipherKey) {
    stringifiedPayload = crypto.encrypt(stringifiedPayload);
    stringifiedPayload = JSON.stringify(stringifiedPayload);
  }

  return stringifiedPayload;
}

export function postPayload(modules: ModulesInject, incomingParams: CreateUuidMetadataParams): string {
  const { message } = incomingParams;
  return prepareMessagePayload(modules, message);
}


export function handleResponse(): Object {
  return {};
}
