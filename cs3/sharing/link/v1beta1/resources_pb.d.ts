// package: cs3.sharing.link.v1beta1
// file: cs3/sharing/link/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class PublicShare extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): PublicShareId | undefined;
  setId(value?: PublicShareId): void;

  getToken(): string;
  setToken(value: string): void;

  hasResourceId(): boolean;
  clearResourceId(): void;
  getResourceId(): cs3_storage_provider_v1beta1_resources_pb.ResourceId | undefined;
  setResourceId(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceId): void;

  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): PublicSharePermissions | undefined;
  setPermissions(value?: PublicSharePermissions): void;

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

  getPasswordProtected(): boolean;
  setPasswordProtected(value: boolean): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setExpiration(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): ShareSignature | undefined;
  setSignature(value?: ShareSignature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicShare.AsObject;
  static toObject(includeInstance: boolean, msg: PublicShare): PublicShare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicShare;
  static deserializeBinaryFromReader(message: PublicShare, reader: jspb.BinaryReader): PublicShare;
}

export namespace PublicShare {
  export type AsObject = {
    id?: PublicShareId.AsObject,
    token: string,
    resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
    permissions?: PublicSharePermissions.AsObject,
    owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    creator?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    ctime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    mtime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    passwordProtected: boolean,
    expiration?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    displayName: string,
    signature?: ShareSignature.AsObject,
  }
}

export class PublicSharePermissions extends jspb.Message {
  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions | undefined;
  setPermissions(value?: cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicSharePermissions.AsObject;
  static toObject(includeInstance: boolean, msg: PublicSharePermissions): PublicSharePermissions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicSharePermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicSharePermissions;
  static deserializeBinaryFromReader(message: PublicSharePermissions, reader: jspb.BinaryReader): PublicSharePermissions;
}

export namespace PublicSharePermissions {
  export type AsObject = {
    permissions?: cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions.AsObject,
  }
}

export class PublicShareId extends jspb.Message {
  getOpaqueId(): string;
  setOpaqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicShareId.AsObject;
  static toObject(includeInstance: boolean, msg: PublicShareId): PublicShareId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicShareId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicShareId;
  static deserializeBinaryFromReader(message: PublicShareId, reader: jspb.BinaryReader): PublicShareId;
}

export namespace PublicShareId {
  export type AsObject = {
    opaqueId: string,
  }
}

export class PublicShareReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): PublicShareId | undefined;
  setId(value?: PublicShareId): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): string;
  setToken(value: string): void;

  getSpecCase(): PublicShareReference.SpecCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicShareReference.AsObject;
  static toObject(includeInstance: boolean, msg: PublicShareReference): PublicShareReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicShareReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicShareReference;
  static deserializeBinaryFromReader(message: PublicShareReference, reader: jspb.BinaryReader): PublicShareReference;
}

export namespace PublicShareReference {
  export type AsObject = {
    id?: PublicShareId.AsObject,
    token: string,
  }

  export enum SpecCase {
    SPEC_NOT_SET = 0,
    ID = 1,
    TOKEN = 2,
  }
}

export class PublicShareAuthentication extends jspb.Message {
  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string;
  setPassword(value: string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): ShareSignature | undefined;
  setSignature(value?: ShareSignature): void;

  getSpecCase(): PublicShareAuthentication.SpecCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicShareAuthentication.AsObject;
  static toObject(includeInstance: boolean, msg: PublicShareAuthentication): PublicShareAuthentication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicShareAuthentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicShareAuthentication;
  static deserializeBinaryFromReader(message: PublicShareAuthentication, reader: jspb.BinaryReader): PublicShareAuthentication;
}

export namespace PublicShareAuthentication {
  export type AsObject = {
    password: string,
    signature?: ShareSignature.AsObject,
  }

  export enum SpecCase {
    SPEC_NOT_SET = 0,
    PASSWORD = 1,
    SIGNATURE = 2,
  }
}

export class ShareSignature extends jspb.Message {
  getSignature(): string;
  setSignature(value: string): void;

  hasSignatureExpiration(): boolean;
  clearSignatureExpiration(): void;
  getSignatureExpiration(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setSignatureExpiration(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareSignature.AsObject;
  static toObject(includeInstance: boolean, msg: ShareSignature): ShareSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareSignature;
  static deserializeBinaryFromReader(message: ShareSignature, reader: jspb.BinaryReader): ShareSignature;
}

export namespace ShareSignature {
  export type AsObject = {
    signature: string,
    signatureExpiration?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

export class Grant extends jspb.Message {
  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): PublicSharePermissions | undefined;
  setPermissions(value?: PublicSharePermissions): void;

  getPassword(): string;
  setPassword(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setExpiration(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

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
    permissions?: PublicSharePermissions.AsObject,
    password: string,
    expiration?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

