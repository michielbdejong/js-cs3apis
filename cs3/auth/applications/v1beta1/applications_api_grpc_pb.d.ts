// package: cs3.auth.applications.v1beta1
// file: cs3/auth/applications/v1beta1/applications_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_auth_applications_v1beta1_applications_api_pb from '../../../../cs3/auth/applications/v1beta1/applications_api_pb';
import * as cs3_auth_applications_v1beta1_resources_pb from '../../../../cs3/auth/applications/v1beta1/resources_pb';
import * as cs3_auth_provider_v1beta1_resources_pb from '../../../../cs3/auth/provider/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IApplicationsAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generateAppPassword: IApplicationsAPIService_IGenerateAppPassword;
  listAppPasswords: IApplicationsAPIService_IListAppPasswords;
  invalidateAppPassword: IApplicationsAPIService_IInvalidateAppPassword;
  getAppPassword: IApplicationsAPIService_IGetAppPassword;
}

interface IApplicationsAPIService_IGenerateAppPassword extends grpc.MethodDefinition<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse> {
  path: '/cs3.auth.applications.v1beta1.ApplicationsAPI/GenerateAppPassword'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest>;
  responseSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse>;
}

interface IApplicationsAPIService_IListAppPasswords extends grpc.MethodDefinition<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse> {
  path: '/cs3.auth.applications.v1beta1.ApplicationsAPI/ListAppPasswords'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest>;
  responseSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse>;
}

interface IApplicationsAPIService_IInvalidateAppPassword extends grpc.MethodDefinition<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse> {
  path: '/cs3.auth.applications.v1beta1.ApplicationsAPI/InvalidateAppPassword'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest>;
  responseSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse>;
}

interface IApplicationsAPIService_IGetAppPassword extends grpc.MethodDefinition<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse> {
  path: '/cs3.auth.applications.v1beta1.ApplicationsAPI/GetAppPassword'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest>;
  responseSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse>;
}

export const ApplicationsAPIService: IApplicationsAPIService;
export interface IApplicationsAPIServer extends grpc.UntypedServiceImplementation {
  generateAppPassword: grpc.handleUnaryCall<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse>;
  listAppPasswords: grpc.handleUnaryCall<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse>;
  invalidateAppPassword: grpc.handleUnaryCall<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse>;
  getAppPassword: grpc.handleUnaryCall<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse>;
}

export interface IApplicationsAPIClient {
  generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
  getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
  getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
}

export class ApplicationsAPIClient extends grpc.Client implements IApplicationsAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  public listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  public listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  public invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
}

