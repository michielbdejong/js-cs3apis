// package: cs3.app.provider.v1beta1
// file: cs3/app/provider/v1beta1/resources.proto

import * as jspb from 'google-protobuf';

export class OpenInAppURL extends jspb.Message {
  getAppUrl(): string;
  setAppUrl(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  getFormParametersMap(): jspb.Map<string, string>;
  clearFormParametersMap(): void;
  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenInAppURL.AsObject;
  static toObject(includeInstance: boolean, msg: OpenInAppURL): OpenInAppURL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenInAppURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenInAppURL;
  static deserializeBinaryFromReader(message: OpenInAppURL, reader: jspb.BinaryReader): OpenInAppURL;
}

export namespace OpenInAppURL {
  export type AsObject = {
    appUrl: string,
    method: string,
    formParametersMap: Array<[string, string]>,
    headersMap: Array<[string, string]>,
  }
}

