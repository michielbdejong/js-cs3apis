// package: cs3.storage.provider.v1beta1
// file: cs3/storage/provider/v1beta1/provider_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class GetHomeRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHomeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHomeRequest): GetHomeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHomeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHomeRequest;
  static deserializeBinaryFromReader(message: GetHomeRequest, reader: jspb.BinaryReader): GetHomeRequest;
}

export namespace GetHomeRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetHomeResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHomeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHomeResponse): GetHomeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHomeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHomeResponse;
  static deserializeBinaryFromReader(message: GetHomeResponse, reader: jspb.BinaryReader): GetHomeResponse;
}

export namespace GetHomeResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    path: string,
  }
}

export class AddGrantRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  hasGrant(): boolean;
  clearGrant(): void;
  getGrant(): cs3_storage_provider_v1beta1_resources_pb.Grant | undefined;
  setGrant(value?: cs3_storage_provider_v1beta1_resources_pb.Grant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGrantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddGrantRequest): AddGrantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddGrantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGrantRequest;
  static deserializeBinaryFromReader(message: AddGrantRequest, reader: jspb.BinaryReader): AddGrantRequest;
}

export namespace AddGrantRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    grant?: cs3_storage_provider_v1beta1_resources_pb.Grant.AsObject,
  }
}

export class AddGrantResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddGrantResponse): AddGrantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGrantResponse;
  static deserializeBinaryFromReader(message: AddGrantResponse, reader: jspb.BinaryReader): AddGrantResponse;
}

export namespace AddGrantResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class DenyGrantRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): cs3_storage_provider_v1beta1_resources_pb.Grantee | undefined;
  setGrantee(value?: cs3_storage_provider_v1beta1_resources_pb.Grantee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenyGrantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DenyGrantRequest): DenyGrantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DenyGrantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenyGrantRequest;
  static deserializeBinaryFromReader(message: DenyGrantRequest, reader: jspb.BinaryReader): DenyGrantRequest;
}

export namespace DenyGrantRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    grantee?: cs3_storage_provider_v1beta1_resources_pb.Grantee.AsObject,
  }
}

export class DenyGrantResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenyGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DenyGrantResponse): DenyGrantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DenyGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenyGrantResponse;
  static deserializeBinaryFromReader(message: DenyGrantResponse, reader: jspb.BinaryReader): DenyGrantResponse;
}

export namespace DenyGrantResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CreateContainerRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContainerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContainerRequest): CreateContainerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateContainerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContainerRequest;
  static deserializeBinaryFromReader(message: CreateContainerRequest, reader: jspb.BinaryReader): CreateContainerRequest;
}

export namespace CreateContainerRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class CreateContainerResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContainerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContainerResponse): CreateContainerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateContainerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContainerResponse;
  static deserializeBinaryFromReader(message: CreateContainerResponse, reader: jspb.BinaryReader): CreateContainerResponse;
}

export namespace CreateContainerResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class DeleteRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class DeleteResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetPathRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasResourceId(): boolean;
  clearResourceId(): void;
  getResourceId(): cs3_storage_provider_v1beta1_resources_pb.ResourceId | undefined;
  setResourceId(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPathRequest): GetPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPathRequest;
  static deserializeBinaryFromReader(message: GetPathRequest, reader: jspb.BinaryReader): GetPathRequest;
}

export namespace GetPathRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
  }
}

export class GetPathResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPathResponse): GetPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPathResponse;
  static deserializeBinaryFromReader(message: GetPathResponse, reader: jspb.BinaryReader): GetPathResponse;
}

export namespace GetPathResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    path: string,
  }
}

export class GetQuotaRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuotaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuotaRequest): GetQuotaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQuotaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuotaRequest;
  static deserializeBinaryFromReader(message: GetQuotaRequest, reader: jspb.BinaryReader): GetQuotaRequest;
}

export namespace GetQuotaRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class GetQuotaResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getTotalBytes(): number;
  setTotalBytes(value: number): void;

  getUsedBytes(): number;
  setUsedBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuotaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuotaResponse): GetQuotaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQuotaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuotaResponse;
  static deserializeBinaryFromReader(message: GetQuotaResponse, reader: jspb.BinaryReader): GetQuotaResponse;
}

export namespace GetQuotaResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    totalBytes: number,
    usedBytes: number,
  }
}

export class InitiateFileUploadRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  hasIfNotExist(): boolean;
  clearIfNotExist(): void;
  getIfNotExist(): boolean;
  setIfNotExist(value: boolean): void;

  hasIfMatch(): boolean;
  clearIfMatch(): void;
  getIfMatch(): string;
  setIfMatch(value: string): void;

  getOptionsCase(): InitiateFileUploadRequest.OptionsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateFileUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateFileUploadRequest): InitiateFileUploadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateFileUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateFileUploadRequest;
  static deserializeBinaryFromReader(message: InitiateFileUploadRequest, reader: jspb.BinaryReader): InitiateFileUploadRequest;
}

export namespace InitiateFileUploadRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    ifNotExist: boolean,
    ifMatch: string,
  }

  export enum OptionsCase {
    OPTIONS_NOT_SET = 0,
    IF_NOT_EXIST = 3,
    IF_MATCH = 4,
  }
}

export class InitiateFileUploadResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearProtocolsList(): void;
  getProtocolsList(): Array<cs3_storage_provider_v1beta1_resources_pb.FileUploadProtocol>;
  setProtocolsList(value: Array<cs3_storage_provider_v1beta1_resources_pb.FileUploadProtocol>): void;
  addProtocols(value?: cs3_storage_provider_v1beta1_resources_pb.FileUploadProtocol, index?: number): cs3_storage_provider_v1beta1_resources_pb.FileUploadProtocol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateFileUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateFileUploadResponse): InitiateFileUploadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateFileUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateFileUploadResponse;
  static deserializeBinaryFromReader(message: InitiateFileUploadResponse, reader: jspb.BinaryReader): InitiateFileUploadResponse;
}

export namespace InitiateFileUploadResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    protocolsList: Array<cs3_storage_provider_v1beta1_resources_pb.FileUploadProtocol.AsObject>,
  }
}

export class InitiateFileDownloadRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateFileDownloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateFileDownloadRequest): InitiateFileDownloadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateFileDownloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateFileDownloadRequest;
  static deserializeBinaryFromReader(message: InitiateFileDownloadRequest, reader: jspb.BinaryReader): InitiateFileDownloadRequest;
}

export namespace InitiateFileDownloadRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class InitiateFileDownloadResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearProtocolsList(): void;
  getProtocolsList(): Array<cs3_storage_provider_v1beta1_resources_pb.FileDownloadProtocol>;
  setProtocolsList(value: Array<cs3_storage_provider_v1beta1_resources_pb.FileDownloadProtocol>): void;
  addProtocols(value?: cs3_storage_provider_v1beta1_resources_pb.FileDownloadProtocol, index?: number): cs3_storage_provider_v1beta1_resources_pb.FileDownloadProtocol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateFileDownloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateFileDownloadResponse): InitiateFileDownloadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitiateFileDownloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateFileDownloadResponse;
  static deserializeBinaryFromReader(message: InitiateFileDownloadResponse, reader: jspb.BinaryReader): InitiateFileDownloadResponse;
}

export namespace InitiateFileDownloadResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    protocolsList: Array<cs3_storage_provider_v1beta1_resources_pb.FileDownloadProtocol.AsObject>,
  }
}

export class ListGrantsRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGrantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGrantsRequest): ListGrantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGrantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGrantsRequest;
  static deserializeBinaryFromReader(message: ListGrantsRequest, reader: jspb.BinaryReader): ListGrantsRequest;
}

export namespace ListGrantsRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class ListGrantsResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearGrantsList(): void;
  getGrantsList(): Array<cs3_storage_provider_v1beta1_resources_pb.Grant>;
  setGrantsList(value: Array<cs3_storage_provider_v1beta1_resources_pb.Grant>): void;
  addGrants(value?: cs3_storage_provider_v1beta1_resources_pb.Grant, index?: number): cs3_storage_provider_v1beta1_resources_pb.Grant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGrantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGrantsResponse): ListGrantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGrantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGrantsResponse;
  static deserializeBinaryFromReader(message: ListGrantsResponse, reader: jspb.BinaryReader): ListGrantsResponse;
}

export namespace ListGrantsResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    grantsList: Array<cs3_storage_provider_v1beta1_resources_pb.Grant.AsObject>,
  }
}

export class ListContainerStreamRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  clearArbitraryMetadataKeysList(): void;
  getArbitraryMetadataKeysList(): Array<string>;
  setArbitraryMetadataKeysList(value: Array<string>): void;
  addArbitraryMetadataKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContainerStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListContainerStreamRequest): ListContainerStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContainerStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContainerStreamRequest;
  static deserializeBinaryFromReader(message: ListContainerStreamRequest, reader: jspb.BinaryReader): ListContainerStreamRequest;
}

export namespace ListContainerStreamRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    arbitraryMetadataKeysList: Array<string>,
  }
}

export class ListContainerStreamResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): cs3_storage_provider_v1beta1_resources_pb.ResourceInfo | undefined;
  setInfo(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContainerStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListContainerStreamResponse): ListContainerStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContainerStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContainerStreamResponse;
  static deserializeBinaryFromReader(message: ListContainerStreamResponse, reader: jspb.BinaryReader): ListContainerStreamResponse;
}

export namespace ListContainerStreamResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    info?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.AsObject,
  }
}

export class ListContainerRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  clearArbitraryMetadataKeysList(): void;
  getArbitraryMetadataKeysList(): Array<string>;
  setArbitraryMetadataKeysList(value: Array<string>): void;
  addArbitraryMetadataKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContainerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListContainerRequest): ListContainerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContainerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContainerRequest;
  static deserializeBinaryFromReader(message: ListContainerRequest, reader: jspb.BinaryReader): ListContainerRequest;
}

export namespace ListContainerRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    arbitraryMetadataKeysList: Array<string>,
  }
}

export class ListContainerResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearInfosList(): void;
  getInfosList(): Array<cs3_storage_provider_v1beta1_resources_pb.ResourceInfo>;
  setInfosList(value: Array<cs3_storage_provider_v1beta1_resources_pb.ResourceInfo>): void;
  addInfos(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo, index?: number): cs3_storage_provider_v1beta1_resources_pb.ResourceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContainerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListContainerResponse): ListContainerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContainerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContainerResponse;
  static deserializeBinaryFromReader(message: ListContainerResponse, reader: jspb.BinaryReader): ListContainerResponse;
}

export namespace ListContainerResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    infosList: Array<cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.AsObject>,
  }
}

export class ListFileVersionsRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFileVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFileVersionsRequest): ListFileVersionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFileVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFileVersionsRequest;
  static deserializeBinaryFromReader(message: ListFileVersionsRequest, reader: jspb.BinaryReader): ListFileVersionsRequest;
}

export namespace ListFileVersionsRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class ListFileVersionsResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearVersionsList(): void;
  getVersionsList(): Array<cs3_storage_provider_v1beta1_resources_pb.FileVersion>;
  setVersionsList(value: Array<cs3_storage_provider_v1beta1_resources_pb.FileVersion>): void;
  addVersions(value?: cs3_storage_provider_v1beta1_resources_pb.FileVersion, index?: number): cs3_storage_provider_v1beta1_resources_pb.FileVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFileVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFileVersionsResponse): ListFileVersionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFileVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFileVersionsResponse;
  static deserializeBinaryFromReader(message: ListFileVersionsResponse, reader: jspb.BinaryReader): ListFileVersionsResponse;
}

export namespace ListFileVersionsResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    versionsList: Array<cs3_storage_provider_v1beta1_resources_pb.FileVersion.AsObject>,
  }
}

export class ListRecycleRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasFromTs(): boolean;
  clearFromTs(): void;
  getFromTs(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setFromTs(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasToTs(): boolean;
  clearToTs(): void;
  getToTs(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setToTs(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecycleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecycleRequest): ListRecycleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRecycleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecycleRequest;
  static deserializeBinaryFromReader(message: ListRecycleRequest, reader: jspb.BinaryReader): ListRecycleRequest;
}

export namespace ListRecycleRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    fromTs?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    toTs?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class ListRecycleResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearRecycleItemsList(): void;
  getRecycleItemsList(): Array<cs3_storage_provider_v1beta1_resources_pb.RecycleItem>;
  setRecycleItemsList(value: Array<cs3_storage_provider_v1beta1_resources_pb.RecycleItem>): void;
  addRecycleItems(value?: cs3_storage_provider_v1beta1_resources_pb.RecycleItem, index?: number): cs3_storage_provider_v1beta1_resources_pb.RecycleItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecycleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecycleResponse): ListRecycleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRecycleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecycleResponse;
  static deserializeBinaryFromReader(message: ListRecycleResponse, reader: jspb.BinaryReader): ListRecycleResponse;
}

export namespace ListRecycleResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    recycleItemsList: Array<cs3_storage_provider_v1beta1_resources_pb.RecycleItem.AsObject>,
  }
}

export class ListRecycleStreamRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasFromTs(): boolean;
  clearFromTs(): void;
  getFromTs(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setFromTs(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasToTs(): boolean;
  clearToTs(): void;
  getToTs(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setToTs(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecycleStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecycleStreamRequest): ListRecycleStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRecycleStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecycleStreamRequest;
  static deserializeBinaryFromReader(message: ListRecycleStreamRequest, reader: jspb.BinaryReader): ListRecycleStreamRequest;
}

export namespace ListRecycleStreamRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    fromTs?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    toTs?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class ListRecycleStreamResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRecycleItem(): boolean;
  clearRecycleItem(): void;
  getRecycleItem(): cs3_storage_provider_v1beta1_resources_pb.RecycleItem | undefined;
  setRecycleItem(value?: cs3_storage_provider_v1beta1_resources_pb.RecycleItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecycleStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecycleStreamResponse): ListRecycleStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRecycleStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecycleStreamResponse;
  static deserializeBinaryFromReader(message: ListRecycleStreamResponse, reader: jspb.BinaryReader): ListRecycleStreamResponse;
}

export namespace ListRecycleStreamResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    recycleItem?: cs3_storage_provider_v1beta1_resources_pb.RecycleItem.AsObject,
  }
}

export class MoveRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setSource(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setDestination(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveRequest): MoveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveRequest;
  static deserializeBinaryFromReader(message: MoveRequest, reader: jspb.BinaryReader): MoveRequest;
}

export namespace MoveRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    source?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    destination?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class MoveResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveResponse): MoveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveResponse;
  static deserializeBinaryFromReader(message: MoveResponse, reader: jspb.BinaryReader): MoveResponse;
}

export namespace MoveResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class PurgeRecycleRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurgeRecycleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurgeRecycleRequest): PurgeRecycleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurgeRecycleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurgeRecycleRequest;
  static deserializeBinaryFromReader(message: PurgeRecycleRequest, reader: jspb.BinaryReader): PurgeRecycleRequest;
}

export namespace PurgeRecycleRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class PurgeRecycleResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurgeRecycleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PurgeRecycleResponse): PurgeRecycleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurgeRecycleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurgeRecycleResponse;
  static deserializeBinaryFromReader(message: PurgeRecycleResponse, reader: jspb.BinaryReader): PurgeRecycleResponse;
}

export namespace PurgeRecycleResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class RestoreFileVersionRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreFileVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreFileVersionRequest): RestoreFileVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreFileVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreFileVersionRequest;
  static deserializeBinaryFromReader(message: RestoreFileVersionRequest, reader: jspb.BinaryReader): RestoreFileVersionRequest;
}

export namespace RestoreFileVersionRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    key: string,
  }
}

export class RestoreFileVersionResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreFileVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreFileVersionResponse): RestoreFileVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreFileVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreFileVersionResponse;
  static deserializeBinaryFromReader(message: RestoreFileVersionResponse, reader: jspb.BinaryReader): RestoreFileVersionResponse;
}

export namespace RestoreFileVersionResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class RestoreRecycleItemRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  getKey(): string;
  setKey(value: string): void;

  hasRestoreRef(): boolean;
  clearRestoreRef(): void;
  getRestoreRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRestoreRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreRecycleItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreRecycleItemRequest): RestoreRecycleItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreRecycleItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreRecycleItemRequest;
  static deserializeBinaryFromReader(message: RestoreRecycleItemRequest, reader: jspb.BinaryReader): RestoreRecycleItemRequest;
}

export namespace RestoreRecycleItemRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    key: string,
    restoreRef?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class RestoreRecycleItemResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreRecycleItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreRecycleItemResponse): RestoreRecycleItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreRecycleItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreRecycleItemResponse;
  static deserializeBinaryFromReader(message: RestoreRecycleItemResponse, reader: jspb.BinaryReader): RestoreRecycleItemResponse;
}

export namespace RestoreRecycleItemResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class RemoveGrantRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  hasGrant(): boolean;
  clearGrant(): void;
  getGrant(): cs3_storage_provider_v1beta1_resources_pb.Grant | undefined;
  setGrant(value?: cs3_storage_provider_v1beta1_resources_pb.Grant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGrantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGrantRequest): RemoveGrantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveGrantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGrantRequest;
  static deserializeBinaryFromReader(message: RemoveGrantRequest, reader: jspb.BinaryReader): RemoveGrantRequest;
}

export namespace RemoveGrantRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    grant?: cs3_storage_provider_v1beta1_resources_pb.Grant.AsObject,
  }
}

export class RemoveGrantResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGrantResponse): RemoveGrantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGrantResponse;
  static deserializeBinaryFromReader(message: RemoveGrantResponse, reader: jspb.BinaryReader): RemoveGrantResponse;
}

export namespace RemoveGrantResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class StatRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  clearArbitraryMetadataKeysList(): void;
  getArbitraryMetadataKeysList(): Array<string>;
  setArbitraryMetadataKeysList(value: Array<string>): void;
  addArbitraryMetadataKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatRequest): StatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatRequest;
  static deserializeBinaryFromReader(message: StatRequest, reader: jspb.BinaryReader): StatRequest;
}

export namespace StatRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    arbitraryMetadataKeysList: Array<string>,
  }
}

export class StatResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): cs3_storage_provider_v1beta1_resources_pb.ResourceInfo | undefined;
  setInfo(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatResponse): StatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatResponse;
  static deserializeBinaryFromReader(message: StatResponse, reader: jspb.BinaryReader): StatResponse;
}

export namespace StatResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    info?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.AsObject,
  }
}

export class UpdateGrantRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  hasGrant(): boolean;
  clearGrant(): void;
  getGrant(): cs3_storage_provider_v1beta1_resources_pb.Grant | undefined;
  setGrant(value?: cs3_storage_provider_v1beta1_resources_pb.Grant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGrantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGrantRequest): UpdateGrantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGrantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGrantRequest;
  static deserializeBinaryFromReader(message: UpdateGrantRequest, reader: jspb.BinaryReader): UpdateGrantRequest;
}

export namespace UpdateGrantRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    grant?: cs3_storage_provider_v1beta1_resources_pb.Grant.AsObject,
  }
}

export class UpdateGrantResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGrantResponse): UpdateGrantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGrantResponse;
  static deserializeBinaryFromReader(message: UpdateGrantResponse, reader: jspb.BinaryReader): UpdateGrantResponse;
}

export namespace UpdateGrantResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CreateSymlinkRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  getTarget(): string;
  setTarget(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSymlinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSymlinkRequest): CreateSymlinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSymlinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSymlinkRequest;
  static deserializeBinaryFromReader(message: CreateSymlinkRequest, reader: jspb.BinaryReader): CreateSymlinkRequest;
}

export namespace CreateSymlinkRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    target: string,
  }
}

export class CreateSymlinkResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSymlinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSymlinkResponse): CreateSymlinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSymlinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSymlinkResponse;
  static deserializeBinaryFromReader(message: CreateSymlinkResponse, reader: jspb.BinaryReader): CreateSymlinkResponse;
}

export namespace CreateSymlinkResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CreateReferenceRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  getTargetUri(): string;
  setTargetUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReferenceRequest): CreateReferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateReferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReferenceRequest;
  static deserializeBinaryFromReader(message: CreateReferenceRequest, reader: jspb.BinaryReader): CreateReferenceRequest;
}

export namespace CreateReferenceRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    targetUri: string,
  }
}

export class CreateReferenceResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReferenceResponse): CreateReferenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateReferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReferenceResponse;
  static deserializeBinaryFromReader(message: CreateReferenceResponse, reader: jspb.BinaryReader): CreateReferenceResponse;
}

export namespace CreateReferenceResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class SetArbitraryMetadataRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  hasArbitraryMetadata(): boolean;
  clearArbitraryMetadata(): void;
  getArbitraryMetadata(): cs3_storage_provider_v1beta1_resources_pb.ArbitraryMetadata | undefined;
  setArbitraryMetadata(value?: cs3_storage_provider_v1beta1_resources_pb.ArbitraryMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetArbitraryMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetArbitraryMetadataRequest): SetArbitraryMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetArbitraryMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetArbitraryMetadataRequest;
  static deserializeBinaryFromReader(message: SetArbitraryMetadataRequest, reader: jspb.BinaryReader): SetArbitraryMetadataRequest;
}

export namespace SetArbitraryMetadataRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    arbitraryMetadata?: cs3_storage_provider_v1beta1_resources_pb.ArbitraryMetadata.AsObject,
  }
}

export class SetArbitraryMetadataResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetArbitraryMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetArbitraryMetadataResponse): SetArbitraryMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetArbitraryMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetArbitraryMetadataResponse;
  static deserializeBinaryFromReader(message: SetArbitraryMetadataResponse, reader: jspb.BinaryReader): SetArbitraryMetadataResponse;
}

export namespace SetArbitraryMetadataResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class UnsetArbitraryMetadataRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  clearArbitraryMetadataKeysList(): void;
  getArbitraryMetadataKeysList(): Array<string>;
  setArbitraryMetadataKeysList(value: Array<string>): void;
  addArbitraryMetadataKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsetArbitraryMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsetArbitraryMetadataRequest): UnsetArbitraryMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsetArbitraryMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsetArbitraryMetadataRequest;
  static deserializeBinaryFromReader(message: UnsetArbitraryMetadataRequest, reader: jspb.BinaryReader): UnsetArbitraryMetadataRequest;
}

export namespace UnsetArbitraryMetadataRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    arbitraryMetadataKeysList: Array<string>,
  }
}

export class UnsetArbitraryMetadataResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsetArbitraryMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnsetArbitraryMetadataResponse): UnsetArbitraryMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsetArbitraryMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsetArbitraryMetadataResponse;
  static deserializeBinaryFromReader(message: UnsetArbitraryMetadataResponse, reader: jspb.BinaryReader): UnsetArbitraryMetadataResponse;
}

export namespace UnsetArbitraryMetadataResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CreateHomeRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHomeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHomeRequest): CreateHomeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHomeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHomeRequest;
  static deserializeBinaryFromReader(message: CreateHomeRequest, reader: jspb.BinaryReader): CreateHomeRequest;
}

export namespace CreateHomeRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CreateHomeResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHomeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHomeResponse): CreateHomeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHomeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHomeResponse;
  static deserializeBinaryFromReader(message: CreateHomeResponse, reader: jspb.BinaryReader): CreateHomeResponse;
}

export namespace CreateHomeResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CreateStorageSpaceRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.User | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.User): void;

  getType(): string;
  setType(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasQuota(): boolean;
  clearQuota(): void;
  getQuota(): cs3_storage_provider_v1beta1_resources_pb.Quota | undefined;
  setQuota(value?: cs3_storage_provider_v1beta1_resources_pb.Quota): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStorageSpaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStorageSpaceRequest): CreateStorageSpaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateStorageSpaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStorageSpaceRequest;
  static deserializeBinaryFromReader(message: CreateStorageSpaceRequest, reader: jspb.BinaryReader): CreateStorageSpaceRequest;
}

export namespace CreateStorageSpaceRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    owner?: cs3_identity_user_v1beta1_resources_pb.User.AsObject,
    type: string,
    name: string,
    quota?: cs3_storage_provider_v1beta1_resources_pb.Quota.AsObject,
  }
}

export class CreateStorageSpaceResponse extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasStorageSpace(): boolean;
  clearStorageSpace(): void;
  getStorageSpace(): cs3_storage_provider_v1beta1_resources_pb.StorageSpace | undefined;
  setStorageSpace(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStorageSpaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStorageSpaceResponse): CreateStorageSpaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateStorageSpaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStorageSpaceResponse;
  static deserializeBinaryFromReader(message: CreateStorageSpaceResponse, reader: jspb.BinaryReader): CreateStorageSpaceResponse;
}

export namespace CreateStorageSpaceResponse {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    storageSpace?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace.AsObject,
  }
}

export class ListStorageSpacesRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearFiltersList(): void;
  getFiltersList(): Array<ListStorageSpacesRequest.Filter>;
  setFiltersList(value: Array<ListStorageSpacesRequest.Filter>): void;
  addFilters(value?: ListStorageSpacesRequest.Filter, index?: number): ListStorageSpacesRequest.Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStorageSpacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStorageSpacesRequest): ListStorageSpacesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStorageSpacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStorageSpacesRequest;
  static deserializeBinaryFromReader(message: ListStorageSpacesRequest, reader: jspb.BinaryReader): ListStorageSpacesRequest;
}

export namespace ListStorageSpacesRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    filtersList: Array<ListStorageSpacesRequest.Filter.AsObject>,
  }

  export class Filter extends jspb.Message {
    getType(): ListStorageSpacesRequest.Filter.Type;
    setType(value: ListStorageSpacesRequest.Filter.Type): void;

    hasId(): boolean;
    clearId(): void;
    getId(): cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId | undefined;
    setId(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId): void;

    hasOwner(): boolean;
    clearOwner(): void;
    getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
    setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

    hasSpaceType(): boolean;
    clearSpaceType(): void;
    getSpaceType(): string;
    setSpaceType(value: string): void;

    getTermCase(): Filter.TermCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      type: ListStorageSpacesRequest.Filter.Type,
      id?: cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId.AsObject,
      owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
      spaceType: string,
    }

    export enum Type {
      TYPE_INVALID = 0,
      TYPE_NO = 1,
      TYPE_ID = 2,
      TYPE_OWNER = 3,
      TYPE_SPACE_TYPE = 4,
    }

    export enum TermCase {
      TERM_NOT_SET = 0,
      ID = 2,
      OWNER = 3,
      SPACE_TYPE = 4,
    }
  }
}

export class ListStorageSpacesResponse extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  clearStorageSpacesList(): void;
  getStorageSpacesList(): Array<cs3_storage_provider_v1beta1_resources_pb.StorageSpace>;
  setStorageSpacesList(value: Array<cs3_storage_provider_v1beta1_resources_pb.StorageSpace>): void;
  addStorageSpaces(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace, index?: number): cs3_storage_provider_v1beta1_resources_pb.StorageSpace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStorageSpacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStorageSpacesResponse): ListStorageSpacesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStorageSpacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStorageSpacesResponse;
  static deserializeBinaryFromReader(message: ListStorageSpacesResponse, reader: jspb.BinaryReader): ListStorageSpacesResponse;
}

export namespace ListStorageSpacesResponse {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    storageSpacesList: Array<cs3_storage_provider_v1beta1_resources_pb.StorageSpace.AsObject>,
  }
}

export class UpdateStorageSpaceRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasStorageSpace(): boolean;
  clearStorageSpace(): void;
  getStorageSpace(): cs3_storage_provider_v1beta1_resources_pb.StorageSpace | undefined;
  setStorageSpace(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStorageSpaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStorageSpaceRequest): UpdateStorageSpaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateStorageSpaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStorageSpaceRequest;
  static deserializeBinaryFromReader(message: UpdateStorageSpaceRequest, reader: jspb.BinaryReader): UpdateStorageSpaceRequest;
}

export namespace UpdateStorageSpaceRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    storageSpace?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace.AsObject,
  }
}

export class UpdateStorageSpaceResponse extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasStorageSpace(): boolean;
  clearStorageSpace(): void;
  getStorageSpace(): cs3_storage_provider_v1beta1_resources_pb.StorageSpace | undefined;
  setStorageSpace(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStorageSpaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStorageSpaceResponse): UpdateStorageSpaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateStorageSpaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStorageSpaceResponse;
  static deserializeBinaryFromReader(message: UpdateStorageSpaceResponse, reader: jspb.BinaryReader): UpdateStorageSpaceResponse;
}

export namespace UpdateStorageSpaceResponse {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    storageSpace?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace.AsObject,
  }
}

export class DeleteStorageSpaceRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasId(): boolean;
  clearId(): void;
  getId(): cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId | undefined;
  setId(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStorageSpaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStorageSpaceRequest): DeleteStorageSpaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStorageSpaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStorageSpaceRequest;
  static deserializeBinaryFromReader(message: DeleteStorageSpaceRequest, reader: jspb.BinaryReader): DeleteStorageSpaceRequest;
}

export namespace DeleteStorageSpaceRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    id?: cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId.AsObject,
  }
}

export class DeleteStorageSpaceResponse extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStorageSpaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStorageSpaceResponse): DeleteStorageSpaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStorageSpaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStorageSpaceResponse;
  static deserializeBinaryFromReader(message: DeleteStorageSpaceResponse, reader: jspb.BinaryReader): DeleteStorageSpaceResponse;
}

export namespace DeleteStorageSpaceResponse {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
  }
}

