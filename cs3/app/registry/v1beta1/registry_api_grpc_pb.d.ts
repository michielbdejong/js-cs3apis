// package: cs3.app.registry.v1beta1
// file: cs3/app/registry/v1beta1/registry_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_app_registry_v1beta1_registry_api_pb from '../../../../cs3/app/registry/v1beta1/registry_api_pb';
import * as cs3_app_registry_v1beta1_resources_pb from '../../../../cs3/app/registry/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IRegistryAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAppProviders: IRegistryAPIService_IGetAppProviders;
  addAppProvider: IRegistryAPIService_IAddAppProvider;
  listAppProviders: IRegistryAPIService_IListAppProviders;
  listSupportedMimeTypes: IRegistryAPIService_IListSupportedMimeTypes;
  getDefaultAppProviderForMimeType: IRegistryAPIService_IGetDefaultAppProviderForMimeType;
  setDefaultAppProviderForMimeType: IRegistryAPIService_ISetDefaultAppProviderForMimeType;
}

interface IRegistryAPIService_IGetAppProviders extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse> {
  path: '/cs3.app.registry.v1beta1.RegistryAPI/GetAppProviders'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse>;
}

interface IRegistryAPIService_IAddAppProvider extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse> {
  path: '/cs3.app.registry.v1beta1.RegistryAPI/AddAppProvider'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse>;
}

interface IRegistryAPIService_IListAppProviders extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse> {
  path: '/cs3.app.registry.v1beta1.RegistryAPI/ListAppProviders'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse>;
}

interface IRegistryAPIService_IListSupportedMimeTypes extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse> {
  path: '/cs3.app.registry.v1beta1.RegistryAPI/ListSupportedMimeTypes'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse>;
}

interface IRegistryAPIService_IGetDefaultAppProviderForMimeType extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse> {
  path: '/cs3.app.registry.v1beta1.RegistryAPI/GetDefaultAppProviderForMimeType'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse>;
}

interface IRegistryAPIService_ISetDefaultAppProviderForMimeType extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse> {
  path: '/cs3.app.registry.v1beta1.RegistryAPI/SetDefaultAppProviderForMimeType'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse>;
}

export const RegistryAPIService: IRegistryAPIService;
export interface IRegistryAPIServer extends grpc.UntypedServiceImplementation {
  getAppProviders: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse>;
  addAppProvider: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse>;
  listAppProviders: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse>;
  listSupportedMimeTypes: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse>;
  getDefaultAppProviderForMimeType: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse>;
  setDefaultAppProviderForMimeType: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse>;
}

export interface IRegistryAPIClient {
  getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
}

export class RegistryAPIClient extends grpc.Client implements IRegistryAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  public addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  public addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  public listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  public listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  public listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  public getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  public getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  public getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  public setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  public setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  public setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
}

