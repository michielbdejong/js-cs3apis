// package: cs3.tx.v1beta1
// file: cs3/tx/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../cs3/types/v1beta1/types_pb';

export class TxId extends jspb.Message {
  getOpaqueId(): string;
  setOpaqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxId.AsObject;
  static toObject(includeInstance: boolean, msg: TxId): TxId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxId;
  static deserializeBinaryFromReader(message: TxId, reader: jspb.BinaryReader): TxId;
}

export namespace TxId {
  export type AsObject = {
    opaqueId: string,
  }
}

export class TxInfo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): TxId | undefined;
  setId(value?: TxId): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  getStatus(): TxInfo.Status;
  setStatus(value: TxInfo.Status): void;

  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): cs3_storage_provider_v1beta1_resources_pb.Grantee | undefined;
  setGrantee(value?: cs3_storage_provider_v1beta1_resources_pb.Grantee): void;

  hasCreator(): boolean;
  clearCreator(): void;
  getCreator(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setCreator(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasCtime(): boolean;
  clearCtime(): void;
  getCtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setCtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TxInfo): TxInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxInfo;
  static deserializeBinaryFromReader(message: TxInfo, reader: jspb.BinaryReader): TxInfo;
}

export namespace TxInfo {
  export type AsObject = {
    id?: TxId.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    status: TxInfo.Status,
    grantee?: cs3_storage_provider_v1beta1_resources_pb.Grantee.AsObject,
    creator?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    ctime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    description: string,
  }

  export enum Status {
    STATUS_INVALID = 0,
    STATUS_DESTINATION_NOT_FOUND = 1,
    STATUS_TRANSFER_NEW = 2,
    STATUS_TRANSFER_AWAITING_ACCEPTANCE = 3,
    STATUS_TRANSFER_ACCEPTED = 4,
    STATUS_TRANSFER_IN_PROGRESS = 5,
    STATUS_TRANSFER_COMPLETE = 6,
    STATUS_TRANSFER_FAILED = 7,
    STATUS_TRANSFER_CANCELLED = 8,
    STATUS_TRANSFER_CANCEL_FAILED = 9,
    STATUS_TRANSFER_EXPIRED = 10,
  }
}

