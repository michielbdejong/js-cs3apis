// package: cs3.auth.applications.v1beta1
// file: cs3/auth/applications/v1beta1/applications_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_auth_applications_v1beta1_resources_pb from '../../../../cs3/auth/applications/v1beta1/resources_pb';
import * as cs3_auth_provider_v1beta1_resources_pb from '../../../../cs3/auth/provider/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class GenerateAppPasswordRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getTokenScopeMap(): jspb.Map<string, cs3_auth_provider_v1beta1_resources_pb.Scope>;
  clearTokenScopeMap(): void;
  getLabel(): string;
  setLabel(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setExpiration(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateAppPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateAppPasswordRequest): GenerateAppPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateAppPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateAppPasswordRequest;
  static deserializeBinaryFromReader(message: GenerateAppPasswordRequest, reader: jspb.BinaryReader): GenerateAppPasswordRequest;
}

export namespace GenerateAppPasswordRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    tokenScopeMap: Array<[string, cs3_auth_provider_v1beta1_resources_pb.Scope.AsObject]>,
    label: string,
    expiration?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

export class GenerateAppPasswordResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasAppPassword(): boolean;
  clearAppPassword(): void;
  getAppPassword(): cs3_auth_applications_v1beta1_resources_pb.AppPassword | undefined;
  setAppPassword(value?: cs3_auth_applications_v1beta1_resources_pb.AppPassword): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateAppPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateAppPasswordResponse): GenerateAppPasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateAppPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateAppPasswordResponse;
  static deserializeBinaryFromReader(message: GenerateAppPasswordResponse, reader: jspb.BinaryReader): GenerateAppPasswordResponse;
}

export namespace GenerateAppPasswordResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    appPassword?: cs3_auth_applications_v1beta1_resources_pb.AppPassword.AsObject,
  }
}

export class ListAppPasswordsRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppPasswordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppPasswordsRequest): ListAppPasswordsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAppPasswordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppPasswordsRequest;
  static deserializeBinaryFromReader(message: ListAppPasswordsRequest, reader: jspb.BinaryReader): ListAppPasswordsRequest;
}

export namespace ListAppPasswordsRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class ListAppPasswordsResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearAppPasswordsList(): void;
  getAppPasswordsList(): Array<cs3_auth_applications_v1beta1_resources_pb.AppPassword>;
  setAppPasswordsList(value: Array<cs3_auth_applications_v1beta1_resources_pb.AppPassword>): void;
  addAppPasswords(value?: cs3_auth_applications_v1beta1_resources_pb.AppPassword, index?: number): cs3_auth_applications_v1beta1_resources_pb.AppPassword;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppPasswordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppPasswordsResponse): ListAppPasswordsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAppPasswordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppPasswordsResponse;
  static deserializeBinaryFromReader(message: ListAppPasswordsResponse, reader: jspb.BinaryReader): ListAppPasswordsResponse;
}

export namespace ListAppPasswordsResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    appPasswordsList: Array<cs3_auth_applications_v1beta1_resources_pb.AppPassword.AsObject>,
  }
}

export class InvalidateAppPasswordRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvalidateAppPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvalidateAppPasswordRequest): InvalidateAppPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvalidateAppPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvalidateAppPasswordRequest;
  static deserializeBinaryFromReader(message: InvalidateAppPasswordRequest, reader: jspb.BinaryReader): InvalidateAppPasswordRequest;
}

export namespace InvalidateAppPasswordRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    password: string,
  }
}

export class InvalidateAppPasswordResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvalidateAppPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InvalidateAppPasswordResponse): InvalidateAppPasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvalidateAppPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvalidateAppPasswordResponse;
  static deserializeBinaryFromReader(message: InvalidateAppPasswordResponse, reader: jspb.BinaryReader): InvalidateAppPasswordResponse;
}

export namespace InvalidateAppPasswordResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetAppPasswordRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setUser(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppPasswordRequest): GetAppPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAppPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppPasswordRequest;
  static deserializeBinaryFromReader(message: GetAppPasswordRequest, reader: jspb.BinaryReader): GetAppPasswordRequest;
}

export namespace GetAppPasswordRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    user?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    password: string,
  }
}

export class GetAppPasswordResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasAppPassword(): boolean;
  clearAppPassword(): void;
  getAppPassword(): cs3_auth_applications_v1beta1_resources_pb.AppPassword | undefined;
  setAppPassword(value?: cs3_auth_applications_v1beta1_resources_pb.AppPassword): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppPasswordResponse): GetAppPasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAppPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppPasswordResponse;
  static deserializeBinaryFromReader(message: GetAppPasswordResponse, reader: jspb.BinaryReader): GetAppPasswordResponse;
}

export namespace GetAppPasswordResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    appPassword?: cs3_auth_applications_v1beta1_resources_pb.AppPassword.AsObject,
  }
}

