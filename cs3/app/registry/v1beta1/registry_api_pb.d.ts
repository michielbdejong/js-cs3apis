// package: cs3.app.registry.v1beta1
// file: cs3/app/registry/v1beta1/registry_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_app_registry_v1beta1_resources_pb from '../../../../cs3/app/registry/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class GetAppProvidersRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasResourceInfo(): boolean;
  clearResourceInfo(): void;
  getResourceInfo(): cs3_storage_provider_v1beta1_resources_pb.ResourceInfo | undefined;
  setResourceInfo(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppProvidersRequest): GetAppProvidersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAppProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppProvidersRequest;
  static deserializeBinaryFromReader(message: GetAppProvidersRequest, reader: jspb.BinaryReader): GetAppProvidersRequest;
}

export namespace GetAppProvidersRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    resourceInfo?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.AsObject,
  }
}

export class GetAppProvidersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearProvidersList(): void;
  getProvidersList(): Array<cs3_app_registry_v1beta1_resources_pb.ProviderInfo>;
  setProvidersList(value: Array<cs3_app_registry_v1beta1_resources_pb.ProviderInfo>): void;
  addProviders(value?: cs3_app_registry_v1beta1_resources_pb.ProviderInfo, index?: number): cs3_app_registry_v1beta1_resources_pb.ProviderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppProvidersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppProvidersResponse): GetAppProvidersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAppProvidersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppProvidersResponse;
  static deserializeBinaryFromReader(message: GetAppProvidersResponse, reader: jspb.BinaryReader): GetAppProvidersResponse;
}

export namespace GetAppProvidersResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    providersList: Array<cs3_app_registry_v1beta1_resources_pb.ProviderInfo.AsObject>,
  }
}

export class AddAppProviderRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasProvider(): boolean;
  clearProvider(): void;
  getProvider(): cs3_app_registry_v1beta1_resources_pb.ProviderInfo | undefined;
  setProvider(value?: cs3_app_registry_v1beta1_resources_pb.ProviderInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAppProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddAppProviderRequest): AddAppProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddAppProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAppProviderRequest;
  static deserializeBinaryFromReader(message: AddAppProviderRequest, reader: jspb.BinaryReader): AddAppProviderRequest;
}

export namespace AddAppProviderRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    provider?: cs3_app_registry_v1beta1_resources_pb.ProviderInfo.AsObject,
  }
}

export class AddAppProviderResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAppProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddAppProviderResponse): AddAppProviderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddAppProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAppProviderResponse;
  static deserializeBinaryFromReader(message: AddAppProviderResponse, reader: jspb.BinaryReader): AddAppProviderResponse;
}

export namespace AddAppProviderResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class ListAppProvidersRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppProvidersRequest): ListAppProvidersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAppProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppProvidersRequest;
  static deserializeBinaryFromReader(message: ListAppProvidersRequest, reader: jspb.BinaryReader): ListAppProvidersRequest;
}

export namespace ListAppProvidersRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class ListAppProvidersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearProvidersList(): void;
  getProvidersList(): Array<cs3_app_registry_v1beta1_resources_pb.ProviderInfo>;
  setProvidersList(value: Array<cs3_app_registry_v1beta1_resources_pb.ProviderInfo>): void;
  addProviders(value?: cs3_app_registry_v1beta1_resources_pb.ProviderInfo, index?: number): cs3_app_registry_v1beta1_resources_pb.ProviderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppProvidersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppProvidersResponse): ListAppProvidersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAppProvidersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppProvidersResponse;
  static deserializeBinaryFromReader(message: ListAppProvidersResponse, reader: jspb.BinaryReader): ListAppProvidersResponse;
}

export namespace ListAppProvidersResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    providersList: Array<cs3_app_registry_v1beta1_resources_pb.ProviderInfo.AsObject>,
  }
}

export class ListSupportedMimeTypesRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSupportedMimeTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSupportedMimeTypesRequest): ListSupportedMimeTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSupportedMimeTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSupportedMimeTypesRequest;
  static deserializeBinaryFromReader(message: ListSupportedMimeTypesRequest, reader: jspb.BinaryReader): ListSupportedMimeTypesRequest;
}

export namespace ListSupportedMimeTypesRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class ListSupportedMimeTypesResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearMimeTypesList(): void;
  getMimeTypesList(): Array<cs3_app_registry_v1beta1_resources_pb.MimeTypeInfo>;
  setMimeTypesList(value: Array<cs3_app_registry_v1beta1_resources_pb.MimeTypeInfo>): void;
  addMimeTypes(value?: cs3_app_registry_v1beta1_resources_pb.MimeTypeInfo, index?: number): cs3_app_registry_v1beta1_resources_pb.MimeTypeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSupportedMimeTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSupportedMimeTypesResponse): ListSupportedMimeTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSupportedMimeTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSupportedMimeTypesResponse;
  static deserializeBinaryFromReader(message: ListSupportedMimeTypesResponse, reader: jspb.BinaryReader): ListSupportedMimeTypesResponse;
}

export namespace ListSupportedMimeTypesResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    mimeTypesList: Array<cs3_app_registry_v1beta1_resources_pb.MimeTypeInfo.AsObject>,
  }
}

export class GetDefaultAppProviderForMimeTypeRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultAppProviderForMimeTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultAppProviderForMimeTypeRequest): GetDefaultAppProviderForMimeTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultAppProviderForMimeTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultAppProviderForMimeTypeRequest;
  static deserializeBinaryFromReader(message: GetDefaultAppProviderForMimeTypeRequest, reader: jspb.BinaryReader): GetDefaultAppProviderForMimeTypeRequest;
}

export namespace GetDefaultAppProviderForMimeTypeRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    mimeType: string,
  }
}

export class GetDefaultAppProviderForMimeTypeResponse extends jspb.Message {
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
  getProvider(): cs3_app_registry_v1beta1_resources_pb.ProviderInfo | undefined;
  setProvider(value?: cs3_app_registry_v1beta1_resources_pb.ProviderInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultAppProviderForMimeTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultAppProviderForMimeTypeResponse): GetDefaultAppProviderForMimeTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultAppProviderForMimeTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultAppProviderForMimeTypeResponse;
  static deserializeBinaryFromReader(message: GetDefaultAppProviderForMimeTypeResponse, reader: jspb.BinaryReader): GetDefaultAppProviderForMimeTypeResponse;
}

export namespace GetDefaultAppProviderForMimeTypeResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    provider?: cs3_app_registry_v1beta1_resources_pb.ProviderInfo.AsObject,
  }
}

export class SetDefaultAppProviderForMimeTypeRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  hasProvider(): boolean;
  clearProvider(): void;
  getProvider(): cs3_app_registry_v1beta1_resources_pb.ProviderInfo | undefined;
  setProvider(value?: cs3_app_registry_v1beta1_resources_pb.ProviderInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultAppProviderForMimeTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultAppProviderForMimeTypeRequest): SetDefaultAppProviderForMimeTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultAppProviderForMimeTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultAppProviderForMimeTypeRequest;
  static deserializeBinaryFromReader(message: SetDefaultAppProviderForMimeTypeRequest, reader: jspb.BinaryReader): SetDefaultAppProviderForMimeTypeRequest;
}

export namespace SetDefaultAppProviderForMimeTypeRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    mimeType: string,
    provider?: cs3_app_registry_v1beta1_resources_pb.ProviderInfo.AsObject,
  }
}

export class SetDefaultAppProviderForMimeTypeResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultAppProviderForMimeTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultAppProviderForMimeTypeResponse): SetDefaultAppProviderForMimeTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultAppProviderForMimeTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultAppProviderForMimeTypeResponse;
  static deserializeBinaryFromReader(message: SetDefaultAppProviderForMimeTypeResponse, reader: jspb.BinaryReader): SetDefaultAppProviderForMimeTypeResponse;
}

export namespace SetDefaultAppProviderForMimeTypeResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

