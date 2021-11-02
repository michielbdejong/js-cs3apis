// package: cs3.ocm.core.v1beta1
// file: cs3/ocm/core/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class Protocol extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Protocol.AsObject;
  static toObject(includeInstance: boolean, msg: Protocol): Protocol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Protocol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Protocol;
  static deserializeBinaryFromReader(message: Protocol, reader: jspb.BinaryReader): Protocol;
}

export namespace Protocol {
  export type AsObject = {
    name: string,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

