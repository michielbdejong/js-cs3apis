// package: cs3.storage.registry.v1beta1
// file: cs3/storage/registry/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class ProviderInfo extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getProviderId(): string;
  setProviderId(value: string): void;

  getProviderPath(): string;
  setProviderPath(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasFeatures(): boolean;
  clearFeatures(): void;
  getFeatures(): ProviderInfo.Features | undefined;
  setFeatures(value?: ProviderInfo.Features): void;

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
    providerId: string,
    providerPath: string,
    address: string,
    description: string,
    features?: ProviderInfo.Features.AsObject,
  }

  export class Features extends jspb.Message {
    getRecycle(): boolean;
    setRecycle(value: boolean): void;

    getFileVersions(): boolean;
    setFileVersions(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Features.AsObject;
    static toObject(includeInstance: boolean, msg: Features): Features.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Features, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Features;
    static deserializeBinaryFromReader(message: Features, reader: jspb.BinaryReader): Features;
  }

  export namespace Features {
    export type AsObject = {
      recycle: boolean,
      fileVersions: boolean,
    }
  }
}

