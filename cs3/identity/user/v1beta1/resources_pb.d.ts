// package: cs3.identity.user.v1beta1
// file: cs3/identity/user/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class UserId extends jspb.Message {
  getIdp(): string;
  setIdp(value: string): void;

  getOpaqueId(): string;
  setOpaqueId(value: string): void;

  getType(): UserType;
  setType(value: UserType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserId.AsObject;
  static toObject(includeInstance: boolean, msg: UserId): UserId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserId;
  static deserializeBinaryFromReader(message: UserId, reader: jspb.BinaryReader): UserId;
}

export namespace UserId {
  export type AsObject = {
    idp: string,
    opaqueId: string,
    type: UserType,
  }
}

export class User extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): UserId | undefined;
  setId(value?: UserId): void;

  getUsername(): string;
  setUsername(value: string): void;

  getMail(): string;
  setMail(value: string): void;

  getMailVerified(): boolean;
  setMailVerified(value: boolean): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  clearGroupsList(): void;
  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): void;
  addGroups(value: string, index?: number): string;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getUidNumber(): number;
  setUidNumber(value: number): void;

  getGidNumber(): number;
  setGidNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id?: UserId.AsObject,
    username: string,
    mail: string,
    mailVerified: boolean,
    displayName: string,
    groupsList: Array<string>,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    uidNumber: number,
    gidNumber: number,
  }
}

export enum UserType {
  USER_TYPE_INVALID = 0,
  USER_TYPE_PRIMARY = 1,
  USER_TYPE_SECONDARY = 2,
  USER_TYPE_SERVICE = 3,
  USER_TYPE_APPLICATION = 4,
  USER_TYPE_GUEST = 5,
  USER_TYPE_FEDERATED = 6,
  USER_TYPE_LIGHTWEIGHT = 7,
}

