// package: cs3.identity.user.v1beta1
// file: cs3/identity/user/v1beta1/user_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class GetUserRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setUserId(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    userId?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
  }
}

export class GetUserResponse extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    user?: cs3_identity_user_v1beta1_resources_pb.User.AsObject,
  }
}

export class GetUserByClaimRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getClaim(): string;
  setClaim(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByClaimRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByClaimRequest): GetUserByClaimRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserByClaimRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByClaimRequest;
  static deserializeBinaryFromReader(message: GetUserByClaimRequest, reader: jspb.BinaryReader): GetUserByClaimRequest;
}

export namespace GetUserByClaimRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    claim: string,
    value: string,
  }
}

export class GetUserByClaimResponse extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetUserByClaimResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByClaimResponse): GetUserByClaimResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserByClaimResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByClaimResponse;
  static deserializeBinaryFromReader(message: GetUserByClaimResponse, reader: jspb.BinaryReader): GetUserByClaimResponse;
}

export namespace GetUserByClaimResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    user?: cs3_identity_user_v1beta1_resources_pb.User.AsObject,
  }
}

export class GetUserGroupsRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setUserId(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserGroupsRequest): GetUserGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserGroupsRequest;
  static deserializeBinaryFromReader(message: GetUserGroupsRequest, reader: jspb.BinaryReader): GetUserGroupsRequest;
}

export namespace GetUserGroupsRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    userId?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
  }
}

export class GetUserGroupsResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearGroupsList(): void;
  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): void;
  addGroups(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserGroupsResponse): GetUserGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserGroupsResponse;
  static deserializeBinaryFromReader(message: GetUserGroupsResponse, reader: jspb.BinaryReader): GetUserGroupsResponse;
}

export namespace GetUserGroupsResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    groupsList: Array<string>,
  }
}

export class FindUsersRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindUsersRequest): FindUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUsersRequest;
  static deserializeBinaryFromReader(message: FindUsersRequest, reader: jspb.BinaryReader): FindUsersRequest;
}

export namespace FindUsersRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    filter: string,
  }
}

export class FindUsersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearUsersList(): void;
  getUsersList(): Array<cs3_identity_user_v1beta1_resources_pb.User>;
  setUsersList(value: Array<cs3_identity_user_v1beta1_resources_pb.User>): void;
  addUsers(value?: cs3_identity_user_v1beta1_resources_pb.User, index?: number): cs3_identity_user_v1beta1_resources_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindUsersResponse): FindUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUsersResponse;
  static deserializeBinaryFromReader(message: FindUsersResponse, reader: jspb.BinaryReader): FindUsersResponse;
}

export namespace FindUsersResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    usersList: Array<cs3_identity_user_v1beta1_resources_pb.User.AsObject>,
  }
}

