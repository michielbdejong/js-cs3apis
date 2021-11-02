// package: cs3.auth.registry.v1beta1
// file: cs3/auth/registry/v1beta1/registry_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_auth_registry_v1beta1_registry_api_pb from '../../../../cs3/auth/registry/v1beta1/registry_api_pb';
import * as cs3_auth_registry_v1beta1_resources_pb from '../../../../cs3/auth/registry/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IRegistryAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAuthProvider: IRegistryAPIService_IGetAuthProvider;
  listAuthProviders: IRegistryAPIService_IListAuthProviders;
}

interface IRegistryAPIService_IGetAuthProvider extends grpc.MethodDefinition<cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest, cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse> {
  path: '/cs3.auth.registry.v1beta1.RegistryAPI/GetAuthProvider'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest>;
  responseSerialize: grpc.serialize<cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse>;
}

interface IRegistryAPIService_IListAuthProviders extends grpc.MethodDefinition<cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse> {
  path: '/cs3.auth.registry.v1beta1.RegistryAPI/ListAuthProviders'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest>;
  responseSerialize: grpc.serialize<cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse>;
}

export const RegistryAPIService: IRegistryAPIService;
export interface IRegistryAPIServer extends grpc.UntypedServiceImplementation {
  getAuthProvider: grpc.handleUnaryCall<cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest, cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse>;
  listAuthProviders: grpc.handleUnaryCall<cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse>;
}

export interface IRegistryAPIClient {
  getAuthProvider(request: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse) => void): grpc.ClientUnaryCall;
  getAuthProvider(request: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse) => void): grpc.ClientUnaryCall;
  getAuthProvider(request: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse) => void): grpc.ClientUnaryCall;
  listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
  listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
  listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
}

export class RegistryAPIClient extends grpc.Client implements IRegistryAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getAuthProvider(request: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse) => void): grpc.ClientUnaryCall;
  public getAuthProvider(request: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse) => void): grpc.ClientUnaryCall;
  public getAuthProvider(request: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse) => void): grpc.ClientUnaryCall;
  public listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
}

