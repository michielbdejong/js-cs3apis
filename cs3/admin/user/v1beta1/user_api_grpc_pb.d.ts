// package: cs3.admin.user.v1beta1
// file: cs3/admin/user/v1beta1/user_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_admin_user_v1beta1_user_api_pb from '../../../../cs3/admin/user/v1beta1/user_api_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IUserAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createUser: IUserAPIService_ICreateUser;
  deleteUser: IUserAPIService_IDeleteUser;
}

interface IUserAPIService_ICreateUser extends grpc.MethodDefinition<cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest, cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse> {
  path: '/cs3.admin.user.v1beta1.UserAPI/CreateUser'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest>;
  requestDeserialize: grpc.deserialize<cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest>;
  responseSerialize: grpc.serialize<cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse>;
  responseDeserialize: grpc.deserialize<cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse>;
}

interface IUserAPIService_IDeleteUser extends grpc.MethodDefinition<cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest, cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse> {
  path: '/cs3.admin.user.v1beta1.UserAPI/DeleteUser'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest>;
  requestDeserialize: grpc.deserialize<cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest>;
  responseSerialize: grpc.serialize<cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse>;
  responseDeserialize: grpc.deserialize<cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse>;
}

export const UserAPIService: IUserAPIService;
export interface IUserAPIServer extends grpc.UntypedServiceImplementation {
  createUser: grpc.handleUnaryCall<cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest, cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse>;
  deleteUser: grpc.handleUnaryCall<cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest, cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse>;
}

export interface IUserAPIClient {
  createUser(request: cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
  createUser(request: cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
  createUser(request: cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
  deleteUser(request: cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
  deleteUser(request: cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
  deleteUser(request: cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserAPIClient extends grpc.Client implements IUserAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createUser(request: cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
  public createUser(request: cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
  public createUser(request: cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
  public deleteUser(request: cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
  public deleteUser(request: cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
  public deleteUser(request: cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
}

