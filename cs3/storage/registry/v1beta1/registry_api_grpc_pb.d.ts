// package: cs3.storage.registry.v1beta1
// file: cs3/storage/registry/v1beta1/registry_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_storage_registry_v1beta1_registry_api_pb from '../../../../cs3/storage/registry/v1beta1/registry_api_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_storage_registry_v1beta1_resources_pb from '../../../../cs3/storage/registry/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IRegistryAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getStorageProviders: IRegistryAPIService_IGetStorageProviders;
  listStorageProviders: IRegistryAPIService_IListStorageProviders;
  getHome: IRegistryAPIService_IGetHome;
}

interface IRegistryAPIService_IGetStorageProviders extends grpc.MethodDefinition<cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersRequest, cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersResponse> {
  path: '/cs3.storage.registry.v1beta1.RegistryAPI/GetStorageProviders'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersRequest>;
  responseSerialize: grpc.serialize<cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersResponse>;
}

interface IRegistryAPIService_IListStorageProviders extends grpc.MethodDefinition<cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest, cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse> {
  path: '/cs3.storage.registry.v1beta1.RegistryAPI/ListStorageProviders'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest>;
  responseSerialize: grpc.serialize<cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse>;
}

interface IRegistryAPIService_IGetHome extends grpc.MethodDefinition<cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest, cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse> {
  path: '/cs3.storage.registry.v1beta1.RegistryAPI/GetHome'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest>;
  responseSerialize: grpc.serialize<cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse>;
}

export const RegistryAPIService: IRegistryAPIService;
export interface IRegistryAPIServer extends grpc.UntypedServiceImplementation {
  getStorageProviders: grpc.handleUnaryCall<cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersRequest, cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersResponse>;
  listStorageProviders: grpc.handleUnaryCall<cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest, cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse>;
  getHome: grpc.handleUnaryCall<cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest, cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse>;
}

export interface IRegistryAPIClient {
  getStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  getStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  getStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  listStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  listStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  listStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  getHome(request: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  getHome(request: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  getHome(request: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
}

export class RegistryAPIClient extends grpc.Client implements IRegistryAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  public getStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  public getStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  public listStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  public listStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  public listStorageProviders(request: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse) => void): grpc.ClientUnaryCall;
  public getHome(request: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  public getHome(request: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  public getHome(request: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
}

