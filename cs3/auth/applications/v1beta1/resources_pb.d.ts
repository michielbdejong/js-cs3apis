// package: cs3.auth.applications.v1beta1
// file: cs3/auth/applications/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_auth_provider_v1beta1_resources_pb from '../../../../cs3/auth/provider/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class AppPassword extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  getTokenScopeMap(): jspb.Map<string, cs3_auth_provider_v1beta1_resources_pb.Scope>;
  clearTokenScopeMap(): void;
  getLabel(): string;
  setLabel(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setUser(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setExpiration(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasCtime(): boolean;
  clearCtime(): void;
  getCtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setCtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasUtime(): boolean;
  clearUtime(): void;
  getUtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setUtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppPassword.AsObject;
  static toObject(includeInstance: boolean, msg: AppPassword): AppPassword.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppPassword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppPassword;
  static deserializeBinaryFromReader(message: AppPassword, reader: jspb.BinaryReader): AppPassword;
}

export namespace AppPassword {
  export type AsObject = {
    password: string,
    tokenScopeMap: Array<[string, cs3_auth_provider_v1beta1_resources_pb.Scope.AsObject]>,
    label: string,
    user?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    expiration?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    ctime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    utime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

