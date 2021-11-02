// package: cs3.app.provider.v1beta1
// file: cs3/app/provider/v1beta1/provider_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_app_provider_v1beta1_resources_pb from '../../../../cs3/app/provider/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class OpenInAppRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasResourceInfo(): boolean;
  clearResourceInfo(): void;
  getResourceInfo(): cs3_storage_provider_v1beta1_resources_pb.ResourceInfo | undefined;
  setResourceInfo(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo): void;

  getViewMode(): OpenInAppRequest.ViewMode;
  setViewMode(value: OpenInAppRequest.ViewMode): void;

  getAccessToken(): string;
  setAccessToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenInAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenInAppRequest): OpenInAppRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenInAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenInAppRequest;
  static deserializeBinaryFromReader(message: OpenInAppRequest, reader: jspb.BinaryReader): OpenInAppRequest;
}

export namespace OpenInAppRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    resourceInfo?: cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.AsObject,
    viewMode: OpenInAppRequest.ViewMode,
    accessToken: string,
  }

  export enum ViewMode {
    VIEW_MODE_INVALID = 0,
    VIEW_MODE_VIEW_ONLY = 1,
    VIEW_MODE_READ_ONLY = 2,
    VIEW_MODE_READ_WRITE = 3,
  }
}

export class OpenInAppResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasAppUrl(): boolean;
  clearAppUrl(): void;
  getAppUrl(): cs3_app_provider_v1beta1_resources_pb.OpenInAppURL | undefined;
  setAppUrl(value?: cs3_app_provider_v1beta1_resources_pb.OpenInAppURL): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenInAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenInAppResponse): OpenInAppResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenInAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenInAppResponse;
  static deserializeBinaryFromReader(message: OpenInAppResponse, reader: jspb.BinaryReader): OpenInAppResponse;
}

export namespace OpenInAppResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    appUrl?: cs3_app_provider_v1beta1_resources_pb.OpenInAppURL.AsObject,
  }
}

