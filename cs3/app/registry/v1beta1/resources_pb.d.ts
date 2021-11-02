// package: cs3.app.registry.v1beta1
// file: cs3/app/registry/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class ProviderInfo extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearMimeTypesList(): void;
  getMimeTypesList(): Array<string>;
  setMimeTypesList(value: Array<string>): void;
  addMimeTypes(value: string, index?: number): string;

  getAddress(): string;
  setAddress(value: string): void;

  getCapability(): ProviderInfo.Capability;
  setCapability(value: ProviderInfo.Capability): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  getDesktopOnly(): boolean;
  setDesktopOnly(value: boolean): void;

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
    mimeTypesList: Array<string>,
    address: string,
    capability: ProviderInfo.Capability,
    name: string,
    description: string,
    icon: string,
    desktopOnly: boolean,
  }

  export enum Capability {
    CAPABILITY_INVALID = 0,
    CAPABILITY_VIEWER = 1,
    CAPABILITY_EDITOR = 2,
  }
}

export class MimeTypeInfo extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getExt(): string;
  setExt(value: string): void;

  clearAppProvidersList(): void;
  getAppProvidersList(): Array<ProviderInfo>;
  setAppProvidersList(value: Array<ProviderInfo>): void;
  addAppProviders(value?: ProviderInfo, index?: number): ProviderInfo;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  getAllowCreation(): boolean;
  setAllowCreation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MimeTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MimeTypeInfo): MimeTypeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MimeTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MimeTypeInfo;
  static deserializeBinaryFromReader(message: MimeTypeInfo, reader: jspb.BinaryReader): MimeTypeInfo;
}

export namespace MimeTypeInfo {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    mimeType: string,
    ext: string,
    appProvidersList: Array<ProviderInfo.AsObject>,
    name: string,
    description: string,
    icon: string,
    allowCreation: boolean,
  }
}

