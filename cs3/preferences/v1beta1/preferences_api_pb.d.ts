// package: cs3.preferences.v1beta1
// file: cs3/preferences/v1beta1/preferences_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_rpc_v1beta1_status_pb from '../../../cs3/rpc/v1beta1/status_pb';

export class SetKeyRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getVal(): string;
  setVal(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetKeyRequest): SetKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetKeyRequest;
  static deserializeBinaryFromReader(message: SetKeyRequest, reader: jspb.BinaryReader): SetKeyRequest;
}

export namespace SetKeyRequest {
  export type AsObject = {
    key: string,
    val: string,
  }
}

export class SetKeyResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetKeyResponse): SetKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetKeyResponse;
  static deserializeBinaryFromReader(message: SetKeyResponse, reader: jspb.BinaryReader): SetKeyResponse;
}

export namespace SetKeyResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
  }
}

export class GetKeyRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyRequest): GetKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyRequest;
  static deserializeBinaryFromReader(message: GetKeyRequest, reader: jspb.BinaryReader): GetKeyRequest;
}

export namespace GetKeyRequest {
  export type AsObject = {
    key: string,
  }
}

export class GetKeyResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  getVal(): string;
  setVal(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyResponse): GetKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyResponse;
  static deserializeBinaryFromReader(message: GetKeyResponse, reader: jspb.BinaryReader): GetKeyResponse;
}

export namespace GetKeyResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    val: string,
  }
}

