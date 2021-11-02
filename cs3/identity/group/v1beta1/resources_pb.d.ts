// package: cs3.identity.group.v1beta1
// file: cs3/identity/group/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class GroupId extends jspb.Message {
  getIdp(): string;
  setIdp(value: string): void;

  getOpaqueId(): string;
  setOpaqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupId.AsObject;
  static toObject(includeInstance: boolean, msg: GroupId): GroupId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupId;
  static deserializeBinaryFromReader(message: GroupId, reader: jspb.BinaryReader): GroupId;
}

export namespace GroupId {
  export type AsObject = {
    idp: string,
    opaqueId: string,
  }
}

export class Group extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): GroupId | undefined;
  setId(value?: GroupId): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  getGidNumber(): number;
  setGidNumber(value: number): void;

  getMail(): string;
  setMail(value: string): void;

  getMailVerified(): boolean;
  setMailVerified(value: boolean): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  clearMembersList(): void;
  getMembersList(): Array<cs3_identity_user_v1beta1_resources_pb.UserId>;
  setMembersList(value: Array<cs3_identity_user_v1beta1_resources_pb.UserId>): void;
  addMembers(value?: cs3_identity_user_v1beta1_resources_pb.UserId, index?: number): cs3_identity_user_v1beta1_resources_pb.UserId;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id?: GroupId.AsObject,
    groupName: string,
    gidNumber: number,
    mail: string,
    mailVerified: boolean,
    displayName: string,
    membersList: Array<cs3_identity_user_v1beta1_resources_pb.UserId.AsObject>,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

