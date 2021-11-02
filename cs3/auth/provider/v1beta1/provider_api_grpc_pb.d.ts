// package: cs3.auth.provider.v1beta1
// file: cs3/auth/provider/v1beta1/provider_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_auth_provider_v1beta1_provider_api_pb from '../../../../cs3/auth/provider/v1beta1/provider_api_pb';
import * as cs3_auth_provider_v1beta1_resources_pb from '../../../../cs3/auth/provider/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IProviderAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  authenticate: IProviderAPIService_IAuthenticate;
}

interface IProviderAPIService_IAuthenticate extends grpc.MethodDefinition<cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest, cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse> {
  path: '/cs3.auth.provider.v1beta1.ProviderAPI/Authenticate'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest>;
  responseSerialize: grpc.serialize<cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse>;
}

export const ProviderAPIService: IProviderAPIService;
export interface IProviderAPIServer extends grpc.UntypedServiceImplementation {
  authenticate: grpc.handleUnaryCall<cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest, cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse>;
}

export interface IProviderAPIClient {
  authenticate(request: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
  authenticate(request: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
  authenticate(request: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
}

export class ProviderAPIClient extends grpc.Client implements IProviderAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public authenticate(request: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
  public authenticate(request: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
  public authenticate(request: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
}

