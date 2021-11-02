// package: cs3.gateway.v1beta1
// file: cs3/gateway/v1beta1/gateway_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_app_provider_v1beta1_provider_api_pb from '../../../cs3/app/provider/v1beta1/provider_api_pb';
import * as cs3_app_registry_v1beta1_registry_api_pb from '../../../cs3/app/registry/v1beta1/registry_api_pb';
import * as cs3_auth_applications_v1beta1_applications_api_pb from '../../../cs3/auth/applications/v1beta1/applications_api_pb';
import * as cs3_auth_registry_v1beta1_registry_api_pb from '../../../cs3/auth/registry/v1beta1/registry_api_pb';
import * as cs3_gateway_v1beta1_resources_pb from '../../../cs3/gateway/v1beta1/resources_pb';
import * as cs3_identity_group_v1beta1_group_api_pb from '../../../cs3/identity/group/v1beta1/group_api_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_user_api_pb from '../../../cs3/identity/user/v1beta1/user_api_pb';
import * as cs3_ocm_core_v1beta1_ocm_core_api_pb from '../../../cs3/ocm/core/v1beta1/ocm_core_api_pb';
import * as cs3_ocm_invite_v1beta1_invite_api_pb from '../../../cs3/ocm/invite/v1beta1/invite_api_pb';
import * as cs3_ocm_provider_v1beta1_provider_api_pb from '../../../cs3/ocm/provider/v1beta1/provider_api_pb';
import * as cs3_preferences_v1beta1_preferences_api_pb from '../../../cs3/preferences/v1beta1/preferences_api_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_collaboration_v1beta1_collaboration_api_pb from '../../../cs3/sharing/collaboration/v1beta1/collaboration_api_pb';
import * as cs3_sharing_link_v1beta1_link_api_pb from '../../../cs3/sharing/link/v1beta1/link_api_pb';
import * as cs3_sharing_ocm_v1beta1_ocm_api_pb from '../../../cs3/sharing/ocm/v1beta1/ocm_api_pb';
import * as cs3_storage_provider_v1beta1_provider_api_pb from '../../../cs3/storage/provider/v1beta1/provider_api_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_tx_v1beta1_tx_api_pb from '../../../cs3/tx/v1beta1/tx_api_pb';
import * as cs3_types_v1beta1_types_pb from '../../../cs3/types/v1beta1/types_pb';

export class AuthenticateRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getType(): string;
  setType(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateRequest): AuthenticateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateRequest;
  static deserializeBinaryFromReader(message: AuthenticateRequest, reader: jspb.BinaryReader): AuthenticateRequest;
}

export namespace AuthenticateRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    type: string,
    clientId: string,
    clientSecret: string,
  }
}

export class AuthenticateResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getToken(): string;
  setToken(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): cs3_identity_user_v1beta1_resources_pb.User | undefined;
  setUser(value?: cs3_identity_user_v1beta1_resources_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateResponse): AuthenticateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateResponse;
  static deserializeBinaryFromReader(message: AuthenticateResponse, reader: jspb.BinaryReader): AuthenticateResponse;
}

export namespace AuthenticateResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    token: string,
    user?: cs3_identity_user_v1beta1_resources_pb.User.AsObject,
  }
}

export class WhoAmIRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhoAmIRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WhoAmIRequest): WhoAmIRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhoAmIRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhoAmIRequest;
  static deserializeBinaryFromReader(message: WhoAmIRequest, reader: jspb.BinaryReader): WhoAmIRequest;
}

export namespace WhoAmIRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    token: string,
  }
}

export class WhoAmIResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): cs3_identity_user_v1beta1_resources_pb.User | undefined;
  setUser(value?: cs3_identity_user_v1beta1_resources_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhoAmIResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WhoAmIResponse): WhoAmIResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhoAmIResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhoAmIResponse;
  static deserializeBinaryFromReader(message: WhoAmIResponse, reader: jspb.BinaryReader): WhoAmIResponse;
}

export namespace WhoAmIResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    user?: cs3_identity_user_v1beta1_resources_pb.User.AsObject,
  }
}

export class GetQuotaRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuotaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuotaRequest): GetQuotaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQuotaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuotaRequest;
  static deserializeBinaryFromReader(message: GetQuotaRequest, reader: jspb.BinaryReader): GetQuotaRequest;
}

export namespace GetQuotaRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class ListRecycleRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  hasFromTs(): boolean;
  clearFromTs(): void;
  getFromTs(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setFromTs(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasToTs(): boolean;
  clearToTs(): void;
  getToTs(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setToTs(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecycleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecycleRequest): ListRecycleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRecycleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecycleRequest;
  static deserializeBinaryFromReader(message: ListRecycleRequest, reader: jspb.BinaryReader): ListRecycleRequest;
}

export namespace ListRecycleRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    fromTs?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    toTs?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

export class ListRecycleStreamRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  hasFromTs(): boolean;
  clearFromTs(): void;
  getFromTs(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setFromTs(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasToTs(): boolean;
  clearToTs(): void;
  getToTs(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setToTs(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecycleStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecycleStreamRequest): ListRecycleStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRecycleStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecycleStreamRequest;
  static deserializeBinaryFromReader(message: ListRecycleStreamRequest, reader: jspb.BinaryReader): ListRecycleStreamRequest;
}

export namespace ListRecycleStreamRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    fromTs?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    toTs?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

export class PurgeRecycleRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurgeRecycleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurgeRecycleRequest): PurgeRecycleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurgeRecycleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurgeRecycleRequest;
  static deserializeBinaryFromReader(message: PurgeRecycleRequest, reader: jspb.BinaryReader): PurgeRecycleRequest;
}

export namespace PurgeRecycleRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class InitiateFileDownloadResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearProtocolsList(): void;
  getProtocolsList(): Array<cs3_gateway_v1beta1_resources_pb.FileDownloadProtocol>;
  setProtocolsList(value: Array<cs3_gateway_v1beta1_resources_pb.FileDownloadProtocol>): void;
  addProtocols(value?: cs3_gateway_v1beta1_resources_pb.FileDownloadProtocol, index?: number): cs3_gateway_v1beta1_resources_pb.FileDownloadProtocol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateFileDownloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateFileDownloadResponse): InitiateFileDownloadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateFileDownloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateFileDownloadResponse;
  static deserializeBinaryFromReader(message: InitiateFileDownloadResponse, reader: jspb.BinaryReader): InitiateFileDownloadResponse;
}

export namespace InitiateFileDownloadResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    protocolsList: Array<cs3_gateway_v1beta1_resources_pb.FileDownloadProtocol.AsObject>,
  }
}

export class InitiateFileUploadResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearProtocolsList(): void;
  getProtocolsList(): Array<cs3_gateway_v1beta1_resources_pb.FileUploadProtocol>;
  setProtocolsList(value: Array<cs3_gateway_v1beta1_resources_pb.FileUploadProtocol>): void;
  addProtocols(value?: cs3_gateway_v1beta1_resources_pb.FileUploadProtocol, index?: number): cs3_gateway_v1beta1_resources_pb.FileUploadProtocol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateFileUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateFileUploadResponse): InitiateFileUploadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateFileUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateFileUploadResponse;
  static deserializeBinaryFromReader(message: InitiateFileUploadResponse, reader: jspb.BinaryReader): InitiateFileUploadResponse;
}

export namespace InitiateFileUploadResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    protocolsList: Array<cs3_gateway_v1beta1_resources_pb.FileUploadProtocol.AsObject>,
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

  clearTypesList(): void;
  getTypesList(): Array<string>;
  setTypesList(value: Array<string>): void;
  addTypes(value: string, index?: number): string;

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
    typesList: Array<string>,
  }
}

export class OpenInAppRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  getViewMode(): OpenInAppRequest.ViewMode;
  setViewMode(value: OpenInAppRequest.ViewMode): void;

  getApp(): string;
  setApp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenInAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenInAppRequest): OpenInAppRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenInAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenInAppRequest;
  static deserializeBinaryFromReader(message: OpenInAppRequest, reader: jspb.BinaryReader): OpenInAppRequest;
}

export namespace OpenInAppRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    viewMode: OpenInAppRequest.ViewMode,
    app: string,
  }

  export enum ViewMode {
    VIEW_MODE_INVALID = 0,
    VIEW_MODE_VIEW_ONLY = 1,
    VIEW_MODE_READ_ONLY = 2,
    VIEW_MODE_READ_WRITE = 3,
  }
}

