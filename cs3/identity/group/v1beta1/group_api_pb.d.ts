// package: cs3.identity.group.v1beta1
// file: cs3/identity/group/v1beta1/group_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_group_v1beta1_resources_pb from '../../../../cs3/identity/group/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class GetGroupRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasGroupId(): boolean;
  clearGroupId(): void;
  getGroupId(): cs3_identity_group_v1beta1_resources_pb.GroupId | undefined;
  setGroupId(value?: cs3_identity_group_v1beta1_resources_pb.GroupId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupRequest): GetGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupRequest;
  static deserializeBinaryFromReader(message: GetGroupRequest, reader: jspb.BinaryReader): GetGroupRequest;
}

export namespace GetGroupRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    groupId?: cs3_identity_group_v1beta1_resources_pb.GroupId.AsObject,
  }
}

export class GetGroupResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): cs3_identity_group_v1beta1_resources_pb.Group | undefined;
  setGroup(value?: cs3_identity_group_v1beta1_resources_pb.Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupResponse): GetGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupResponse;
  static deserializeBinaryFromReader(message: GetGroupResponse, reader: jspb.BinaryReader): GetGroupResponse;
}

export namespace GetGroupResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    group?: cs3_identity_group_v1beta1_resources_pb.Group.AsObject,
  }
}

export class GetGroupByClaimRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getClaim(): string;
  setClaim(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupByClaimRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupByClaimRequest): GetGroupByClaimRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupByClaimRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupByClaimRequest;
  static deserializeBinaryFromReader(message: GetGroupByClaimRequest, reader: jspb.BinaryReader): GetGroupByClaimRequest;
}

export namespace GetGroupByClaimRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    claim: string,
    value: string,
  }
}

export class GetGroupByClaimResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): cs3_identity_group_v1beta1_resources_pb.Group | undefined;
  setGroup(value?: cs3_identity_group_v1beta1_resources_pb.Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupByClaimResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupByClaimResponse): GetGroupByClaimResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupByClaimResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupByClaimResponse;
  static deserializeBinaryFromReader(message: GetGroupByClaimResponse, reader: jspb.BinaryReader): GetGroupByClaimResponse;
}

export namespace GetGroupByClaimResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    group?: cs3_identity_group_v1beta1_resources_pb.Group.AsObject,
  }
}

export class GetMembersRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasGroupId(): boolean;
  clearGroupId(): void;
  getGroupId(): cs3_identity_group_v1beta1_resources_pb.GroupId | undefined;
  setGroupId(value?: cs3_identity_group_v1beta1_resources_pb.GroupId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMembersRequest): GetMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMembersRequest;
  static deserializeBinaryFromReader(message: GetMembersRequest, reader: jspb.BinaryReader): GetMembersRequest;
}

export namespace GetMembersRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    groupId?: cs3_identity_group_v1beta1_resources_pb.GroupId.AsObject,
  }
}

export class GetMembersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearMembersList(): void;
  getMembersList(): Array<cs3_identity_user_v1beta1_resources_pb.UserId>;
  setMembersList(value: Array<cs3_identity_user_v1beta1_resources_pb.UserId>): void;
  addMembers(value?: cs3_identity_user_v1beta1_resources_pb.UserId, index?: number): cs3_identity_user_v1beta1_resources_pb.UserId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMembersResponse): GetMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMembersResponse;
  static deserializeBinaryFromReader(message: GetMembersResponse, reader: jspb.BinaryReader): GetMembersResponse;
}

export namespace GetMembersResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    membersList: Array<cs3_identity_user_v1beta1_resources_pb.UserId.AsObject>,
  }
}

export class HasMemberRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasGroupId(): boolean;
  clearGroupId(): void;
  getGroupId(): cs3_identity_group_v1beta1_resources_pb.GroupId | undefined;
  setGroupId(value?: cs3_identity_group_v1beta1_resources_pb.GroupId): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setUserId(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HasMemberRequest): HasMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HasMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HasMemberRequest;
  static deserializeBinaryFromReader(message: HasMemberRequest, reader: jspb.BinaryReader): HasMemberRequest;
}

export namespace HasMemberRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    groupId?: cs3_identity_group_v1beta1_resources_pb.GroupId.AsObject,
    userId?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
  }
}

export class HasMemberResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getOk(): boolean;
  setOk(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HasMemberResponse): HasMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HasMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HasMemberResponse;
  static deserializeBinaryFromReader(message: HasMemberResponse, reader: jspb.BinaryReader): HasMemberResponse;
}

export namespace HasMemberResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ok: boolean,
  }
}

export class FindGroupsRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindGroupsRequest): FindGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindGroupsRequest;
  static deserializeBinaryFromReader(message: FindGroupsRequest, reader: jspb.BinaryReader): FindGroupsRequest;
}

export namespace FindGroupsRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    filter: string,
  }
}

export class FindGroupsResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearGroupsList(): void;
  getGroupsList(): Array<cs3_identity_group_v1beta1_resources_pb.Group>;
  setGroupsList(value: Array<cs3_identity_group_v1beta1_resources_pb.Group>): void;
  addGroups(value?: cs3_identity_group_v1beta1_resources_pb.Group, index?: number): cs3_identity_group_v1beta1_resources_pb.Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindGroupsResponse): FindGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindGroupsResponse;
  static deserializeBinaryFromReader(message: FindGroupsResponse, reader: jspb.BinaryReader): FindGroupsResponse;
}

export namespace FindGroupsResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    groupsList: Array<cs3_identity_group_v1beta1_resources_pb.Group.AsObject>,
  }
}

