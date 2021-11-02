// package: cs3.ocm.invite.v1beta1
// file: cs3/ocm/invite/v1beta1/invite_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_ocm_invite_v1beta1_resources_pb from '../../../../cs3/ocm/invite/v1beta1/resources_pb';
import * as cs3_ocm_provider_v1beta1_resources_pb from '../../../../cs3/ocm/provider/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class GenerateInviteTokenRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateInviteTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateInviteTokenRequest): GenerateInviteTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateInviteTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateInviteTokenRequest;
  static deserializeBinaryFromReader(message: GenerateInviteTokenRequest, reader: jspb.BinaryReader): GenerateInviteTokenRequest;
}

export namespace GenerateInviteTokenRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GenerateInviteTokenResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasInviteToken(): boolean;
  clearInviteToken(): void;
  getInviteToken(): cs3_ocm_invite_v1beta1_resources_pb.InviteToken | undefined;
  setInviteToken(value?: cs3_ocm_invite_v1beta1_resources_pb.InviteToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateInviteTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateInviteTokenResponse): GenerateInviteTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateInviteTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateInviteTokenResponse;
  static deserializeBinaryFromReader(message: GenerateInviteTokenResponse, reader: jspb.BinaryReader): GenerateInviteTokenResponse;
}

export namespace GenerateInviteTokenResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    inviteToken?: cs3_ocm_invite_v1beta1_resources_pb.InviteToken.AsObject,
  }
}

export class ForwardInviteRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasInviteToken(): boolean;
  clearInviteToken(): void;
  getInviteToken(): cs3_ocm_invite_v1beta1_resources_pb.InviteToken | undefined;
  setInviteToken(value?: cs3_ocm_invite_v1beta1_resources_pb.InviteToken): void;

  hasOriginSystemProvider(): boolean;
  clearOriginSystemProvider(): void;
  getOriginSystemProvider(): cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo | undefined;
  setOriginSystemProvider(value?: cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForwardInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForwardInviteRequest): ForwardInviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForwardInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForwardInviteRequest;
  static deserializeBinaryFromReader(message: ForwardInviteRequest, reader: jspb.BinaryReader): ForwardInviteRequest;
}

export namespace ForwardInviteRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    inviteToken?: cs3_ocm_invite_v1beta1_resources_pb.InviteToken.AsObject,
    originSystemProvider?: cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo.AsObject,
  }
}

export class ForwardInviteResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForwardInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForwardInviteResponse): ForwardInviteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForwardInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForwardInviteResponse;
  static deserializeBinaryFromReader(message: ForwardInviteResponse, reader: jspb.BinaryReader): ForwardInviteResponse;
}

export namespace ForwardInviteResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class AcceptInviteRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasInviteToken(): boolean;
  clearInviteToken(): void;
  getInviteToken(): cs3_ocm_invite_v1beta1_resources_pb.InviteToken | undefined;
  setInviteToken(value?: cs3_ocm_invite_v1beta1_resources_pb.InviteToken): void;

  hasRemoteUser(): boolean;
  clearRemoteUser(): void;
  getRemoteUser(): cs3_identity_user_v1beta1_resources_pb.User | undefined;
  setRemoteUser(value?: cs3_identity_user_v1beta1_resources_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptInviteRequest): AcceptInviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceptInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptInviteRequest;
  static deserializeBinaryFromReader(message: AcceptInviteRequest, reader: jspb.BinaryReader): AcceptInviteRequest;
}

export namespace AcceptInviteRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    inviteToken?: cs3_ocm_invite_v1beta1_resources_pb.InviteToken.AsObject,
    remoteUser?: cs3_identity_user_v1beta1_resources_pb.User.AsObject,
  }
}

export class AcceptInviteResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptInviteResponse): AcceptInviteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceptInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptInviteResponse;
  static deserializeBinaryFromReader(message: AcceptInviteResponse, reader: jspb.BinaryReader): AcceptInviteResponse;
}

export namespace AcceptInviteResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetAcceptedUserRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRemoteUserId(): boolean;
  clearRemoteUserId(): void;
  getRemoteUserId(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setRemoteUserId(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAcceptedUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAcceptedUserRequest): GetAcceptedUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAcceptedUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAcceptedUserRequest;
  static deserializeBinaryFromReader(message: GetAcceptedUserRequest, reader: jspb.BinaryReader): GetAcceptedUserRequest;
}

export namespace GetAcceptedUserRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    remoteUserId?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
  }
}

export class GetAcceptedUserResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRemoteUser(): boolean;
  clearRemoteUser(): void;
  getRemoteUser(): cs3_identity_user_v1beta1_resources_pb.User | undefined;
  setRemoteUser(value?: cs3_identity_user_v1beta1_resources_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAcceptedUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAcceptedUserResponse): GetAcceptedUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAcceptedUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAcceptedUserResponse;
  static deserializeBinaryFromReader(message: GetAcceptedUserResponse, reader: jspb.BinaryReader): GetAcceptedUserResponse;
}

export namespace GetAcceptedUserResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    remoteUser?: cs3_identity_user_v1beta1_resources_pb.User.AsObject,
  }
}

export class FindAcceptedUsersRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAcceptedUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindAcceptedUsersRequest): FindAcceptedUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAcceptedUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAcceptedUsersRequest;
  static deserializeBinaryFromReader(message: FindAcceptedUsersRequest, reader: jspb.BinaryReader): FindAcceptedUsersRequest;
}

export namespace FindAcceptedUsersRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    filter: string,
  }
}

export class FindAcceptedUsersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearAcceptedUsersList(): void;
  getAcceptedUsersList(): Array<cs3_identity_user_v1beta1_resources_pb.User>;
  setAcceptedUsersList(value: Array<cs3_identity_user_v1beta1_resources_pb.User>): void;
  addAcceptedUsers(value?: cs3_identity_user_v1beta1_resources_pb.User, index?: number): cs3_identity_user_v1beta1_resources_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAcceptedUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindAcceptedUsersResponse): FindAcceptedUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAcceptedUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAcceptedUsersResponse;
  static deserializeBinaryFromReader(message: FindAcceptedUsersResponse, reader: jspb.BinaryReader): FindAcceptedUsersResponse;
}

export namespace FindAcceptedUsersResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    acceptedUsersList: Array<cs3_identity_user_v1beta1_resources_pb.User.AsObject>,
  }
}

