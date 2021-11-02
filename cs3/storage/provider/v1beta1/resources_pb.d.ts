// package: cs3.storage.provider.v1beta1
// file: cs3/storage/provider/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_group_v1beta1_resources_pb from '../../../../cs3/identity/group/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class ResourceInfo extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getType(): ResourceType;
  setType(value: ResourceType): void;

  hasId(): boolean;
  clearId(): void;
  getId(): ResourceId | undefined;
  setId(value?: ResourceId): void;

  hasChecksum(): boolean;
  clearChecksum(): void;
  getChecksum(): ResourceChecksum | undefined;
  setChecksum(value?: ResourceChecksum): void;

  getEtag(): string;
  setEtag(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  hasMtime(): boolean;
  clearMtime(): void;
  getMtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setMtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  getPath(): string;
  setPath(value: string): void;

  hasPermissionSet(): boolean;
  clearPermissionSet(): void;
  getPermissionSet(): ResourcePermissions | undefined;
  setPermissionSet(value?: ResourcePermissions): void;

  getSize(): number;
  setSize(value: number): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  getTarget(): string;
  setTarget(value: string): void;

  hasCanonicalMetadata(): boolean;
  clearCanonicalMetadata(): void;
  getCanonicalMetadata(): CanonicalMetadata | undefined;
  setCanonicalMetadata(value?: CanonicalMetadata): void;

  hasArbitraryMetadata(): boolean;
  clearArbitraryMetadata(): void;
  getArbitraryMetadata(): ArbitraryMetadata | undefined;
  setArbitraryMetadata(value?: ArbitraryMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceInfo): ResourceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceInfo;
  static deserializeBinaryFromReader(message: ResourceInfo, reader: jspb.BinaryReader): ResourceInfo;
}

export namespace ResourceInfo {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    type: ResourceType,
    id?: ResourceId.AsObject,
    checksum?: ResourceChecksum.AsObject,
    etag: string,
    mimeType: string,
    mtime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    path: string,
    permissionSet?: ResourcePermissions.AsObject,
    size: number,
    owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    target: string,
    canonicalMetadata?: CanonicalMetadata.AsObject,
    arbitraryMetadata?: ArbitraryMetadata.AsObject,
  }
}

export class CanonicalMetadata extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): Reference | undefined;
  setTarget(value?: Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanonicalMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CanonicalMetadata): CanonicalMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CanonicalMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanonicalMetadata;
  static deserializeBinaryFromReader(message: CanonicalMetadata, reader: jspb.BinaryReader): CanonicalMetadata;
}

export namespace CanonicalMetadata {
  export type AsObject = {
    target?: Reference.AsObject,
  }
}

export class ArbitraryMetadata extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArbitraryMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ArbitraryMetadata): ArbitraryMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArbitraryMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArbitraryMetadata;
  static deserializeBinaryFromReader(message: ArbitraryMetadata, reader: jspb.BinaryReader): ArbitraryMetadata;
}

export namespace ArbitraryMetadata {
  export type AsObject = {
    metadataMap: Array<[string, string]>,
  }
}

export class ResourceChecksum extends jspb.Message {
  getType(): ResourceChecksumType;
  setType(value: ResourceChecksumType): void;

  getSum(): string;
  setSum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceChecksum.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceChecksum): ResourceChecksum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceChecksum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceChecksum;
  static deserializeBinaryFromReader(message: ResourceChecksum, reader: jspb.BinaryReader): ResourceChecksum;
}

export namespace ResourceChecksum {
  export type AsObject = {
    type: ResourceChecksumType,
    sum: string,
  }
}

export class ResourceChecksumPriority extends jspb.Message {
  getType(): ResourceChecksumType;
  setType(value: ResourceChecksumType): void;

  getPriority(): number;
  setPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceChecksumPriority.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceChecksumPriority): ResourceChecksumPriority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceChecksumPriority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceChecksumPriority;
  static deserializeBinaryFromReader(message: ResourceChecksumPriority, reader: jspb.BinaryReader): ResourceChecksumPriority;
}

export namespace ResourceChecksumPriority {
  export type AsObject = {
    type: ResourceChecksumType,
    priority: number,
  }
}

export class Reference extends jspb.Message {
  hasResourceId(): boolean;
  clearResourceId(): void;
  getResourceId(): ResourceId | undefined;
  setResourceId(value?: ResourceId): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reference.AsObject;
  static toObject(includeInstance: boolean, msg: Reference): Reference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reference;
  static deserializeBinaryFromReader(message: Reference, reader: jspb.BinaryReader): Reference;
}

export namespace Reference {
  export type AsObject = {
    resourceId?: ResourceId.AsObject,
    path: string,
  }
}

export class ResourceId extends jspb.Message {
  getStorageId(): string;
  setStorageId(value: string): void;

  getOpaqueId(): string;
  setOpaqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceId.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceId): ResourceId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceId;
  static deserializeBinaryFromReader(message: ResourceId, reader: jspb.BinaryReader): ResourceId;
}

export namespace ResourceId {
  export type AsObject = {
    storageId: string,
    opaqueId: string,
  }
}

export class ResourcePermissions extends jspb.Message {
  getAddGrant(): boolean;
  setAddGrant(value: boolean): void;

  getCreateContainer(): boolean;
  setCreateContainer(value: boolean): void;

  getDelete(): boolean;
  setDelete(value: boolean): void;

  getGetPath(): boolean;
  setGetPath(value: boolean): void;

  getGetQuota(): boolean;
  setGetQuota(value: boolean): void;

  getInitiateFileDownload(): boolean;
  setInitiateFileDownload(value: boolean): void;

  getInitiateFileUpload(): boolean;
  setInitiateFileUpload(value: boolean): void;

  getListGrants(): boolean;
  setListGrants(value: boolean): void;

  getListContainer(): boolean;
  setListContainer(value: boolean): void;

  getListFileVersions(): boolean;
  setListFileVersions(value: boolean): void;

  getListRecycle(): boolean;
  setListRecycle(value: boolean): void;

  getMove(): boolean;
  setMove(value: boolean): void;

  getRemoveGrant(): boolean;
  setRemoveGrant(value: boolean): void;

  getPurgeRecycle(): boolean;
  setPurgeRecycle(value: boolean): void;

  getRestoreFileVersion(): boolean;
  setRestoreFileVersion(value: boolean): void;

  getRestoreRecycleItem(): boolean;
  setRestoreRecycleItem(value: boolean): void;

  getStat(): boolean;
  setStat(value: boolean): void;

  getUpdateGrant(): boolean;
  setUpdateGrant(value: boolean): void;

  getDenyGrant(): boolean;
  setDenyGrant(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourcePermissions.AsObject;
  static toObject(includeInstance: boolean, msg: ResourcePermissions): ResourcePermissions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourcePermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourcePermissions;
  static deserializeBinaryFromReader(message: ResourcePermissions, reader: jspb.BinaryReader): ResourcePermissions;
}

export namespace ResourcePermissions {
  export type AsObject = {
    addGrant: boolean,
    createContainer: boolean,
    pb_delete: boolean,
    getPath: boolean,
    getQuota: boolean,
    initiateFileDownload: boolean,
    initiateFileUpload: boolean,
    listGrants: boolean,
    listContainer: boolean,
    listFileVersions: boolean,
    listRecycle: boolean,
    move: boolean,
    removeGrant: boolean,
    purgeRecycle: boolean,
    restoreFileVersion: boolean,
    restoreRecycleItem: boolean,
    stat: boolean,
    updateGrant: boolean,
    denyGrant: boolean,
  }
}

export class Grant extends jspb.Message {
  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): Grantee | undefined;
  setGrantee(value?: Grantee): void;

  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): ResourcePermissions | undefined;
  setPermissions(value?: ResourcePermissions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grant.AsObject;
  static toObject(includeInstance: boolean, msg: Grant): Grant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Grant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grant;
  static deserializeBinaryFromReader(message: Grant, reader: jspb.BinaryReader): Grant;
}

export namespace Grant {
  export type AsObject = {
    grantee?: Grantee.AsObject,
    permissions?: ResourcePermissions.AsObject,
  }
}

export class Grantee extends jspb.Message {
  getType(): GranteeType;
  setType(value: GranteeType): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setUserId(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasGroupId(): boolean;
  clearGroupId(): void;
  getGroupId(): cs3_identity_group_v1beta1_resources_pb.GroupId | undefined;
  setGroupId(value?: cs3_identity_group_v1beta1_resources_pb.GroupId): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getIdCase(): Grantee.IdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grantee.AsObject;
  static toObject(includeInstance: boolean, msg: Grantee): Grantee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Grantee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grantee;
  static deserializeBinaryFromReader(message: Grantee, reader: jspb.BinaryReader): Grantee;
}

export namespace Grantee {
  export type AsObject = {
    type: GranteeType,
    userId?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    groupId?: cs3_identity_group_v1beta1_resources_pb.GroupId.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }

  export enum IdCase {
    ID_NOT_SET = 0,
    USER_ID = 3,
    GROUP_ID = 4,
  }
}

export class FileVersion extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getKey(): string;
  setKey(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getMtime(): number;
  setMtime(value: number): void;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileVersion.AsObject;
  static toObject(includeInstance: boolean, msg: FileVersion): FileVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileVersion;
  static deserializeBinaryFromReader(message: FileVersion, reader: jspb.BinaryReader): FileVersion;
}

export namespace FileVersion {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    key: string,
    size: number,
    mtime: number,
    etag: string,
  }
}

export class RecycleItem extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getType(): ResourceType;
  setType(value: ResourceType): void;

  getKey(): string;
  setKey(value: string): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): Reference | undefined;
  setRef(value?: Reference): void;

  getSize(): number;
  setSize(value: number): void;

  hasDeletionTime(): boolean;
  clearDeletionTime(): void;
  getDeletionTime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setDeletionTime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecycleItem.AsObject;
  static toObject(includeInstance: boolean, msg: RecycleItem): RecycleItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecycleItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecycleItem;
  static deserializeBinaryFromReader(message: RecycleItem, reader: jspb.BinaryReader): RecycleItem;
}

export namespace RecycleItem {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    type: ResourceType,
    key: string,
    ref?: Reference.AsObject,
    size: number,
    deletionTime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

export class FileUploadProtocol extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getProtocol(): string;
  setProtocol(value: string): void;

  getUploadEndpoint(): string;
  setUploadEndpoint(value: string): void;

  clearAvailableChecksumsList(): void;
  getAvailableChecksumsList(): Array<ResourceChecksumPriority>;
  setAvailableChecksumsList(value: Array<ResourceChecksumPriority>): void;
  addAvailableChecksums(value?: ResourceChecksumPriority, index?: number): ResourceChecksumPriority;

  getExpose(): boolean;
  setExpose(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileUploadProtocol.AsObject;
  static toObject(includeInstance: boolean, msg: FileUploadProtocol): FileUploadProtocol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileUploadProtocol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileUploadProtocol;
  static deserializeBinaryFromReader(message: FileUploadProtocol, reader: jspb.BinaryReader): FileUploadProtocol;
}

export namespace FileUploadProtocol {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    protocol: string,
    uploadEndpoint: string,
    availableChecksumsList: Array<ResourceChecksumPriority.AsObject>,
    expose: boolean,
  }
}

export class FileDownloadProtocol extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getProtocol(): string;
  setProtocol(value: string): void;

  getDownloadEndpoint(): string;
  setDownloadEndpoint(value: string): void;

  getExpose(): boolean;
  setExpose(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDownloadProtocol.AsObject;
  static toObject(includeInstance: boolean, msg: FileDownloadProtocol): FileDownloadProtocol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileDownloadProtocol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDownloadProtocol;
  static deserializeBinaryFromReader(message: FileDownloadProtocol, reader: jspb.BinaryReader): FileDownloadProtocol;
}

export namespace FileDownloadProtocol {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    protocol: string,
    downloadEndpoint: string,
    expose: boolean,
  }
}

export class StorageSpace extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasId(): boolean;
  clearId(): void;
  getId(): StorageSpaceId | undefined;
  setId(value?: StorageSpaceId): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.User | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.User): void;

  hasRoot(): boolean;
  clearRoot(): void;
  getRoot(): ResourceId | undefined;
  setRoot(value?: ResourceId): void;

  getName(): string;
  setName(value: string): void;

  hasQuota(): boolean;
  clearQuota(): void;
  getQuota(): Quota | undefined;
  setQuota(value?: Quota): void;

  getSpaceType(): string;
  setSpaceType(value: string): void;

  hasMtime(): boolean;
  clearMtime(): void;
  getMtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setMtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageSpace.AsObject;
  static toObject(includeInstance: boolean, msg: StorageSpace): StorageSpace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageSpace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageSpace;
  static deserializeBinaryFromReader(message: StorageSpace, reader: jspb.BinaryReader): StorageSpace;
}

export namespace StorageSpace {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    id?: StorageSpaceId.AsObject,
    owner?: cs3_identity_user_v1beta1_resources_pb.User.AsObject,
    root?: ResourceId.AsObject,
    name: string,
    quota?: Quota.AsObject,
    spaceType: string,
    mtime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

export class StorageSpaceId extends jspb.Message {
  getOpaqueId(): string;
  setOpaqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageSpaceId.AsObject;
  static toObject(includeInstance: boolean, msg: StorageSpaceId): StorageSpaceId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageSpaceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageSpaceId;
  static deserializeBinaryFromReader(message: StorageSpaceId, reader: jspb.BinaryReader): StorageSpaceId;
}

export namespace StorageSpaceId {
  export type AsObject = {
    opaqueId: string,
  }
}

export class Quota extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getQuotaMaxBytes(): number;
  setQuotaMaxBytes(value: number): void;

  getQuotaMaxFiles(): number;
  setQuotaMaxFiles(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quota.AsObject;
  static toObject(includeInstance: boolean, msg: Quota): Quota.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Quota, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quota;
  static deserializeBinaryFromReader(message: Quota, reader: jspb.BinaryReader): Quota;
}

export namespace Quota {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    quotaMaxBytes: number,
    quotaMaxFiles: number,
  }
}

export enum ResourceType {
  RESOURCE_TYPE_INVALID = 0,
  RESOURCE_TYPE_FILE = 1,
  RESOURCE_TYPE_CONTAINER = 2,
  RESOURCE_TYPE_REFERENCE = 3,
  RESOURCE_TYPE_SYMLINK = 4,
  RESOURCE_TYPE_INTERNAL = 5,
}

export enum ResourceChecksumType {
  RESOURCE_CHECKSUM_TYPE_INVALID = 0,
  RESOURCE_CHECKSUM_TYPE_UNSET = 1,
  RESOURCE_CHECKSUM_TYPE_ADLER32 = 2,
  RESOURCE_CHECKSUM_TYPE_MD5 = 3,
  RESOURCE_CHECKSUM_TYPE_SHA1 = 4,
}

export enum GranteeType {
  GRANTEE_TYPE_INVALID = 0,
  GRANTEE_TYPE_USER = 1,
  GRANTEE_TYPE_GROUP = 2,
}

