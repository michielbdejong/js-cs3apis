// package: cs3.auth.registry.v1beta1
// file: cs3/auth/registry/v1beta1/registry_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_auth_registry_v1beta1_resources_pb from '../../../../cs3/auth/registry/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class GetAuthProviderRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthProviderRequest): GetAuthProviderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthProviderRequest;
  static deserializeBinaryFromReader(message: GetAuthProviderRequest, reader: jspb.BinaryReader): GetAuthProviderRequest;
}

export namespace GetAuthProviderRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    type: string,
  }
}

export class GetAuthProviderResponse extends jspb.Message {
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
  getProvider(): cs3_auth_registry_v1beta1_resources_pb.ProviderInfo | undefined;
  setProvider(value?: cs3_auth_registry_v1beta1_resources_pb.ProviderInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthProviderResponse): GetAuthProviderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthProviderResponse;
  static deserializeBinaryFromReader(message: GetAuthProviderResponse, reader: jspb.BinaryReader): GetAuthProviderResponse;
}

export namespace GetAuthProviderResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    provider?: cs3_auth_registry_v1beta1_resources_pb.ProviderInfo.AsObject,
  }
}

export class ListAuthProvidersRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthProvidersRequest): ListAuthProvidersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuthProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthProvidersRequest;
  static deserializeBinaryFromReader(message: ListAuthProvidersRequest, reader: jspb.BinaryReader): ListAuthProvidersRequest;
}

export namespace ListAuthProvidersRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class ListAuthProvidersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearProvidersList(): void;
  getProvidersList(): Array<cs3_auth_registry_v1beta1_resources_pb.ProviderInfo>;
  setProvidersList(value: Array<cs3_auth_registry_v1beta1_resources_pb.ProviderInfo>): void;
  addProviders(value?: cs3_auth_registry_v1beta1_resources_pb.ProviderInfo, index?: number): cs3_auth_registry_v1beta1_resources_pb.ProviderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthProvidersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthProvidersResponse): ListAuthProvidersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuthProvidersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthProvidersResponse;
  static deserializeBinaryFromReader(message: ListAuthProvidersResponse, reader: jspb.BinaryReader): ListAuthProvidersResponse;
}

export namespace ListAuthProvidersResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    providersList: Array<cs3_auth_registry_v1beta1_resources_pb.ProviderInfo.AsObject>,
  }
}

