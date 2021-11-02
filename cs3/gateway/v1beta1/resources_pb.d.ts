// package: cs3.gateway.v1beta1
// file: cs3/gateway/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../cs3/types/v1beta1/types_pb';

export class FileUploadProtocol extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getProtocol(): string;
  setProtocol(value: string): void;

  getUploadEndpoint(): string;
  setUploadEndpoint(value: string): void;

  clearAvailableChecksumsList(): void;
  getAvailableChecksumsList(): Array<cs3_storage_provider_v1beta1_resources_pb.ResourceChecksumPriority>;
  setAvailableChecksumsList(value: Array<cs3_storage_provider_v1beta1_resources_pb.ResourceChecksumPriority>): void;
  addAvailableChecksums(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceChecksumPriority, index?: number): cs3_storage_provider_v1beta1_resources_pb.ResourceChecksumPriority;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileUploadProtocol.AsObject;
  static toObject(includeInstance: boolean, msg: FileUploadProtocol): FileUploadProtocol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileUploadProtocol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileUploadProtocol;
  static deserializeBinaryFromReader(message: FileUploadProtocol, reader: jspb.BinaryReader): FileUploadProtocol;
}

export namespace FileUploadProtocol {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    protocol: string,
    uploadEndpoint: string,
    availableChecksumsList: Array<cs3_storage_provider_v1beta1_resources_pb.ResourceChecksumPriority.AsObject>,
    token: string,
  }
}

export class FileDownloadProtocol extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getProtocol(): string;
  setProtocol(value: string): void;

  getDownloadEndpoint(): string;
  setDownloadEndpoint(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDownloadProtocol.AsObject;
  static toObject(includeInstance: boolean, msg: FileDownloadProtocol): FileDownloadProtocol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileDownloadProtocol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDownloadProtocol;
  static deserializeBinaryFromReader(message: FileDownloadProtocol, reader: jspb.BinaryReader): FileDownloadProtocol;
}

export namespace FileDownloadProtocol {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    protocol: string,
    downloadEndpoint: string,
    token: string,
  }
}

