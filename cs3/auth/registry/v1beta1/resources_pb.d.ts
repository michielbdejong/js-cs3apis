// package: cs3.auth.registry.v1beta1
// file: cs3/auth/registry/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class ProviderInfo extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getProviderType(): string;
  setProviderType(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderInfo): ProviderInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProviderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderInfo;
  static deserializeBinaryFromReader(message: ProviderInfo, reader: jspb.BinaryReader): ProviderInfo;
}

export namespace ProviderInfo {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    providerType: string,
    address: string,
    description: string,
  }
}

