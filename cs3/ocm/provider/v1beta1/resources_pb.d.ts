// package: cs3.ocm.provider.v1beta1
// file: cs3/ocm/provider/v1beta1/resources.proto

import * as jspb from 'google-protobuf';

export class ServiceType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceType.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceType): ServiceType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceType;
  static deserializeBinaryFromReader(message: ServiceType, reader: jspb.BinaryReader): ServiceType;
}

export namespace ServiceType {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class ServiceEndpoint extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): ServiceType | undefined;
  setType(value?: ServiceType): void;

  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getIsMonitored(): boolean;
  setIsMonitored(value: boolean): void;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceEndpoint): ServiceEndpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceEndpoint;
  static deserializeBinaryFromReader(message: ServiceEndpoint, reader: jspb.BinaryReader): ServiceEndpoint;
}

export namespace ServiceEndpoint {
  export type AsObject = {
    type?: ServiceType.AsObject,
    name: string,
    path: string,
    isMonitored: boolean,
    propertiesMap: Array<[string, string]>,
  }
}

export class Service extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  hasEndpoint(): boolean;
  clearEndpoint(): void;
  getEndpoint(): ServiceEndpoint | undefined;
  setEndpoint(value?: ServiceEndpoint): void;

  getApiVersion(): string;
  setApiVersion(value: string): void;

  clearAdditionalEndpointsList(): void;
  getAdditionalEndpointsList(): Array<ServiceEndpoint>;
  setAdditionalEndpointsList(value: Array<ServiceEndpoint>): void;
  addAdditionalEndpoints(value?: ServiceEndpoint, index?: number): ServiceEndpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    host: string,
    endpoint?: ServiceEndpoint.AsObject,
    apiVersion: string,
    additionalEndpointsList: Array<ServiceEndpoint.AsObject>,
  }
}

export class ProviderInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFullName(): string;
  setFullName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOrganization(): string;
  setOrganization(value: string): void;

  getDomain(): string;
  setDomain(value: string): void;

  getHomepage(): string;
  setHomepage(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  clearServicesList(): void;
  getServicesList(): Array<Service>;
  setServicesList(value: Array<Service>): void;
  addServices(value?: Service, index?: number): Service;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
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
    name: string,
    fullName: string,
    description: string,
    organization: string,
    domain: string,
    homepage: string,
    email: string,
    servicesList: Array<Service.AsObject>,
    propertiesMap: Array<[string, string]>,
  }
}

