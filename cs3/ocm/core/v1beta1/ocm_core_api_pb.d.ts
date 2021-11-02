// package: cs3.ocm.core.v1beta1
// file: cs3/ocm/core/v1beta1/ocm_core_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_ocm_core_v1beta1_resources_pb from '../../../../cs3/ocm/core/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class CreateOCMCoreShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getDescription(): string;
  setDescription(value: string): void;

  getName(): string;
  setName(value: string): void;

  getProviderId(): string;
  setProviderId(value: string): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasShareWith(): boolean;
  clearShareWith(): void;
  getShareWith(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setShareWith(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasProtocol(): boolean;
  clearProtocol(): void;
  getProtocol(): cs3_ocm_core_v1beta1_resources_pb.Protocol | undefined;
  setProtocol(value?: cs3_ocm_core_v1beta1_resources_pb.Protocol): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOCMCoreShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOCMCoreShareRequest): CreateOCMCoreShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOCMCoreShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOCMCoreShareRequest;
  static deserializeBinaryFromReader(message: CreateOCMCoreShareRequest, reader: jspb.BinaryReader): CreateOCMCoreShareRequest;
}

export namespace CreateOCMCoreShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    description: string,
    name: string,
    providerId: string,
    owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    shareWith?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    protocol?: cs3_ocm_core_v1beta1_resources_pb.Protocol.AsObject,
  }
}

export class CreateOCMCoreShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getId(): string;
  setId(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setCreated(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOCMCoreShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOCMCoreShareResponse): CreateOCMCoreShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOCMCoreShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOCMCoreShareResponse;
  static deserializeBinaryFromReader(message: CreateOCMCoreShareResponse, reader: jspb.BinaryReader): CreateOCMCoreShareResponse;
}

export namespace CreateOCMCoreShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    id: string,
    created?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

