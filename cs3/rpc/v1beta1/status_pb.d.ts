// package: cs3.rpc.v1beta1
// file: cs3/rpc/v1beta1/status.proto

import * as jspb from 'google-protobuf';
import * as cs3_rpc_v1beta1_code_pb from '../../../cs3/rpc/v1beta1/code_pb';

export class Status extends jspb.Message {
  getCode(): cs3_rpc_v1beta1_code_pb.Code;
  setCode(value: cs3_rpc_v1beta1_code_pb.Code): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTrace(): string;
  setTrace(value: string): void;

  getTargetUri(): string;
  setTargetUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    code: cs3_rpc_v1beta1_code_pb.Code,
    message: string,
    trace: string,
    targetUri: string,
  }
}

