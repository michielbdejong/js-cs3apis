// package: cs3.auth.provider.v1beta1
// file: cs3/auth/provider/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class Scope extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): cs3_types_v1beta1_types_pb.OpaqueEntry | undefined;
  setResource(value?: cs3_types_v1beta1_types_pb.OpaqueEntry): void;

  getRole(): Role;
  setRole(value: Role): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scope.AsObject;
  static toObject(includeInstance: boolean, msg: Scope): Scope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Scope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scope;
  static deserializeBinaryFromReader(message: Scope, reader: jspb.BinaryReader): Scope;
}

export namespace Scope {
  export type AsObject = {
    resource?: cs3_types_v1beta1_types_pb.OpaqueEntry.AsObject,
    role: Role,
  }
}

export enum Role {
  ROLE_INVALID = 0,
  ROLE_OWNER = 1,
  ROLE_LEGACY = 2,
  ROLE_VIEWER = 3,
  ROLE_EDITOR = 4,
  ROLE_FILE_EDITOR = 5,
  ROLE_COOWNER = 6,
  ROLE_UPLOADER = 7,
}

