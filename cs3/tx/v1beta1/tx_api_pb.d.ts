// package: cs3.tx.v1beta1
// file: cs3/tx/v1beta1/tx_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_rpc_v1beta1_status_pb from '../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_tx_v1beta1_resources_pb from '../../../cs3/tx/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../cs3/types/v1beta1/types_pb';

export class CreateTransferRequest extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): cs3_storage_provider_v1beta1_resources_pb.Grantee | undefined;
  setGrantee(value?: cs3_storage_provider_v1beta1_resources_pb.Grantee): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTransferRequest): CreateTransferRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransferRequest;
  static deserializeBinaryFromReader(message: CreateTransferRequest, reader: jspb.BinaryReader): CreateTransferRequest;
}

export namespace CreateTransferRequest {
  export type AsObject = {
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
    grantee?: cs3_storage_provider_v1beta1_resources_pb.Grantee.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CreateTransferResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): cs3_tx_v1beta1_resources_pb.TxInfo | undefined;
  setTxInfo(value?: cs3_tx_v1beta1_resources_pb.TxInfo): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTransferResponse): CreateTransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransferResponse;
  static deserializeBinaryFromReader(message: CreateTransferResponse, reader: jspb.BinaryReader): CreateTransferResponse;
}

export namespace CreateTransferResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    txInfo?: cs3_tx_v1beta1_resources_pb.TxInfo.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetTransferStatusRequest extends jspb.Message {
  hasTxId(): boolean;
  clearTxId(): void;
  getTxId(): cs3_tx_v1beta1_resources_pb.TxId | undefined;
  setTxId(value?: cs3_tx_v1beta1_resources_pb.TxId): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferStatusRequest): GetTransferStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransferStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferStatusRequest;
  static deserializeBinaryFromReader(message: GetTransferStatusRequest, reader: jspb.BinaryReader): GetTransferStatusRequest;
}

export namespace GetTransferStatusRequest {
  export type AsObject = {
    txId?: cs3_tx_v1beta1_resources_pb.TxId.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetTransferStatusResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): cs3_tx_v1beta1_resources_pb.TxInfo | undefined;
  setTxInfo(value?: cs3_tx_v1beta1_resources_pb.TxInfo): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferStatusResponse): GetTransferStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransferStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferStatusResponse;
  static deserializeBinaryFromReader(message: GetTransferStatusResponse, reader: jspb.BinaryReader): GetTransferStatusResponse;
}

export namespace GetTransferStatusResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    txInfo?: cs3_tx_v1beta1_resources_pb.TxInfo.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CancelTransferRequest extends jspb.Message {
  hasTxId(): boolean;
  clearTxId(): void;
  getTxId(): cs3_tx_v1beta1_resources_pb.TxId | undefined;
  setTxId(value?: cs3_tx_v1beta1_resources_pb.TxId): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTransferRequest): CancelTransferRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTransferRequest;
  static deserializeBinaryFromReader(message: CancelTransferRequest, reader: jspb.BinaryReader): CancelTransferRequest;
}

export namespace CancelTransferRequest {
  export type AsObject = {
    txId?: cs3_tx_v1beta1_resources_pb.TxId.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CancelTransferResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): cs3_tx_v1beta1_resources_pb.TxInfo | undefined;
  setTxInfo(value?: cs3_tx_v1beta1_resources_pb.TxInfo): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTransferResponse): CancelTransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTransferResponse;
  static deserializeBinaryFromReader(message: CancelTransferResponse, reader: jspb.BinaryReader): CancelTransferResponse;
}

export namespace CancelTransferResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    txInfo?: cs3_tx_v1beta1_resources_pb.TxInfo.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

