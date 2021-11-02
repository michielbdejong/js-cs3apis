// package: cs3.sharing.collaboration.v1beta1
// file: cs3/sharing/collaboration/v1beta1/collaboration_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_collaboration_v1beta1_resources_pb from '../../../../cs3/sharing/collaboration/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

export class CreateShareRequest extends jspb.Message {
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
  getGrant(): cs3_sharing_collaboration_v1beta1_resources_pb.ShareGrant | undefined;
  setGrant(value?: cs3_sharing_collaboration_v1beta1_resources_pb.ShareGrant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShareRequest): CreateShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShareRequest;
  static deserializeBinaryFromReader(message: CreateShareRequest, reader: jspb.BinaryReader): CreateShareRequest;
}

export namespace CreateShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    resourceInfo?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.AsObject,
    grant?: cs3_sharing_collaboration_v1beta1_resources_pb.ShareGrant.AsObject,
  }
}

export class CreateShareResponse extends jspb.Message {
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
  getShare(): cs3_sharing_collaboration_v1beta1_resources_pb.Share | undefined;
  setShare(value?: cs3_sharing_collaboration_v1beta1_resources_pb.Share): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShareResponse): CreateShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShareResponse;
  static deserializeBinaryFromReader(message: CreateShareResponse, reader: jspb.BinaryReader): CreateShareResponse;
}

export namespace CreateShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_collaboration_v1beta1_resources_pb.Share.AsObject,
  }
}

export class UpdateShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference | undefined;
  setRef(value?: cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference): void;

  hasField(): boolean;
  clearField(): void;
  getField(): UpdateShareRequest.UpdateField | undefined;
  setField(value?: UpdateShareRequest.UpdateField): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateShareRequest): UpdateShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateShareRequest;
  static deserializeBinaryFromReader(message: UpdateShareRequest, reader: jspb.BinaryReader): UpdateShareRequest;
}

export namespace UpdateShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference.AsObject,
    field?: UpdateShareRequest.UpdateField.AsObject,
  }

  export class UpdateField extends jspb.Message {
    hasPermissions(): boolean;
    clearPermissions(): void;
    getPermissions(): cs3_sharing_collaboration_v1beta1_resources_pb.SharePermissions | undefined;
    setPermissions(value?: cs3_sharing_collaboration_v1beta1_resources_pb.SharePermissions): void;

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
      permissions?: cs3_sharing_collaboration_v1beta1_resources_pb.SharePermissions.AsObject,
      displayName: string,
    }

    export enum FieldCase {
      FIELD_NOT_SET = 0,
      PERMISSIONS = 2,
      DISPLAY_NAME = 3,
    }
  }
}

export class UpdateShareResponse extends jspb.Message {
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
  getShare(): cs3_sharing_collaboration_v1beta1_resources_pb.Share | undefined;
  setShare(value?: cs3_sharing_collaboration_v1beta1_resources_pb.Share): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateShareResponse): UpdateShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateShareResponse;
  static deserializeBinaryFromReader(message: UpdateShareResponse, reader: jspb.BinaryReader): UpdateShareResponse;
}

export namespace UpdateShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_collaboration_v1beta1_resources_pb.Share.AsObject,
  }
}

export class ListSharesRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearFiltersList(): void;
  getFiltersList(): Array<cs3_sharing_collaboration_v1beta1_resources_pb.Filter>;
  setFiltersList(value: Array<cs3_sharing_collaboration_v1beta1_resources_pb.Filter>): void;
  addFilters(value?: cs3_sharing_collaboration_v1beta1_resources_pb.Filter, index?: number): cs3_sharing_collaboration_v1beta1_resources_pb.Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSharesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSharesRequest): ListSharesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSharesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSharesRequest;
  static deserializeBinaryFromReader(message: ListSharesRequest, reader: jspb.BinaryReader): ListSharesRequest;
}

export namespace ListSharesRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    filtersList: Array<cs3_sharing_collaboration_v1beta1_resources_pb.Filter.AsObject>,
  }
}

export class ListSharesResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearSharesList(): void;
  getSharesList(): Array<cs3_sharing_collaboration_v1beta1_resources_pb.Share>;
  setSharesList(value: Array<cs3_sharing_collaboration_v1beta1_resources_pb.Share>): void;
  addShares(value?: cs3_sharing_collaboration_v1beta1_resources_pb.Share, index?: number): cs3_sharing_collaboration_v1beta1_resources_pb.Share;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSharesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSharesResponse): ListSharesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSharesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSharesResponse;
  static deserializeBinaryFromReader(message: ListSharesResponse, reader: jspb.BinaryReader): ListSharesResponse;
}

export namespace ListSharesResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    sharesList: Array<cs3_sharing_collaboration_v1beta1_resources_pb.Share.AsObject>,
  }
}

export class RemoveShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference | undefined;
  setRef(value?: cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveShareRequest): RemoveShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveShareRequest;
  static deserializeBinaryFromReader(message: RemoveShareRequest, reader: jspb.BinaryReader): RemoveShareRequest;
}

export namespace RemoveShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference.AsObject,
  }
}

export class RemoveShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveShareResponse): RemoveShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveShareResponse;
  static deserializeBinaryFromReader(message: RemoveShareResponse, reader: jspb.BinaryReader): RemoveShareResponse;
}

export namespace RemoveShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference | undefined;
  setRef(value?: cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetShareRequest): GetShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetShareRequest;
  static deserializeBinaryFromReader(message: GetShareRequest, reader: jspb.BinaryReader): GetShareRequest;
}

export namespace GetShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference.AsObject,
  }
}

export class GetShareResponse extends jspb.Message {
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
  getShare(): cs3_sharing_collaboration_v1beta1_resources_pb.Share | undefined;
  setShare(value?: cs3_sharing_collaboration_v1beta1_resources_pb.Share): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetShareResponse): GetShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetShareResponse;
  static deserializeBinaryFromReader(message: GetShareResponse, reader: jspb.BinaryReader): GetShareResponse;
}

export namespace GetShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_collaboration_v1beta1_resources_pb.Share.AsObject,
  }
}

export class ListReceivedSharesRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearFiltersList(): void;
  getFiltersList(): Array<cs3_sharing_collaboration_v1beta1_resources_pb.Filter>;
  setFiltersList(value: Array<cs3_sharing_collaboration_v1beta1_resources_pb.Filter>): void;
  addFilters(value?: cs3_sharing_collaboration_v1beta1_resources_pb.Filter, index?: number): cs3_sharing_collaboration_v1beta1_resources_pb.Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReceivedSharesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReceivedSharesRequest): ListReceivedSharesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListReceivedSharesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReceivedSharesRequest;
  static deserializeBinaryFromReader(message: ListReceivedSharesRequest, reader: jspb.BinaryReader): ListReceivedSharesRequest;
}

export namespace ListReceivedSharesRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    filtersList: Array<cs3_sharing_collaboration_v1beta1_resources_pb.Filter.AsObject>,
  }
}

export class ListReceivedSharesResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearSharesList(): void;
  getSharesList(): Array<cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare>;
  setSharesList(value: Array<cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare>): void;
  addShares(value?: cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare, index?: number): cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReceivedSharesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReceivedSharesResponse): ListReceivedSharesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListReceivedSharesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReceivedSharesResponse;
  static deserializeBinaryFromReader(message: ListReceivedSharesResponse, reader: jspb.BinaryReader): ListReceivedSharesResponse;
}

export namespace ListReceivedSharesResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    sharesList: Array<cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare.AsObject>,
  }
}

export class UpdateReceivedShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasShare(): boolean;
  clearShare(): void;
  getShare(): cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare | undefined;
  setShare(value?: cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReceivedShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReceivedShareRequest): UpdateReceivedShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReceivedShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReceivedShareRequest;
  static deserializeBinaryFromReader(message: UpdateReceivedShareRequest, reader: jspb.BinaryReader): UpdateReceivedShareRequest;
}

export namespace UpdateReceivedShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateReceivedShareResponse extends jspb.Message {
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
  getShare(): cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare | undefined;
  setShare(value?: cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReceivedShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReceivedShareResponse): UpdateReceivedShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReceivedShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReceivedShareResponse;
  static deserializeBinaryFromReader(message: UpdateReceivedShareResponse, reader: jspb.BinaryReader): UpdateReceivedShareResponse;
}

export namespace UpdateReceivedShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare.AsObject,
  }
}

export class GetReceivedShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference | undefined;
  setRef(value?: cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReceivedShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReceivedShareRequest): GetReceivedShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReceivedShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReceivedShareRequest;
  static deserializeBinaryFromReader(message: GetReceivedShareRequest, reader: jspb.BinaryReader): GetReceivedShareRequest;
}

export namespace GetReceivedShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_sharing_collaboration_v1beta1_resources_pb.ShareReference.AsObject,
  }
}

export class GetReceivedShareResponse extends jspb.Message {
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
  getShare(): cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare | undefined;
  setShare(value?: cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReceivedShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReceivedShareResponse): GetReceivedShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReceivedShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReceivedShareResponse;
  static deserializeBinaryFromReader(message: GetReceivedShareResponse, reader: jspb.BinaryReader): GetReceivedShareResponse;
}

export namespace GetReceivedShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    share?: cs3_sharing_collaboration_v1beta1_resources_pb.ReceivedShare.AsObject,
  }
}

