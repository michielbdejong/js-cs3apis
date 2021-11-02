// package: cs3.app.provider.v1beta1
// file: cs3/app/provider/v1beta1/provider_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_app_provider_v1beta1_provider_api_pb from '../../../../cs3/app/provider/v1beta1/provider_api_pb';
import * as cs3_app_provider_v1beta1_resources_pb from '../../../../cs3/app/provider/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IProviderAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  openInApp: IProviderAPIService_IOpenInApp;
}

interface IProviderAPIService_IOpenInApp extends grpc.MethodDefinition<cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest, cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse> {
  path: '/cs3.app.provider.v1beta1.ProviderAPI/OpenInApp'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest>;
  responseSerialize: grpc.serialize<cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse>;
}

export const ProviderAPIService: IProviderAPIService;
export interface IProviderAPIServer extends grpc.UntypedServiceImplementation {
  openInApp: grpc.handleUnaryCall<cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest, cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse>;
}

export interface IProviderAPIClient {
  openInApp(request: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
  openInApp(request: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
  openInApp(request: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
}

export class ProviderAPIClient extends grpc.Client implements IProviderAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public openInApp(request: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
  public openInApp(request: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
  public openInApp(request: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
}

