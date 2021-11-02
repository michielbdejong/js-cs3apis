// package: cs3.types.v1beta1
// file: cs3/types/v1beta1/types.proto

import * as jspb from 'google-protobuf';

export class Opaque extends jspb.Message {
  getMapMap(): jspb.Map<string, OpaqueEntry>;
  clearMapMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Opaque.AsObject;
  static toObject(includeInstance: boolean, msg: Opaque): Opaque.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Opaque, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Opaque;
  static deserializeBinaryFromReader(message: Opaque, reader: jspb.BinaryReader): Opaque;
}

export namespace Opaque {
  export type AsObject = {
    mapMap: Array<[string, OpaqueEntry.AsObject]>,
  }
}

export class OpaqueEntry extends jspb.Message {
  getDecoder(): string;
  setDecoder(value: string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpaqueEntry.AsObject;
  static toObject(includeInstance: boolean, msg: OpaqueEntry): OpaqueEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpaqueEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpaqueEntry;
  static deserializeBinaryFromReader(message: OpaqueEntry, reader: jspb.BinaryReader): OpaqueEntry;
}

export namespace OpaqueEntry {
  export type AsObject = {
    decoder: string,
    value: Uint8Array | string,
  }
}

export class Timestamp extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): void;

  getNanos(): number;
  setNanos(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

