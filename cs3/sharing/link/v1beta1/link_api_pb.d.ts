// package: cs3.sharing.link.v1beta1
// file: cs3/sharing/link/v1beta1/link_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_link_v1beta1_resources_pb from '../../../../cs3/sharing/link/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class CreatePublicShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasResourceInfo(): boolean;
  clearResourceInfo(): void;
  getResourceInfo(): cs3_storage_provider_v1beta1_resources_pb.ResourceInfo | undefined;
  setResourceInfo(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo): void;

  hasGrant(): boolean;
  clearGrant(): void;
  getGrant(): cs3_sharing_link_v1beta1_resources_pb.Grant | undefined;
  setGrant(value?: cs3_sharing_link_v1beta1_resources_pb.Grant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePublicShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePublicShareRequest): CreatePublicShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePublicShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePublicShareRequest;
  static deserializeBinaryFromReader(message: CreatePublicShareRequest, reader: jspb.BinaryReader): CreatePublicShareRequest;
}

export namespace CreatePublicShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    resourceInfo?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.AsObject,
    grant?: cs3_sharing_link_v1beta1_resources_pb.Grant.AsObject,
  }
}

export class CreatePublicShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasShare(): boolean;
  clearShare(): void;
  getShare(): cs3_sharing_link_v1beta1_resources_pb.PublicShare | undefined;
  setShare(value?: cs3_sharing_link_v1beta1_resources_pb.PublicShare): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePublicShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePublicShareResponse): CreatePublicShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePublicShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePublicShareResponse;
  static deserializeBinaryFromReader(message: CreatePublicShareResponse, reader: jspb.BinaryReader): CreatePublicShareResponse;
}

export namespace CreatePublicShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_link_v1beta1_resources_pb.PublicShare.AsObject,
  }
}

export class UpdatePublicShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_link_v1beta1_resources_pb.PublicShareReference | undefined;
  setRef(value?: cs3_sharing_link_v1beta1_resources_pb.PublicShareReference): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): UpdatePublicShareRequest.Update | undefined;
  setUpdate(value?: UpdatePublicShareRequest.Update): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePublicShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePublicShareRequest): UpdatePublicShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePublicShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePublicShareRequest;
  static deserializeBinaryFromReader(message: UpdatePublicShareRequest, reader: jspb.BinaryReader): UpdatePublicShareRequest;
}

export namespace UpdatePublicShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_link_v1beta1_resources_pb.PublicShareReference.AsObject,
    update?: UpdatePublicShareRequest.Update.AsObject,
  }

  export class Update extends jspb.Message {
    getType(): UpdatePublicShareRequest.Update.Type;
    setType(value: UpdatePublicShareRequest.Update.Type): void;

    hasGrant(): boolean;
    clearGrant(): void;
    getGrant(): cs3_sharing_link_v1beta1_resources_pb.Grant | undefined;
    setGrant(value?: cs3_sharing_link_v1beta1_resources_pb.Grant): void;

    getDisplayName(): string;
    setDisplayName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Update.AsObject;
    static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Update;
    static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
  }

  export namespace Update {
    export type AsObject = {
      type: UpdatePublicShareRequest.Update.Type,
      grant?: cs3_sharing_link_v1beta1_resources_pb.Grant.AsObject,
      displayName: string,
    }

    export enum Type {
      TYPE_INVALID = 0,
      TYPE_PERMISSIONS = 1,
      TYPE_PASSWORD = 2,
      TYPE_EXPIRATION = 3,
      TYPE_DISPLAYNAME = 4,
    }
  }
}

export class UpdatePublicShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasShare(): boolean;
  clearShare(): void;
  getShare(): cs3_sharing_link_v1beta1_resources_pb.PublicShare | undefined;
  setShare(value?: cs3_sharing_link_v1beta1_resources_pb.PublicShare): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePublicShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePublicShareResponse): UpdatePublicShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePublicShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePublicShareResponse;
  static deserializeBinaryFromReader(message: UpdatePublicShareResponse, reader: jspb.BinaryReader): UpdatePublicShareResponse;
}

export namespace UpdatePublicShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_link_v1beta1_resources_pb.PublicShare.AsObject,
  }
}

export class ListPublicSharesRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearFiltersList(): void;
  getFiltersList(): Array<ListPublicSharesRequest.Filter>;
  setFiltersList(value: Array<ListPublicSharesRequest.Filter>): void;
  addFilters(value?: ListPublicSharesRequest.Filter, index?: number): ListPublicSharesRequest.Filter;

  getSign(): boolean;
  setSign(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublicSharesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublicSharesRequest): ListPublicSharesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPublicSharesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublicSharesRequest;
  static deserializeBinaryFromReader(message: ListPublicSharesRequest, reader: jspb.BinaryReader): ListPublicSharesRequest;
}

export namespace ListPublicSharesRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    filtersList: Array<ListPublicSharesRequest.Filter.AsObject>,
    sign: boolean,
  }

  export class Filter extends jspb.Message {
    getType(): ListPublicSharesRequest.Filter.Type;
    setType(value: ListPublicSharesRequest.Filter.Type): void;

    hasResourceId(): boolean;
    clearResourceId(): void;
    getResourceId(): cs3_storage_provider_v1beta1_resources_pb.ResourceId | undefined;
    setResourceId(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceId): void;

    hasOwner(): boolean;
    clearOwner(): void;
    getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
    setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

    hasCreator(): boolean;
    clearCreator(): void;
    getCreator(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
    setCreator(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

    getTermCase(): Filter.TermCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      type: ListPublicSharesRequest.Filter.Type,
      resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
      owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
      creator?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    }

    export enum Type {
      TYPE_INVALID = 0,
      TYPE_RESOURCE_ID = 1,
      TYPE_OWNER = 2,
      TYPE_CREATOR = 3,
    }

    export enum TermCase {
      TERM_NOT_SET = 0,
      RESOURCE_ID = 3,
      OWNER = 4,
      CREATOR = 5,
    }
  }
}

export class ListPublicSharesResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearShareList(): void;
  getShareList(): Array<cs3_sharing_link_v1beta1_resources_pb.PublicShare>;
  setShareList(value: Array<cs3_sharing_link_v1beta1_resources_pb.PublicShare>): void;
  addShare(value?: cs3_sharing_link_v1beta1_resources_pb.PublicShare, index?: number): cs3_sharing_link_v1beta1_resources_pb.PublicShare;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublicSharesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublicSharesResponse): ListPublicSharesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPublicSharesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublicSharesResponse;
  static deserializeBinaryFromReader(message: ListPublicSharesResponse, reader: jspb.BinaryReader): ListPublicSharesResponse;
}

export namespace ListPublicSharesResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    shareList: Array<cs3_sharing_link_v1beta1_resources_pb.PublicShare.AsObject>,
  }
}

export class RemovePublicShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_link_v1beta1_resources_pb.PublicShareReference | undefined;
  setRef(value?: cs3_sharing_link_v1beta1_resources_pb.PublicShareReference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePublicShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePublicShareRequest): RemovePublicShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePublicShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePublicShareRequest;
  static deserializeBinaryFromReader(message: RemovePublicShareRequest, reader: jspb.BinaryReader): RemovePublicShareRequest;
}

export namespace RemovePublicShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_link_v1beta1_resources_pb.PublicShareReference.AsObject,
  }
}

export class RemovePublicShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePublicShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePublicShareResponse): RemovePublicShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePublicShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePublicShareResponse;
  static deserializeBinaryFromReader(message: RemovePublicShareResponse, reader: jspb.BinaryReader): RemovePublicShareResponse;
}

export namespace RemovePublicShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetPublicShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_link_v1beta1_resources_pb.PublicShareReference | undefined;
  setRef(value?: cs3_sharing_link_v1beta1_resources_pb.PublicShareReference): void;

  getSign(): boolean;
  setSign(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicShareRequest): GetPublicShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublicShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicShareRequest;
  static deserializeBinaryFromReader(message: GetPublicShareRequest, reader: jspb.BinaryReader): GetPublicShareRequest;
}

export namespace GetPublicShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_link_v1beta1_resources_pb.PublicShareReference.AsObject,
    sign: boolean,
  }
}

export class GetPublicShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasShare(): boolean;
  clearShare(): void;
  getShare(): cs3_sharing_link_v1beta1_resources_pb.PublicShare | undefined;
  setShare(value?: cs3_sharing_link_v1beta1_resources_pb.PublicShare): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicShareResponse): GetPublicShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublicShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicShareResponse;
  static deserializeBinaryFromReader(message: GetPublicShareResponse, reader: jspb.BinaryReader): GetPublicShareResponse;
}

export namespace GetPublicShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_link_v1beta1_resources_pb.PublicShare.AsObject,
  }
}

export class GetPublicShareByTokenRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getToken(): string;
  setToken(value: string): void;

  hasAuthentication(): boolean;
  clearAuthentication(): void;
  getAuthentication(): cs3_sharing_link_v1beta1_resources_pb.PublicShareAuthentication | undefined;
  setAuthentication(value?: cs3_sharing_link_v1beta1_resources_pb.PublicShareAuthentication): void;

  getSign(): boolean;
  setSign(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicShareByTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicShareByTokenRequest): GetPublicShareByTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublicShareByTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicShareByTokenRequest;
  static deserializeBinaryFromReader(message: GetPublicShareByTokenRequest, reader: jspb.BinaryReader): GetPublicShareByTokenRequest;
}

export namespace GetPublicShareByTokenRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    token: string,
    authentication?: cs3_sharing_link_v1beta1_resources_pb.PublicShareAuthentication.AsObject,
    sign: boolean,
  }
}

export class GetPublicShareByTokenResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasShare(): boolean;
  clearShare(): void;
  getShare(): cs3_sharing_link_v1beta1_resources_pb.PublicShare | undefined;
  setShare(value?: cs3_sharing_link_v1beta1_resources_pb.PublicShare): void;

  getPasswordHash(): string;
  setPasswordHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicShareByTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicShareByTokenResponse): GetPublicShareByTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublicShareByTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicShareByTokenResponse;
  static deserializeBinaryFromReader(message: GetPublicShareByTokenResponse, reader: jspb.BinaryReader): GetPublicShareByTokenResponse;
}

export namespace GetPublicShareByTokenResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_link_v1beta1_resources_pb.PublicShare.AsObject,
    passwordHash: string,
  }
}

