// package: cs3.storage.registry.v1beta1
// file: cs3/storage/registry/v1beta1/registry_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_storage_registry_v1beta1_resources_pb from '../../../../cs3/storage/registry/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class GetHomeRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHomeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHomeRequest): GetHomeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHomeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHomeRequest;
  static deserializeBinaryFromReader(message: GetHomeRequest, reader: jspb.BinaryReader): GetHomeRequest;
}

export namespace GetHomeRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetHomeResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasProvider(): boolean;
  clearProvider(): void;
  getProvider(): cs3_storage_registry_v1beta1_resources_pb.ProviderInfo | undefined;
  setProvider(value?: cs3_storage_registry_v1beta1_resources_pb.ProviderInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHomeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHomeResponse): GetHomeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHomeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHomeResponse;
  static deserializeBinaryFromReader(message: GetHomeResponse, reader: jspb.BinaryReader): GetHomeResponse;
}

export namespace GetHomeResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    provider?: cs3_storage_registry_v1beta1_resources_pb.ProviderInfo.AsObject,
  }
}

export class GetStorageProvidersRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStorageProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStorageProvidersRequest): GetStorageProvidersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStorageProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStorageProvidersRequest;
  static deserializeBinaryFromReader(message: GetStorageProvidersRequest, reader: jspb.BinaryReader): GetStorageProvidersRequest;
}

export namespace GetStorageProvidersRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class GetStorageProvidersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearProvidersList(): void;
  getProvidersList(): Array<cs3_storage_registry_v1beta1_resources_pb.ProviderInfo>;
  setProvidersList(value: Array<cs3_storage_registry_v1beta1_resources_pb.ProviderInfo>): void;
  addProviders(value?: cs3_storage_registry_v1beta1_resources_pb.ProviderInfo, index?: number): cs3_storage_registry_v1beta1_resources_pb.ProviderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStorageProvidersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStorageProvidersResponse): GetStorageProvidersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStorageProvidersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStorageProvidersResponse;
  static deserializeBinaryFromReader(message: GetStorageProvidersResponse, reader: jspb.BinaryReader): GetStorageProvidersResponse;
}

export namespace GetStorageProvidersResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    providersList: Array<cs3_storage_registry_v1beta1_resources_pb.ProviderInfo.AsObject>,
  }
}

export class ListStorageProvidersRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStorageProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStorageProvidersRequest): ListStorageProvidersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStorageProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStorageProvidersRequest;
  static deserializeBinaryFromReader(message: ListStorageProvidersRequest, reader: jspb.BinaryReader): ListStorageProvidersRequest;
}

export namespace ListStorageProvidersRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class ListStorageProvidersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearProvidersList(): void;
  getProvidersList(): Array<cs3_storage_registry_v1beta1_resources_pb.ProviderInfo>;
  setProvidersList(value: Array<cs3_storage_registry_v1beta1_resources_pb.ProviderInfo>): void;
  addProviders(value?: cs3_storage_registry_v1beta1_resources_pb.ProviderInfo, index?: number): cs3_storage_registry_v1beta1_resources_pb.ProviderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStorageProvidersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStorageProvidersResponse): ListStorageProvidersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStorageProvidersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStorageProvidersResponse;
  static deserializeBinaryFromReader(message: ListStorageProvidersResponse, reader: jspb.BinaryReader): ListStorageProvidersResponse;
}

export namespace ListStorageProvidersResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    providersList: Array<cs3_storage_registry_v1beta1_resources_pb.ProviderInfo.AsObject>,
  }
}

