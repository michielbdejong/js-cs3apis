// package: cs3.ocm.invite.v1beta1
// file: cs3/ocm/invite/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class InviteToken extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setUserId(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setExpiration(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteToken.AsObject;
  static toObject(includeInstance: boolean, msg: InviteToken): InviteToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteToken;
  static deserializeBinaryFromReader(message: InviteToken, reader: jspb.BinaryReader): InviteToken;
}

export namespace InviteToken {
  export type AsObject = {
    token: string,
    userId?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    expiration?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    description: string,
  }
}

