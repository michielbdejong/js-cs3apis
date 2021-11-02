// package: cs3.ocm.provider.v1beta1
// file: cs3/ocm/provider/v1beta1/provider_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_ocm_provider_v1beta1_provider_api_pb from '../../../../cs3/ocm/provider/v1beta1/provider_api_pb';
import * as cs3_ocm_provider_v1beta1_resources_pb from '../../../../cs3/ocm/provider/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IProviderAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  isProviderAllowed: IProviderAPIService_IIsProviderAllowed;
  getInfoByDomain: IProviderAPIService_IGetInfoByDomain;
  listAllProviders: IProviderAPIService_IListAllProviders;
}

interface IProviderAPIService_IIsProviderAllowed extends grpc.MethodDefinition<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse> {
  path: '/cs3.ocm.provider.v1beta1.ProviderAPI/IsProviderAllowed'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse>;
}

interface IProviderAPIService_IGetInfoByDomain extends grpc.MethodDefinition<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse> {
  path: '/cs3.ocm.provider.v1beta1.ProviderAPI/GetInfoByDomain'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse>;
}

interface IProviderAPIService_IListAllProviders extends grpc.MethodDefinition<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse> {
  path: '/cs3.ocm.provider.v1beta1.ProviderAPI/ListAllProviders'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse>;
}

export const ProviderAPIService: IProviderAPIService;
export interface IProviderAPIServer extends grpc.UntypedServiceImplementation {
  isProviderAllowed: grpc.handleUnaryCall<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse>;
  getInfoByDomain: grpc.handleUnaryCall<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse>;
  listAllProviders: grpc.handleUnaryCall<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse>;
}

export interface IProviderAPIClient {
  isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
  listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
  listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
}

export class ProviderAPIClient extends grpc.Client implements IProviderAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  public isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  public isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  public getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  public getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  public getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  public listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
}

