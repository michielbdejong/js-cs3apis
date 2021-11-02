// package: cs3.ocm.provider.v1beta1
// file: cs3/ocm/provider/v1beta1/provider_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_ocm_provider_v1beta1_resources_pb from '../../../../cs3/ocm/provider/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class IsProviderAllowedRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasProvider(): boolean;
  clearProvider(): void;
  getProvider(): cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo | undefined;
  setProvider(value?: cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsProviderAllowedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsProviderAllowedRequest): IsProviderAllowedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsProviderAllowedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsProviderAllowedRequest;
  static deserializeBinaryFromReader(message: IsProviderAllowedRequest, reader: jspb.BinaryReader): IsProviderAllowedRequest;
}

export namespace IsProviderAllowedRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    provider?: cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo.AsObject,
  }
}

export class IsProviderAllowedResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsProviderAllowedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsProviderAllowedResponse): IsProviderAllowedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsProviderAllowedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsProviderAllowedResponse;
  static deserializeBinaryFromReader(message: IsProviderAllowedResponse, reader: jspb.BinaryReader): IsProviderAllowedResponse;
}

export namespace IsProviderAllowedResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetInfoByDomainRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getDomain(): string;
  setDomain(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoByDomainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoByDomainRequest): GetInfoByDomainRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfoByDomainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoByDomainRequest;
  static deserializeBinaryFromReader(message: GetInfoByDomainRequest, reader: jspb.BinaryReader): GetInfoByDomainRequest;
}

export namespace GetInfoByDomainRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    domain: string,
  }
}

export class GetInfoByDomainResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasProviderInfo(): boolean;
  clearProviderInfo(): void;
  getProviderInfo(): cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo | undefined;
  setProviderInfo(value?: cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoByDomainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoByDomainResponse): GetInfoByDomainResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfoByDomainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoByDomainResponse;
  static deserializeBinaryFromReader(message: GetInfoByDomainResponse, reader: jspb.BinaryReader): GetInfoByDomainResponse;
}

export namespace GetInfoByDomainResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    providerInfo?: cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo.AsObject,
  }
}

export class ListAllProvidersRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllProvidersRequest): ListAllProvidersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllProvidersRequest;
  static deserializeBinaryFromReader(message: ListAllProvidersRequest, reader: jspb.BinaryReader): ListAllProvidersRequest;
}

export namespace ListAllProvidersRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class ListAllProvidersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearProvidersList(): void;
  getProvidersList(): Array<cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo>;
  setProvidersList(value: Array<cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo>): void;
  addProviders(value?: cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo, index?: number): cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllProvidersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllProvidersResponse): ListAllProvidersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllProvidersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllProvidersResponse;
  static deserializeBinaryFromReader(message: ListAllProvidersResponse, reader: jspb.BinaryReader): ListAllProvidersResponse;
}

export namespace ListAllProvidersResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    providersList: Array<cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo.AsObject>,
  }
}

