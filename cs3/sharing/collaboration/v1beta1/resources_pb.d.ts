// package: cs3.sharing.collaboration.v1beta1
// file: cs3/sharing/collaboration/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class Share extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ShareId | undefined;
  setId(value?: ShareId): void;

  hasResourceId(): boolean;
  clearResourceId(): void;
  getResourceId(): cs3_storage_provider_v1beta1_resources_pb.ResourceId | undefined;
  setResourceId(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceId): void;

  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): SharePermissions | undefined;
  setPermissions(value?: SharePermissions): void;

  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): cs3_storage_provider_v1beta1_resources_pb.Grantee | undefined;
  setGrantee(value?: cs3_storage_provider_v1beta1_resources_pb.Grantee): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasCreator(): boolean;
  clearCreator(): void;
  getCreator(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setCreator(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasCtime(): boolean;
  clearCtime(): void;
  getCtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setCtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasMtime(): boolean;
  clearMtime(): void;
  getMtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setMtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Share.AsObject;
  static toObject(includeInstance: boolean, msg: Share): Share.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Share, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Share;
  static deserializeBinaryFromReader(message: Share, reader: jspb.BinaryReader): Share;
}

export namespace Share {
  export type AsObject = {
    id?: ShareId.AsObject,
    resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
    permissions?: SharePermissions.AsObject,
    grantee?: cs3_storage_provider_v1beta1_resources_pb.Grantee.AsObject,
    owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    creator?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    ctime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    mtime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

export class SharePermissions extends jspb.Message {
  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions | undefined;
  setPermissions(value?: cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharePermissions.AsObject;
  static toObject(includeInstance: boolean, msg: SharePermissions): SharePermissions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharePermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharePermissions;
  static deserializeBinaryFromReader(message: SharePermissions, reader: jspb.BinaryReader): SharePermissions;
}

export namespace SharePermissions {
  export type AsObject = {
    permissions?: cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions.AsObject,
  }
}

export class ReceivedShare extends jspb.Message {
  hasShare(): boolean;
  clearShare(): void;
  getShare(): Share | undefined;
  setShare(value?: Share): void;

  getState(): ShareState;
  setState(value: ShareState): void;

  hasMountPoint(): boolean;
  clearMountPoint(): void;
  getMountPoint(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setMountPoint(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceivedShare.AsObject;
  static toObject(includeInstance: boolean, msg: ReceivedShare): ReceivedShare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceivedShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceivedShare;
  static deserializeBinaryFromReader(message: ReceivedShare, reader: jspb.BinaryReader): ReceivedShare;
}

export namespace ReceivedShare {
  export type AsObject = {
    share?: Share.AsObject,
    state: ShareState,
    mountPoint?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class ShareKey extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasResourceId(): boolean;
  clearResourceId(): void;
  getResourceId(): cs3_storage_provider_v1beta1_resources_pb.ResourceId | undefined;
  setResourceId(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceId): void;

  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): cs3_storage_provider_v1beta1_resources_pb.Grantee | undefined;
  setGrantee(value?: cs3_storage_provider_v1beta1_resources_pb.Grantee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareKey.AsObject;
  static toObject(includeInstance: boolean, msg: ShareKey): ShareKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareKey;
  static deserializeBinaryFromReader(message: ShareKey, reader: jspb.BinaryReader): ShareKey;
}

export namespace ShareKey {
  export type AsObject = {
    owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
    grantee?: cs3_storage_provider_v1beta1_resources_pb.Grantee.AsObject,
  }
}

export class ShareId extends jspb.Message {
  getOpaqueId(): string;
  setOpaqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareId.AsObject;
  static toObject(includeInstance: boolean, msg: ShareId): ShareId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareId;
  static deserializeBinaryFromReader(message: ShareId, reader: jspb.BinaryReader): ShareId;
}

export namespace ShareId {
  export type AsObject = {
    opaqueId: string,
  }
}

export class ShareReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ShareId | undefined;
  setId(value?: ShareId): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): ShareKey | undefined;
  setKey(value?: ShareKey): void;

  getSpecCase(): ShareReference.SpecCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareReference.AsObject;
  static toObject(includeInstance: boolean, msg: ShareReference): ShareReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareReference;
  static deserializeBinaryFromReader(message: ShareReference, reader: jspb.BinaryReader): ShareReference;
}

export namespace ShareReference {
  export type AsObject = {
    id?: ShareId.AsObject,
    key?: ShareKey.AsObject,
  }

  export enum SpecCase {
    SPEC_NOT_SET = 0,
    ID = 1,
    KEY = 2,
  }
}

export class ShareGrant extends jspb.Message {
  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): cs3_storage_provider_v1beta1_resources_pb.Grantee | undefined;
  setGrantee(value?: cs3_storage_provider_v1beta1_resources_pb.Grantee): void;

  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): SharePermissions | undefined;
  setPermissions(value?: SharePermissions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareGrant.AsObject;
  static toObject(includeInstance: boolean, msg: ShareGrant): ShareGrant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareGrant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareGrant;
  static deserializeBinaryFromReader(message: ShareGrant, reader: jspb.BinaryReader): ShareGrant;
}

export namespace ShareGrant {
  export type AsObject = {
    grantee?: cs3_storage_provider_v1beta1_resources_pb.Grantee.AsObject,
    permissions?: SharePermissions.AsObject,
  }
}

export class Filter extends jspb.Message {
  getType(): Filter.Type;
  setType(value: Filter.Type): void;

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

  hasGranteeType(): boolean;
  clearGranteeType(): void;
  getGranteeType(): cs3_storage_provider_v1beta1_resources_pb.GranteeType;
  setGranteeType(value: cs3_storage_provider_v1beta1_resources_pb.GranteeType): void;

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
    type: Filter.Type,
    resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
    owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    creator?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    granteeType: cs3_storage_provider_v1beta1_resources_pb.GranteeType,
  }

  export enum Type {
    TYPE_INVALID = 0,
    TYPE_NO = 1,
    TYPE_RESOURCE_ID = 2,
    TYPE_OWNER = 3,
    TYPE_CREATOR = 4,
    TYPE_GRANTEE_TYPE = 5,
    TYPE_EXCLUDE_DENIALS = 6,
  }

  export enum TermCase {
    TERM_NOT_SET = 0,
    RESOURCE_ID = 3,
    OWNER = 4,
    CREATOR = 5,
    GRANTEE_TYPE = 6,
  }
}

export enum ShareState {
  SHARE_STATE_INVALID = 0,
  SHARE_STATE_PENDING = 1,
  SHARE_STATE_ACCEPTED = 2,
  SHARE_STATE_REJECTED = 3,
}

