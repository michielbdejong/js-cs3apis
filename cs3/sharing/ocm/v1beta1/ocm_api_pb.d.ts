// package: cs3.sharing.ocm.v1beta1
// file: cs3/sharing/ocm/v1beta1/ocm_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_ocm_provider_v1beta1_resources_pb from '../../../../cs3/ocm/provider/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_ocm_v1beta1_resources_pb from '../../../../cs3/sharing/ocm/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

export class CreateOCMShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasResourceId(): boolean;
  clearResourceId(): void;
  getResourceId(): cs3_storage_provider_v1beta1_resources_pb.ResourceId | undefined;
  setResourceId(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceId): void;

  hasGrant(): boolean;
  clearGrant(): void;
  getGrant(): cs3_sharing_ocm_v1beta1_resources_pb.ShareGrant | undefined;
  setGrant(value?: cs3_sharing_ocm_v1beta1_resources_pb.ShareGrant): void;

  hasRecipientMeshProvider(): boolean;
  clearRecipientMeshProvider(): void;
  getRecipientMeshProvider(): cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo | undefined;
  setRecipientMeshProvider(value?: cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOCMShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOCMShareRequest): CreateOCMShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOCMShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOCMShareRequest;
  static deserializeBinaryFromReader(message: CreateOCMShareRequest, reader: jspb.BinaryReader): CreateOCMShareRequest;
}

export namespace CreateOCMShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
    grant?: cs3_sharing_ocm_v1beta1_resources_pb.ShareGrant.AsObject,
    recipientMeshProvider?: cs3_ocm_provider_v1beta1_resources_pb.ProviderInfo.AsObject,
  }
}

export class CreateOCMShareResponse extends jspb.Message {
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
  getShare(): cs3_sharing_ocm_v1beta1_resources_pb.Share | undefined;
  setShare(value?: cs3_sharing_ocm_v1beta1_resources_pb.Share): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOCMShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOCMShareResponse): CreateOCMShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOCMShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOCMShareResponse;
  static deserializeBinaryFromReader(message: CreateOCMShareResponse, reader: jspb.BinaryReader): CreateOCMShareResponse;
}

export namespace CreateOCMShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_ocm_v1beta1_resources_pb.Share.AsObject,
  }
}

export class UpdateOCMShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_ocm_v1beta1_resources_pb.ShareReference | undefined;
  setRef(value?: cs3_sharing_ocm_v1beta1_resources_pb.ShareReference): void;

  hasField(): boolean;
  clearField(): void;
  getField(): UpdateOCMShareRequest.UpdateField | undefined;
  setField(value?: UpdateOCMShareRequest.UpdateField): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOCMShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOCMShareRequest): UpdateOCMShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOCMShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOCMShareRequest;
  static deserializeBinaryFromReader(message: UpdateOCMShareRequest, reader: jspb.BinaryReader): UpdateOCMShareRequest;
}

export namespace UpdateOCMShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_ocm_v1beta1_resources_pb.ShareReference.AsObject,
    field?: UpdateOCMShareRequest.UpdateField.AsObject,
  }

  export class UpdateField extends jspb.Message {
    hasPermissions(): boolean;
    clearPermissions(): void;
    getPermissions(): cs3_sharing_ocm_v1beta1_resources_pb.SharePermissions | undefined;
    setPermissions(value?: cs3_sharing_ocm_v1beta1_resources_pb.SharePermissions): void;

    hasDisplayName(): boolean;
    clearDisplayName(): void;
    getDisplayName(): string;
    setDisplayName(value: string): void;

    getFieldCase(): UpdateField.FieldCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateField.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateField): UpdateField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateField;
    static deserializeBinaryFromReader(message: UpdateField, reader: jspb.BinaryReader): UpdateField;
  }

  export namespace UpdateField {
    export type AsObject = {
      permissions?: cs3_sharing_ocm_v1beta1_resources_pb.SharePermissions.AsObject,
      displayName: string,
    }

    export enum FieldCase {
      FIELD_NOT_SET = 0,
      PERMISSIONS = 2,
      DISPLAY_NAME = 3,
    }
  }
}

export class UpdateOCMShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOCMShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOCMShareResponse): UpdateOCMShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOCMShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOCMShareResponse;
  static deserializeBinaryFromReader(message: UpdateOCMShareResponse, reader: jspb.BinaryReader): UpdateOCMShareResponse;
}

export namespace UpdateOCMShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class ListOCMSharesRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearFiltersList(): void;
  getFiltersList(): Array<ListOCMSharesRequest.Filter>;
  setFiltersList(value: Array<ListOCMSharesRequest.Filter>): void;
  addFilters(value?: ListOCMSharesRequest.Filter, index?: number): ListOCMSharesRequest.Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOCMSharesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOCMSharesRequest): ListOCMSharesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOCMSharesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOCMSharesRequest;
  static deserializeBinaryFromReader(message: ListOCMSharesRequest, reader: jspb.BinaryReader): ListOCMSharesRequest;
}

export namespace ListOCMSharesRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    filtersList: Array<ListOCMSharesRequest.Filter.AsObject>,
  }

  export class Filter extends jspb.Message {
    getType(): ListOCMSharesRequest.Filter.Type;
    setType(value: ListOCMSharesRequest.Filter.Type): void;

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
      type: ListOCMSharesRequest.Filter.Type,
      resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
      owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
      creator?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    }

    export enum Type {
      TYPE_INVALID = 0,
      TYPE_NO = 1,
      TYPE_RESOURCE_ID = 2,
      TYPE_OWNER = 3,
      TYPE_CREATOR = 4,
      TYPE_OWNER_PROVIDER = 5,
      TYPE_CREATOR_PROVIDER = 6,
    }

    export enum TermCase {
      TERM_NOT_SET = 0,
      RESOURCE_ID = 3,
      OWNER = 4,
      CREATOR = 5,
    }
  }
}

export class ListOCMSharesResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearSharesList(): void;
  getSharesList(): Array<cs3_sharing_ocm_v1beta1_resources_pb.Share>;
  setSharesList(value: Array<cs3_sharing_ocm_v1beta1_resources_pb.Share>): void;
  addShares(value?: cs3_sharing_ocm_v1beta1_resources_pb.Share, index?: number): cs3_sharing_ocm_v1beta1_resources_pb.Share;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOCMSharesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOCMSharesResponse): ListOCMSharesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOCMSharesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOCMSharesResponse;
  static deserializeBinaryFromReader(message: ListOCMSharesResponse, reader: jspb.BinaryReader): ListOCMSharesResponse;
}

export namespace ListOCMSharesResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    sharesList: Array<cs3_sharing_ocm_v1beta1_resources_pb.Share.AsObject>,
  }
}

export class RemoveOCMShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_ocm_v1beta1_resources_pb.ShareReference | undefined;
  setRef(value?: cs3_sharing_ocm_v1beta1_resources_pb.ShareReference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOCMShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOCMShareRequest): RemoveOCMShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveOCMShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOCMShareRequest;
  static deserializeBinaryFromReader(message: RemoveOCMShareRequest, reader: jspb.BinaryReader): RemoveOCMShareRequest;
}

export namespace RemoveOCMShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_ocm_v1beta1_resources_pb.ShareReference.AsObject,
  }
}

export class RemoveOCMShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOCMShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOCMShareResponse): RemoveOCMShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveOCMShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOCMShareResponse;
  static deserializeBinaryFromReader(message: RemoveOCMShareResponse, reader: jspb.BinaryReader): RemoveOCMShareResponse;
}

export namespace RemoveOCMShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetOCMShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_ocm_v1beta1_resources_pb.ShareReference | undefined;
  setRef(value?: cs3_sharing_ocm_v1beta1_resources_pb.ShareReference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOCMShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOCMShareRequest): GetOCMShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOCMShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOCMShareRequest;
  static deserializeBinaryFromReader(message: GetOCMShareRequest, reader: jspb.BinaryReader): GetOCMShareRequest;
}

export namespace GetOCMShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_ocm_v1beta1_resources_pb.ShareReference.AsObject,
  }
}

export class GetOCMShareResponse extends jspb.Message {
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
  getShare(): cs3_sharing_ocm_v1beta1_resources_pb.Share | undefined;
  setShare(value?: cs3_sharing_ocm_v1beta1_resources_pb.Share): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOCMShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOCMShareResponse): GetOCMShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOCMShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOCMShareResponse;
  static deserializeBinaryFromReader(message: GetOCMShareResponse, reader: jspb.BinaryReader): GetOCMShareResponse;
}

export namespace GetOCMShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_ocm_v1beta1_resources_pb.Share.AsObject,
  }
}

export class ListReceivedOCMSharesRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReceivedOCMSharesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReceivedOCMSharesRequest): ListReceivedOCMSharesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListReceivedOCMSharesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReceivedOCMSharesRequest;
  static deserializeBinaryFromReader(message: ListReceivedOCMSharesRequest, reader: jspb.BinaryReader): ListReceivedOCMSharesRequest;
}

export namespace ListReceivedOCMSharesRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class ListReceivedOCMSharesResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearSharesList(): void;
  getSharesList(): Array<cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare>;
  setSharesList(value: Array<cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare>): void;
  addShares(value?: cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare, index?: number): cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReceivedOCMSharesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReceivedOCMSharesResponse): ListReceivedOCMSharesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListReceivedOCMSharesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReceivedOCMSharesResponse;
  static deserializeBinaryFromReader(message: ListReceivedOCMSharesResponse, reader: jspb.BinaryReader): ListReceivedOCMSharesResponse;
}

export namespace ListReceivedOCMSharesResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    sharesList: Array<cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare.AsObject>,
  }
}

export class UpdateReceivedOCMShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasShare(): boolean;
  clearShare(): void;
  getShare(): cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare | undefined;
  setShare(value?: cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReceivedOCMShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReceivedOCMShareRequest): UpdateReceivedOCMShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReceivedOCMShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReceivedOCMShareRequest;
  static deserializeBinaryFromReader(message: UpdateReceivedOCMShareRequest, reader: jspb.BinaryReader): UpdateReceivedOCMShareRequest;
}

export namespace UpdateReceivedOCMShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateReceivedOCMShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReceivedOCMShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReceivedOCMShareResponse): UpdateReceivedOCMShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReceivedOCMShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReceivedOCMShareResponse;
  static deserializeBinaryFromReader(message: UpdateReceivedOCMShareResponse, reader: jspb.BinaryReader): UpdateReceivedOCMShareResponse;
}

export namespace UpdateReceivedOCMShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetReceivedOCMShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_ocm_v1beta1_resources_pb.ShareReference | undefined;
  setRef(value?: cs3_sharing_ocm_v1beta1_resources_pb.ShareReference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReceivedOCMShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReceivedOCMShareRequest): GetReceivedOCMShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReceivedOCMShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReceivedOCMShareRequest;
  static deserializeBinaryFromReader(message: GetReceivedOCMShareRequest, reader: jspb.BinaryReader): GetReceivedOCMShareRequest;
}

export namespace GetReceivedOCMShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_ocm_v1beta1_resources_pb.ShareReference.AsObject,
  }
}

export class GetReceivedOCMShareResponse extends jspb.Message {
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
  getShare(): cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare | undefined;
  setShare(value?: cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReceivedOCMShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReceivedOCMShareResponse): GetReceivedOCMShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReceivedOCMShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReceivedOCMShareResponse;
  static deserializeBinaryFromReader(message: GetReceivedOCMShareResponse, reader: jspb.BinaryReader): GetReceivedOCMShareResponse;
}

export namespace GetReceivedOCMShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_ocm_v1beta1_resources_pb.ReceivedShare.AsObject,
  }
}

